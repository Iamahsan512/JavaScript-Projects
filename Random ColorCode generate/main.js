'use strict';
// Constant and variables 
const containerEl = document.querySelector(".container");

// Create Element div 
for (let i = 0; i < 48; i++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

// Generate random color code 
function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
        // console.log(colorCode);
    }
    return colorCode;
}

const colorContainerEls = document.querySelectorAll(".color-container");


// Styling of each div with color code 
function generateColors() {
    colorContainerEls.forEach((color) => {
        const newColorCode = randomColor();
        color.style.backgroundColor = "#" + newColorCode;
        color.innerText = "#" + newColorCode;
    });
}

generateColors();
