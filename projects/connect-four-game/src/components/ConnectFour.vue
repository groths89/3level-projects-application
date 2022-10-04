<template>
  <div class="body">
    <div class="turn-display">
      <span id="current-player">Player 1</span>
    </div>
    <h3 id="result"></h3>
    <div class="game-board">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

      <div></div>
      <div></div>
      <div class="taken last-row"></div>
      <div class="taken last-row"></div>
      <div class="taken last-row"></div>
      <div class="taken last-row"></div>
      <div class="taken last-row"></div>
      <div class="taken last-row"></div>
      <div class="taken last-row"></div>
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
  font-family: Arial;
  box-sizing: content-box;
}

body {
  margin: 0;
}

.body {
  background-color: hsl(0, 0%, 87%);
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
  padding: 1em;
  font-size: clamp(0.5rem, 2.5vmin, 1.5rem);
}

#current-player {
  width: 7em;
  border: 1px solid #000000;
  background-color: hsl(240, 2%, 12%);
  color: hsl(0, 0%, 87%);
  padding: 0.25em 7em;
  text-align: center;
}

.turn-display {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(7, minmax(auto, auto));
  grid-template-rows: repeat(7, minmax(auto, auto));
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.game-board div {
  height: 4em;
  width: 4em;
  border: 1px solid #000000;
}

.player-one {
  background-color: red;
  border-radius: 50%;
}

.player-two {
  background-color: blue;
  border-radius: 50%;
}

.last-row {
  border: none !important;
}
</style>
