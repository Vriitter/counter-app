let button = document.querySelector('button');
let buttonReset = document.querySelector('.reset');
let counterText = document.querySelector('.counter');
let counter = 0;

button.addEventListener('click', function() {
   counter += 1
   
   counterText.innerText = counter;
});

buttonReset.addEventListener('click', function() {
   counter = 0;
   counterText.innerText = counter;
});