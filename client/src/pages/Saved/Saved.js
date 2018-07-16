import React from 'react';
import { Col, Row, Container } from '../../components/Grid';
import API from '../../utils/API';
import './Saved.css';
import { List, ListItem } from '../../components/List';
import DeleteBtn from '../../components/DeleteBtn';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        console.log('this saved page loads');
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
            .then(res => this.setState({ articles: res.data }))
            .catch(err => console.log(err));
    };

    deleteThisArticle = id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .then(console.log('article deleted!'))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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
                                                <a href={'/articles' + article._id}></a>
                                                <p>{article.title}</p>
                                                <p>{article.date}</p>
                                                <p><a href={article.url}>{article.url}</a></p>
                                                <DeleteBtn onClick={() => this.deleteThisArticle(article._id)} />
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

export default Articles;