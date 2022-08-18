'use strict';

// Constant and Variables

const textArea = document.querySelector('.textarea');
const totalChar = document.querySelector('.char_num');

const remChar = document.querySelector('.rem_num');

// Add Event handler 
textArea.addEventListener('keyup', (e) => {

    // Get the length form textArea 
    const newValue = e.target.value.length;

    totalChar.innerHTML = newValue;
    remChar.innerHTML =  textArea.getAttribute('maxLength') - newValue;

    // When limit is fullfil 
    newValue === 100 ? alert('You have complete the Limit 👏') : 'You have still remaining Digits '
});
