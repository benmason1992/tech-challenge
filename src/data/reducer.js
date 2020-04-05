import initial from "./initial";

const players = (state, {playObj}) => ({
    ...state,
    players: [
        ...state.players,
        playObj,
    ]});

const winners = (state, {playObj}) => ({
    ...state,
    players: state.players,
    playObj,
}) 

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
            numberSelected: false,
        }
        case "WINNER": return winners(state, action);

        default: return state;
    }
};