/*
Possible Extra Rules/Additional Features:
1. Everyday it generates new board
2. Have 26 cards of different images (alphabet)
3. Each day the user needs to match 4 images specified by game master
4. User has 8 tries to match the 4 cards
*/

const cardArray = [
    {
        name: 'a',
        img: 'images/a.png'
    },
    {
        name: 'b',
        img: 'images/b.png'
    },
    {
        name: 'c',
        img: 'images/c.png'
    },
    {
        name: 'd',
        img: 'images/d.png'
    },
    {
        name: 'e',
        img: 'images/e.png'
    },
    {
        name: 'f',
        img: 'images/f.png'
    },
    {
        name: 'a',
        img: 'images/a.png'
    },
    {
        name: 'b',
        img: 'images/b.png'
    },
    {
        name: 'c',
        img: 'images/c.png'
    },
    {
        name: 'd',
        img: 'images/d.png'
    },
    {
        name: 'e',
        img: 'images/e.png'
    },
    {
        name: 'f',
        img: 'images/f.png'
    }
]

cardArray.sort(() => 0.5 - Math.random());

let gridDisplay = document.querySelector('#grid');
let resultDisplay = document.querySelector('#result');
let scoreDisplay = document.querySelector('#score');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.classList.add('cards');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }
}

createBoard();

function checkMatch() {
    let cards = document.querySelectorAll('img');
    let optionOneId = cardsChosenIds[0];
    let optionTwoId = cardsChosenIds[1];
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You clicked the same card!');
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry Try Again!');
    }

    scoreDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations you found them all';
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}