var min = 0 ;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("min");
var SecHeading = document.getElementById("sec");
var MiliSecHeading = document.getElementById("msec");
var startbutton = document.getElementById("startb")
var interval;

function timer(){
    msec++
    MiliSecHeading.innerHTML = msec;
    if( msec >= 100){
        sec++
        SecHeading.innerHTML = sec;
        msec = 0;
        
    }else if ( sec >= 60){
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
}
function start(){
interval = setInterval(timer,10);
startbutton.disabled = true;
}

function stop(){
    clearInterval(interval);
    startbutton.disabled = false;
}

function reset(){
    clearInterval(interval);
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    SecHeading.innerHTML = sec;
    MiliSecHeading.innerHTML = msec;
    startbutton.disabled = false;    
    

}