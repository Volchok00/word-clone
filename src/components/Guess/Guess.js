import React from "react";
import { range } from "../../utils";
import { MAX_WORD_LENGTH } from "../../constants";

export const Guess = ({ value, validatedGuess }) => {
  return (
    <p className="guess">
      {range(MAX_WORD_LENGTH).map((el) => {
        let className = validatedGuess
          ? `cell ${validatedGuess[el].status}`
          : "cell";
        return (
          <span key={el} className={className}>
            {value ? value[el] : undefined}
          </span>
        );
      })}
    </p>
  );
};
