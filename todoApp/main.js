'use strict';
// Global Variables
const input = document.querySelector('#input');
const btnAdd = document.querySelector('#btn');
const task = document.querySelector('.task');
let data = [];
// To store data in the screen after reloading

if (localStorage.getItem('data') != null) {
  data = JSON.parse(localStorage.getItem('data'));
}
// Add item in Todo buy clicking add btn
btnAdd.addEventListener('click', () => {
  const inputValue = input.value;
  if (inputValue !== '') {
    swal('Great work!', 'You added an item!', 'success');
    getData();
    createElement();

    input.value = '';
  } else {
    swal('Please enter an item!', "You can't add empty field!", 'error');
  }
});

// Create new Element after adding every item
const createElement = () => {
  task.innerHTML = '';
  data.forEach((val) => {
    task.innerHTML += `
                <div class="item">
                  <p class="para">${val}</p>
                  <div class="item_btn">
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-trash"></i>
                  </div>
                </div>
        `;
  });

  // !Delete the single item from todo
  const delElem = document.querySelectorAll('.fa-trash');
  delElem.forEach((del, index) => {
    del.addEventListener('click', () => {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal('Poof! Your imaginary file has been deleted!', {
            icon: 'success',
          });
          // !Delete the current target task
          const taskItem = del.parentElement.parentElement;
          taskItem.remove();
          data.splice(index, 1);
          localStorage.setItem('data', JSON.stringify(data));
        } else {
          swal('Your imaginary file is safe!');
        }
      });
    });
  });

  // !Done the single item from todo
  const editElem = document.querySelectorAll('.fa-edit');
  editElem.forEach((edit) => {
    edit.addEventListener('click', () => {
        const para = edit.parentElement.parentElement.childNodes[1];
        para.classList.toggle('complete')
    });
  });
};
// get data and set into localStorage
const getData = () => {
  data.push(input.value);
  localStorage.setItem('data', JSON.stringify(data));
};

createElement();
