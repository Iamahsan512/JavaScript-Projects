let count = 0 ;

const value = document.querySelector('#number');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    // console.log(btn);
    
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        // console.log(styles);

        // Make Conditions 

        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }

        // For Styling Colors 
        if(count > 0){
            value.style.color = "#23c483";
        }
        else if (count < 0) {
            value.style.color = "red";
        }
        else{
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})