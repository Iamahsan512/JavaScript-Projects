'use strict'
// declear variable and constants 
const starsEl = document.querySelectorAll('.bxs-star');
const emojisEl = document.querySelectorAll('.emo');
const colorsArr = ['red', 'orange', '#21B6A8', '#5CFF5C', '#00FF00'];

// Using forEach function 
starsEl.forEach((starEl, i) => {
    // Add click listener for each star 
    starEl.addEventListener('click', () => {
        // Create a function to updation and use conditions 
        starsEl.forEach((star, ind) => {
            console.log(star);
            if (ind < i + 1) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }

            // change the emojis after clicking 
            emojisEl.forEach((emojiEl) => {
                emojiEl.style.transform = `translateX(-${i * 50}px)`;
                emojiEl.style.color = colorsArr[i];
            });
        });
    });
});