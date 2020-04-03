export const addName = (Name) => {
    return {
        type: 'ADD_NAME', 
        playName: { 
            playerName: Name,
            points: 0,
        }
    }
};

export const settings = () => {
    return {
        type: "SETTINGS"
    }
}

export const startGame = () => {
    return {
        type: "START_GAME",
        gameStarted: true,
    }
}

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