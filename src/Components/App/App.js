import React from 'react';
import {
  HashRouter as Router, //I was thinking about adding the browser router into the app however i decided to leave as a one page app.
  // Route,
  // Switch,
} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Add from "../AddPlayer";
import Reset from "../Reset";
import Players from "../PlayerList";
import Rounds from "../Rounds";
import Settings from "../Settings";
import '../../App.css';

const App = ({ numberSelected }) => (
  <Router>
    <Header >Play Ping Pong</Header>
    <>
      {!numberSelected ?
        <Settings />
        :
        <>
          <Add />
          <Reset />
          <Players />
          <Rounds />
        </>
      }
    </>
    <Footer />
  </Router>
);

export default App;
