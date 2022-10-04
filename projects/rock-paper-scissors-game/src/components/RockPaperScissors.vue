<template>
  <div class="body">
    <div class="game-board">
      <h2>Computer Choice:</h2>
      <div class="input-output">
        <span id="computer-choice"></span>
      </div>
      <h2>User Choice:</h2>
      <div class="input-output">
        <span id="user-choice"></span>
      </div>
      <h2>Result:</h2>
      <div class="input-output">
        <span id="result"></span>
      </div>
    </div>

    <div class="buttons">
      <button class="choice" id="Rock">Rock</button>
      <button class="choice" id="Paper">Paper</button>
      <button class="choice" id="Scissors">Scissors</button>
    </div>
  </div>
</template>
<script>
import("../main");
</script>
<style lang="scss" scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
  font-family: Arial;
}

body {
  margin: 0;
}

.body {
  background-color: hsl(240, 4%, 22%);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 1em;
  font-size: clamp(0.5rem, 2.5vmin, 1.5rem);
}

h2 {
  margin-bottom: 0;
  color: hsl(240, 17%, 88%);
}

.input-output {
  min-width: 15em;
  min-height: 2em;
  font-size: 2em;
  color: #ffffff;
  border: 0.05em solid hsl(240, 17%, 88%);
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  transition: transform 250ms linear;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 5.25em));
  grid-auto-rows: 3em;
  gap: 1.25em;
  justify-content: center;
}

.choice {
  font-size: inherit;
  grid-column: span 3;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(
    var(--hue, 200),
    var(--saturation, 1%),
    calc(var(--lightness-offset, 0%) + var(--lightness, 51%))
  );
  color: #ffffff;
  fill: #ffffff;
  text-transform: uppercase;
  border-radius: 0.25em;
  cursor: pointer;
}

.choice:hover,
.choice:focus {
  --lightness-offset: 10%;
}

.game-board {
  display: grid;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
  grid-template-columns: repeat(1, minmax(auto, 4em));
  grid-template-rows: repeat(1, minmax(auto, 4em));
  gap: 0.25em;
  margin-bottom: 1em;
}
</style>
