import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import {AuthProviderWrapper} from './context/auth.contex'

ReactDOM.render(
  <Router>
    <AuthProviderWrapper> 
    <App />
    </AuthProviderWrapper>
  </Router>,
  document.getElementById('root')
);
