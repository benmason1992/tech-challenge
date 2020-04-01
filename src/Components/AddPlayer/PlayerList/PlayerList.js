import React from "react";

const PlayerList = ({players}) => {

    const listItems = players.map((player) => 
        <li>{player}</li>
    );

    return (
            <ul>{listItems}</ul>
    );
}
export default {PlayerList};