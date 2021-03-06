import React, { useState } from "react";

const Add = ({playerName, handlePlayerSubmit, players, competitors}) => {

    const [inputPlayer1, setInputPlayer1] = useState(playerName);

    const handleChange = (e) => {
            setInputPlayer1(e.currentTarget.value); 
        }

    const handleSubmit= (e) => {
            e.preventDefault();
            handlePlayerSubmit(inputPlayer1);
            setInputPlayer1("");
        }
        console.log(competitors);
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Whose Playing?</label>
                    <input onChange={handleChange} value={inputPlayer1} className="form-control"></input>
                </div>
                {players.length < competitors ? <button type="submit" className="btn btn-success">Join in!</button> : null}
                
            </form>
            
        </>
    );
}
export default Add;