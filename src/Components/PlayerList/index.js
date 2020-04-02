import {connect} from "react-redux";

import PlayerList from "./Players";

const mapStateToProps= (state) => {
    return { 
      players: state.players,
    };
  }

export default connect(mapStateToProps, null)(PlayerList); 