import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Articles from "./pages/Articles";
// import Nav from "./components/Nav";
import Wrapper from './components/Wrapper';
// import Articles from './pages/Articles';

const App = () => (
  <Router>
  <div>
    {/* <Nav /> */}
    <Wrapper>
      <Route exact path='/' component={Articles} />
      <Route path='/api/articles' component={Articles} />
      </Wrapper>
  </div>
  </Router>
);

export default App;
