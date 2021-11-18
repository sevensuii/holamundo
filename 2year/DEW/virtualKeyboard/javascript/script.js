//Initial commit
var Keyboard = function(){
    this.normalKeys = ['º', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\'', '¡', 
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '`', '+', 
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', '´', 'ç',
    '<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-'],
    this.specialKeys = ['esc']
    this.altGrFirstRow = ['\\', '|', '@', '#', '~', '½', '¬', '{', '[', ']', '}', '(', ')'],
    this.shiftFirstRow = ['ª', '"', '·', '$', '%', '&', '/', '(', ')', '=', '?', '¿']
}

var myWritingZone = document.querySelector('#writing-zone');
let myKeyboard = new Keyboard();
let screenKeyboard = document.querySelectorAll('.normal-keys');

for (let i = 0; i < screenKeyboard.length; i++) {
    screenKeyboard[i].innerText = myKeyboard.normalKeys[i];
}