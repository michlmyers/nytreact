import React, { Component } from 'react';
import { BrowserRouter as Route, Route } from 'react-router-dom';
import Articles from "./pages/Articles";
import Nav from "./components/Nav";
import Wrapper from './components/Wrapper';

const App = () => (
  <Router>
  <div>
    <Nav />
    <Wrapper>
      <Route exact path='/' component={Articles} />
      <Route path='/api/articles' component={Articles} />
      </Wrapper>
  </div>
  </Router>
);

export default App;
