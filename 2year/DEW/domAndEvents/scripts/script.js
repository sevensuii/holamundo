var timerTime = new Date();
console.log(timerTime)

var ms = 0;
var s = 0;
var m = 0;


function timer(){
    var msAux, sAux, mAux;
    ms += 2;
    if (ms >= 100){
        s++;
        ms = 0;
    }
    if (s > 59){
        m++;
        s = 0;
    }

    if (s < 10){sAux = "0" + s;}else{sAux = s;}
    if (m < 10){mAux = "0" + m;}else{mAux = m;}
    if (ms < 10){msAux = "0" + ms;}else{msAux = ms;}

    document.getElementById("timer").innerHTML = mAux + ":" + sAux + ":" + msAux;


}
var myTime
var moves = 0;  //counts the number of moves that have taken you to solve the puzzle

function timerStart(){
    let userDiv = document.querySelector('#username');
    let usernameV = document.querySelector('#username input');
    userDiv.innerHTML = '<input readonly value=' + usernameV.value + '>';
    let someButton = document.querySelector('#imButton');
    someButton.innerHTML = '<button>Start</button>';
    moves = 0;
    randomPosition();
    timer();
    myTime = setInterval(timer, 20);
}

function finished(){
    clearInterval(myTime);
    let someButton = document.querySelector('#imButton');
    someButton.innerHTML = '<button onclick="timerStart()">Start</button>';
    let userDiv = document.querySelector('#username');
    let usernameV = document.querySelector('#username input');
    userDiv.innerHTML = '<input value=' + usernameV.value + '>';
    timerTime.setMilliseconds(ms);
    timerTime.setSeconds(s);
    timerTime.setMinutes(m);
    ms = 0;
    s = 0;
    m = 0;

    //<div id='username'><input placeholder='Enter username'></div>
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
// Move the pieces of the puzzle
function move(row, colum){
    console.log("[" + row + "][" + colum + "]");
    if ((row - 1 >= 0) && (matrix[row - 1][colum].innerHTML.search("white") != -1)) {   //checks if white is above
        let elem1 = matrix[row][colum];
        let elem2 = matrix[row - 1][colum];
        let aux = elem1.innerHTML;
        elem1.innerHTML = elem2.innerHTML;
        elem2.innerHTML = aux;
        moves++;
        console.log(moves);
    }
    else if ((colum + 1 < 3) && (matrix[row][colum + 1].innerHTML.search("white") != -1)) { //checks if white is right
        let elem1 = matrix[row][colum];
        let elem2 = matrix[row][colum + 1];
        let aux = elem1.innerHTML;
        elem1.innerHTML = elem2.innerHTML;
        elem2.innerHTML = aux;
        moves++;
        console.log(moves);
    }
    else if ((row + 1 < 3) && (matrix[row + 1][colum].innerHTML.search("white") != -1)) {   //checks if white is below
        let elem1 = matrix[row][colum];
        let elem2 = matrix[row + 1][colum];
        let aux = elem1.innerHTML;
        elem1.innerHTML = elem2.innerHTML;
        elem2.innerHTML = aux;
        moves++;
        console.log(moves);
    }
    else if ((colum - 1 >= 0) && (matrix[row][colum - 1].innerHTML.search("white") != -1)) {    //checks if white is left
        let elem1 = matrix[row][colum];
        let elem2 = matrix[row][colum - 1];
        let aux = elem1.innerHTML;
        elem1.innerHTML = elem2.innerHTML;
        elem2.innerHTML = aux;
        moves++;
        console.log(moves);
    }
    else {
        console.log("Cant't make this move!!");
    }
    document.querySelector('#moves').innerHTML = "Moves: " + moves;
    checkPositions();
}

function checkPositions() {
    let pos = 1;
    for (let i = 0; i < 3; i++) {   //Checks if all images are in theirs original positions
        for (let j = 0; j < 3; j++) {
            if (matrix[i][j].innerHTML.search("pic" + pos) != -1)
            pos++;
        }
    }
    console.log("Elem in right pos: " + pos);
    if ((pos == 9) && (matrix[2][2].innerHTML.search("white") != -1)) {
        finished();
    }
}

function randomPosition(){
    let takenPositions = []; //Stores the postitions that are already in random mode
    let num;
    for(i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
            let pooo = i + "," + j;
            console.log("pooo: " + pooo);
            do {
                num = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
            } while ((takenPositions.indexOf(num) != -1) && (matrix[i][j].innerHTML.search("white") == -1));
            takenPositions.push(num);
            matrix[i][j].innerHTML = "<img src='img/" + num + ".jpg' alt='pic" + num + "'>";
        }
    }
    matrix[2][2].innerHTML = "<img src='img/white.jpg' alt='White img'>";
}