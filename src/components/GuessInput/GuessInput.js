export const GuessInput = ({ guess, onChange, onSubmit }) => {
  return (
    <form class="guess-input-wrapper" onSubmit={onSubmit}>
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => onChange(e)}
      />
    </form>
  );
};
