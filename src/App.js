import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from  './view/auth/login.jsx';
function App() {
  return (
    <Router>
        <Login/>
    </Router>
      
  );
}

export default App;