import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  //keeps track of the state of inputText

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
    //gets hold of the new value from the event target the calls the new value
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        type="text"
        value={inputText}
        placeholder="Add item"
      />
      <button
        onClick={() => {
          //Calls when the button is clicked the addItem fctn inside App.js

          props.onAdd(inputText);
          //This is to refresh the input to a blank space
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
