export const GuessInput = ({ guess, onChange, onSubmit, disabled }) => {
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        id="guess-input"
        type="text"
        value={guess}
        onChange={onChange}
      />
    </form>
  );
};
