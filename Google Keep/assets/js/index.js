// Global Variables

const newNoteBtn = document.querySelector('#newNoteBtn');
const modelEl = document.querySelector('.model');
const overlyEl = document.querySelector('.overly');
const closeBtn = document.querySelector('#closeBtn');
const submitBtn = document.querySelector('#submitBtn');
const formEl = document.querySelector('#form');
const noteContainer = document.querySelector('.notes-container');
let data = [];

if (localStorage.getItem('data') != null) {
  data = JSON.parse(localStorage.getItem('data'));
}


// Click Listeners
newNoteBtn.addEventListener('click', () => {
  modelEl.classList.add('open');
  overlyEl.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  modelEl.classList.remove('open');
  overlyEl.classList.remove('active');
  newNoteBtn.disabled = false;
});

submitBtn.addEventListener('click', (e) => {
  if (formEl[0].value && formEl[1].value) {
    // Remove Reload
    e.preventDefault();
    registerData();
    createElements();
    formEl.reset('');
    closeBtn.click();
  } else {
    swal('Empty Inputs!', 'Please enter the values in both filed!', 'warning');
  }
  JSON.parse(localStorage.getItem('data'));
});

const registerData = () => {
  // add data into Array
  data.push({
    title: formEl[0].value,
    description: formEl[1].value,
  });

  //   Store data into localStorage
  localStorage.setItem('data', JSON.stringify(data));
};

// Create new Elements
const createElements = () => {
  noteContainer.innerHTML = '';
  data.forEach((value) => {
    const { title, description } = value;
    // console.log(value);
    noteContainer.innerHTML += `
           <div class="note">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <div class="actions">
                      <button class="delete">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
          `;
  });

  // Delete single note
  const delNotes = document.querySelectorAll('.delete');

  delNotes.forEach((del, index) => {
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
          const targetNote = del.parentElement.parentElement;
          targetNote.remove();
          data.splice(index, 1);
          localStorage.setItem('data', JSON.stringify(data));
        } else {
          swal('Your imaginary file is safe!');
        }
      });
    });
  });
};

createElements();
