import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [allGuess, setAllGuess] = useState([]);
  return (
    <>
      <GuessList allGuess={allGuess} />
      <GuessInput allGuess={allGuess} setAllGuess={setAllGuess} />
    </>
  );
}

export default Game;
