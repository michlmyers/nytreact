import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from "./pages/Articles";
import Saved from './pages/Saved';
import Wrapper from './components/Wrapper';
import NoMatch from './pages/NoMatch';
import './App.css';
import Nav from './components/Nav';

const App = () => (
  <Router>
  <div>
    <Wrapper>
      <Nav/>
      <Switch>
      <Route exact path='/' component={Articles} />
      <Route path='/api/articles' component={Articles} />
      <br/>
      <Route path='/api/articles' component={Saved} />
      <Route component={NoMatch} />
      </Switch>
      </Wrapper>
  </div>
  </Router>
);

export default App;
