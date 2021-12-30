var numberOfShops = prompt('How many shops?');
numberOfShops = parseInt(numberOfShops);
console.log('The user said there are ' + numberOfShops + ' shops');

var nameOfShops = [];
for (let i = 1; i <= numberOfShops; i++){
    var shop = prompt('Name of the shop ' + i);
    nameOfShops.push(shop);
    console.log('Shop ' + i + ': ' + shop);
}

var numberOfEachShop = [];
for( let i = 1; i <= numberOfShops; i++) {
    shop = prompt('Number of the shop ' + i);
    numberOfEachShop.push(shop);
    console.log('Shop ' + i + ' has the number: ' + shop);
}

document.write("<div id='shops'>");

console.log('Start printing shops');
for( let i = 0; i < numberOfShops; i++){
    document.write('<div class="shop">');
    document.write('<div class="charts">' + nameOfShops[i] + '</div><br>');
    document.write('<div class="number">' + numberOfEachShop[i] + '</div><br>');
    document.write('<div id="front">')
    document.write('<div class="door">~</div>')
    document.write('<div class="window">'  + nameOfShops[i] + '</div>');
    document.write('</div>');
    document.write('</div>');
}
document.write('<br>');
console.log('End printing shops');

document.write('</div>');
document.write("<div id='streets'>");



var hour = prompt('What is the hour?:');
console.log("The hour is: " + hour);

var trafficColor = prompt('What is the color of the trafficlights?');
console.log("The traffic lighs color is: " + trafficColor);

console.log('Drawing the street');

if (hour == 1){
    document.write("<div class='street'><img src='img/1.png'></img></div>");
}
else if (hour == 2){
    document.write("<div class='street'><img src='img/2.png'></img></div>");
}
else if (hour == 3){
    document.write("<div class='street'><img src='img/3.png'></img></div>");
}
else if (hour == 4){
    document.write("<div class='street'><img src='img/4.png'></img></div>");
}
else if (hour == 5) {
    document.write("<div class='street'><img src='img/5.png'></img></div>");
}
else if (hour == 6){
    document.write("<div class='street'><img src='img/6.png'></img></div>");
}
else if (hour == 7){
    document.write("<div class='street'><img src='img/7.png'></img></div>");
}
else if (hour == 8){
    document.write("<div class='street'><img src='img/8.png'></img></div>");
}
else if (hour == 9){
    document.write("<div class='street'><img src='img/9.png'></img></div>");
}
else if (hour == 10){
    document.write("<div class='street'><img src='img/10.png'></img></div>");
}
else if (hour == 11){
    document.write("<div class='street'><img src='img/11.png'></img></div>");
}
else if (hour == 12){
    document.write("<div class='street'><img src='img/12.png'></img></div>");
}

trafficColor = trafficColor.toLowerCase();
if (trafficColor == "red") {
    document.write("<div class='street'><img src='img/red.png'></img></div>");
}
else if (trafficColor == "yellow"){
    document.write("<div class='street'><img src='img/yellow.png'></img></div>");
}
else if ( trafficColor == "green"){
    document.write("<div class='street'><img src='img/green.png'></img></div>");
}
else{
    alert('Invalid color!!');
}
for (let i = 0; i < (numberOfShops-1)*2; i++) {
    document.write("<div class='street'>&nbsp;</div>");
}
console.log('The street has been drawn');


var numberOfCars = prompt('How many cars are on the road?:');
console.log("There are: " + numberOfCars + " cars");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.write("</div>");
document.write("<div id='road1'>")

var carsDraw = 0;

 console.log('Start drawing road and cars');
for (let i = 1; i <= numberOfShops*2; i++){
    if (i % 2 == 0 && carsDraw < numberOfCars){
        document.write("<div class='upperRoad'><img src='img/car" + getRandomInt(0,1) + ".png'></img></div>");
        carsDraw++;
    }
     else {
        document.write("<div class='upperRoad'>&nbsp</div>");
     }
}
document.write("</div><div id='road2'>");
for (let i = 0; i < numberOfShops*2; i++){
    if (i % 2 == 1 && carsDraw < numberOfCars){
        document.write("<div class='bottomRoad'><img src='img/car" + getRandomInt(0,1) + ".png'></img></div>");
        carsDraw++;
    }
    else {
        document.write("<div class='bottomRoad'>&nbsp</div>");
    }
}

document.write('</div>');