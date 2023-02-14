export const GuessInput = ({ guess, onChange }) => {
  return (
    <form class="guess-input-wrapper">
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
