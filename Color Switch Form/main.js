// variables 
const forget = document.querySelector('#forget');
const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const bgColor = document.querySelector('.container');
const colors = document.querySelectorAll('.color');
const colorsArray = ['hsl(225, 53%, 47%)', 'hsl(300, 100%, 25%)', 'hsl(34, 54%, 51%)', 'hsl(114, 61%, 31%)'];

// event listener 
colors.forEach((color) => {
    color.addEventListener('click', () => {
        const currentColor = color.getAttribute('data-number');
        // styling 
        bgColor.style.backgroundColor = colorsArray[currentColor - 1];
        forget.style.color = colorsArray[currentColor - 1];
        text.style.color = colorsArray[currentColor - 1];
        btn.style.backgroundColor = colorsArray[currentColor - 1];
    });
});

