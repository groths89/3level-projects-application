<template>
  <div class="body">
    <h1 class="results"></h1>
    <div class="game-board"></div>
    <div class="instructions">
      <p>Instructions</p>
      <ul>
        <li>
          <span><em>a - left</em></span>
        </li>
        <li>
          <span><em>d - right</em></span>
        </li>
        <li>
          <span><em>w - shoot</em></span>
        </li>
      </ul>
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
  align-items: center;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  padding: 1em;
  font-size: clamp(0.5rem, 2.5vmin, 1.5rem);
}

.results {
  color: hsl(240, 46%, 95%);
}

.game-board {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 300px;
  height: 300px;
  border: 1px solid #000000;
  margin: 0 auto;
  background-color: hsl(240, 46%, 95%);
}

.game-board div {
  width: 20px;
  height: 20px;
}

.invader {
  background-color: purple;
  border-radius: 50%;
}

.shooter {
  background-color: greenyellow;
}

.laser {
  background-color: orangered;
}

.boom {
  background-color: firebrick;
}

.instructions {
  border: 1px solid hsl(240, 46%, 95%);
  color: hsl(240, 46%, 95%);
  bottom: 0;
  position: absolute;
  width: 38em;
  margin-bottom: 1em;
}

.instructions p {
  margin-left: 1em;
}
</style>
