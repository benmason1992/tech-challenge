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

export const saveSettings = (competitors) => {
    console.log(competitors)
    return {
        type: "SAVE_SETTINGS",
        competitors: +competitors,
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};