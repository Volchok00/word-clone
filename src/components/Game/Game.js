import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput";
import { Guess } from "../Guess";
import { MAX_WORD_LENGTH, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";
import { SuccessBanner } from "../Banner/SuccessBanner";
import { ErrorBanner } from "../Banner/ErrorBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);

console.log({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [status, setStatus] = useState("");
  const [submittedGuesses, setSubmittedGuesses] = useState([]);

  const onChange = (e) => {
    const nextGuess = e.target.value;
    if (nextGuess.length <= MAX_WORD_LENGTH) {
      setGuess(nextGuess.toUpperCase());
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (guess.length === MAX_WORD_LENGTH) {
      const nextGuesses = [...submittedGuesses];
      nextGuesses.push(guess);
      if (nextGuesses.length <= NUM_OF_GUESSES_ALLOWED) {
        setSubmittedGuesses(nextGuesses);
        setGuess("");
        if (guess === answer) {
          setStatus("won");
        }
      } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
        setStatus("lost");
      }
    }
  };

  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((el) => {
          const validatedGuess = checkGuess(submittedGuesses[el], answer);
          return (
            <Guess
              key={el}
              value={submittedGuesses[el]}
              validatedGuess={validatedGuess}
            />
          );
        })}
      </div>

      <GuessInput
        disabled={status}
        guess={guess}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {status &&
        (status === "won" ? (
          <SuccessBanner numberOfGuesses={submittedGuesses.length} />
        ) : (
          <ErrorBanner correctAnswer={answer} />
        ))}
    </>
  );
}

export default Game;
