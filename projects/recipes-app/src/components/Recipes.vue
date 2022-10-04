<template>
  <div class="body">
    <div class="form">
      <label for="name">Name</label
      ><input
        type="text"
        name="name"
        id="name"
        class="input"
        placeholder="Ex. Grilled Cheese"
      />
      <label for="instructions">Instructions</label
      ><textarea
        type="text"
        name="instructions"
        id="instructions"
        class="instructions"
        placeholder="Ex. Put the cheese on one peice of bread, and then put the other peice of bread on top of the cheese. Then cook the sandwich until the cheese is melted. Serve."
      ></textarea>
      <label for="ingredients">Ingredients</label
      ><textarea
        type="text"
        name="ingredients"
        id="ingredients"
        class="ingredients"
        placeholder="Ex. 2 peices of bread, 4 slices of American cheese, butter"
      ></textarea>
      <button class="submit-btn">Submit</button>
    </div>
    <div class="list-result"></div>
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
  background-color: hsl(41, 75%, 87%);
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
  background-color: hsl(41, 75%, 77%);
  padding: 1em;
  border-radius: 0.25em;
}

.form button {
  margin-top: 1em;
}

.input {
  border-radius: 0.25em;
  border: none;
  padding: 0.5em;
  width: 28em;
  height: 2em;
  margin: 0.5em;
}

.instructions,
.ingredients {
  border-radius: 0.25em;
  border: none;
  padding: 0.5em;
  width: 28em;
  height: 12em;
  margin: 0.5em;
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
    var(--hue, 41),
    var(--saturation, 93%),
    calc(var(--lightness-offset, 0%) + var(--lightness, 42%))
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

.recipe-wrapper {
  border-bottom: 1px solid hsl(40, 6%, 30%);
}

.recipe li {
  list-style: none;
}

.ingredient li {
  list-style: decimal;
}
</style>
