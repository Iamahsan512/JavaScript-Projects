"use strict"

// Global Constant and Variables 
const btn = document.querySelector('.btn');
const color = document.querySelector('#color');
const colorCode = document.querySelector('.color__Code');

// EventHandler 

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = color.value;

    // To view the color code 

    colorCode.innerHTML = color.value

    console.log(colorCode);
});



