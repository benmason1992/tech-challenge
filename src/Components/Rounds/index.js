import {connect} from "react-redux";
import Matches1 from "./Matches1";
import {pointsWinner} from "../../data/action";

const mapStateToProps = (state) => {
    return {
      competitors: state.competitors,
      players: state.players,
      numberSelected: state.numberSelected, 
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlayerWinner: (player) => {
      dispatch(pointsWinner(player))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Matches1);