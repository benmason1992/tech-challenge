import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Add from "../AddPlayer";
import Reset from "../Reset";
import Players from "../PlayerList";
import Rounds from "../Rounds";
import Settings from "../Settings";
import '../../App.css';

const App = ({ numberSelected }) => (
  <>
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
  </>
);

export default App;
