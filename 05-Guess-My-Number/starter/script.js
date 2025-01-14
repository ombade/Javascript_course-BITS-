'use strict';
console.log(document.querySelector('.message').textContent); 
console.log("hello")
document.querySelector('.message').textContent = 'correct number';


const number = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = number;



document.querySelector('.check').addEventListener(
    'click' ,function ()
    {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);
if(!guess)
{
    document.querySelector('.message').textContent = 'no number';
}
else if(guess > number)
    {
        document.querySelector('.message').textContent = 'The Number is higer than the guess number ';
    }
    else if(guess < number)
    {
        document.querySelector('.message').textContent = 'The number is lower than the guess number ';
        }
    else
    {
        document.querySelector('.message').textContent = 'correct number';
    }
}
)


console.log(number)