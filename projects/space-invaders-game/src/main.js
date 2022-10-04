/** 
 * Additional Features:
 * 1. Move Shooter with mouse
 * 2. Shoot missiles with left click
 * 3. Add play button
 * 4. Different difficulty levels
*/
const gameBoard = document.querySelector('.game-board');
const resultsDisplay = document.querySelector('.results');

let width = 15;
let currentShooterIndex = 202;
let direction = 1;
let invadersId = null;
let goingRight = true;
let aliensRemoved = [];
let results = 0;


for (let i = 0; i < 225; i++) {
    const square = document.createElement('div');
    gameBoard.appendChild(square);
    
}

const squares = Array.from(document.querySelectorAll('.game-board div'));
const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
];

function draw() {
    for (let j = 0; j < alienInvaders.length; j++) {
        if(!aliensRemoved.includes(j))
        squares[alienInvaders[j]].classList.add('invader');
    }
}

draw();

function remove() {
    for (let j = 0; j < alienInvaders.length; j++) {
        squares[alienInvaders[j]].classList.remove('invader');
    }
}

squares[currentShooterIndex].classList.add('shooter');

function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter');
    switch (e.key) {
        case 'a':
            if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
            break;
        case 'd':
            if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
            break;
        default:
            break;
    }
    squares[currentShooterIndex].classList.add('shooter');
}

document.addEventListener('keydown', moveShooter);

function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;
    remove();

    if (rightEdge && goingRight) {
        for (let l = 0; l < alienInvaders.length; l++) {
            alienInvaders[l] += width + 1;
            direction = -1;
            goingRight = false;
        }
    }

    if (leftEdge && !goingRight) {
        for (let m = 0; m < alienInvaders.length; m++) {
            alienInvaders[m] += width - 1;
            direction = 1;
            goingRight = true;
        }
    }

    for (let k = 0; k < alienInvaders.length; k++) {
        alienInvaders[k] += direction;
    }

    draw();

    if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
        resultsDisplay.innerHTML = 'GAME OVER';
        clearInterval(invadersId);
    }

    for (let n = 0; n < alienInvaders.length; n++) {
        if (alienInvaders[n] >= squares.length) {
            resultsDisplay.innerHTML = 'GAME OVER';
            clearInterval(invadersId);
        }
    }

    if(aliensRemoved.length === alienInvaders.length){
        resultsDisplay.innerHTML = 'WINNER!';
        clearInterval(invadersId);
    }
}

invadersId = setInterval(moveInvaders, 500);

function shoot(e) {
    let laserId;
    let currentLaserIndex = currentShooterIndex;
    
    function moveLaser() {
        squares[currentLaserIndex].classList.remove('laser');
        currentLaserIndex -= width;
        squares[currentLaserIndex].classList.add('laser');

        if (squares[currentLaserIndex].classList.contains('invader')) {
            squares[currentLaserIndex].classList.remove('invader');
            squares[currentLaserIndex].classList.remove('laser');
            squares[currentLaserIndex].classList.add('boom');

            setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 300);
            clearInterval(laserId);

            const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
            aliensRemoved.push(alienRemoved);
            results++;
            resultsDisplay.innerHTML = `Score: ${results}`;
        }
    }

    switch(e.key) {
        case 'w':
            laserId = setInterval(moveLaser, 100);
            break;
        default:
            break;
    }
}

document.addEventListener('keydown', shoot);