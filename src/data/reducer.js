import initial from "./initial";

const players = (state, {playObj}) => ({
    ...state,
    players: [
        ...state.players,
        playObj,
    ]});

export default (state, action) => {
  
    switch (action.type) {
        case "ADD_NAME": return players(state, action);
        case "RESET": return { 
            ...state, 
            playerName: initial.playerName,
            players: initial.players,
        }
        
        case "SAVE_SETTINGS": return {
            ...state,
            competitors: action.competitors,
            numberSelected: true,
        }
        case "START_GAME": return {
            ...state,
            changePlayers: true,
            numberSelected: false,
        }

        default: return state;
    }
};