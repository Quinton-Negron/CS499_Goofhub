import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SubmitJoke from './Submitjoke';
import LogIn from './Login';
import SignUp from './Signup';
import Search from './Search';
import addData from './firebase/secretPage';
import Short from './jokes/Short';
import Navibar from './components/Navibar';
import Profile from './Profile';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      
      <Navibar />
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/submitjoke" component={SubmitJoke} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/search" component={Search} />
            <Route path="/short" component={Short} />
            <Route path="/secretPage" component={addData} />
          </Switch>
          
          <br></br>
     <Footer />
     
    </Router>
    
  );
  
}

export default App;
