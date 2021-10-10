


var Movie = function( name, duration, pricePerSeat, rows, cols){
    this.name = name;
    this.duration = duration;
    this.pricePerSeat = pricePerSeat;
    this.rows = rows;
    this.cols = cols;
    this.seats = [];
    this.fillRandomSeats = function(){
        for(var i = 0; i < this.rows; i++){
            this.seats[i] = []
            for(var j = 0; j < this.cols; j++){
                this.seats[i][j] = Math.floor(Math.random() * 2);
            }
        }
    }
    
    this.buy = function(seatNumber){
        console.log(seatNumber);
        let allRows = document.getElementsByTagName("td");
        var row = Math.floor((seatNumber) / this.cols);
        var col = seatNumber % this.cols;
        if (this.seats[row][col] == 1){
            let index = mySeats.indexOf(seatNumber)
            if (index != -1) {
                allRows[seatNumber].innerHTML = "<img src='../img/seat1.PNG' alt='Green available seat' onclick='myFilm.buy(" + seatNumber + ")'><p>" + seatNumber + "</p>" //The seat returns to available state
                this.seats[row][col] = 0;   //Now the seat is free
                myPrice -= this.pricePerSeat; //Price updated
                mySeats.splice(index, 1);   //If the seat number is taken by the same user, that seat now is removed from the array of selected seats
                document.getElementById("result1").innerHTML = myPrice + "€ ";  //Price to the user updated
                tempCad = "";
                for (let i = 0; i < mySeats.length; i++) {
                    tempCad += mySeats[i] + ", ";
                }
                document.getElementById("result2").innerHTML = tempCad;
            }
            else {
                alert("The seat " + seatNumber + " is taken!!\nPick another one!");
            }

        } 
        
        else if (this.seats[row][col] == 0){
            this.seats[row][col] = 1;
            allRows[seatNumber].innerHTML = "<img src='../img/seat0.PNG' alt='Red not available seat' onclick='myFilm.buy(" + seatNumber + ")'><p>" + seatNumber + "</p>";
            myPrice += this.pricePerSeat;
            document.getElementById("result1").innerHTML = myPrice + "€ ";
            mySeats.push(seatNumber);
            if (mySeats.length != 1) {  //If only for formatting purposes
                document.getElementById("result2").innerHTML += ", " + mySeats[mySeats.length - 1];
            }
            else {
                document.getElementById("result2").innerHTML += mySeats[mySeats.length - 1];                
            }
        }
    }
}

//Declaration of the movies in the global scope
starWarsFilm = new Movie('Star Wars Episode V', '124', 5, 9, 10);
blackwidowFilm = new Movie('Blackwidow', '134', 7, 8, 10);
interestelarFilm = new Movie('Interestelar', '169', 6, 5, 9);
ff7Film = new Movie('Fast&Furious 7', '140', 9, 7, 10);
myFilm = new Movie('null', 'null', 0, 0, 0);    // An object that is going to be used intead of the original film
//End of the declaration
var myPrice = 0;    // Total price of the tickets
var mySeats = [];   // Array of the client is buying


//function changeObjects(oldValues, newValues){
//    oldValues = newValues;
//}

function saveValues(cad1) {
    console.log(cad1);
    switch(cad1) {
        case "blackwidow":
            blackwidowFilm = myFilm;
            break;
        case "starwars":
            starWarsFilm = myFilm;
            break;
        case "interestelar":
            interestelarFilm = myFilm;
            break;
        case "fast7":
            ff7Film = myFilm;
            break;
        default:
            alert("Unknown movie");
            break;
    }
}

function resetValues() {
    tds = document.getElementsByTagName("td");
    for (let i = 0; i < mySeats.length; i++) {
        tds[mySeats[i]].innerHTML = "<img src='../img/seat1.PNG' alt='Green available seat' onclick='myFilm.buy(" + mySeats[i] + ")'><p>" + mySeats[i] + "</p>";
        let row = Math.floor((mySeats[i]) / myFilm.cols);
        let col = mySeats[i] % myFilm.cols;
        myFilm.seats[row][col] = 0;
    }
    myPrice = 0;
    mySeats = [];
    document.getElementById("result1").innerHTML = myPrice + "€";
    document.getElementById("result2").innerHTML = "";

}

function aMovie(cad){
    let cad1 = cad;
    switch(cad) {
        case "blackwidow":
            if (blackwidowFilm.seats.length == 0){
                blackwidowFilm.fillRandomSeats();
            }
            myFilm = blackwidowFilm;
            break;

        case "starwars":
            if (starWarsFilm.seats.length == 0) {
                starWarsFilm.fillRandomSeats();
            }
            myFilm = starWarsFilm;
            break;

        case "interestelar":
            if (interestelarFilm.seats.length == 0) {
                interestelarFilm.fillRandomSeats();
            }
            myFilm = interestelarFilm;
            break;
        
        case "fast7":
            if (ff7Film.seats.length == 0) {
                ff7Film.fillRandomSeats();
            }
            myFilm = ff7Film;
            break;

        default:
            alert('The movie name is invalid!!');
    }

    document.write("<a href='../index.html'><img id='back' src='../img/back.png' alt='Arrow to go back'></a>");
    document.write("<div id='price'>Total cost: </div>");
    document.write("<div id='result1'>0€</div>");
    document.write("<div id='yourSeats'>Your seats are: </div>");
    document.write("<div id='result2'></div>");
    document.write("<button id='buy' onclick='saveValues(myFilm," + cad + ")'>Buy</button>");
    document.write("<button id='reset' onclick='resetValues()'>Reset</button>")

    document.write( "<div class='cont'>");

    document.write("<div class='film'> <img src='../img/" + myFilm.name + ".PNG' alt='" + myFilm.name + " movie poster'> <h3>" + myFilm.name + "</h3> </div>");
    document.write("<table>");
    let seatsOfTheTheatre = 0;
    for(let i = 0; i < myFilm.rows; i++) {
        document.write("<tr>");
        for(let j = 0; j < myFilm.cols; j++) {
            if (myFilm.seats[i][j] == 0) {
                if (j == 3 || j == 7) {
                    document.write("<td class='spacer'><img src='../img/seat1.PNG' alt='Green available seat' onclick='myFilm.buy(" + seatsOfTheTheatre + ")'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat1.PNG' alt='Green available seat' onclick='myFilm.buy(" + seatsOfTheTheatre + ")'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            else if (myFilm.seats[i][j] == 1) {
                if (j == 3 || j == 7) {
                    document.write("<td class='spacer'><img src='../img/seat0.PNG' alt='Red not available seat' onclick='myFilm.buy(" + seatsOfTheTheatre + ")'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat0.PNG' alt='Red not available seat' onclick='myFilm.buy(" + seatsOfTheTheatre + ")'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            seatsOfTheTheatre++;
        }
        document.write("</tr>");
    }
}