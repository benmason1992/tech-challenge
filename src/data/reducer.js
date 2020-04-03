import initial from "./initial";

const players = (state, {playName}) => ({
    ...state,
    players: [
        ...state.players,
        playName,
    ]});

export default (state, action) => {
  
    switch (action.type) {
        case "ADD_NAME": return players(state, action);
        case "RESET": return { 
            ...state, 
            playerName: initial.playerName,
            players: initial.players,
        }
        case "SETTINGS" : return {
            ...state, 
            competitors: 2,
            numberSelected: false,
        }
        case "SAVE_SETTINGS": return {
            ...state,
            competitors: action.competitors,
            numberSelected: true,
        }
        case "START_GAME": return {
            ...state,
            gameStarted: true,
        }

        default: return state;
    }
};