import React from "react";
import { range } from "../../utils";
import { MAX_WORD_LENGTH } from "../../constants";

export const Guess = ({ value }) => {
  return (
    <p className="guess">
      {range(MAX_WORD_LENGTH).map((el) => (
        <span key={el} className="cell">
          {value ? value[el] : undefined}
        </span>
      ))}
    </p>
  );
};
