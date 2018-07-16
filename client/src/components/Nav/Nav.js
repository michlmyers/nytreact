import React from 'react';
import { Col, Row, Container } from '../Grid';
import Jumbotron from '../Jumbotron';

const Nav = () =>
<Container>
<Row>
<Col size='md-10'>

    <Jumbotron>
        <div class="shadow-lg p-2 mb-3 bg-white rounded">
        <h1>
        <i class="far fa-newspaper"></i> <br />
        NY Times Article Search!</h1>
        </div> 
        <h3>Search a topic and save articles of interest</h3>
    </Jumbotron>   
</Col>
</Row>
</Container>

export default Nav;