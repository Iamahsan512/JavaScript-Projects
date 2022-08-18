'use strict';

const sreach = document.querySelector('.sreach');
const expand = document.querySelector('.search_bar');

sreach.addEventListener('click' , ()=> {
    expand.classList.toggle('active')
})

