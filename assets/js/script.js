/* Set Counter Value */

function updateCounter(value) {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = counterValue;
}

let counterValue = 0;
updateCounter(counterValue);


/* Increment Value onclick*/

document.getElementById('incrementBtn').addEventListener('click', function( ) {
counterValue++;
updateCounter(counterValue);
})

/* Continuous increment value */
document.getElementById('incrementBtn').addEventListener('touchstart', function () {
    incrementInterval = setInterval (function () {
        counterValue++;
        updateCounter(counterValue);
    }, 200)
    
})

/* Stop continuous increment */

document.getElementById('incrementBtn').addEventListener('touchend', function () {
    clearInterval(incrementInterval);
})

/* Decrement counter onclick until 0*/

document.getElementById('decrementBtn').addEventListener('click', function( ) {
    if( counterValue > 0) {
        counterValue--;
        updateCounter(counterValue);
}

})

/* Continuous decrement value */

document.getElementById('decrementBtn').addEventListener('touchstart', function () {
    if (counterValue > 0) {
        decrementInterval = setInterval(function () {
            if (counterValue > 0) {
                counterValue--;
                updateCounter(counterValue);
        }
    }, 200)
}
})

/* Stop continuous decrement */

document.getElementById('decrementBtn').addEventListener('touchend', function () {
    clearInterval(decrementInterval);
})

/* Reset counter */

document.getElementById('resetBtn').addEventListener('click', function () {
    counterValue = 0;
    updateCounter(counterValue);
})
