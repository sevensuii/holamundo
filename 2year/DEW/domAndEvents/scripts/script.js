var timerTime = new Date();
console.log(timerTime)

var ms = 0;
var s = 0;
var m = 0;


function timer(){
    var msAux, sAux, mAux;
    ms += 2;
    if (ms>=100){
        s++;
        ms=0;
    }
    if (s>59){
        m++;
        s=0;
    }

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (ms<10){msAux="0"+ms;}else{msAux=ms;}

    document.getElementById("timer").innerHTML = mAux + ":" + sAux + ":" + msAux;


}
var myTime
function timerStart(){
    let userDiv = document.querySelector('#username');
    let usernameV = document.querySelector('#username input');
    userDiv.innerHTML = '<input readonly value=' + usernameV.value + '>';
    let someButton = document.querySelector('#imButton');
    someButton.innerHTML = '<button>Start</button>';
    timer();
    myTime = setInterval(timer, 20);
}

function finished(){
    clearInterval(myTime);
    let someButton = document.querySelector('#imButton');
    someButton.innerHTML = '<button onclick="timerStart()">Start</button>';
    timerTime.setMilliseconds(ms);
    timerTime.setSeconds(s);
    timerTime.setMinutes(m);
}

let pieces = document.querySelectorAll('#playZone td');
let matrix = [];

function loadEverything(){
    pieces = document.querySelectorAll('#playZone td');
    let cont = 0;
    for (let i = 0; i < 3; i++){
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(pieces[cont]);
            cont++;
        }
        matrix.push(row);
    }
}