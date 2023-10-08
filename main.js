
var hours = document.getElementById('hrs')
var mins  = document.getElementById('min')
var sec = document.getElementById('sec')

function clock(){

    const time = new Date();

    let hourArrow = time.getHours()
    let minutesArrow = time.getMinutes()
    let secondsArrow = time.getSeconds()
    
    hours.innerHTML = hourArrow
    mins.innerHTML = minutesArrow
    sec.innerHTML = secondsArrow < 10 ? '0' + secondsArrow : secondsArrow 
    mins.innerHTML = minutesArrow < 10 ? '0' + minutesArrow : minutesArrow 
    hours.innerHTML = hourArrow < 10 ? '0' + hourArrow : hourArrow 

    setTimeout(() => {
        clock()
    }, 1000)




}

clock()

