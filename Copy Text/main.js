'use strict';

const toCopy = document.querySelector('#toCopy');
const btnCopy = document.querySelector('#copy');
const paste = document.querySelector('#cleared');


btnCopy.addEventListener('click', () => {
    toCopy.select();
    paste.value = '';

    if (document.execCommand('copy')) {
        btnCopy.classList.add('copied');
        paste.focus();

        let temp = setInterval(() => {
            btnCopy.classList.remove('copied');
            clearInterval(temp);
        }, 600);
    }
    else {
        alert('document.execCommad went Wrong...');
    }
    return false;
});
