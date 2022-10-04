const result = document.querySelector('.list-result')
const nameInput = document.getElementById('name')
const instructionInput = document.getElementById('instructions')
const ingredientInput = document.getElementById('ingredients')
const submitButton = document.querySelector('.submit-btn')

let nameText;
let instructionText;
let ingredientText;

submitButton.addEventListener('click', () => {
    saveRecipeData(nameInput.value, instructionInput.value, ingredientInput.value)
    displayRecipeData(nameText, instructionText, ingredientText)
})

function saveRecipeData(name, instructions, ingredients) {
    nameText = name
    instructionText = instructions
    ingredientText = ingredients
}

function displayRecipeData(name, instructions, ingredients) {
    let n = name
    let i = instructions
    let g = ingredients.split(',')

   createHtmlList(n, i, g);
}

function createHtmlList(name, instructions, ingredients) {
    const recipeWrapper = document.createElement('div')
    const recipeList = document.createElement('ul')
    const nameItem = document.createElement('li')
    const instructionItem = document.createElement('li')
    const ingredientItem = document.createElement('li')
    const header = document.createElement('h2')
    const paragraph = document.createElement('p')
    const orderedlist = document.createElement('ol')

    nameItem.appendChild(header).appendChild(document.createTextNode(name))
    instructionItem.appendChild(paragraph).appendChild(document.createTextNode(instructions))

    for (let i = 0; i < ingredients.length; i++) {
        const listitem = document.createElement('li')
        orderedlist.appendChild(listitem).appendChild(document.createTextNode(ingredients[i]))
    }
    
    ingredientItem.appendChild(orderedlist)
    orderedlist.classList.add('ingredient')

    recipeList.appendChild(nameItem)
    recipeList.appendChild(instructionItem)
    recipeList.appendChild(ingredientItem)
    recipeWrapper.appendChild(recipeList)
    result.appendChild(recipeWrapper)

    recipeList.classList.add('recipe')
    recipeWrapper.classList.add('recipe-wrapper')
}


