'use strict';

const searchInput = document.querySelector('#input');
const cards = document.querySelectorAll('.card');
// console.log(userNames);

searchInput.addEventListener('input', (e) => {
    const inputValue = e.target.value.toLowerCase();
    // console.log(inputValue);

    cards.forEach(card => {
        console.log(card);
        if (card.textContent.toLowerCase().includes(inputValue)) {

            card.style.display = '';
        }
        else {
            card.style.display = 'none';
        }
    });
})