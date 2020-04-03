import React,  { useState } from "react";

const PlayerList = ({players, gameStarted, handleFormGameStart}) => {

    const value = useState(gameStarted);


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
            <button onSubmit={handleSubmit} type="submit" className="btn btn-success">Start Game!</button>
        </div>

    );
};
export default PlayerList