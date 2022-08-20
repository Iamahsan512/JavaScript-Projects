'use strict';

const input = document.querySelector('#input');
const btnAdd = document.querySelector('#btn');
const task = document.querySelector('.task');


input.addEventListener('keyup', function (e) {
    // console.log(e.target.value);
    const inputValue = e.target.value;

    // disable button if zero value is entered 

    if (inputValue === '') {
        btnAdd.classList.add('disable');
    }
    else {
        btnAdd.classList.remove('disable');
    }
});

// when add a new item 

btnAdd.addEventListener('click', function () {
    // console.log(input.value);
    const elem = input.value;

    if (elem.trim() !== '') {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `<p class="p"> ${elem}</p>
        <div class="item_btn">
          <i class="fas fa-edit"></i>
          <i class="fas fa-times"></i>
        </div>`
        // Add one more child 
        task.appendChild(newItem);

        input.value = ""
    }
    else {
        alert('Please enter a task');
    }
});

// When delete an task 
task.addEventListener('click', function (e) {
    // console.log(e.target);

    if (e.target.classList.contains('fa-times')) {
        e.target.parentElement.parentElement.remove();
        console.log(e.target.parentElement.parentElement);
    }
});

// when complete an task 

task.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-edit')) {
        e.target.parentElement.previousElementSibling.classList.toggle('complete');
    }
})


