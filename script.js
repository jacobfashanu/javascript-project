const HOURHAND = document.querySelector("#hour");// Selects the html element that represents the hour hand
const MINUTEHAND = document.querySelector("#minute");// Selects the html element that represents the minute hand
const SECONDHAND = document.querySelector("#second"); // Selects the html element that represents the second hand


let hrPosition ;
let minPosition ; 
let secPosition ;
// These lets will contain the degees we want the hands to turn to

var date = new Date(); // This object gives you the current date.

// These give you the hours, minutes, seconds from the date object
let hr = date.getHours(); 
let min = date.getMinutes();
let sec = date.getSeconds();
// Now we need to use these values above to find the degrees the hands need to be at
// when the page initially opens

secPosition = sec*360/60;
minPosition = (min*360/60) + (sec *(360/60)/60);
hrPosition = (hr *360/12) + (min * (360/60)/12);

function runTheClock (){
    secPosition = secPosition+6;
    minPosition = minPosition+(6/60);
    hrPosition = hrPosition+(3/360);
    

    //This actually causes the hands to move
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}


var interval = setInterval(runTheClock, 1000); // This method called setInterval repeatedly executes functions or snippets of code with a fixed time delay between each call
// This method basically executes the function called "runTheCLock" every 1000 millisecond

