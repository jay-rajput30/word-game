import React from "react";
import { useState } from "react";

function GuessInput() {
  const [text, setText] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setText("");
    if (e.target[0].value.length !== 5) {
      alert("guess should be 5 characters long");
      return;
    }
    console.log(e.target[0].value);
  };

  const inputChangeHandler = (e) => {
    const newText = e.target.value.toUpperCase();
    setText(newText);
  };
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={formSubmitHandler}>
        <label htmlFor="guess-input">Enter guess</label>
        <input
          type="text"
          value={text}
          id="guess-input"
          onChange={inputChangeHandler}
        />
      </form>
    </div>
  );
}

export default GuessInput;
