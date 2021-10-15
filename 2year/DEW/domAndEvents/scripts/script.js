var ms = 0;
var s = 0;
var m = 0;
//Change this piece for a time object


function timer(){
    var msAux, sAux, mAux;
    ms += 2;
    if (ms>100){
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

function timerStart(){
    timer();
    setInterval(timer,20);
}