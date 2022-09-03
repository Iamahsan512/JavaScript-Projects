"use strict";

// variables

const containerEl = document.querySelector(".container");
const careers = ["Student.", "Web Developer.", "Freelancer.", "Sportsman."];
let careerIndex = 0;
let characterIndex = 0;

// Function for auto text Animation

const textUpdate = () => {
    characterIndex++;
    containerEl.innerHTML = `
    <h1>I am a <span class="career" > ${careers[careerIndex]
        .slice(0, characterIndex)}</</span> <h1>`;

    if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
    }

    if (careerIndex === careers.length) {
    careerIndex = 0;
    }
    setTimeout(textUpdate, 300);
};

textUpdate();
