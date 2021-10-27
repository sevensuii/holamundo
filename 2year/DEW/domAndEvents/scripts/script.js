//Load globar variables of the program
var timerTime = new Date(); //Date object
console.log(timerTime); 

var ms = 0; // milliseconds
var s = 0;  // seconds
var m = 0;  // minutes

var myTime
var moves = 0;  //counts the number of moves that have taken you to solve the puzzle

let pieces = document.querySelectorAll('#playZone td');
let matrix = []; //Stores all tds in the puzzle

var top5Records = []; // -> [username] || Used to store best 5 times
//                          [minutes]
//                          [seconds]
//                          [miliseconds]
//                          [moves]
localStorage.records; //Stores best 5 times in local memory

if (localStorage.records != undefined){
    top5Records = JSON.parse(localStorage.records);
}

//All loaded

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

function timerStart(){
    let userDiv = document.querySelector('#username');
    let usernameV = document.querySelector('#username input');
    userDiv.innerHTML = '<input readonly value=' + usernameV.value + '>';
    let someButton = document.querySelector('#imButton');
    someButton.innerHTML = '<button>Start</button>';
    moves = 0;
    document.querySelector('#moves').innerHTML = "Moves: " + moves;
    //randomPosition();
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
    document.querySelector('#yourResults').innerHTML = "You solved the puzzle in " + m + " minutes, " + s + " seconds, " + ms + " miliseconds and " + moves +" moves!";
    //document.querySelector('#notification').style.display = "block";
    document.querySelector('#notification button').onclick = function(){ document.querySelector('#notification').style.display = "none";}
    ms = 0;
    s = 0;
    m = 0;
    checkAndSaveLeaderboard(usernameV.value);
}



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
    printLeaderboard();
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



function checkAndSaveLeaderboard(userN){
    //let usernameV = document.querySelector('#username input');
    let row = [userN, timerTime.getMinutes(), timerTime.getSeconds(), timerTime.getMilliseconds(), moves];
    top5Records.push(row);

    let auxTime1, auxTime2, auxVal;

    for (let i = 0; i < top5Records.length; i++) {
        auxTime1 = (top5Records[i][1] * 60 * 100) + (top5Records[i][2] * 100) + top5Records[i][3];
        for (let j = 0; j < top5Records.length; j++) {
            auxTime2 = (top5Records[j][1] * 60 * 100) + (top5Records[j][2] * 100) + top5Records[j][3];
            if (auxTime1 < auxTime2) {
                auxTime1 = auxTime2;
                auxVal = top5Records[i];
                top5Records[i] = top5Records[j];
                top5Records[j] = auxVal;
            }
        }
    }
    localStorage.records = JSON.stringify(top5Records);
    printLeaderboard();
}

function printLeaderboard(){
    let trs = document.querySelectorAll('#leaderboard tr');
       for (let i = 1; i < top5Records.length; i++) {
           trs[i].innerHTML = "<td>" + i + "<td>" + top5Records[i][0] + "</td><td>" + top5Records[i][1] + ":" +top5Records[i][2] + ":" + top5Records[i][3] + "</td><td>" + top5Records[i][4] + "</td>";
           if (i == 5) {
               break; //Exits for after painting top 5 elements
           }
       }
}

function hideNotifications(){
    let info2 = document.querySelector('#notification');
    info2.style.display = "none";
}