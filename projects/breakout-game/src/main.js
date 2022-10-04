/*
1. Improve UI Design - (Theme)
2. Keep Score
3. Start Game Button
4. Random Amount of Blocks to Break
5. Setting to increase or decrease speed
6. Different Sized Blocks
7. Move with mouse?
*/

const board = document.querySelector('.board');
const scoreDisplay = document.querySelector('#score');
const boardWidth = 600;
const boardHeight = 300;
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;

let timerId;
let score = 0;

const userStart = [230, 10];
let currentPosition = userStart;

const ballStart = [270, 40];
let ballCurrentPosition = ballStart;
let xDirection = 2;
let yDirection = 2;

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockHeight, yAxis];
    }
}

const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210)
];

function addBlocks() {

    for (let i = 0; i < blocks.length; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        board.appendChild(block);
    }
}

addBlocks();

function drawUser() {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

const user = document.createElement('div');
user.classList.add('user');
drawUser();
board.appendChild(user);

function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}

function moveUser(e) {
    switch (e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10;
                drawUser();                
            }
            break;
        case 'ArrowRight':
            if (currentPosition[0] < boardWidth - blockWidth) {
                currentPosition[0] += 10;
                drawUser();                    
            }
            break;
        case 'ArrowUp':
            if(currentPosition[1] < boardHeight / 5) {
                currentPosition[1] += 10;
                drawUser(); 
            }
            break;
        case 'ArrowDown':
             if (currentPosition[1] > 0) {
                currentPosition[1] -= 10;
                drawUser();                
            }
            break;
        default:
            break;
    }
}

function moveBall() {
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkForCollisions();
}

document.addEventListener('keydown', moveUser);

timerId = setInterval(moveBall, 30);

const ball = document.createElement('div');
ball.classList.add('ball');
board.appendChild(ball);

function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2;
        return;
    }

    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2;
        return;
    }

    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2;
        return;
    }

    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2;
        return;
    }
}

function checkForCollisions() {
    for (let i = 0; i < blocks.length; i++) {
        if (
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
            ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]) 
        ) {
            const allBlocks = Array.from(document.querySelectorAll('.block'));
            allBlocks[i].classList.remove('block');
            blocks.splice(i, 1);
            changeDirection();
            score++;
            scoreDisplay.innerHTML = score;

            if (blocks.length === 0) {
                scoreDisplay.innerHTML = 'You Win!';
                clearInterval(timerId);
                document.removeEventListener('keydown', moveUser);
            }
        }
        
    }

  // check for wall hits
  if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || ballCurrentPosition[0] <= 0 || ballCurrentPosition[1] >= (boardHeight - ballDiameter))
  {
    changeDirection()
  }

  //check for user collision
  if
  (
    (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
    (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight ) 
  )
  {
    changeDirection()
  }

    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId);
        scoreDisplay.innerHTML = 'You Lose';
        document.removeEventListener('keydown', moveUser);
    }
}