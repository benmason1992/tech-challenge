import React,  { useState } from "react";

const PlayerList = ({players, changePlayers, handleFormGameStart, competitors}) => {

    const value = useState(changePlayers);
    const playerLength = players.length;
    console.log(playerLength);
    console.log(competitors);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormGameStart(value);
    }

    return(
        <div>
             {playerLength < competitors ? null : <button onClick={handleSubmit} type="submit" className="btn btn-success">Change Number of Players!</button>}
            <ol>
            {/* The above button was orignally a start game button that would change the changePlayers state to true and only display the table of the game that is ongoing. I could not get the ternary is App.js to work as it was nested and looking online it appears as though i cannot do it. I have changed the button to adjust the number of players and also changed the name of the initial state to better reflect what the button does. */}
                {players.map((player, index) => (
                    <li key={index}>{player.playerName}</li>
                ))}
            </ol>
            <hr/>
            
        </div>

    );
};
export default PlayerList