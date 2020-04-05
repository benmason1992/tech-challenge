import React from "react";

const Reset = ({handleReset, changePlayers}) => (
    changePlayers ? null : <button onClick={handleReset} className="btn btn-danger">Reset Names</button>

);

export default Reset;