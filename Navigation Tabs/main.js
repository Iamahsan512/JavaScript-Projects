'use strict';

const navLinks = document.querySelectorAll('li');

navLinks.forEach(li => {
    li.addEventListener('click', ()=> {
        removeOTherActive();
        li.classList.add('active');
    });
});

const removeOTherActive = () => {
    navLinks.forEach(li => {
        li.classList.remove('active');
        
    });
};