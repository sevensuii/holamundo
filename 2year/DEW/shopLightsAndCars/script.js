var numberOfShops = prompt('How many shops?');
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

console.log('Start printing shops');
for( let i = 0; i < numberOfShops; i++){
    document.write('<div class="shop">');
    document.write('<div class="charts">' + nameOfShops[i] + '</div><br>');
    document.write('<div class="number">' + numberOfEachShop[i] + '</div><br>');
    document.write('<div class="window"> . </div>');
    document.write('</div>');
}
console.log('End printing shops')






/*console.log('Star printing shops');
document.write('<div id="charts">');
for(var i = 0; i < numberOfShops; i++) {
    document.write('<div> ' + nameOfShops[i] + '</div>');
}
document.write('</div>');
console.log('Finished printing');
*/
/*
console.log('Printing number of the shops');
document.write('<div id="number">');
for(var i = 0; i < numberOfShops; i++) {
    document.write('<div>' + numberOfEachShop[i] + '</div>');    
}
document.write('</div>');
console.log('Finished printing');
*/