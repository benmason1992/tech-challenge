import React from 'react';
import {
  BrowserRouter as Router,
  // Route,
  // Switch,
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Add from "./Components/AddPlayer/Add"
import './App.css';

const App = ( ) => (   
  <Router>
      <Header>Play Ping Pong</Header>
      <Add />


    
    <Footer />
  </Router>
    
);

export default App;
