// <-- Global variables -->
let sliderNumber = 1;

// <-- Templates -->

// <-- End Templates -->
function wait(ms){
	var start = new Date().getTime();
	var end = start;
	while(end < start + ms) {
	  end = new Date().getTime();
   }
 }


$(document).ready(function () {
	$('.english').hide();
	$('#myBG').hide();
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

	$('#cart, #close-cart, .cart-outer').click(function() {
		if ($('#myBG').hasClass('animate__fadeInRightBig')) {
			$('#myBG').removeClass('animate__fadeInRightBig');
			$('#myBG').addClass('animate__fadeOutRightBig');
			// $('#myBG').toggle();
		}
		else {
			$('#myBG').show();
			$('#myBG').removeClass('animate__fadeOutRightBig');
			$('#myBG').addClass('animate__fadeInRightBig');
			// $('#myBG').addClass('animate__animated');

		}
	})
	$(document).keydown(function(e){
		if (e.keyCode === 27) {
			$('#myBG').removeClass('animate__fadeInRightBig');
			$('#myBG').addClass('animate__fadeOutRightBig');			
		}
	})

	$(document).on('click', '.fa-angle-right', function() {
		let elem = $(`[data-number='${sliderNumber}']`);
		elem.removeClass('animate__fadeInRight active');
		elem.addClass('animate__fadeOutLeft');
		elem.addClass('not-active');
		// wait(100);
		if (sliderNumber == 10) {
			sliderNumber = 1;
		}
		else {
			sliderNumber++;
		}
		elem = $(`[data-number='${sliderNumber}']`);
		elem.removeClass('not-active');
		elem.addClass('active animate__fadeInRight');
	})
});
