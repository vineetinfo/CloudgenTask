import React from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Dashboard from './components/Dashboard';
import Default from './components/Default';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Chart from './components/Chart'
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Dashboard />
    <Footer />
    </React.Fragment>
  );
}

export default App;
