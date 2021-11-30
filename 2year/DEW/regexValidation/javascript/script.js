// Initial commit
const sendButton = document.querySelector('#send');
const retrieveButton = document.querySelector('#retrieve');
const inputs =  document.querySelectorAll('input');

sendButton.addEventListener('click', function(e) {
    e.preventDefault();
})

function validate(field, regex){

    if(regex.test(field.value)){
        field.state = 'valid';
    } else {
        field.state = 'invalid';
    }

}

const dni = /^[x]\d{8}[a-z]$/i;
const fName = /^[A-Z]+[a-zA-Z]$/gm;
const sName = /^(\w+ )+\w+$/gm;
const valDate = new RegExp("^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$");
const eMail = /^(?=.{1,81}$)[\w\.-]+@[\w\.-]+\.\w{2,4}$/gm;
const bDay = /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/gm;
const pCode = /^(?:0[1-9][1-4]\d|5[0-2])\d{2}$/gm;
const tlfn = /^[679]{1}[0-9]{8}$/gm;
const iban = /([a-zA-Z]{2})\s\t(\d{2})\s\t(\d{4})\s\t(\d{4})\s\t(\d{2})\s\t(\d{10})/gm;
const card = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/gm;
const passwd = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm;


inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        if (e.target.name == 'name') {
            validate(e.target, fName);
        }
        if (e.target.name == 'sname') {
            validate(e.target, sName);
        }
        if (e.target.name == 'dni') {
            validate(e.target, dni);
        }
        if (e.target.name == 'bdate') {
            validate(e.target, bDay);
        }
        if (e.target.name == 'pcode') {
            validate(e.target, pCode);
        }
        if (e.target.name == 'email') {
            validate(e.target, eMail);
        }
        if (e.target.name == 'number') {
            validate(e.target, tlfn);
        }
        if (e.target.name == 'iban') {
            validate(e.target, iban);
        }
        if (e.target.name == 'passwd') {
            validate(e.target, passwd);
        }
        if (e.target.name == 'passwd1') {
            validate(e.target, passwd);
        }
        
    })
})

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function(e) {
        if (e.target.state == 'valid') {
            e.target.nextSibling.style.display = 'none';
        }
        else {
            e.target.nextSibling.style.display = 'block';
        }
    })
}














/*
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
            // console.log(patterns[e.target.attributes.name.value]);
            //validate(e.target, patterns[e.target.attributes.name.value]);
      if (e.target.name =="DNI") {validate(e.target, dni)};
      if (e.target.name =="Name") {validate(e.target, name1)};
      if (e.target.name =="Surname") {validate(e.target, Surname)};
      if (e.target.name =="Birth") {validate(e.target, Birth)};
      if (e.target.name =="Email") {validate(e.target, mail)};
      if (e.target.name =="code") {validate(e.target, code)};
      if (e.target.name =="Telephone") {validate(e.target, Telephone)};
      if (e.target.name =="IBAN") {validate(e.target, IBAN)};
      if (e.target.name =="Card") {validate(e.target, Card)};
      if (e.target.name =="Password") {validate(e.target, Password)};

      if (e.target.name =="rPassword"){
            clave1 = document.formulario.Password.value
            clave2 = document.formulario.rPassword.value
            if (clave1 == clave2){
               validate(e.target, Password)}
            else{
                validate(e.target, Password)
                }
        }

    });
});
// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

const dni=/^[x]\d{8}[a-z]$/i
const name1=/^[A-Z]+[a-zA-Z]$/gm
// const Surname=/^[A-Z]+[a-zA-Z]+ +[A-Z]+[a-zA-Z]$/gm
const mail=/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+/gm
const Birth= /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/gm
const code= /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/gm
const Telephone=/^[679]{1}[0-9]{8}$/gm
// (+34|0034|34)?[ -](6|7)[ -]([0-9][ -]){8}
const IBAN=/([a-zA-Z]{2})\s\t(\d{2})\s\t(\d{4})\s\t(\d{4})\s\t(\d{2})\s\t(\d{10})/gm
//ES3912341234250123456789
const Card=/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/gm
const Password=/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm
const inputs = document.querySelectorAll('input');*/