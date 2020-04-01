// import initial from "./initial";

const players = (state, {playName}) => ({
    ...state, 
    players: [
        ...state.players,
        playName.playerName,
    ]});

export default (state, action) => {
  
    switch (action.type) {
        case "ADD_NAME": return players(state, action);
        default: return state;
        
        // case "RESET": return initial;
    }
};