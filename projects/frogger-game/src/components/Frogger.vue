<template>
  <div class="body">
    <div class="controls">
      <h3>Seconds Left: <span id="time-left">20</span></h3>
      <h3>Result: <span id="result"></span></h3>
    </div>

    <button id="start-pause-button" class="button">Start/Pause</button>

    <div class="game-board">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div class="ending-block"></div>
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

      <div class="log-left l1"></div>
      <div class="log-left l2"></div>
      <div class="log-left l3"></div>
      <div class="log-left l4"></div>
      <div class="log-left l5"></div>
      <div class="log-left l1"></div>
      <div class="log-left l2"></div>
      <div class="log-left l3"></div>
      <div class="log-left l4"></div>

      <div class="log-right l5"></div>
      <div class="log-right l1"></div>
      <div class="log-right l2"></div>
      <div class="log-right l3"></div>
      <div class="log-right l4"></div>
      <div class="log-right l5"></div>
      <div class="log-right l1"></div>
      <div class="log-right l2"></div>
      <div class="log-right l3"></div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

      <div class="car-left c1"></div>
      <div class="car-left c2"></div>
      <div class="car-left c3"></div>
      <div class="car-left c1"></div>
      <div class="car-left c2"></div>
      <div class="car-left c3"></div>
      <div class="car-left c1"></div>
      <div class="car-left c2"></div>
      <div class="car-left c3"></div>

      <div class="car-right c1"></div>
      <div class="car-right c2"></div>
      <div class="car-right c3"></div>
      <div class="car-right c1"></div>
      <div class="car-right c2"></div>
      <div class="car-right c3"></div>
      <div class="car-right c1"></div>
      <div class="car-right c2"></div>
      <div class="car-right c3"></div>

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
      <div class="starting-block frog"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
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
}

body {
  margin: 0;
}

.body {
  background-color: hsl(240, 3%, 7%);
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
  padding: 1em;
  font-size: clamp(0.5rem, 2.5vmin, 1.5rem);
  justify-content: center;
  align-items: center;
}

.button {
  font-size: inherit;
  grid-column: span 2;
  border: none;
  padding: 0.5em;
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
  user-select: none;
  margin: 1em;
}

.button:hover,
.button:focus {
  --lightness-offset: 10%;
}

.game-board {
  border-radius: 0.25em;
  height: 180px;
  width: 180px;
  display: flex;
  flex-wrap: wrap;
  background-color: hsl(240, 57%, 95%);
}

.game-board div {
  height: 20px;
  width: 20px;
}

.controls {
  padding: 0.25em;
  border-radius: 0.25em;
  width: 33em;
  background-color: hsl(240, 57%, 95%);
}

.ending-block {
  background-color: red;
}

.starting-block {
  background-color: blue;
}

.l1,
.l2,
.l3 {
  background-color: brown;
}

.l4,
.l5 {
  background-color: lightblue;
}

.c1 {
  background-color: black;
}

.c2,
.c3 {
  background-color: lightgrey;
}

.frog {
  background-color: green;
}
</style>
