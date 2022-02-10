// <-- Templates -->

let headerEsp = '';
let headerEng = '';

let homeEsp = '';
let homeEng = '';

let productsEsp = '';
let productsEng = '';

let contactEsp = '';
let contactEng = '';

// <-- End Templates -->


$(document).ready(function () {
	$('.english').hide();
    $('.switch label').click(function() {
		$('.spanish').toggle();
		$('.english').toggle();
		console.log('Has cambiado de idioma');
	})
	console.log('aaaaa');
});
