// /////////////////////////////
// Declaration of global variables
////////////////////////////////
console.log('hola')

// var fillForm = document.querySelector('#fill');		// Autofills data to the form
// var inputs = document.querySelectorAll('input');	// Takes all inputs

// let sendBut = document.querySelector('#send');
// let retrieveBut = document.querySelector('#retrieve');
// let postDbBut = document.querySelector('#post-db');
// let getDbBut = document.querySelector('#get-db');

// let noti = document.querySelector('#noti');

let inputs;

let defaultObj = {
		name : 'Pepito',
		surname : 'Lopez Perez',
		dni : '22225678X',
		date: '22/09/2000',
		pcode: '35500',
		email : 'pepe@gmail.com',
		hphone : '928666555',
		number : '666999222',
		iban : 'ES7921000813610123456789',
		ccard: '4539955085883327',
		password: 'Pepe1234567890' 
	}

// /////////////////////////////
// End declaration of global variables
////////////////////////////////

function showData(someObject) {		// Shows the data in the inputs when it's colected
	inputs[0].value	= someObject.name; 
	inputs[1].value	= someObject.surname;
	inputs[2].value	= someObject.dni;
	inputs[3].value	= someObject.date;
	inputs[4].value	= someObject.pcode;
	inputs[5].value	= someObject.email;
	inputs[6].value	= someObject.hphone;
	inputs[7].value	= someObject.number;
	inputs[8].value	= someObject.iban;
	inputs[9].value	= someObject.ccard;
	inputs[10].value = someObject.password;
}

function returnFormAsObject() {
	let obj = {
		name : inputs[0].value,
		surname : inputs[1].value,
		dni : inputs[2].value,
		date: inputs[3].value,
		pcode: inputs[4].value,
		email : inputs[5].value,
		hphone : inputs[6].value,
		number : inputs[7].value,
		iban : inputs[8].value,
		ccard: inputs[9].value,
		password : inputs[10].value
	}

	return obj;
}



$(document).ready(function() {
	inputs = $('input');
	$('#send').click(function(e) {
		e.preventDefault();

		let obj = returnFormAsObject();

		let jsonObj = JSON.stringify(obj);
		// console.log(jsonObj);

		$.ajax({
			url: `normal.php`,
			type: 'POST',
			dataType: 'json',
			contentType: 'application/json; charset=utf-8',
			data: jsonObj,
			// data: `x=${JSON.stringify(obj)}`,
			success: function(response) {
				console.log('You sent this to normal.php:')
				console.log(response);
			}
		});
	})

	
	$('#retrieve').click(function(e) {		// works
		e.preventDefault();

		// console.log($.getJSON('/normal.php'));
		$.ajax({
			url: "normal.php",
			type: "get",
			dataType: "json",
			success: function (response) {
				console.log(response);
			}
		}).done(function(data){
			// console.log(data);
			showData(data);					
			});
	})


	$('#fill').click(function(e) {
		e.preventDefault();
		showData(defaultObj);
		
	})
	$('#post-db').click(function(e) {
		e.preventDefault();
		console.log('aa');

		let fObj = returnFormAsObject();


		let sendOBJ = JSON.stringify(fObj);

		$.ajax({
			url: 'workdb.php',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			dataType: 'text',
			data: sendOBJ,
			success: function() {
				console.log('User was created successfully');
			}
		})











	})
	$('#get-db').click(function(e) {
		e.preventDefault();

		let dni = $('input#dni').val();

		$.ajax({
			type: "get",
			url: `comprobacion.php?dni="${dni}"`,
			// data: dni,
			// contentType: "text",
			dataType: "json",
			success: function (response) {
				// showData(response);
				console.log(JSON.parse(response));
			}
		}).done(function(data){
			console.log(JSON.parse(data));
			showData(JSON.parse(data));					
			});;


	})
})











































// fillForm.addEventListener('click', function(e) {		// Fills the form with data so u don't have to fill it manually
// 	e.preventDefault();
//     // let fillData = ['Pepito', 'Lopez Perez', '12345678X', '22/09/2000', '35500', 'pepe@gmail.com', '928666666', '666999666', 'ES7921000813610123456789', '4539955085883327', 'Pepe1234567890']
// // 
//     // for (let i = 0; i < inputs.length; i++) {
// 	// 	console.log(`${inputs[i].name} |||| ${fillData[i]}`);
//     //     inputs[i].value = fillData[i];
//     // }
// 	showData(defaultObj);
// })

// sendBut.addEventListener('click', function(e) {		// Sends form data to a simple PHP file
// 	e.preventDefault();

// 	// let obj = {
// 	// 	name : inputs[0].value,
// 	// 	surname : inputs[1].value,
// 	// 	dni : inputs[2].value,
// 	// 	date: inputs[3].value,
// 	// 	pcode: inputs[4].value,
// 	// 	email : inputs[5].value,
// 	// 	hphone : inputs[6].value,
// 	// 	number : inputs[7].value,
// 	// 	iban : inputs[8].value,
// 	// 	ccard: inputs[9].value,
// 	// 	password : inputs[10].value
// 	// }

// 	let obj = returnFormAsObject();

// 	dbParam = JSON.stringify(obj);
// 	xmlhttp = new XMLHttpRequest();
// 	xmlhttp.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 			console.log(this.responseText);
// 			myObj = JSON.parse(this.responseText);
// 			// document.getElementById("users").innerHTML = myObj.name+ " was stored correctly";
// 			noti.innerHTML = myObj.name+ " was stored correctly";
// 			noti.style.opacity = 1;
// 			setTimeout(function() {noti.style.opacity = 0}, 1500);
// 		}
// 	};
// 	xmlhttp.open("POST", "http://localhost/normal.php", true);
// 	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 	xmlhttp.send("x=" + dbParam);
// })


// retrieveBut.addEventListener("click", function(e) {
// 	console.log('hoa')
// 	e.preventDefault();

// 	var xmlhttp = new XMLHttpRequest();

// 	xmlhttp.onreadystatechange = function() {
// 	if (this.readyState == 4 && this.status == 200) {
// 		console.log(this.responseText);
// 		myObj = JSON.parse(this.responseText);
		
// 		// document.getElementById("demo").innerHTML = myObj.name + " was received correctly";
// 		noti.innerHTML = myObj.name+ " was received correctly";
// 		noti.style.opacity = 1;
// 		setTimeout(function() {noti.style.opacity = 0}, 1500);
// 		showData(myObj);
// 		console.log(myObj);
// 	}
// 	};
// 	xmlhttp.open("GET", "http://localhost/normal.php", true);
// 	xmlhttp.send();

// })

// postDbBut.addEventListener('click', function(e) {
// 	e.preventDefault();

// 	console.log ('Asking server with POST method...');
// 	// var params = "user="+u+"&message="+m;
// 	// let params = "name"+name+"&surname"+surname+"&dni"+inputs[2].value+"&date"+inputs[3].value+"&pcode"+inputs[4].value+"&email"+inputs[5].value+"&hphone"+inputs[6].value+"&number"+inputs[7].value+"&iban"+inputs[8].value+"&ccard"+inputs[9].value+"&password"+inputs[10].value;

// 	let obj = returnFormAsObject();

// 	let params = JSON.stringify(obj);
// 	console.log(obj);

// 	var xhr = new XMLHttpRequest();
// 	xhr.open('POST','http://localhost/workdb.php', true);
// 	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');//add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method:

// 	xhr.onload = function(){
// 	console.log(this.responseText);
// 	}

// 	xhr.send(params);
// })