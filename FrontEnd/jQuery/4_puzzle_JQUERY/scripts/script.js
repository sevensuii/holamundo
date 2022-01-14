var timerTime = new Date(); //Date object
console.log(timerTime); 

var ms = 0; // milliseconds
var s = 0;  // seconds
var m = 0;  // minutes

function timer(){   //This is the timer
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

    $('#timer').text(`${mAux}:${sAux}:${msAux}`);   // Prints time
}

var tds = [];
var ogCorrectOrder = '';

var myTime;     // refresh interval for the timer
var moves = 0;  //counts the number of moves that have taken you to solve the puzzle

var top5Records = []; // -> [0:username   ] || Used to store best 5 times
//                          [1:minutes    ]
//                          [2:seconds    ]
//                          [3:miliseconds]
//                          [4:moves      ]
localStorage.records; //Stores best 5 times in local memory
if (localStorage.records != undefined){
    top5Records = JSON.parse(localStorage.records);
}

function sortStorePrint() {
    if ($('#username-name').prop('value') != '') {
        let row = [$('#username-name').prop('value'), m, s, ms, moves];  //Pushes the result from the last game to the array
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
        while (top5Records.length > 5) {
            top5Records.pop();
        }
        localStorage.records = JSON.stringify(top5Records);
    }
    // let cont = 0;
    for (let i = 0; i < top5Records.length; i++) {
        $(`#leaderboard tr:nth-child(${i+2})`).html(`<td>${i+1}</td><td>${top5Records[i][0]}</td><td>${top5Records[i][1]}:${top5Records[i][2]}:${top5Records[i][3]}</td><td>${top5Records[i][4]}</td>`);
        // cont++;
    }
}

function randomPosition(arr){  //Random shuffle of the images
    let takenPositions = []; //Stores the images that are already in random mode
    let num;
    for(j = 0; j < 8; j++){
        do {
            num = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
        } while ((takenPositions.indexOf(num) != -1) && (arr[j].innerHTML.search("white") == -1));
        takenPositions.push(num);
        // arr[j].innerHTML = "<img src='img/" + num + ".jpg' alt='pic" + num + "'>";
        arr[j].style.backgroundImage = `url('img/${num}.jpg')`;
        arr[j].innerText = num;
    }
}

function finished(option) {
    clearInterval(myTime);
    $('#playZone td').unbind();
    // $('#imButton').click(start());
    $('#username-name').removeAttr('readonly');
    if (option) {
        $('#yourResults').html(`You solved the puzzle in ${m} min, ${s} seconds, ${ms} miliseconds and ${moves} moves!`);
        $('#notification').fadeIn();
        $('#notification button').click(function(){$('#notification').fadeOut()})
        sortStorePrint();
    }
    ms = 0; s = 0; m = 0;
}

function checkPositions() {     // Checks if the current content in td's the same a the initial state
    let check = $('#playZone td').text();
    if (check == ogCorrectOrder) {
        console.log("Order is correct");
        finished(1);
    }
}

// function solve(arr) {        // Not working
//     console.log(arr)
//     for (let i = 0; i < 9; i++) {
//         arr[i].innerText = i;
//         arr[i].css('background-image', `url('img/${i}.jpg')`);
//         // arr[i].css('background-image', `url(img/${i}.jpg')`);
//     }
// }

function move(arr) {        // Swaps the images if the conditions are correct
    let pos = arr.split('-');
    [row, colum] = [parseInt(pos[0]), parseInt(pos[1])];
    // console.log(row+'...'+colum);
    // console.log(pos);
    if ((row - 1 >= 0) && (tds[row - 1][colum].innerHTML.search("9") != -1)) {   //checks if white is above
        let elem1 = $(`.${row}-${colum}`);
        let elem2 = $(`.${row-1}-${colum}`);

        let aux1 = elem1.css('background-image');
        let aux2 = elem2.css('background-image');
        [elem1.css('background-image', aux2), elem2.css('background-image', aux1)];     // Swaps image
        aux1 = elem1.html();
        aux2 = elem2.html();
        [elem1.html(aux2), elem2.html(aux1)];

        moves++;
        checkPositions()
    }
    else if ((colum + 1 < 3) && (tds[row][colum + 1].innerHTML.search("9") != -1)) { //checks if white is right
        let elem1 = $(`.${row}-${colum}`);
        let elem2 = $(`.${row}-${colum+1}`);

        let aux1 = elem1.css('background-image');
        let aux2 = elem2.css('background-image');
        [elem1.css('background-image', aux2), elem2.css('background-image', aux1)];     // Swaps image
        aux1 = elem1.html();
        aux2 = elem2.html();
        [elem1.html(aux2), elem2.html(aux1)];
        
        moves++;
        checkPositions()
    }
    else if ((row + 1 < 3) && (tds[row + 1][colum].innerHTML.search("9") != -1)) {   //checks if white is below
        let elem1 = $(`.${row}-${colum}`);
        let elem2 = $(`.${row+1}-${colum}`);
       
        let aux1 = elem1.css('background-image');
        let aux2 = elem2.css('background-image');
        [elem1.css('background-image', aux2), elem2.css('background-image', aux1)];     // Swaps image
        aux1 = elem1.html();
        aux2 = elem2.html();
        [elem1.html(aux2), elem2.html(aux1)];

        moves++;
        checkPositions()
    }
    else if ((colum - 1 >= 0) && (tds[row][colum - 1].innerHTML.search("9") != -1)) {    //checks if white is left
        let elem1 = $(`.${row}-${colum}`);
        let elem2 = $(`.${row}-${colum-1}`);
        
        let aux1 = elem1.css('background-image');
        let aux2 = elem2.css('background-image');
        [elem1.css('background-image', aux2), elem2.css('background-image', aux1)];     // Swaps image
        aux1 = elem1.html();
        aux2 = elem2.html();
        [elem1.html(aux2), elem2.html(aux1)];

        moves++;
        checkPositions()
    }
    else {
        console.log("Cant't make this move!!");
    }
    console.log(moves);
    $('#moves').html(`Moves: ${moves}`);    // Updates total moves
}

function start() {
            // randomPosition($('#playZone td'));
            $('#imButton button').unbind('click');
            $('#username-name').attr('readonly', true);
            timer();
            myTime = setInterval(timer, 20);
            $('#playZone td').click(function() {
                move($(this).attr('class'));
            })

}

$(document).ready(function() {
    // let pieces = document.querySelectorAll('#playZone td');
    sortStorePrint();
    ogCorrectOrder = $('#playZone td').text();

    for (let i = 1; i <= 3; i++) {
        val = $(`.row${i} td`);
        tds.push(val);
    }

    $('#imButton button').click(function() {
        if ($('#username-name').prop('value') == '') {
            $('#username-empty').fadeIn();
            setTimeout(function() {$('#username-empty').fadeOut();}, 2000);
        }
        else {
            randomPosition($('#playZone td'));
            // $('#imButton button').unbind('click');
            $('#username-name').attr('readonly', true);
            timer();
            myTime = setInterval(timer, 20);
            $('#playZone td').click(function() {
                move($(this).attr('class'));
            })
            // start();
        }
// et userDiv = document.querySelector('#username');
//     let usernameV = document.querySelector('#username input');
//     userDiv.innerHTML = '<input readonly value=' + usernameV.value + '>';
//     let someButton = document.querySelector('#imButton');
//     someButton.innerHTML = '<button>Start</button>';
//     moves = 0;
//     document.querySelector('#moves').innerHTML = "Moves: " + moves;
//     //randomPosition();
//     timer();
//     myTime = setInterval(timer, 20);
    })

    $('#emergency-stop').click(function() {
        finished(0);
    })






})












































