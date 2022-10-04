<template>
  <div class="body">
    <div class="controls">
      <button onclick="startGame();">Start</button>
      <div class="your-score">
        <h2>Your Score:</h2>
        <h2 id="score">0</h2>
      </div>

      <div class="time-left">
        <h2>Time Left:</h2>
        <h2 id="countdown-timer">60</h2>
      </div>
    </div>

    <div class="grid">
      <div class="square" id="1"></div>
      <div class="square" id="2"></div>
      <div class="square" id="3"></div>
      <div class="square" id="4"></div>
      <div class="square" id="5"></div>
      <div class="square" id="6"></div>
      <div class="square" id="7"></div>
      <div class="square" id="8"></div>
      <div class="square" id="9"></div>
    </div>
  </div>
</template>
<script defer>
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
  background-color: hsl(240, 3%, 7%);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 1em;
  font-size: clamp(0.5rem, 2.5vmin, 1.5rem);
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.controls button {
  font-size: inherit;
  border: none;
  padding: 0.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 75%, calc(var(--lightness-offset, 0%) + 36%));
  color: #ffffff;
  fill: #ffffff;
  text-transform: uppercase;
  border-radius: 0.25em;
  cursor: pointer;
}

.controls button:hover,
.controls button:focus {
  --lightness-offset: 10%;
}

.your-score,
.time-left {
  display: flex;
  align-content: space-between;
  flex-direction: row;
  gap: 0.25em;
  color: hsl(240, 15%, 90%);
}

#score,
#countdown-timer {
  border: 0.05em solid hsl(240, 2%, 23%);
  padding: 0 1em;
  background-color: hsl(240, 15%, 90%);
  color: hsl(240, 2%, 23%);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1.25em));
  grid-template-rows: repeat(3, minmax(auto, 1.25em));
  gap: 0.25em;
  justify-content: center;
}

.square {
  width: 5em;
  height: 5em;
  font-size: 2em;
  color: #ffffff;
  border: 0.05em solid hsl(240, 2%, 23%);
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  transition: transform 250ms linear;
}

.mole {
  background-color: blue;
}
</style>
