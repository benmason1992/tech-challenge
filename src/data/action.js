export const addName = (Name) => {
    return {
        type: 'ADD_NAME', 
        playName: { 
            playerName: Name,
            points: 0,
        }
    }
};