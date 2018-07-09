import React from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from '../../components/Grid';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
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
    }

    // need to finish this function 
    handleInputChange = event => {
        this.setState({})
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
            </Container>
        );
    }
}

export default Articles;