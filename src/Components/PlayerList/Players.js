import React from "react";

const PlayerList = ({players}) => {
    return(
        <div>
            <ol>
                {players.map((player, index) => (
                    <li key={index}>{player.playerName}</li>
                ))}
            </ol>
        </div>
    );
};
export default PlayerList