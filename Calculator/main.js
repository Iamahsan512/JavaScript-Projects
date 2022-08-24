'use strict';

// Variables 

const display = document.querySelector('.value');
const buttons = document.querySelectorAll('button');

const btnArr = Array.from(buttons);

// console.log(btnArr);

btnArr.map(btn => {
    // console.log(btn);
    btn.addEventListener('click' , e =>{
        console.log(e.target.innerText);
        switch (e.target.innerText) {
            case 'C':
                display.innerHTML = '';
                break;
            case 'Del':
                display.innerHTML = display.innerText.slice(0, -1);
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    alert('Error ☹ !');
                }
                break;
        
            default: display.innerText += e.target.innerText;
                break;
        }
    });
});