// Declaration of a classs to store movies info
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
    this.buy = function(elem) {
        console.log(elem.title);
        let seatNumber = elem.title;
        var row = Math.floor((seatNumber) / this.cols);
        var col = seatNumber % this.cols;
        if (this.seats[row][col] == 1){
            let index = mySeats.indexOf(seatNumber)
            if (index != -1) {
                $('td')[seatNumber].innerHTML = `<img src='../img/seat1.PNG' alt='Green available seat'><p>${seatNumber}</p>`; //The seat returns to available state
                this.seats[row][col] = 0;   //Now the seat is free
                myPrice -= this.pricePerSeat; //Price updated
                mySeats.splice(index, 1);   //If the seat number is taken by the same user, that seat now is removed from the array of selected seats
                $('#total-cost').text(myPrice);
                $('#yourSeats').text(mySeats);
            }
            else {
                $('#seat-taken').text(seatNumber);
                $('#taken-err').fadeIn();
                setTimeout(function() {$('#taken-err').fadeOut();},3000);
                
            }
        } 

        else if (this.seats[row][col] == 0){
            this.seats[row][col] = 1;
            $('td')[seatNumber].innerHTML = `<img src='../img/seat0.PNG' alt='Red not available seat'><p>${seatNumber}</p>`;
            myPrice += this.pricePerSeat;
            $('#total-cost').text(myPrice);
            mySeats.push(seatNumber);
            $('#yourSeats').text(mySeats);
        }
    }

}


//Declaration of the movies in the global scope
starWarsFilm = new Movie('Star Wars Episode V', '124', 5, 9, 10);
blackwidowFilm = new Movie('Blackwidow', '134', 7, 8, 10);
interestelarFilm = new Movie('Interestelar', '169', 6, 5, 9);
fastFurious7Film = new Movie('Fast&Furious 7', '140', 9, 7, 10);
myFilm = new Movie('null', 'null', 0, 0, 0);    // An object that is going to be used intead of the original film
//End of the declaration
var myPrice = 0;    // Total price of the tickets
var mySeats = [];   // Array of the client is buying

function resetValues() {
    for (let i = 0; i < mySeats.length; i++) {
        $('td')[mySeats[i]].innerHTML = `<img src='../img/seat1.PNG' alt='Green available seat'><p>${mySeats[i]}</p>`;
        let row = Math.floor((mySeats[i]) / myFilm.cols);
        let col = mySeats[i] % myFilm.cols;
        myFilm.seats[row][col] = 0;
    }
    myPrice = 0;
    mySeats = [];
    $('#total-cost').text(myPrice);
    $('#yourSeats').text(mySeats);
}

$(document).ready(function() {
    console.log($('body').attr('class'));
    let thisFilm = $('body').attr('class'); // Takes the name of the film from the body tag
    switch (thisFilm) {     // Detects movie name and loads seats if there are in memory, if not it fill's a random array
        case "blackwidow":
            if (sessionStorage.blackwidowFilmSeats != undefined) {
                blackwidowFilm.seats = JSON.parse(sessionStorage.blackwidowFilmSeats);
            }
            else if (blackwidowFilm.seats.length == 0) {
                blackwidowFilm.fillRandomSeats();
            }
            myFilm = blackwidowFilm;
            break;
        
        case 'star-wars':
            if (sessionStorage.starWarsFilmSeats != undefined) {
                starWarsFilm.seats = JSON.parse(sessionStorage.starWarsFilmSeats);
            }
            else if (starWarsFilm.seats.length == 0) {
                starWarsFilm.fillRandomSeats();
            }
            myFilm = starWarsFilm;
            break;

        case 'interestelar':
            if (sessionStorage.interestelarFilmSeats != undefined) {
                interestelarFilm.seats = JSON.parse(sessionStorage.interestelarFilmSeats);
            }
            else if (interestelarFilm.seats.length == 0) {
                interestelarFilm.fillRandomSeats();
            }
            myFilm = interestelarFilm;
            break;

        case 'fast-furious-7':
            if (sessionStorage.fastFurious7FilmSeats != undefined) {
                fastFurious7Film.seats = JSON.parse(sessionStorage.fastFurious7FilmSeats);
            }
            else if (fastFurious7Film.seats.length == 0) {
                fastFurious7Film.fillRandomSeats();
            }
            myFilm = fastFurious7Film;
            break;
    }

    // Prints upper part of the page
    $("body").append("<a href='../index.html'><img id='back' src='../img/back.png' alt='Arrow to go back'></a>");
    $('body').append("<div class='content'>Total cost: <span id='total-cost'>0</span> </div>");
    $('body').append("<div class='content'>Your seats are: <span id='yourSeats'></span> </div>");
    $('body').append("<button id='buy'>Buy</button>");
    $('body').append("<button id='reset'>Reset</button>");

    // Prints movie data
    $('body').append("<div class='cont'></div>");
    $('.cont').append("<div class='film'></div>");
    $('.film').html(`<img src="../img/${thisFilm}.PNG" alt="${thisFilm} movie poster"> <h3>${myFilm.name}</h3><h4>Duration: ${myFilm.duration}</h4><br><h4>Price: ${myFilm.pricePerSeat}€</h4>`);
    // End movie data


    // Prints table with the seats
    $('.cont').append('<table></table>');
    let table = "";     // Stores everything that goes inside table
    // Start creating the table
    let seatCounter = 0;
    for(let i = 0; i < myFilm.rows; i++) {
        table += "<tr>";
        for(let j = 0; j < myFilm.cols; j++) {
            if (myFilm.seats[i][j] == 0) {
                if (j == 3 || j == 7) {
                    table += `<td class='spacer' title='${seatCounter}'><img src='../img/seat1.PNG' alt='Green available seat'><p>${seatCounter++}</p></td>`
                }
                else {
                    table += `<td title='${seatCounter}'><img src='../img/seat1.PNG' alt='Green available seat'><p>${seatCounter++}</p></td>`;
                }
            }
            else if (myFilm.seats[i][j] == 1) {
                if (j == 3 || j == 7) {
                    table += `<td class='spacer' title='${seatCounter}'><img src='../img/seat0.PNG' alt='Red not available seat'><p>${seatCounter++}</p></td>`;
                }
                else {
                    table+= `<td title='${seatCounter}'><img src='../img/seat0.PNG' alt='Red not available seat'><p>${seatCounter++}</p></td>`;
                }
            }
        }
        table += "</tr>";
    }
    $('table').html(table);
    // Ends creating the table
    // Error seat is taken notification
    $('body').append('<div id="taken-err" class="noti">The seat <span id="seat-taken"></span> is taken by someone else</div>')
    // Successful bought seats
    $('body').append('<div id="bought-succ" class="noti">You bought seats <span id="bought-seats"></span><br>Total price will be <span id="bought-price"></span>€</div>')

    $('td').click(function(e) {
        myFilm.buy(e.currentTarget);
    })

    // Seat array is stored
    $('#buy').click(function() {
        switch(thisFilm) {
            case "blackwidow":
                sessionStorage.blackwidowFilmSeats = JSON.stringify(myFilm.seats);
                break;
            case "star-wars":
                sessionStorage.starWarsFilmSeats = JSON.stringify(myFilm.seats);
                break;
            case "interestelar":
                sessionStorage.interestelarFilmSeats = JSON.stringify(myFilm.seats);
                break;
            case "fast-furious-7":
                sessionStorage.fastFurious7FilmSeats = JSON.stringify(myFilm.seats);
                break;
            default:
                alert("Unknown movie");
                break;
        }
        $('#bought-seats').text(mySeats);
        $('#bought-price').text(myPrice);
        $('#bought-succ').fadeIn();
        setTimeout(function() {$('#bought-succ').fadeOut();},3000);
        myPrice = 0;
        mySeats = [];
        $('#total-cost').text(myPrice);
        $('#yourSeats').text(mySeats);
    })

    $('#reset').click(function() {
        resetValues();
    })
})