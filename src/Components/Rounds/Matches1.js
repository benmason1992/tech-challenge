import React, { useState } from "react";

const Matches1 = ({ players, competitors, numberSelected, handlePlayerWinner }) => {

    const setWinners = useState(players.points);
    // console.log(players.playObj.points);
    const handleClick = (e) => {
        console.log(e.currentTarget.dataset);
        handlePlayerWinner(setWinners);
        document.getElementById(e.currentTarget.dataset.winner).innerHTML = e.currentTarget.innerHTML;
        //Take the html data of the current target by ID and copy it into the corresponding data-winner.

    }

    console.log(numberSelected);
    return (
        <>
            <section>
                {competitors === 2 ? //Ternary to display the correct table dependant on the number of players.

                    <table>
                        <tbody>
                            {players.map((player, index) => {
                                return index % 2 === 0 ?
                                    <tr
                                        className="playerBox"
                                        key={index}
                                    >
                                        <td
                                            data-winner="winner"
                                            onClick={handleClick}
                                            className="playerBox"
                                        >
                                            {player.playerName}
                                        </td>
                                        <td id="winner" rowSpan="2">Final Winner</td>
                                    </tr>
                                    :
                                    <tr key={index}>
                                        <td data-winner="winner"
                                            onClick={handleClick}
                                            className="playerBox"
                                        >{player.playerName}
                                        </td>
                                    </tr>
                            })}
                        </tbody>
                    </table>
                    : null}
            </section>

            <section>
                {competitors === 4 ?
                    <table>
                        <tbody>
                            {players.map((player, index) => {
                                return index % 2 === 0 ?
                                    <tr key={index}>
                                        <td
                                            data-winner={"winner" + (index / 2 + 1)}
                                            onClick={handleClick}>{player.playerName}</td>
                                        <td></td>
                                        <td
                                            id={"winner" + (index / 2 + 1)}
                                            rowSpan="2"
                                            data-winner="finalWinner"
                                            onClick={handleClick}>Round 1 Winner</td>
                                        {index === 0 ?
                                            <td
                                                id="finalWinner"
                                                rowSpan="4">Final Winner</td> :
                                            <td></td>}
                                    </tr>
                                    :
                                    <tr key={index}>
                                        <td
                                            data-winner={"winner" + Math.floor(index / 2 + 1)}
                                            onClick={handleClick}
                                        >{player.playerName}</td>
                                        <td></td>
                                        <td rowSpan={index % 2 === 0 ? "2" : null}></td>
                                    </tr>
                            })}
                        </tbody>
                    </table>
                    : null}
            </section>
            <section>
                {competitors === 8 ?
                    <table>
                        <tbody>
                            {players.map((player, index) => {
                                return index % 2 === 0 ?
                                    <tr key={index}>
                                        <td data-winner={"winner" + (index / 2 + 1)}
                                            onClick={handleClick}>{player.playerName}</td>
                                        <td></td>
                                        <td id={"winner" + (index / 2 + 1)}
                                            rowSpan="2"
                                            data-winner={"semiWinner" + Math.ceil(index * 0.3 + 0.1)}
                                            onClick={handleClick}>Round 1 Winner</td>
                                        {index % 4 === 0 ?
                                            <td rowSpan="4"
                                                id={"semiWinner" + Math.floor(index / 3 + 1)}
                                                data-winner="finalWinner"
                                                onClick={handleClick}>Round 2 Winner</td> : <td></td>}
                                        {index === 0 ?
                                            <td
                                                rowSpan="8"
                                                id="finalWinner">Final Winner</td> :
                                            <td></td>}
                                    </tr>
                                    :
                                    <tr key={index}>
                                        <td
                                            data-winner={"winner" + Math.floor(index / 2 + 1)}
                                            onClick={handleClick}>{player.playerName}</td>
                                        <td></td>
                                        <td
                                            rowSpan={index % 2 === 0 ? "2" : null}></td>

                                        <td rowSpan={index % 2 === 0 ? "4" : null}></td>
                                    </tr>

                            })}
                        </tbody>
                    </table>
                    : null}
            </section>
            <section>
                {competitors === 16 ?
                    // This is where I came unstuck with this way of completing the challenge. Looking back I think I should have tried to manipulate the data with an array. Whilst I thought this way would be more simple it turned out to be more complicated when the number of players gets as large as 16.
                    <table>
                        <tbody>
                            {players.map((player, index) => {
                                return index % 2 === 0 ?
                                    <tr key={index}>
                                        <td data-winner={"winner" + (index / 2 + 1)}
                                            onClick={handleClick}>{player.playerName}</td>
                                        <td></td>
                                        <td id={"winner" + (index / 2 + 1)}
                                            rowSpan="2"
                                            data-winner={"quarterWinner" + (index * 1)}
                                            onClick={handleClick}>Round 1 Winner</td>
                                        {index % 4 === 0 ?
                                            <td rowSpan="4"
                                                id={"quarterWinner" + (index * 1)}
                                                //was unable to come up with an equation that works with the 16 players indexes to allow them to pull through.
                                                data-winner="semiWinner"
                                                onClick={handleClick}>Round 2 Winner</td> : <td></td>}
                                        {index % 8 === 0 ?
                                            <td
                                                rowSpan="8"
                                                data-winner="finalWinner"
                                                id="semiWinner">Round 3 Winner</td> :
                                            <td></td>}
                                        {index === 0 ?
                                            <td
                                                rowSpan="16"
                                                id="finalWinner">Final Winner</td> :
                                            <td></td>}
                                    </tr>
                                    :
                                    <tr key={index}>
                                        <td
                                            data-winner={"winner" + Math.floor(index / 2 + 1)}
                                            onClick={handleClick}>{player.playerName}</td>
                                        <td></td>
                                        <td rowSpan={index % 2 === 0 ? "2" : null}></td>

                                        <td rowSpan={index % 2 === 0 ? "4" : null}></td>
                                    </tr>

                            })}
                        </tbody>
                    </table>
                    : null}
            </section>
        </>
    )
}
export default Matches1
