import initial from "./initial";

const players = (state, {playName}) => ({
    ...state,
    players: [
        ...state.players,
        playName,
    ]});

const competitors = (state, {competitors}) => {
    return {
        ...state,
        competitors: competitors,
    }
}

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
        }
        case "SAVE_SETTINGS": return competitors(state, action);

        default: return state;
    }
};