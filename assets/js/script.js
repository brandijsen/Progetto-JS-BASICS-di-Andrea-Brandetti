// Create the app container
const appContainer = document.createElement('div');
appContainer.classList.add('app-container');
document.body.appendChild(appContainer);

// Define elements to be added to the app container
const elements = [
    { type: 'h1', id: 'title', textContent: 'COUNTER APP' }, // Header title
    { type: 'div', id: 'counter', textContent: '0' }, // Counter display
    { type: 'button', id: 'incrementBtn', textContent: '+' }, // Increment button
    { type: 'button', id: 'resetBtn', textContent: 'C' }, // Reset button
    { type: 'button', id: 'decrementBtn', textContent: '-' } // Decrement button
];

// Add elements to the app container and set their attributes
elements.forEach(({ type, id, textContent }) => {
    const element = document.createElement(type);
    element.id = id;
    element.textContent = textContent;
    appContainer.appendChild(element);
});

// Initialize counter value
let counterValue = 0;

// Function to update the counter display
function updateCounter() {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = counterValue;
}

// Add event listener to the app container to handle button clicks
appContainer.addEventListener('click', function(event) {
    // Get the target of the event
    const target = event.target;
    // Check if the target is a button
    if (target.tagName === 'BUTTON') {
        const id = target.id;
        // Increment counter if increment button is clicked
        if (id === 'incrementBtn') {
            counterValue++;
        } 
        // Decrement counter if decrement button is clicked and counter is greater than 0
        else if (id === 'decrementBtn' && counterValue > 0) {
            counterValue--;
        } 
        // Reset counter if reset button is clicked
        else if (id === 'resetBtn') {
            counterValue = 0;
        }
        // Update counter display
        updateCounter();
    }
});

