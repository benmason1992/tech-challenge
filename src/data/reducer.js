// import initial from "./initial";

const players = (state, {playName}) => ({
    players: [
        ...state.players,
        playName,
    ]});

export default (state, action) => {
  
    switch (action.type) {
        case "ADD_NAME": return players(state, action);
        default: return state;
        
        // case "RESET": return initial;
    }
};