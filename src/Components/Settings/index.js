import {connect} from "react-redux";
import Settings from "./Settings";
import {saveSettings} from "../../data/action";

const mapStateToProps= (state) => {
    return { 
      ...state,
      competitors: state.competitors,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormPlayersSubmit: (competitors) => dispatch(saveSettings(competitors)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);