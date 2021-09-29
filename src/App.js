import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/HomePage'
import About from './containers/AboutContainer';
import Documentation from './containers/DocumentationContainer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
// import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/documentation">
            <Documentation />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
