import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from "./pages/Articles";
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';
import './App.css';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Articles} />
        <Route exact path='/api/articles' component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
