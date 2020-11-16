import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SubmitJoke from './Submitjoke';
import LogIn from './Login';
import SignUp from './Signup';
import ForgotPassword from './Forgotpassword';
import Search from './Search';
import addData from './firebase/secretPage';
import Short from './jokes/Short';
import Long from './jokes/Long';
import Music from './jokes/Music';
import Holiday from './jokes/Holiday';
import Plus18 from './jokes/Plus18';
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
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/search" component={Search} />
            <Route path="/short" component={Short} />
            <Route path="/long" component={Long} />
            <Route path="/music" component={Music} />
            <Route path="/holiday" component={Holiday} />
            <Route path="/plus18" component={Plus18} />
            <Route path="/secretPage" component={addData} />
          </Switch>
          
          <br></br>
     <Footer />
     
    </Router>
    
  );
  
}

export default App;
