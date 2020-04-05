import { connect } from "react-redux";
import {startGame} from "../../data/action";
import PlayerList from "./Players";

const mapStateToProps = (state) => {
  return {
    players: state.players,
    gameStarted: state.gameStarted,
    competitors: state.competitors,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormGameStart: (gameStarted) => dispatch(startGame(gameStarted)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList); 