export const SuccessBanner = ({ numberOfGuesses }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numberOfGuesses} guesses</strong>.
      </p>
    </div>
  );
};
