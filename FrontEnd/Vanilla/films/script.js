


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

    this.buy = function(){
        let seatsToBuy = prompt("How many seats do you want to buy?");
        let allRows = document.getElementsByTagName("td");
        for(let i = 1; i <= seatsToBuy; i++){
            let seatNumber = prompt("Which is the number of the seat " + i);
            do {
                var row = Math.floor((seatNumber) / this.cols);
                var col = seatNumber % this.cols;
                if (this.seats[row][col] == 1){
                    alert("The seat " + seatNumber + " is taken!!");
                    seatNumber = prompt("Pick another one!");
                }
            } while (this.seats[row][col] == 1);

            if (this.seats[row][col] == 0){
                this.seats[row][col] = 1;
                allRows[seatNumber].innerHTML = "<img src='../img/seat0.PNG' alt='Red not available seat'><p>" + seatNumber + "</p>";
            }
        }
        alert("The total price will be: " + seatsToBuy * this.pricePerSeat + " €");
    }
}

function blackW(){
    // Declaration of the film
    blackwidowFilm = new Movie('Blackwidow', '134', 7, 8, 10);
    blackwidowFilm.fillRandomSeats();

    document.write("<a href='../index.html'><img id='back' src='../img/back.png' alt='Arrow to go back'></a>");

    document.write( "<div class='cont'>");

    document.write("<div class='film'> <img src='../img/blackwidow.PNG' alt='Blackwidow movie poster'> <h3>" + blackwidowFilm.name + "</h3> </div>");
    document.write("<table>");
    let seatsOfTheTheatre = 0;
    for(let i = 0; i < blackwidowFilm.rows; i++) {
        document.write("<tr>");
        for(let j = 0; j < blackwidowFilm.cols; j++) {
            if (blackwidowFilm.seats[i][j] == 0) {
                if (j == 3 || j == 7) {
                    document.write("<td class='spacer'><img src='../img/seat1.PNG' alt='Green available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat1.PNG' alt='Green available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            else if (blackwidowFilm.seats[i][j] == 1) {
                if (j == 3 || j == 7) {
                    document.write("<td class='spacer'><img src='../img/seat0.PNG' alt='Red not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat0.PNG' alt='Red not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            seatsOfTheTheatre++;
        }
        document.write("</tr>");
    }
    setTimeout(() => {blackwidowFilm.buy()}, 500);
}

function starWars(){
    // Declaration of the film
    starWarsFilm = new Movie('Star Wars Episode V', '124', 5, 9, 10);
    starWarsFilm.fillRandomSeats();

    document.write("<a href='../index.html'><img id='back' src='../img/back.png' alt='Arrow to go back'></a>");

    document.write( "<div class='cont'>");

    document.write("<div class='film'> <img src='../img/starwars.PNG' alt='Star Wars Episode V movie poster'> <h3>" + starWarsFilm.name + "</h3> </div>");
    document.write("<table>");
    let seatsOfTheTheatre = 0;
    for(let i = 0; i < starWarsFilm.rows; i++) {
        document.write("<tr>");
        for(let j = 0; j < starWarsFilm.cols; j++) {
            if (starWarsFilm.seats[i][j] == 0) {
                if (j == 3 || j == 7) {
                    document.write("<td class='spacer'><img src='../img/seat1.PNG' alt='Green available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat1.PNG' alt='Green available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            else if (starWarsFilm.seats[i][j] == 1) {
                if (j == 3 || j == 7) {
                    document.write("<td class='spacer'><img src='../img/seat0.PNG' alt='Red not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat0.PNG' alt='Red not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            seatsOfTheTheatre++;
        }
        document.write("</tr>");
    }
    setTimeout(() => {starWarsFilm.buy()}, 500);
}

function interestelarr(){
    // Declaration of the film
    interestelarFilm = new Movie('Interestelar', '169', 6, 5, 9);
    interestelarFilm.fillRandomSeats();

    document.write("<a href='../index.html'><img id='back' src='../img/back.png' alt='Arrow to go back'></a>");

    document.write( "<div class='cont'>");

    document.write("<div class='film'> <img src='../img/interestelar.PNG' alt='Interesletar movie poster'> <h3>" + interestelarFilm.name + "</h3> </div>");
    document.write("<table>");
    let seatsOfTheTheatre = 0;
    for(let i = 0; i < interestelarFilm.rows; i++) {
        document.write("<tr>");
        for(let j = 0; j < interestelarFilm.cols; j++) {
            if (interestelarFilm.seats[i][j] == 0) {
                if (j == 3 || j == 7) {
                    document.write("<td class='spacer'><img src='../img/seat1.PNG' alt='Green available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat1.PNG' alt='Green available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            else if (interestelarFilm.seats[i][j] == 1) {
                if (j == 3 || j == 7) {
                    document.write("<td class='spacer'><img src='../img/seat0.PNG' alt='Red not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat0.PNG' alt='Red not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            seatsOfTheTheatre++;
        }
        document.write("</tr>");
    }
    setTimeout(() => {interestelarFilm.buy()}, 500);
}

function FF7(){
    // Declaration of the film
    ff7Film = new Movie('Fast&Furious 7', '140', 9, 7, 10);
    ff7Film.fillRandomSeats();

    document.write("<a href='../index.html'><img id='back' src='../img/back.png' alt='Arrow to go back'></a>");

    document.write( "<div class='cont'>");

    document.write("<div class='film'> <img src='../img/ff7.PNG' alt='Fast and furious 7 movie poster'> <h3>" + ff7Film.name + "</h3> </div>");
    document.write("<table>");
    let seatsOfTheTheatre = 0;
    for(let i = 0; i < ff7Film.rows; i++) {
        document.write("<tr>");
        for(let j = 0; j < ff7Film.cols; j++) {
            if (ff7Film.seats[i][j] == 0) {
                if (j == 3 || j == 7) {
                    document.write("<td class='spacer'><img src='../img/seat1.PNG' alt='Green available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat1.PNG' alt='Green available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            else if (ff7Film.seats[i][j] == 1) {
                if (j == 3 || j == 7) {
                    document.write("<td class='spacer'><img src='../img/seat0.PNG' alt='Red not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
                else {
                    document.write("<td><img src='../img/seat0.PNG' alt='Red not available seat'><p>" + seatsOfTheTheatre + "</p></td>");
                }
            }
            seatsOfTheTheatre++;
        }
        document.write("</tr>");
    }
    setTimeout(() => {ff7Film.buy()}, 500);
}