<template>
  <div class="body">
    <div id="result"></div>
    <div class="display">
      <h3>Score:</h3>
      <span id="score"></span>
    </div>

    <div class="grid" id="grid"></div>
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
  background-color: hsl(0, 4%, 89%);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 1em;
  font-size: clamp(0.5rem, 2.5vmin, 1.5rem);
}

h3 {
  color: hsl(0, 0%, 19%);
  margin: 0.75em 0 0;
  min-height: 37px;
}

.display {
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, auto));
  justify-content: center;
}

.grid {
  display: grid;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
  grid-template-columns: repeat(4, minmax(auto, auto));
  grid-template-rows: repeat(3, minmax(auto, auto));
  gap: 1.25em;
  margin-bottom: 1em;
}

.cards {
  color: #ffffff;
  border: 0.05em solid hsl(0, 26%, 26%);
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  transition: transform 250ms linear;
}

#score {
  padding: 0.5em 1em;
  width: 7em;
  margin: 0.5em 0.25em;
  color: hsl(0, 0%, 87%);
  background-color: hsl(0, 0%, 19%);
  border-bottom: hsl(0, 26%, 26%);
}
</style>
