let input = document.querySelector('#input');
let show = document.querySelector('.show');
let text = document.querySelector('.text');
let weak = document.querySelector('.weak');
let medium = document.querySelector('.meduim');
let strong = document.querySelector('.strong');

show.addEventListener('click' , ()=> {
    if(input.type === "password"){
        input.type = "text"
        show.innerHTML = "Hide"
    }
    else{
        input.type = "password"
        show.innerHTML = "Show"
    }
});


input.addEventListener('keyup', function(e){
    const inputValue = e.target.value;

    if(inputValue.length = ""){
        text.innerHTML = "Please Enter your Password!"
        text.style.color = "red";
    }
    else if(inputValue.length >=1 && inputValue.length <= 3){
        text.innerHTML = "Your Password is weak !";
        text.style.color = "red";
        weak.style.display = "block"
    }
    else if (inputValue.length >= 4 && inputValue.length <=7){
        text.innerHTML = "Your Password is Medium !";
        text.style.color = "orange";
        medium.style.display = "block"
    }
    else if (inputValue.length >= 8){
        text.innerHTML = "Your Password is Strong !";
        text.style.color = "green";
        strong.style.display = "block"
    }
    else{
        weak.style.display = "none"
        medium.style.display = "none"
        strong.style.display = "none"
        text.innerHTML = "";
    }
    
})





