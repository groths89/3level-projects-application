/*
Additional Features:
1. Improve UI Design - (Theme)
*/

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    if (randomNumber === 1) {
        computerChoice = 'Rock';
    }

    if (randomNumber === 2) {
        computerChoice = 'Paper';
    }

    if (randomNumber === 3) {
        computerChoice = 'Scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) { result = 'Its A Draw!' };
    if ((computerChoice === 'Rock' && userChoice === 'Paper') || (computerChoice === 'Paper' && userChoice === 'Scissors') || (computerChoice === 'Scissors' && userChoice === 'Rock')) { result = 'You Won!' };
    if ((computerChoice === 'Rock' && userChoice === 'Scissors') || (computerChoice === 'Paper' && userChoice === 'Rock') || (computerChoice === 'Scissors' && userChoice === 'Paper')) { result = 'You Lost!' };
    resultDisplay.innerHTML = result;
}
