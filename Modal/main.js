const modalBtn = document.querySelectorAll('.btn-modal');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Open Model 

const openModel = () => {
    modal.classList.add('active');
    overlay.classList.add('active');
}

// Close Model 

const closeModel = () => {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

for(let i=0; i<modalBtn.length; i++){
    modalBtn[i].textContent
    // console.log(modalBtn[i]);

    modalBtn[i].addEventListener('click', openModel);
    // Model close using Escape 
    document.addEventListener('keydown' , (e) => {
        // console.log(e.key);

        if(e.key === "Escape" && modal.classList.contains('active')){
            closeModel();
        }
    })
}


closeBtn.addEventListener('click', closeModel);
