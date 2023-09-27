let num = Math.round(Math.random() * 100);
let inputElement = document.getElementById('guess-input');
let guess = 0;
let outputElement = document.getElementById('output');
let countElement = document.getElementById('count');

function submitGuess() {
    let inputValue = inputElement.value;
    if (inputValue === '') {
        alert('Enter a value between 0-100 to continue');
    } else if (inputValue > 100 || inputValue < 0) {
        alert('Please enter a value between 0-100 to continue');
    } else {
        guess++;
        if (num == inputValue) {
            outputElement.innerHTML = 'Congratulations!!! You won 🎉🎉🎉';
            let score = 101 - guess;
            countElement.innerHTML = `Your score is <b>${score} points</b>`;

            outputElement.classList.add('with-border');
            countElement.classList.add('with-border');

            document.querySelector('.container').style.background = '#fff';
        } else if (inputValue > num) {
            outputElement.innerHTML = 'Oops! You have entered a greater number. Please try again.';
        } else if (inputValue < num) {
            outputElement.innerHTML = 'Oops! You have entered a smaller number. Please try again.';
        }
    }
}

document.getElementById('submit-button').addEventListener('click', submitGuess);

inputElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitGuess();
    }
});
