export const addName = (Name) => {
    return {
        type: 'ADD_NAME', 
        playObj: { 
            playerName: Name,
            points: 0,
        }
    };
};

export const settings = () => {
    return {
        type: "SETTINGS"
    };
};

export const startGame = () => {
    return {
        type: "START_GAME",
        gameStarted: true,
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