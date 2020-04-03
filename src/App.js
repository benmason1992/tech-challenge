import React from 'react';
import {
  BrowserRouter as Router,
  // Route,
  // Switch,
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Add from "./Components/AddPlayer/";
import Reset from "./Components/Reset";
import Players from "./Components/PlayerList";
import Matches from "./Components/Matches";
import Settings from "./Components/Settings";
import './App.css';

const App = ( ) => (   
  <Router>
      <Header >Play Ping Pong</Header>
      <Settings />
      <Add />
      <Reset />
      <Players />
      {/* <Matches /> */}



    
    <Footer />
  </Router>
    
);

export default App;
