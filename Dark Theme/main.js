'use strict'; 

// Variables 


const toggleBtn = document.querySelector('.toggle');
const body = document.body;
const mode = document.querySelector('#mode');
const icon = document.querySelector('.bx-moon');

// EventListener on Button 

toggleBtn.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode');
    // change the icon after clicking
    icon.classList.toggle('bx-sun');

    if (body.classList.contains('dark-mode')){
        mode.innerHTML = 'Dark';
    }else {
        mode.innerHTML = 'Light';
    }
});