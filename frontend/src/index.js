import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

import './fonts/Blockletter.ttf';
import './fonts/cartoonistkooky.ttf';
import './fonts/builttitlingrg.ttf';
import './fonts/ColunaRounded.ttf';




ReactDOM.render(
  <Router>
   <App/>
   
   </Router>,
  document.getElementById('root')
);


