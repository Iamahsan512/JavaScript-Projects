'use strict';

// Variables 

const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const stepsEl = document.querySelectorAll('.step');
const progressEl = document.querySelector('.bottom_progress');
let currentCheck = 1;

// Next Button functionallity 

nextBtn.addEventListener('click', () => {
    currentCheck++;
    if (currentCheck > stepsEl.length) {
        currentCheck = stepsEl.length;
    };

    // For increase the steps 
    stepsEl.forEach((stepEl, index) => {
        if (index < currentCheck) {
            stepEl.classList.add('checked');
            stepEl.innerHTML =
                `<i class="bx bx-check"></i>
            <small>
            ${index === 0 ?
                    'Start' :
                    index === stepsEl.length - 1 ? 'Final' :
                        'Step' + index}
            </small>`;
        }

        // incease the pogress bar 
        const checkedNum = document.querySelectorAll('.checked');
        progressEl.style.width = ((checkedNum.length - 1) / (stepsEl.length - 1)) * 100 + '%';

        // For disable the button
        if (currentCheck === 1) {
            prevBtn.disabled = true;
        }
        else if (currentCheck === stepsEl.length) {
            nextBtn.disabled = true;
        }
        else {
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
    });
});


// Previous button function 

prevBtn.addEventListener('click', () => {
    currentCheck--;
    if (currentCheck > stepsEl.length) {
        currentCheck = stepsEl.length;
    }
    // console.log(currentCheck);

    // For increase the steps 
    stepsEl.forEach((stepEl, index) => {
        if (index < currentCheck) {
            stepEl.classList.add('checked');
            stepEl.innerHTML =
                `<i class="bx bx-check"></i>
            <small>
            ${index === 0 ?
                    'Start' :
                    index === stepsEl.length - 1 ? 'Final' :
                        'Step' + index
                }
            </small>`
        }
        else {
            stepEl.classList.remove('checked');
            stepEl.innerHTML = `<i class="bx bx-x"></i>`
        }
        // Increase the progress bar 
        const checkedNum = document.querySelectorAll('.checked');
        progressEl.style.width = ((checkedNum.length - 1) / (stepsEl.length - 1)) * 100 + '%';

        // For disable the button
        if (currentCheck === 1) {
            prevBtn.disabled = true;
        }
        else if (currentCheck === stepsEl.length) {
            nextBtn.disabled = true;

        }
        else {
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
    });
});
