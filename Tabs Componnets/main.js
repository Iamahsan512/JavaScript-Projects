'use strict';

// Declare Variables 
const tabs = document.querySelectorAll('.btn-tab');
const content = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        // Remove all other Active classes
        tabs.forEach(tab => tab.classList.remove('active'));
        // Add active class only in on active Element 
        tab.classList.add('active');

        // To increase the line bar width 
        let line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        // To show the active content 
        content.forEach(cont => {
            cont.classList.remove('active');
        });
        content[index].classList.add('active');
    });
});