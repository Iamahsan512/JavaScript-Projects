'use strict';
// Declear Variables 
const yearEl = document.querySelector('#year');
const monthEl = document.querySelector('#month');
const dateEl = document.querySelector('#date');
const btn = document.querySelector('button');
const display = document.querySelector('#display');


// Add Click listener 
btn.addEventListener('click', (e) => {
    const nowYear = new Date().getFullYear();
    const nowMon = new Date().getMonth();
    const nowDay = new Date().getDate();


    const curYear = nowYear - yearEl.value;
    const curMon = Math.abs(nowMon - monthEl.value);
    const curDay = Math.abs(nowDay - dateEl.value);


    // Validate Calculator 


    // When user leaves an empty input  
    if (yearEl.value == '') {
        display.innerHTML = 'Please Enter Complete Data';
        display.style.color = 'red'
    }
    else if (monthEl.value == '') {
        display.innerHTML = 'Please Enter Complete Data';
        display.style.color = 'red'
    }
    else if (dateEl.value == '') {
        display.innerHTML = 'Please Enter Complete Data';
        display.style.color = 'red'
    }
    else {
        // When user fill the complete data 
        e.preventDefault();
        display.innerHTML = `Your age is ${curYear} years ${curMon} Months and ${curDay} Days`;
        display.style.color = '#111'


        // After input one value empty again input 
        yearEl.value = '';
        monthEl.value = '';
        dateEl.value = '';
    }


});