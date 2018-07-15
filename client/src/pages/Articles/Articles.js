import React from 'react';
import { Col, Row, Container } from '../../components/Grid';
import API from '../../utils/API';
import { Input, FormBtn } from '../../components/Form';
import './Articles.css';
import SaveBtn from '../../components/SaveBtn';
import { List, ListItem } from '../../components/List';

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

    handleSaveArticle = (title, date, url, event) => {
        event.preventDefault();
        console.log("We make it here");
        API.saveArticle({
            title: title,
            date: date,
            url: url
        })
            .then(res => console.log("saved the article"))
            .catch(err => console.log(err));
    };


    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.term && this.state.startYear && this.state.endYear) {
            API.getTopicArticles(this.state.term, this.state.startYear, this.state.endYear)
                .then(res => {
                    if (res.data.status === "error") {
                        throw new Error(res.data.message);
                    }
                    this.setState({ results: res.data.response.docs, error: "" });
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
                                disabled={!(this.state.term && this.state.startYear && this.state.endYear)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit search
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col size='md-10'>
                        <div className='resultsDiv'>
                            <h2>
                                Search Results! &nbsp;
                            <i class="far fa-list-alt"></i>
                            </h2>
                            {this.state.results.length ? (
                                <div className="panel panel-primary">
                                    <div className="panel-body">
                                        <List>
                                            {this.state.results.map(article =>
                                                <ListItem
                                                    key={article._id}
                                                    title={article.headline.main}
                                                    date={article.pub_date}
                                                    url={article.web_url}
                                                >
                                                    <p>{(article.headline.main)}</p>
                                                    <p>{(article.pub_date)}</p>
                                                    <p><a href={(article.web_url)}> {(article.web_url)} </a></p>
                                                    <SaveBtn onClick={(event) => this.handleSaveArticle(article.headline.main, article.pub_date, article.web_url, event)} />
                                                </ListItem>
                                            )}
                                        </List>
                                    </div>
                                </div>
                            ) : (
                                    <h3>Sorry - no articles!
                                        &nbsp;
                                    <i class="fas fa-exclamation-triangle"></i>
                                    </h3>
                                )}
                        </div>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Articles;