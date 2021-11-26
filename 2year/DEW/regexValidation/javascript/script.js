// Initial commit
const sendButton = document.querySelector('#send');
const retrieveButton = document.querySelector('#retrieve');

const valDni = new RegExp("[X]\d{7}[A-Z]|\d{8}[A-Z]");
const valDate = new RegExp("^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$");
const valEmail = new RegExp("^(?=.{1,81}$)[\w\.-]+@[\w\.-]+\.\w{2,4}$");

sendButton.addEventListener('click', function(e) {
    e.preventDefault();
    
})