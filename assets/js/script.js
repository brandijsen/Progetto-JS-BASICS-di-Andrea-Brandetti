// Seleziona gli elementi del DOM
const container = document.querySelector('.value-container');
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetCounterButton = document.getElementById('reset-counter');

// Valore iniziale del counter
let counterValue = 0;

// Variabili per il controllo del tempo di incremento/decremento rapido
let intervalId = null;
let intervalDelay = 200;
let intervalSpeedup = 0.8;

// Funzione per aggiornare il valore del counter nel DOM
function updateCounter() {
  counterElement.textContent = counterValue;
}

// Incrementa il counter
function increment() {
  counterValue++;
  updateCounter();
  counterElement.style.color = "#f5f507"
  container.style.border = "2px solid #f5f507"
}

// Decrementa il counter
function decrement() {
  if (counterValue > 0) {
    counterValue--;
    updateCounter();
    counterElement.style.color = "#f5f507"
    container.style.border = "2px solid #f5f507"
    
  }
}

// Funzione per fermare incremento/decremento
function resetSpeed() {
  clearInterval(intervalId);
  intervalDelay = 200;

  setTimeout(function() {
  counterElement.style.color = "white"
  container.style.border = "2px solid white";
}, 200)
}
// Aggiungi event listener ai pulsanti

//  Increment event
incrementButton.addEventListener('mouseup', resetSpeed);
incrementButton.addEventListener('mouseout', resetSpeed);
incrementButton.addEventListener('mousedown', function() {
  increment();
  intervalId = setInterval(function() {
    increment();
    counterElement.style.color = "#f5f507"
    container.style.border = "2px solid #f5f507"
    speedup();
    
  }, intervalDelay);

});


// Decrement event
decrementButton.addEventListener('mouseup', resetSpeed);
decrementButton.addEventListener('mouseout', resetSpeed);
decrementButton.addEventListener('mousedown', function() {
  decrement();
  intervalId = setInterval(function() {
    decrement();
    counterElement.style.color = "#f5f507"
    container.style.border = "2px solid #f5f507"
    speedup();
    
  }, intervalDelay);
  
});


// Counter reset event
resetCounterButton.addEventListener('click', function() {
  counterValue = 0;
  updateCounter();
  counterElement.style.color = "#ff0505";
  container.style.border = "2px solid #ff0505";
  setTimeout(function() {
    counterElement.style.color = "white";
    container.style.border = "2px solid white";
  }, 200); // Delay di 200 millisecondi (0.2 secondi)
  
});