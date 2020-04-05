export const addName = (Name) => {
    return {
        type: 'ADD_NAME', 
        playObj: { 
            playerName: Name,
            // points: 0, Was going to add points to the scores of players with a potential of tying in a back end, however i did not have time.
        }
    };
};

export const changeNumPlayers = () => {
    return {
        type: "START_GAME",
        changePlayers: true,
        numberSelected: false,
    };
};

export const saveSettings = (competitors) => {
    return {
        type: "SAVE_SETTINGS",
        competitors: +competitors,
        numberSelected: true,
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};

export const pointsWinner = () => {
    return {
        type: "WINNER",
        points: + 1
    };
};