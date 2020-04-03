import React from 'react';
import {
  BrowserRouter as Router,
  // Route,
  // Switch,
} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Add from "../AddPlayer";
import Reset from "../Reset";
import Players from "../PlayerList";
import Matches from "../Matches";
import Settings from "../Settings";
import '../../App.css';

const App = ({numberSelected}) => (
  <Router>
    <Header >Play Ping Pong</Header>
    {!numberSelected ? <Settings /> :
      <>
        <Add />
        <Reset />
        <Players />
        <Matches />
      </>
    }
    <Footer />
  </Router>

);

export default App;
