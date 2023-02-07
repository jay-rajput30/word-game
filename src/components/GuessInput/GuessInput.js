import React from "react";
import { useState } from "react";

function GuessInput({ allGuess, setAllGuess }) {
  const [text, setText] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setText("");
    if (e.target[0].value.length !== 5) {
      alert("guess should be 5 characters long");
      return;
    }
    let newItem = { id: crypto.randomUUID(), value: e.target[0].value };
    setAllGuess([...allGuess, newItem]);
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
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
        />
      </form>
    </div>
  );
}

export default GuessInput;
