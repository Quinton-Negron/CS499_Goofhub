import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Home from './Home';
import SubmitJoke from './Submitjoke';
import LogIn from './Login';
import SignUp from './Signup';
import Search from './Search';
import Navibar from './components/Navibar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <Router>
      
      <Navibar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/submitjoke" component={SubmitJoke} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
     
    </Router>
    
  );
  
}

export default App;
