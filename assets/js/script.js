// App structure 

// App container
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);
appContainer.classList.add('app-container');

// h1 title
const title = document.createElement('h1');
title.textContent = 'COUNTER APP';
appContainer.appendChild(title);

// Counter value div
const counter = document.createElement('div');
counter.id = 'counter';
appContainer.appendChild(counter);

// Buttons container
const buttonsContainer = document.createElement('div');
appContainer.appendChild(buttonsContainer);
buttonsContainer.classList.add('buttons-container');

// Increment button
const incrementBtn = document.createElement('button');
incrementBtn.id = 'incrementBtn';
incrementBtn.textContent = '+';
buttonsContainer.appendChild(incrementBtn);

// Reset button
const resetBtn = document.createElement('button');
resetBtn.id = 'resetBtn';
resetBtn.textContent = 'C';
buttonsContainer.appendChild(resetBtn);

// Decrement button
const decrementBtn = document.createElement('button');
decrementBtn.id = 'decrementBtn';
decrementBtn.textContent = '-';
buttonsContainer.appendChild(decrementBtn);


// Set Counter Value 

function updateCounter(value) {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = counterValue;
}

let counterValue = 0;
updateCounter(counterValue);


// Increment Value onclick

document.getElementById('incrementBtn').addEventListener('click', function( ) {
counterValue++;
updateCounter(counterValue);
})

// Continuous increment value 

document.getElementById('incrementBtn').addEventListener('mousedown', function () {
    incrementInterval = setInterval (function () {
        counterValue++;
        updateCounter(counterValue);
    }, 200)
    
})

// Stop continuous increment 

document.getElementById('incrementBtn').addEventListener('mouseup', function () {
    clearInterval(incrementInterval);
})

// Decrement counter onclick until 

document.getElementById('decrementBtn').addEventListener('click', function( ) {
    if( counterValue > 0) {
        counterValue--;
        updateCounter(counterValue);
}

})

// Continuous decrement value 

document.getElementById('decrementBtn').addEventListener('mousedown', function () {
    if (counterValue > 0) {
        decrementInterval = setInterval(function () {
            if (counterValue > 0) {
                counterValue--;
                updateCounter(counterValue);
        }
    }, 200)
}
})

// Stop continuous decrement 

document.getElementById('decrementBtn').addEventListener('mouseup', function () {
    clearInterval(decrementInterval);
})

// Reset counter 

document.getElementById('resetBtn').addEventListener('click', function () {
    counterValue = 0;
    updateCounter(counterValue);
})
