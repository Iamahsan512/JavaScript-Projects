'use strict';

// Declear the variables 

const btnPass = document.querySelector('.btn');
const btnCopy = document.querySelector('.btnCopy');

const displayPass = document.querySelector('#displayPass');
const upperEl = document.querySelector('#upper');
const lowerEl = document.querySelector('#lower');
const symbolEl = document.querySelector('#symbol');
const numbersEl = document.querySelector('#numbers');
const lengthEl = document.querySelector('#length');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-{}[]|\?><;:";


// Convert into Lower Case 

const getLowerCase = () => {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

// Convert into Upper Case 

const getUpperCase = () => {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

// Convert into Numbers

const getNumbers = () => {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

// Convert into Special characters or symbols

const getSymbols = () => {
    return symbols[Math.floor(Math.random() * symbols.length)]
}


// Generate the Password 

const generatePassword = () => {
    const len = lengthEl.value;
    let password = '';

    for (let i = 0; i < len; i++) {
        const x = generatorX();
        password += x;
        console.log(password);
    }
    displayPass.value = password;

    // Length Sholud be 16 

    if (password.length >= 17) {
        alert(`Your Password Length(${password.length}) is too Long. Max Limit is 16`);
        displayPass.value = "";
    }
}

// Assign GeneratorX function :

const generatorX = () => {
    const xs = [];

    if (upperEl.checked) {
        xs.push(getUpperCase());
    }

    if (lowerEl.checked) {
        xs.push(getLowerCase());
    }

    if (numbersEl.checked) {
        xs.push(getNumbers());
    }

    if (symbolEl.checked) {
        xs.push(getSymbols());
    }

    if (xs.length === 0) return "";
    return xs[Math.floor(Math.random() * xs.length)];
}

// Now Add the click event functionality 

btnPass.addEventListener('click', generatePassword);

// For copy the Text 
btnCopy.addEventListener('click', () => {
    displayPass.select();
    if (displayPass.value === '') {
        alert('Please Enter Some Value');
    }
    if (document.execCommand('copy')) {
        alert(`Your Password copied`);
    } else {
        alert('something went wrong')
    }
})

