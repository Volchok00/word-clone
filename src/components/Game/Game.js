import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");

  const onChange = (e) => {
    const nextGuess = e.target.value.toUpperCase();
    if (nextGuess.length <= 5) {
      setGuess(nextGuess);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (guess.length === 5) {
      console.info({ guess });
    }
  };

  return <GuessInput guess={guess} onChange={onChange} onSubmit={onSubmit} />;
}

export default Game;
