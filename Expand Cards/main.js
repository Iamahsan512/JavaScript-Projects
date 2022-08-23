'use strict';

// variables 

const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', () => {
        // We want only one active class so remove all other actives
        removeOtherActives();

        // Add only one Active class 
        item.classList.add('active');
    });
});

const removeOtherActives = () => {
    items.forEach(item => {
        item.classList.remove('active');
    });
};