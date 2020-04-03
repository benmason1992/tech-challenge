import React, { useState } from "react";

const Settings = ({competitors, handleFormPlayersSubmit}) => {

    const [value, setValue] = useState(competitors);

    const handleChange = (e) => {
        setValue(parseInt(e.currentTarget.value));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormPlayersSubmit(value);
        console.log(setValue);
    }

    return (
        <>
            <h3>How many people want to play?</h3>
            <form onSubmit={handleSubmit}>
                <select
                    value={value}
                    onChange={handleChange}>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
                </select>
                <button type="submit" className="btn btn-success">Lets Go!</button>
            </form>

        </>
    );
}
export default Settings;