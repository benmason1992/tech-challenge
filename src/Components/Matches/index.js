import {connect} from "react-redux";
import Matches from "./Matches";

const mapStateToProps = (state) => {
    return {
      players: state.players,
    };
  }

export default connect(mapStateToProps, null)(Matches);