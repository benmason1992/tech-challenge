import React,  { useState } from "react";

const PlayerList = ({players, gameStarted, handleFormGameStart, competitors}) => {

    const value = useState(gameStarted);
    const playerLength = players.length;
    console.log(playerLength);
    console.log(competitors);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormGameStart(value);
    }

    return(
        <div>
            <ol>
                {players.map((player, index) => (
                    <li key={index}>{player.playerName}</li>
                ))}
            </ol>
            {playerLength < competitors ? null : <button onClick={handleSubmit} type="submit" className="btn btn-success">Start Game!</button>}
            
        </div>

    );
};
export default PlayerList