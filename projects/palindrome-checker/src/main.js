const inputText = document.getElementById('input-string');
const submitBtn = document.querySelector('.submit-btn');
const resultAnswer = document.querySelector('.result');

submitBtn.addEventListener('click', () => {
    const answer = isPalindrome(inputText.value);
    displayAnswer(answer)
})

function isPalindrome(string) {
    let firstArray = [];
    let secondArray = [];

    for (let i = 0; i < string.length; i++) {
        if(string[i] != ' ') {
            firstArray.push(string[i]) 
        }    
    }
    for (let j = string.length - 1; j >= 0; j--) {
        if(string[j] != ' ') {
          secondArray.push(string[j]);  
        }
    }
    let firstString = firstArray.join('');
    let secondString = secondArray.join('');
    
    console.log(firstString);
    console.log(secondString);

    if (firstString === secondString) {
        console.log('Same');
        return 'Yes'
    } else {
        console.log('Different');
        return 'No'
    }
}

function displayAnswer(answer) {
    answer = answer.toLowerCase();
    if (answer == 'yes') {
        resultAnswer.classList.add('yes');
        resultAnswer.classList.remove('no'); 
    } 
    if (answer == 'no') {
        resultAnswer.classList.add('no');
        resultAnswer.classList.remove('yes');
    }
    resultAnswer.textContent = answer.toUpperCase();  
}