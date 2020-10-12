import React from "react";
import "./style.css";

function UserInput({ changee }) {
  const ValueChanged = (event) => {
    if (event.target.value.length < 51) {
      changee(event.target.value);
    }
  };
    const element = (
    <div>
      <h1>Homework N1 NJaparidze</h1>
      <label id="headOfInput">Input some text:</label>
      <br/>
      <input
        onChange={ValueChanged}
        type="text"
        placeholder="Input some text..."/>
    </div>
    );
  return (
    element
  );
}
export default UserInput;
