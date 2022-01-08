//Initial commit
//GLOBAL VARIABLES

var mayus = false;
var shift = false;
var alt = false;
var textAreaContent
var blackListKeys = [20, 112, 113, 114, 115, 116, 117, 118, 119, 40, 38, 120, 121, 122, 123, 37, 39, 17, 93, 91, 27, 144]
var kbKeys;

// //END GLOBAL VARIABLES

var Keyboard = function(){
    this.altGrMode = ['\\', '|', '@', '#', '~', '½', '¬', '{', '[', ']', '}', '(', ')'],
    this.shiftMode = ['ª', '!', '"', '·', '$', '%', '&' ,'/', '(', ')', '=', '?', '¿', '^', '*', '¨', 'Ç', '>', ';', ':', '_'],
    this.ogMode = ['º','1','2','3','4','5','6','7','8','9','0',"'",'¡','`', '+','´','ç','<', ',','.','-']
    this.changeKeys = function(val) {  
        switch (val) {
            case 0: //Return to normal
                kbKeys = $('.shift-keyss .top-key');
                if (shift == false) {       // Canges value if the shift key is not pressed
                    $('.shift-keyss .bottom-key').fadeIn();
                    for (let i = 0; i < kbKeys.length; i++) {
                        kbKeys[i].innerHTML = this.ogMode[i];
                    }
                    if (alt) {
                        this.changeKeys(2);
                    }
                }
                if (mayus == false && shift == false) {       // Canges value if the bloq ma is not pressed
                    kbKeys = $('.key-normal .top-key');
                    for (let i = 0; i < kbKeys.length; i++) {
                        kbKeys[i].innerText = kbKeys[i].innerText.toLowerCase();
                    }
                }
                if (alt == false) {         // Canges value if the alt gr is not pressed
                    kbKeys = $('.alt-keyss .top-key');
                    for (let i = 0; i < kbKeys.length; i++) {
                        kbKeys[i].innerText = this.ogMode[i]; 
                    }
                }
                break;

            case 1:                         //Switches to shift mode
                if (shift) {
                    kbKeys = $('.shift-keyss .top-key');
                    $('.shift-keyss .bottom-key').fadeOut();
                    for (let i = 0; i < this.shiftMode.length; i++) {
                        kbKeys[i].innerHTML = this.shiftMode[i];
                    }
                }
                kbKeys = $('.key-normal .top-key');
                for (let i = 0; i < kbKeys.length; i++) {
                    kbKeys[i].innerText = kbKeys[i].innerText.toUpperCase();
                }
                break;
            case 2:                         //Switches to alt mode
                kbKeys = $('.alt-keyss .top-key');
                $('.shift-keyss .bottom-key').fadeOut();
                for (let i = 0; i < 13; i++) {
                    kbKeys[i].innerText = this.altGrMode[i];
                }
        }
        }
}

let myKB = new Keyboard();
var selectorEvent = $(window);

$(document).ready(function() {
    textAreaContent = $('#writing-zone').text();

    $('.key').mousedown(function() {        // When a virtual key is pressed
        let pressedKey = $(this).prop('dataset')['key'];
        console.log(pressedKey);

        switch (parseInt(pressedKey)) {       // Key code is directly passed to the switch
            case 16: //Switches to shift mode
                shift = true;
                myKB.changeKeys(1);
                break;

            case 20:
                $(".key[data-key='" + 20 + "']").toggleClass("active");
                if (mayus) {
                    mayus = false;
                    myKB.changeKeys(0);
                }
                else {
                    mayus = true;
                    myKB.changeKeys(1);
                }
                break;

            case 13:
                textAreaContent += '\n';
                break;

            case 32:
                textAreaContent += ' ';

            case 8:
                textAreaContent = textAreaContent.slice(0, -1);

            
            default:
                textAreaContent += $(this).find('.top-key').text();
        }
        $('#writing-zone').text(textAreaContent);
    })

    $('.key').mouseup(function() {      // When a virtual key is no longer pressed
        let pressedKey = $(this).prop('dataset')['key'];

        switch (parseInt(pressedKey)) {
            case 16: //Switches to shift mode
                shift = false;
                myKB.changeKeys(0);
                break;
        }
    })
})

//https://keycode.info/
var keyPreventDefault = [
    "112", // F1
    "114", // F3
    "116", // F5
    "117",  // F6
];


//keydown
selectorEvent.on("keydown", function (event) {
    event.preventDefault();
    console.log(event.keyCode + "-" + event.key)
    var key = event.keyCode;
    // for (var i in keyPreventDefault) {
    //     if (key == keyPreventDefault[i]) {
    //         event.preventDefault();
    //     }
    // }
    
    if (key == 20) //capslock
    {
        $(".key[data-key='" + key + "']").toggleClass("active");
        if (mayus) {
            mayus = false;
            myKB.changeKeys(0);
        }
        else {
            mayus = true;
            myKB.changeKeys(1);
        }
    } else {
        $(".key[data-key='" + key + "']").addClass("active");
    }
    if(blackListKeys.includes(key) == false) {
        switch (key) {
            case 13:    // Enter key
                textAreaContent += '\n';
                break;
    
            case 16:
                shift = true;
                myKB.changeKeys(1);
                break;
    
            case 9:
                textAreaContent += '\t';
                break;

            case 8:
                textAreaContent = textAreaContent.slice(0, -1);
                break;
            
            case 18:    // Alt key
                alt = true;
                myKB.changeKeys(2);
                break;

            case 32:
                textAreaContent += ' ';

            default:
                // textAreaContent += event.key;
                textAreaContent += $(".key[data-key='" + key + "'] .top-key").text();
            }
            
        }
        $('#writing-zone').html(textAreaContent);

});

//keyup
selectorEvent.on("keyup", function (event) {
    var key = event.keyCode;

    if (key != 20) //capslock
    {
        $(".key[data-key='" + key + "']").removeClass("active");

    }
    switch (key) {
        case 16:
            shift = false;
            myKB.changeKeys(0);
            break;

        case 18:    // Alt key
            alt = false;
            myKB.changeKeys(0);
            break;
    }
});












































// //Declaration of the keyboard object
// let myKeyboard = new Keyboard();

// //
// //MOUSE EVENT LISTENERS
// //

// //Simple event listeners

// //Adds tabulator inside textarea
// myKeyboard.tabKey.addEventListener('click', function() {
//     myWritingZone.innerHTML += '\t';
// })

// //Adds space inside textarea
// myKeyboard.spaceKey.addEventListener('click', function() {
//     myWritingZone.innerHTML += ' ';
// })

// //Deletes last character inside textarea
// myKeyboard.backSpaceKey.addEventListener('click', function() {
//     myWritingZone.innerHTML = myWritingZone.innerHTML.slice(0, -1);
// })

// //Adds new line inside textarea
// myKeyboard.returnKey.addEventListener('click', function() {
//     myWritingZone.innerHTML += '\n';
// })

// //Returns to normal mode
// myKeyboard.escKey.addEventListener('click', function() {
//     myKeyboard.changeKeys(0);
//     myKeyboard.bloqMayusKey.style.backgroundColor = '#30aebe';
// })

// //Clear everything inside textarea
// myKeyboard.clearKey.addEventListener('click', function() {
//     myWritingZone.innerHTML = '';
// })

// //When shift is activated and you click outside the keys, shift gets disactivated
// //document.addEventListener('click', function() {
// //    if (shiftKeyAct || altGrKeyAct) {
// //        myKeyboard.changeKeys(0);
// //    }
// //}, true)
// //End of simple event listeners

// //Writes clicked key inside textarea
// for (let i = 0; i < myKeyboard.screenKeyboard.length; i++) {
//     myKeyboard.screenKeyboard[i].addEventListener('click', function(e) {
//         console.log(e.target.innerHTML)
//         myWritingZone.innerHTML += e.target.innerHTML;
//             if (bloMaKeyAct) {
//                 shiftKeyAct = false;
//                 return 0;
//             }
//             if (shiftKeyAct || altGrKeyAct) {
//                 myKeyboard.changeKeys(0);
//             }
//     }, true)
// }

// //Shift only allow to write 1 UpperCase character
// for (let i = 0; i < myKeyboard.shiftKeys.length; i++) {
//     myKeyboard.shiftKeys[i].addEventListener('click', function() {
//         shiftKeyAct = true;
//         myKeyboard.changeKeys(1);
//     }), true
// }

// //Blocks everything to upperCase
// myKeyboard.bloqMayusKey.addEventListener('click', function() {
//     if (bloMaKeyAct) {
//         bloMaKeyAct = false;
//         myKeyboard.bloqMayusKey.style.backgroundColor = '#30aebe';
//         myKeyboard.changeKeys(0);
//     }
//     else {
//         bloMaKeyAct = true;
//         myKeyboard.bloqMayusKey.style.backgroundColor = '#16616d';
//         myKeyboard.changeKeys(1);
//     }
// })

// myKeyboard.altGrKey.addEventListener('click', function() {
//     altGrKeyAct = true;
//     myKeyboard.changeKeys(2);
// })

// //
// //END MOUSE EVENT LISTENERS
// //
// //
// //START KEYBOARD EVENT LISTENERS
// //

// document.addEventListener('keydown', function(e) {
//     console.log(e.key);
//     switch (e.keyCode) {
//         case 9: // Tab key
//             e.preventDefault();
//             myWritingZone.innerHTML += '\t';
//             break;
    
//         case 16:    // Any physical shift key
//             shiftKeyAct = true;
//             myKeyboard.changeKeys(1);
//             myKeyboard.shiftKeys[0].style.backgroundColor = '#16616d';
//             myKeyboard.shiftKeys[1].style.backgroundColor = '#16616d';

//             break;        

//         case 20:    // Caps Lock key or shift key
//             if (bloMaKeyAct) {
//                 bloMaKeyAct = false;
//                 myKeyboard.bloqMayusKey.style.backgroundColor = '#30aebe';
//                 myKeyboard.changeKeys(0);
//             }
//             else {
//                 bloMaKeyAct = true;
//                 myKeyboard.bloqMayusKey.style.backgroundColor = '#16616d';
//                 myKeyboard.changeKeys(1);
//             }
//             break;

//         case 8: // Backspace key
//             myWritingZone.innerHTML = myWritingZone.innerHTML.slice(0, -1);
//             break;
        
//         case 27:    // Esc key
//             myKeyboard.changeKeys(0);
//             myKeyboard.bloqMayusKey.style.backgroundColor = '#30aebe';
//             break;
            
//         case 32:    // Space key
//             myWritingZone.innerHTML += ' ';
//             break;

//         case 13:    // Enter key
//             myWritingZone.innerHTML += '\n';
//             break;
        
//         case 225:    // Alt gr key
//             myKeyboard.changeKeys(2);
//             break;

//         case 17: // Control key
//             myKeyboard.controlKeys[0].style.backgroundColor = '#16616d';
//             myKeyboard.controlKeys[1].style.backgroundColor = '#16616d';
//             break;

//         case 91:    // Meta key
//             break;

//         case 18:    // Alt key
//             break;
            
//         default:    // Writes inside
//         if (e.key != 'Dead') {
//             if (bloMaKeyAct || shiftKeyAct) {
//                 myWritingZone.innerHTML += e.key.toUpperCase();
//             }
//             else {
//                 myWritingZone.innerHTML += e.key.toLowerCase();
//             }
//         }
//         break;

//         }
//         document.querySelector(`#item${e.keyCode}`).style.backgroundColor = '#16616d';
//     console.log(e.keyCode);
// })

// document.addEventListener('keyup', function(e) {


//     switch (e.keyCode) {
//         case 16:
//             shiftKeyAct = false;
//             myKeyboard.changeKeys(0);
//             myKeyboard.shiftKeys[0].style.backgroundColor = '#30aebe';
//             myKeyboard.shiftKeys[1].style.backgroundColor = '#30aebe';
//             break;

//         case 225:    // Alt gr key
//             myKeyboard.changeKeys(0);
//             break;

//         case 17:
//             myKeyboard.controlKeys[0].style.backgroundColor = '#30aebe';
//             myKeyboard.controlKeys[1].style.backgroundColor = '#30aebe';
//             break;
//     }

//     document.querySelector(`#item${e.keyCode}`).style.backgroundColor = '#30aebe';
// })
// //END KEYBOARD EVENT LISTENERS 