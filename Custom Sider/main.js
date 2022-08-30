"use strict";

// Variables
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const imgsEl = document.querySelectorAll("img");
const imgSlider = document.querySelector(".img-slider");

let curImg = 1;

let timeout;

// Next Btn
nextBtn.addEventListener("click", () => {
  curImg++;
  updateImg();
  clearTimeout(timeout);
});

// Previous Btn
prevBtn.addEventListener("click", () => {
  curImg--;
  updateImg();
  clearTimeout(timeout);
});

const updateImg = () => {
  // 5 > 4 = 1
  if (curImg > imgsEl.length) {
    curImg = 1;
    // 3 < 0 = 4
  } else if (curImg < 1) {
    curImg = imgsEl.length;
  }
  imgSlider.style.transform = `translateX(-${(curImg - 1) * 100}%)`;

//   Automatic Slide after every 3 sec  
  timeout = setTimeout(() => {
    curImg++;
    updateImg();
  }, 3000);
};

updateImg();
