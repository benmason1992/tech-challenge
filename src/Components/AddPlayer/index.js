import {connect} from "react-redux";

import Add from "./Add";

import {addName} from '../../data/action';


const mapStateToProps= (state) => {
  return { 
    playerName: state.playerName,
  };
}

const mapDispatchToProps= (dispatch) => {
    return { 
        handlePlayerSubmit:(value) => {
            dispatch(addName(value));
        },
    };
  }
export default connect(mapStateToProps,mapDispatchToProps)(Add); 