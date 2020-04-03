import React from "react";

const Matches = ({ players, competitors }) => {
    return (
        <>
            <h3>Test</h3>
            <section>
                {/* {competitors === 2 ? */}
                <table>
                    {players.map((player, index) => {
                        return index % 2 === 0 ?
                            <tr key={index}>{player.playerName}
                                <td></td>
                                <td rowspan="2">Winner</td>
                            </tr>
                            :
                            <tr key={index}>{player.playerName}
                                <td></td>
                            </tr>
                    })}
                </table>
                {/* : null} */}
            </section>

            <section>
                {/* {competitors === 4 ? */}
                    {/* <table>
                        {players.map((player, index) => {
                            return index % 4 === 0 ?
                                <tr key={index}>{player.playerName}
                                    <td></td>
                                    <td rowspan="2">Round 1 Winner</td>

                                    <td rowspan="4">Final Winner</td>
                                </tr>
                                :
                                <tr key={index}>{player.playerName}
                                    <td></td>
                                </tr>
                        })}
                        {/* {<tr>
                            <td>Player 1</td>
                            <td rowspan="2">Winner</td>
                        </tr>
                            <tr>
                                <td>Player 2</td>
                            </tr>}
                    </table> */}
                    {/* : null} */}
            </section>
        </>
    )
}
export default Matches

// {/* if (index % 4 === 0) {
// players.
// } */}

    // % 2 = 1 -- is for the placement of players as odd numbers.
    // };
