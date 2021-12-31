// Initial commit
const sendButton = document.querySelector('#send');
const retrieveButton = document.querySelector('#retrieve');
const inputs =  document.querySelectorAll('input');
const checkIban = document.querySelector('#iban');
const aaa = document.querySelector('#aaa');
const noti = document.querySelector('#noti');
let contador = 0;

// Declaration of an object to manage the form
var userData = function () {
    this.name = '';
    this.surName = '';
    this.dni = '';
    this.bDate = '';
    this.pCode = '';
    this.email = '';
    this.phone = '';
    this.iban = '';
    this.pass = '';
    this.cCard = '';
}

// Creating object
var itsMe = new userData();

// When send button is clicked
sendButton.addEventListener('click', function(e) {
    e.preventDefault();
    let isOkey = document.querySelectorAll('.invalid');
    let isOkey2 = document.querySelectorAll('.valid');
    if (isOkey.length == 0 && isOkey2.length == 10) {
        aaa.style.opacity = 0;
        localStorage.someone = JSON.stringify(itsMe);
        noti.style.opacity = 1;
        setTimeout(function () {noti.style.opacity = 0;}, 1500)
    }
    else {
        aaa.style.opacity = 1;
    }
})

// Retrieves data and shows it in the form
retrieveButton.addEventListener('click', function(e) {
    itsMe = JSON.parse(localStorage.someone);
    inputs[0].value = itsMe.name;
    inputs[1].value = itsMe.surName;
    inputs[2].value = itsMe.dni;
    inputs[3].value = itsMe.bDate;
    inputs[4].value = itsMe.pCode;
    inputs[5].value = itsMe.email;
    inputs[7].value = itsMe.phone;
    inputs[8].value = itsMe.iban;
    inputs[9].value = itsMe.pass;
    inputs[10].value = itsMe.pass;
    inputs[11].value = itsMe.cCard;
})

// Checks if the fields are good
function validate(field, regex){

    if(regex.test(field.value)){
        field.classList.remove('invalid');
        field.classList.add('valid');
    } else {
        field.classList.remove('valid');
        field.classList.add('invalid');
    }

}

// 
// Start REGEX VALIDATIONS
// 
const dni = /^[0-9XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
const nie = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
const fName = /^[A-Z]+[a-z]*$/;
const sName = /|^(\w+ )+\w+$/i;
const valDate = new RegExp("^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$");
const eMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const bDay = /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/gm;
// const pCode = /^(?:0[1-9][1-4]\d|5[0-2])\d{2}$/gm;
const pCode = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
const tlfn = /^[679]{1}[0-9]{8}$/gm;
const iban = /([a-zA-Z]{2})\s\t(\d{2})\s\t(\d{4})\s\t(\d{4})\s\t(\d{2})\s\t(\d{10})/gm;
// const card = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/gm;
const card = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
/* const passwd = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm; */
const passwd = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// 
// End REGEX VALIDATIONS
// 
// 
// When key is released and input is focused
// 
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        console.log(e.target);
        if (e.target.name == 'name') {      /* WORKS */
            validate(e.target, fName);
            itsMe.name = e.target.value;
        }
        if (e.target.name == 'sname') {     /* WORKS */
            validate(e.target, sName);
            itsMe.surName = e.target.value;
        }
        if (e.target.name == 'dni') {       /* WORKS */
            validate(e.target, dni);
            itsMe.dni = e.target.value;
        }
        if (e.target.name == 'bdate') {     /* WORKS */
            validate(e.target, bDay);
            itsMe.bDate = e.target.value;
        }
        if (e.target.name == 'pcode') {     /* WORKS */
            validate(e.target, pCode);
            itsMe.pCode = e.target.value;
        }
        if (e.target.name == 'email') {     /* WORKS */
            validate(e.target, eMail);
            itsMe.email = e.target.value;
        }
        if (e.target.name == 'number') {    /* WORKS */
            validate(e.target, tlfn);
            itsMe.phone = e.target.value;
        }
        if (e.target.name == 'iban') {      /* AFK */
            // validate(e.target, iban);
            itsMe.iban = e.target.value;
        }
        if (e.target.name == 'passwd') {    /* WORKS */
            validate(e.target, passwd);
            itsMe.pass = e.target.value;
        }
        if (e.target.name == 'passwd1') {   /* WORKS */
            let pas1 = document.querySelector('#passwd');
            let pas2 = document.querySelector('#passwd1');

            if (pas1.value != pas2.value) {
                pas2.classList.remove('valid')
                pas2.classList.add('invalid')
            }
            else {
                pas2.classList.remove('invalid')
                pas2.classList.add('valid')
            }
        }
        if (e.target.name == 'ccard') {  /* WORKS */
            validate(e.target, card);
            itsMe.cCard = e.target.value;
        }
        
    })
})