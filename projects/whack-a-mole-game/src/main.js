document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');
    let mole = document.querySelector('.mole');
    let timer = document.querySelector('#countdown-timer');
    let score = document.querySelector('#score');

    let result = 0;
    let hitPosition;
    let currentTime = 60;
    let countDownTimerId;
    let timerId = null;

    function randomSquare() {
        squares.forEach(square => {
            square.classList.remove('mole');
        });
        
        let randomSquare = squares[Math.floor(Math.random() * 9)];
        randomSquare.classList.add('mole');

        hitPosition = randomSquare.id
    }

    squares.forEach(square => {
        square.addEventListener('mousedown', () =>{
            if (square.id == hitPosition) {
                result++;
                score.textContent = result;
                hitPosition = null;
            }
        })
    });

    function startGame() {
        timerId = setInterval(randomSquare, 700);
        countDownTimerId = setInterval(countDown, 1000);
    }

    function countDown() {
        currentTime--;
        
        if (currentTime === 0) {
            clearInterval(countDownTimerId);
            clearInterval(timerId);
            alert('GAME OVER! Final score: ' + result);
        }

        timer.textContent = currentTime;
    }
})
