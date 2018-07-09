import React from 'react';
import { Col, Row, Container } from '../../components/Grid';
import API from '../../utils/API';
import './Results.css';
import { List, ListItem } from '../../components/List';
import SaveBtn from '../../components/SaveBtn';

class Results extends React.Component {
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

    saveArticle = () => {
        API.saveArticle()
        // currently just copiued from other functions to compile app
        // MIKE YOU NEED TO UPDATE THIS !!!!!!!!!!!!!!
            .then(res => this.setState({ articles: res.data.message }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-10'>
                        <div className='resultsDiv'>
                            <h2>
                            Search Results! &nbsp;
                            <i class="far fa-list-alt"></i> 
                            </h2>
                            {this.state.articles.length ? (
                            <List>
                                {this.state.articles.map(article => {
                                return (
                                    <ListItem key={article._id}>
                                    <p>{article.title}</p>
                                    <p>{article.date}</p>
                                    <p><a href={article.url}> {article.url} </a></p>
                                    <SaveBtn onClick={() => this.saveArticle(article._id)} />
                                    </ListItem>
                                );    
                                })}
                            </List>    
                            ) : (
                                <h3>Sorry - no articles!</h3>
                            )}
                        </div>     
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Results;