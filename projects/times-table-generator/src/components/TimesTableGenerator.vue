<template>
  <div class="body">
    <div class="form">
      <input
        type="number"
        class="input-number"
        id="input-number"
        min="1"
        max="12"
      />
      <button class="submit-btn" id="submit-btn" type="submit">SUBMIT</button>
    </div>
    <div class="results" id="results"></div>
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
  background-color: hsl(240, 25%, 94%);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 1em;
  font-size: clamp(0.5rem, 2.5vmin, 1.5rem);
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form button {
  margin-top: 1em;
}

.submit-btn {
  font-size: inherit;
  grid-column: span 2;
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
  padding: 0.5em;
  cursor: pointer;
  user-select: none;
}

.submit-btn:hover,
.submit-btn:focus {
  --lightness-offset: 10%;
}

.input-number {
  border-radius: 0.25em;
  border: none;
  padding: 0.5em;
  width: 28em;
  height: 2em;
}

.results {
  justify-content: center;
  margin: 1em;
}

.table {
  width: 50%;
  margin: 1em auto;
  font-size: 0.75em;
  border-spacing: 0;
}

.cell {
  padding: 0.75em !important;
  border: 1px solid hsl(240, 30%, 61%);
  text-align: center;
  height: 70px !important;
}
</style>
