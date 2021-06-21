'use strict';
let secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
document.querySelector('.check').addEventListener(
    'click', function () {
        let guess = Number(document.querySelector('.guess').value);
        if(!guess) {
            document.querySelector('.message').textContent = 'No Number!';
        } else if(secretNumber === guess) {
            document.querySelector('.message').textContent = 'Correct Number!';
            document.querySelector('.number').textContent = String(secretNumber);
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
        } else if(guess > secretNumber) {
            if(score > 1) {
                document.querySelector('.message').textContent = 'Too High!';
                score--;
                document.querySelector('.score').textContent = String(score);
            } else {
                document.querySelector('.message').textContent = 'You lost the game!';
            }
        } else {
            if(score > 1) {
                document.querySelector('.message').textContent = 'Too Low!';
                score--;
                document.querySelector('.score').textContent = String(score)
            } else {
                document.querySelector('.message').textContent = 'You lost the game!';
            }
        }
        document.querySelector('.again').addEventListener(
            'click', function () {
                score = 20;
                secretNumber = Math.trunc(Math.random() * 21);
                document.querySelector('.message').textContent = 'Start guessing...';
                document.querySelector('body').style.backgroundColor = '#222';
                document.querySelector('.number').style.width = '15rem';
            }
        )
    }
)
