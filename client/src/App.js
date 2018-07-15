import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from "./pages/Articles";
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';
import './App.css';
import Nav from './components/Nav';

const App = () => (
  <div>
      <Nav/>
      <Router>
      <Switch>
      <Route exact path='/' component={Articles} />
      <Route path='/api/articles' component={Articles} />
      <br/>
      <Route path='/api/saved' component={Saved} />
      <Route component={NoMatch} />
      </Switch>
      </Router>
  </div>
);

export default App;
