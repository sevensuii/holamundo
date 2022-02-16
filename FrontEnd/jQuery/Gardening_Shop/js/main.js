// <-- Templates -->

// <-- End Templates -->


$(document).ready(function () {
	$('.english').hide();
	$('#myBG').hide();
	$('#full-shopping-cart').hide();
    $('.switch label').click(function() {
		$('.spanish').toggle();
		$('.english').toggle();
		console.log('Has cambiado de idioma');

		
		$(".slide-toggle").click(function(){
            $(".box").animate({
                width: "toggle"
            });
        });
	})
	console.log('aaaaa');

	$('#cart, #close-cart').click(function() {
		if ($('#myBG').hasClass('animate__fadeInLeftBig')) {
			$('#myBG').removeClass('animate__fadeInLeftBig');
			$('#myBG').addClass('animate__fadeOutLeftBig');
			$('#full-shopping-cart').removeClass('animate__fadeInRightBig');
			$('#full-shopping-cart').addClass('animate__fadeOutRightBig');
			// $('#myBG').toggle();
		}
		else {
			$('#myBG').show();
			$('#myBG').removeClass('animate__fadeOutRightBig');
			$('#myBG').addClass('animate__fadeInRightBig');
			// $('#myBG').addClass('animate__animated');

		}
	})

	$(document).keydown(function(e) {
		// console.log(e.keyCode + "-" + e.key)
		if (e.keyCode == 27) {
			e.preventDefault();
			$('#myBG').removeClass('animate__fadeInRightBig');
			$('#myBG').addClass('animate__fadeOutRightBig');

			// if ($('#myBG').hasClass('animate__fadeIn')) {
			// 	$('#myBG').removeClass('animate__fadeIn');
			// 	$('#myBG').addClass('animate__fadeOut');
				// $('#myBG').toggle();
				}		
		// }
	})
});
