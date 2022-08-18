const btn = document.querySelector('.btn');
const text = document.querySelector('.number');

btn.addEventListener('click', () => {
    const OTPCode = Math.floor(Math.random() * 10000) + 1;
    text.innerHTML = OTPCode;
});






