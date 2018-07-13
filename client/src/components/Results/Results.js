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
            results: [],
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
                                    {results.map(result =>
                                        (console.log('do we make it here?'),
                                            console.log(results.length),
                                            console.log(results),
                                            console.log(results[0].web_url),
                                            console.log(results[0].pub_date),
                                            console.log(results[0].headline.main),
                                            <ListItem key={result._id}>
                                                <p>{(result.headline.main)}</p>
                                                <p>{(result.pub_date)}</p>
                                                <p><a href={(result.web_url)}> {(result.web_url)} </a></p>
                                                <SaveBtn onClick={() => this.saveArticle(result._id)} />
                                            </ListItem>
                                        )
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