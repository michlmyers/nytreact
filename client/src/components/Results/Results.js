import React from 'react';
import { Col, Row, Container } from '../../components/Grid';
import API from '../../utils/API';
import './Results.css';
import { List, ListItem } from '../../components/List';
import SaveBtn from '../../components/SaveBtn';
import PropTypes from 'prop-types';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []            
        };
        this.saveArticle = this.saveArticle.bind(this);
    };

    saveArticle(event) {
        event.preventDefault();
        // let articleData = {title: this.article.headline.main, date: this.article.pub_date, url: this.article.web_url}
        let articleData = this.props.results;
        API.saveArticle(articleData)
            .then(console.log('this is stuff: ' + articleData))
            // .then(res => this.setState({ articles: res.data.message }))
            .catch(err => console.log(err));
    };

    render() {
        const { results } = this.props

        return (
            <Container fluid>
                <Row>
                    <Col size='md-10'>
                        <div className='resultsDiv'>
                            <h2>
                                Search Results! &nbsp;
                            <i class="far fa-list-alt"></i>
                            </h2>
                            {results.length ? (
                                <List>
                                    {results.map(article =>
                                            <ListItem key={article._id}>
                                                <p>{(article.headline.main)}</p>
                                                <p>{(article.pub_date)}</p>
                                                <p><a href={(article.web_url)}> {(article.web_url)} </a></p>
                                                {/* <SaveBtn onClick={() => this.saveArticle(article._id)} /> */}
                                                <SaveBtn onClick={this.saveArticle} />
                                            </ListItem>
                                        )}
                                </List>
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

Results.props = {
    results: PropTypes.array
}

export default Results;