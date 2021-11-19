//Initial commit
//GLOBAL VARIABLES
var myWritingZone = document.querySelector('#writing-zone');
var shiftKeyAct = false;
var bloMaKeyAct = false;
var altGrKeyAct = false;

let screenKeyboard = document.querySelectorAll('.normal-keys');
let tabKey = document.querySelector('#tab');
let spaceKey = document.querySelector('#space');
let backSpaceKey = document.querySelector('#backspace');
let returnKey = document.querySelector('#return');
let escKey = document.querySelector('#esc');
let bloqMayusKey = document.querySelector('#bloq-m');
let shiftKeys = document.querySelectorAll('.shift-keys');
let clearKey = document.querySelector('#clear');
//END GLOBAL VARIABLES

var Keyboard = function(){
    this.normalKeys = ['º', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\'', '¡', 
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '`', '+', 
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', '´', 'ç',
    '<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-'],
    this.specialKeys = ['esc', '←','⇆', '↵', 'bloq <br> mayus', '⬆', '⬆', 'CTRL', '⌘', 'alt', ' ', 'alt gr', 'fn', '⎙', 'CTRL']
    this.altGrFirstRow = ['\\', '|', '@', '#', '~', '½', '¬', '{', '[', ']', '}', '(', ')'],
    this.shiftFirstRow = ['ª', '!', '"', '·', '$', '%', '&' ,'/', '(', ')', '=', '?', '¿']
}

//Declaration of the keyboard object
let myKeyboard = new Keyboard();

function changeKeys(val) {  //0 -> sets to normal || 1 -> set all uppercase
    switch (val) {
        case 0:
            for (let i = 0; i < screenKeyboard.length; i++) {
                screenKeyboard[i].innerHTML = myKeyboard.normalKeys[i];
            }
            break;
        case 1:
            for (let i = 0; i < 13; i++) {
                screenKeyboard[i].innerHTML = myKeyboard.shiftFirstRow[i];
            }
            for (let i = 13; i < screenKeyboard.length; i++) {
                screenKeyboard[i].innerHTML = myKeyboard.normalKeys[i].toUpperCase();
            }
            screenKeyboard[37].innerHTML = '>';
    }
    }

//Simple event listeners
tabKey.addEventListener('click', function() {
    myWritingZone.innerHTML += '\t';
})

spaceKey.addEventListener('click', function() {
    myWritingZone.innerHTML += ' ';
})

backSpaceKey.addEventListener('click', function() {
    myWritingZone.innerHTML = myWritingZone.innerHTML.slice(0, -1);
})

returnKey.addEventListener('click', function() {
    myWritingZone.innerHTML += '\n';
})

escKey.addEventListener('click', function() {
    shiftKeyAct = false;
    bloMaKeyAct = false;
    altGrKeyAct = false;
    changeKeys(0);
    bloqMayusKey.style.backgroundColor = '#30aebe';
})

clearKey.addEventListener('click', function() {
    myWritingZone.innerHTML = '';
})
//End of simple event listeners

for (let i = 0; i < screenKeyboard.length; i++) {
    screenKeyboard[i].addEventListener('click', function(e) {
        myWritingZone.innerHTML += e.target.innerHTML;
        if (bloMaKeyAct) {
            shiftKeyAct = false;
            return 0;
        }
        if (shiftKeyAct) {
            shiftKeyAct = false;
            changeKeys(0);
        }
    })
}

//Shift only allow to write 1 UpperCase character
for (let i = 0; i < shiftKeys.length; i++) {
    shiftKeys[i].addEventListener('click', function() {
        shiftKeyAct = true;
        changeKeys(1);
    })
}

bloqMayusKey.addEventListener('click', function() {
    if (bloMaKeyAct) {
        bloMaKeyAct = false;
        bloqMayusKey.style.backgroundColor = '#30aebe';
        changeKeys(0);
    }
    else {
        bloMaKeyAct = true;
        bloqMayusKey.style.backgroundColor = '#16616d';
        changeKeys(1);
    }
})