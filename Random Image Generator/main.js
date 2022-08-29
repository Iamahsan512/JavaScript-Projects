"use strict";

const btn = document.querySelector(".btn");
const containerEl = document.querySelector(".container");

btn.addEventListener("click", () => {
  let newImg = 8;

  setTimeout(() => {
    
// Use loop to run for multiple times 

  for (let i = 0; i < newImg; i++) {

    // Generate a random Number 

    const randomNum = Math.floor(Math.random() * 1000);

    // Create an Element of Image 

    const imgEl = document.createElement("img");

    // Give the source 

    imgEl.src = ` https://picsum.photos/300/300?random=${randomNum}`;

    // Append in to container 

    containerEl.appendChild(imgEl);
  }
  }, 1000);
});
