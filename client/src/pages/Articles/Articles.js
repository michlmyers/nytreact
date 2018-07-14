import React from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from '../../components/Grid';
import API from '../../utils/API';
import { Input, FormBtn } from '../../components/Form';
import './Articles.css';
import Results from '../../components/Results';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            results: [],
            term: "",
            startYear: "",
            endYear: ""
        };
    }

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
            .then(res => this.setState({ articles: res.data.message }))
            .catch(err => console.log(err));
    };

    // need to finish this function 
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('this is working');
        if (this.state.term && this.state.startYear && this.state.endYear) {
            API.getTopicArticles(this.state.term, this.state.startYear, this.state.endYear)
            .then(res => {
                if (res.data.status === "error") {
                  throw new Error(res.data.message);
                }
                // this.setState({ results: res.data.message, error: "" });
                this.setState({ results: res.data.response.docs, error: ""  });
                console.log(res.data);
              })
              .catch(err => this.setState({ error: err.message }));
        }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-10'>

                        <Jumbotron>
                            <div class="shadow-lg p-3 mb-5 bg-white rounded">
                            <h1>
                            <i class="far fa-newspaper"></i> <br />
                            NY Times Article Search!</h1>
                            </div> 
                            <h3>Search a topic and save articles of interest</h3>
                        </Jumbotron>   
                    </Col>
                </Row>
                <Row>
                    <Col size='md-10'>
                        <form>
                            <h2>Start your search &nbsp;
                            <i class="fas fa-search"></i>
                            </h2>
                            <Input
                                value={this.state.term}
                                onChange={this.handleInputChange}
                                name='term'
                                placeholder='Search term (required)'
                            />
                            <h2>Start Year &nbsp;
                            <i class="far fa-calendar-alt"></i>
                            </h2>
                            <Input
                                value={this.state.startYear}
                                onChange={this.handleInputChange}
                                name='startYear'
                                placeholder='Start year (required)'
                            />
                            <h2>End year &nbsp;
                            <i class="far fa-calendar-alt"></i>
                            </h2>
                            <Input
                                value={this.state.endYear}
                                onChange={this.handleInputChange}
                                name='endYear'
                                placeholder='End year (required)'
                            />
                            <FormBtn 
                            disabled={!(this.state.term)}
                            onClick={this.handleFormSubmit}
                            >
                            Submit search
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
                <br/>
                <Results save={this.save} results={this.state.results} />
            </Container>
        );
    }
}

export default Articles;