import React, { useState } from "react";

const Add = ({playerName, handlePlayerSubmit}) => {

    const [inputPlayer1, setInputPlayer1] = useState(playerName);

    const handleChange = (e) => {
            setInputPlayer1(e.currentTarget.value); 
        }

    const handleSubmit= (e) => {
            e.preventDefault();
            handlePlayerSubmit(inputPlayer1);
        }
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="player1name">Who is this?</label>
                    <input onChange={handleChange} value={inputPlayer1} class="form-control"></input>
                </div>
                <button type="submit" class="btn btn-success">Join in!</button>
            </form>
            
        </>
    );
}
export default Add;