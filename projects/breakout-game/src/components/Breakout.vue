<template>
  <div class="body">
    <div id="score"></div>
    <div class="board"></div>
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
  text-align: center;
  align-items: center;
}

.board {
  border-radius: 0.25em;
  background-color: hsl(240, 57%, 95%);
  position: absolute;
  display: flex;
  width: 600px;
  height: 300px;
  border: 1px solid #000000;
}

.block {
  border-radius: 0.25em;
  position: absolute;
  width: 100px;
  height: 20px;
  background-color: blue;
}

.user {
  border-radius: 0.25em;
  position: absolute;
  width: 100px;
  height: 20px;
  background-color: violet;
}

.ball {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: darkgray;
}
</style>
