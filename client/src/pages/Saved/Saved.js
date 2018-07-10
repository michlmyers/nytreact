import React from 'react';
import { Col, Row, Container } from '../../components/Grid';
import API from '../../utils/API';
import './Saved.css';
import { List, ListItem } from '../../components/List';
import DeleteBtn from '../../components/DeleteBtn';

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

    loadArticles = () => {
        API.getArticles()
            .then(res => this.setState({ articles: res.data.message }))
            .catch(err => console.log(err));
    };

    deleteArticle = id => {
        API.deleteArticle(id)
            .then(res => this.getArticles())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-10'>
                        <div className='resultsDiv'>
                            <h2>
                            Saved Articles! &nbsp;
                            <i class="fas fa-bookmark"></i>
                            </h2>
                            {this.state.articles.length ? (
                            <List>
                                {this.state.articles.map(article => {
                                return (
                                    <ListItem key={article._id}>
                                    <a href={'/articles' + article._id}>
                                    <p>{article.title}</p>
                                    <p>{article.date}</p>
                                    <p>{article.url}</p>
                                    </a>
                                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                                    </ListItem>
                                );    
                                })}
                            </List>    
                            ) : (
                                <h3>No saved articles!
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

export default Results;