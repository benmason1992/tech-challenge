import { connect } from "react-redux";
import {changeNumPlayers} from "../../data/action";
import PlayerList from "./Players";

const mapStateToProps = (state) => {
  return {
    players: state.players,
    changePlayers: state.changePlayers,
    competitors: state.competitors,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormGameStart: (changePlayers) => dispatch(changeNumPlayers(changePlayers)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList); 