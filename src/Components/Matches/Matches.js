import React from "react";

const Matches = ({ competitors }) => {
    return (
        <>
            <section>
                {competitors === 2 ?
                    <table>
                        <tr>
                            <td>Player 1</td>
                            <td rowspan="2">Winner</td>
                        </tr>
                        <tr>
                            <td>Player 2</td>
                        </tr>
                    </table> : null}
            </section>
            <section>
                {competitors === 4 ?
                    <table>
                        <tr>
                            <td>Player 1</td>
                            <td rowspan="2">Winner 1</td>
                            <td rowspan="4">Final Winner</td>
                        </tr>
                        <tr>
                            <td>Player 2</td>
                        </tr>
                        <tr>
                            <td>Player 3</td>
                            <td rowspan="2">Winner 2</td>
                        </tr>
                        <tr>
                            <td>Player 4</td>
                        </tr>
                    </table> : null}
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
    