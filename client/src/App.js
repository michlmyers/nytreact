import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Articles from "./pages/Articles";
import Results from './pages/Results';
import Saved from './pages/Saved';
// import Nav from "./components/Nav";
import Wrapper from './components/Wrapper';
// import Articles from './pages/Articles';
import './App.css';

const App = () => (
  <Router>
  <div>
    {/* <Nav /> */}
    <Wrapper>
      <Route exact path='/' component={Articles} />
      <Route path='/api/articles' component={Articles} />
      <br/>
      <Route path='/api/articles' component={Results} />
      <br />
      <Route path='/api/articles' component={Saved} />
      </Wrapper>
  </div>
  </Router>
);

export default App;
