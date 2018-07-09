import React from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from '../../components/Grid';
import API from '../../utils/API';
import { Input, FormBtn } from '../../components/Form';
import './Articles.css';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            term: "",
            startYear: "",
            endYear: "",
            title: "",
            date: "",
            url: ""
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
        if (this.state.term) {
            API.getTopicArticles({
                term: this.state.term,
                startYear: this.state.startYear,
                endYear: this.state.endYear
            })
                .then(res => this.loadArticles())
                .catch(err => console.log(err));
        }
    }
    // need to add a form submit function here 


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-10'>
                        <Jumbotron>
                            <h1>NY Times Article Search!</h1>
                            <h2>Search a topic and save articles of interest</h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size='md-10'>
                        <form>
                            <h2>Start your search</h2>
                            <Input
                                value={this.state.term}
                                onChange={this.handleInputChange}
                                name='term'
                                placeholder='Search term (required)'
                            />
                            <h2>Start Year</h2>
                            <Input
                                value={this.state.startYear}
                                onChange={this.handleInputChange}
                                name='startYear'
                                placeholder='Start year (optional)'
                            />
                            <h2>End year</h2>
                            <Input
                                value={this.state.endYear}
                                onChange={this.handleInputChange}
                                name='endYear'
                                placeholder='End year (optional)'
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
            </Container>
        );
    }
}

export default Articles;