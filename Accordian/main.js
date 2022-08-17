
let accordion = document.querySelectorAll('.accordion');  

// for (let i = 0; i < accordion.length; i++) {  
//      // console.log(accordion[i]);
//      accordion[i].addEventListener('click',function(){ 
//           this.classList.toggle('active');
//           console.log(this);
//      }); 
// } ; 

accordion.forEach(accord => {
     accord.addEventListener('click', function(e){
          const elem = e.currentTarget;
          elem.classList.toggle('active');
     });
});



