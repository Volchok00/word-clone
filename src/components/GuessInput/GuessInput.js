export const GuessInput = ({ guess, onChange, onSubmit }) => {
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => onChange(e)}
      />
    </form>
  );
};
