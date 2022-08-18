const hours = document.querySelector('.hours_time');
const seconds = document.querySelector('.sec_time');
const mints = document.querySelector('.mint_time');
const timeFormat = document.querySelector('.session');


const timeUpdate = () => {

    // Get time in Hours Minutes and Seconds 
    const date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh < 12) {
        session = "AM"
    } else if (hh => 12 && hh <= 24  ) {
        session = "PM";
    }
    
    timeFormat.innerHTML = session;

    // Add Zero with Hour 
    if (hh < 10) {
        hh = '0' + hh
    }
    else { hh = hh }

    // Add Zero with mints 
    if (mm < 10) {
        mm = '0' + mm
    }
    else { mm = mm }

    // Add Zero with ss 
    if (ss < 10) {
        ss = '0' + ss
    }
    else { ss = ss }

    // Print Time in HTML Page
    hours.innerHTML = hh;
    mints.innerHTML = mm;
    seconds.innerHTML = ss;

    // Update time after every second 
    setInterval(() => {
        timeUpdate()
    }, 1000);
}

timeUpdate();