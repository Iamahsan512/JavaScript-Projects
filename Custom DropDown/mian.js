'use strict'

const menuEl = document.querySelector('.menu');
const dropDownEl = document.querySelector('.dropdown');
const lists = document.querySelectorAll('li');
const menuTextEl = document.querySelector('.menu p');

menuEl.addEventListener('click' , ()=> {
    dropDownEl.classList.toggle('active');
    menuEl.classList.toggle('active');
});

lists.forEach(list => {
    list.addEventListener('click' , ()=> {
        console.log(list);
        menuTextEl.innerHTML = list.innerHTML;
    })
});


