//Initial commit
//GLOBAL VARIABLES
var myWritingZone = document.querySelector('#writing-zone');
var shiftKeyAct = false;
var bloMaKeyAct = false;
var altGrKeyAct = false;

//END GLOBAL VARIABLES

var Keyboard = function(){
    this.normalKeys = ['º', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\'', '¡', 
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '`', '+', 
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', '´', 'ç',
    '<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-'],
    this.specialKeys = ['esc', '←','⇆', '↵', 'bloq <br> mayus', '⬆', '⬆', 'CTRL', '⌘', 'alt', ' ', 'alt gr', 'fn', '⎙', 'CTRL']
    this.altGrFirstRow = ['\\', '|', '@', '#', '~', '½', '¬', '{', '[', ']', '}', '(', ')'],
    this.shiftFirstRow = ['ª', '!', '"', '·', '$', '%', '&' ,'/', '(', ')', '=', '?', '¿']
    this.screenKeyboard = document.querySelectorAll('.normal-keys');
    this.tabKey = document.querySelector('#tab');
    this.spaceKey = document.querySelector('#space');
    this.backSpaceKey = document.querySelector('#backspace');
    this.returnKey = document.querySelector('#return');
    this.escKey = document.querySelector('#esc');
    this.bloqMayusKey = document.querySelector('#bloq-m');
    this.shiftKeys = document.querySelectorAll('.shift-keys');
    this.clearKey = document.querySelector('#clear');
    this.altGrKey = document.querySelector('#r-alt');
    this.changeKeys = function(val) {  
        switch (val) {
            case 0: //Return to normal
                shiftKeyAct = false;
                bloMaKeyAct = false;
                altGrKeyAct = false;
                for (let i = 0; i < this.screenKeyboard.length; i++) {
                    this.screenKeyboard[i].innerHTML = this.normalKeys[i];
                }
                break;
            case 1: //Switches to shift mode
                for (let i = 0; i < 13; i++) {
                    this.screenKeyboard[i].innerHTML = this.shiftFirstRow[i];
                }
                for (let i = 13; i < this.screenKeyboard.length; i++) {
                    this.screenKeyboard[i].innerHTML = this.normalKeys[i].toUpperCase();
                }
                this.screenKeyboard[37].innerHTML = '>';
                this.screenKeyboard[23].innerHTML = '^';
                this.screenKeyboard[24].innerHTML = '*';
                this.screenKeyboard[35].innerHTML = '¨';
                this.screenKeyboard[45].innerHTML = ';';
                this.screenKeyboard[46].innerHTML = ':';
                this.screenKeyboard[47].innerHTML = '_';
                break;
            case 2: //Switches to alt mode
                for (let i = 0; i < 13; i++) {
                    this.screenKeyboard[i].innerHTML = this.altGrFirstRow[i];
                }
                this.screenKeyboard[15].innerHTML = '€';
                this.screenKeyboard[23].innerHTML = '[';
                this.screenKeyboard[24].innerHTML = ']';
                this.screenKeyboard[35].innerHTML = '{';
                this.screenKeyboard[36].innerHTML = '}';
                this.screenKeyboard[37].innerHTML = '|';
                this.screenKeyboard[45].innerHTML = '─';
                this.screenKeyboard[46].innerHTML = '·';
                this.screenKeyboard[47].innerHTML = '/';
        }
        }
}

//Declaration of the keyboard object
let myKeyboard = new Keyboard();

//
//MOUSE EVENT LISTENERS
//

//Simple event listeners
myKeyboard.tabKey.addEventListener('click', function() {
    myWritingZone.innerHTML += '\t';
})

myKeyboard.spaceKey.addEventListener('click', function() {
    myWritingZone.innerHTML += ' ';
})

myKeyboard.backSpaceKey.addEventListener('click', function() {
    myWritingZone.innerHTML = myWritingZone.innerHTML.slice(0, -1);
})

myKeyboard.returnKey.addEventListener('click', function() {
    myWritingZone.innerHTML += '\n';
})

myKeyboard.escKey.addEventListener('click', function() {
    myKeyboard.changeKeys(0);
    myKeyboard.bloqMayusKey.style.backgroundColor = '#30aebe';
})

myKeyboard.clearKey.addEventListener('click', function() {
    myWritingZone.innerHTML = '';
})
//End of simple event listeners

for (let i = 0; i < myKeyboard.screenKeyboard.length; i++) {
    myKeyboard.screenKeyboard[i].addEventListener('click', function(e) {
        myWritingZone.innerHTML += e.target.innerHTML;
        if (bloMaKeyAct) {
            shiftKeyAct = false;
            return 0;
        }
        if (shiftKeyAct || altGrKeyAct) {
            shiftKeyAct = false;
            altGrKeyAct = false;
            myKeyboard.changeKeys(0);
        }
        /*else if (altGrKeyAct) {
            altGrKeyAct = false;
            changeKeys(0);
        }*/
    })
}

//Shift only allow to write 1 UpperCase character
for (let i = 0; i < myKeyboard.shiftKeys.length; i++) {
    myKeyboard.shiftKeys[i].addEventListener('click', function() {
        shiftKeyAct = true;
        myKeyboard.changeKeys(1);
    })
}

myKeyboard.bloqMayusKey.addEventListener('click', function() {
    if (bloMaKeyAct) {
        bloMaKeyAct = false;
        myKeyboard.bloqMayusKey.style.backgroundColor = '#30aebe';
        myKeyboard.changeKeys(0);
    }
    else {
        bloMaKeyAct = true;
        myKeyboard.bloqMayusKey.style.backgroundColor = '#16616d';
        myKeyboard.changeKeys(1);
    }
})

myKeyboard.altGrKey.addEventListener('click', function() {
    altGrKeyAct = true;
    myKeyboard.changeKeys(2);
})

//
//END MOUSE EVENT LISTENERS
//

//START KEYBOARD EVENT LISTENERS
//for (let i = 0; i < screenKeyboard.length; i++) {
//    screenKeyboard[i].addEventlistener('keydown', function(e) {
//        console.log(e.target);
//    })
//}
document.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (myKeyboard.normalKeys.includes(e.key.toLowerCase())) {
        myWritingZone.innerHTML += e.key;
    }
    //console.log(e.keyCode);
})

//END KEYBOARD EVENT LISTENERS 