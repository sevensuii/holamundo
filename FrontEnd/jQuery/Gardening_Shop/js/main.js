// <-- Global variables -->
let sliderNumber = 1;

// <-- Templates -->

// <-- End Templates -->

function IntervalTimer(callback, interval) {
	var timerId, startTime, remaining = 0;
	var state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed

	this.pause = function () {
		if (state != 1) return;

		remaining = interval - (new Date() - startTime);
		window.clearInterval(timerId);
		state = 2;
	};

	this.resume = function () {
		if (state != 2) return;

		state = 3;
		window.setTimeout(this.timeoutCallback, remaining);
	};

	this.timeoutCallback = function () {
		if (state != 3) return;

		callback();

		startTime = new Date();
		timerId = window.setInterval(callback, interval);
		state = 1;
	};

	startTime = new Date();
	timerId = window.setInterval(callback, interval);
	state = 1;
}


function wait(ms){
	var start = new Date().getTime();
	var end = start;
	while(end < start + ms) {
	  end = new Date().getTime();
   }
 }

function slideToRight() {
	let elem = $(`[data-number='${sliderNumber}']`);
	elem.removeClass('animate__fadeInRight animate__fadeOutLeft animate__fadeInLeft animate__fadeOutRight active');
	elem.addClass('animate__fadeOutLeft');
	elem.addClass('not-active');
	// wait(100);
	if (sliderNumber >= 9) {
		sliderNumber = 1;
	}
	else {
		sliderNumber++;
	}
	elem = $(`[data-number='${sliderNumber}']`);
	elem.removeClass('not-active animate__fadeInRight animate__fadeOutLeft animate__fadeInLeft animate__fadeOutRight');
	elem.addClass('active animate__fadeInRight');
}

function slideToLeft() {
	let elem = $(`[data-number='${sliderNumber}']`);
		elem.removeClass('animate__fadeInRight animate__fadeOutLeft animate__fadeInLeft animate__fadeOutRight active');
		elem.addClass('animate__fadeOutRight');
		elem.addClass('not-active');
		// wait(100);
		if (sliderNumber <= 1) {
			sliderNumber = 9;
		}
		else {
			sliderNumber--;
		}
		elem = $(`[data-number='${sliderNumber}']`);
		elem.removeClass('not-active animate__fadeInRight animate__fadeOutLeft animate__fadeInLeft animate__fadeOutRight');
		elem.addClass('active animate__fadeInLeft');
}

$(document).ready(function () {
	$('.english').hide();
	$('#myBG').hide();
	var timer = new IntervalTimer(function () {
        slideToRight();
    }, 3000);
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

	// <-- Slider events -->
	$(document).on('click', '.fa-angle-right', function() {
		slideToRight();
	})
	$(document).on('click', '.fa-angle-left', function() {
		slideToLeft();
	})

	$(document).on('mouseenter', '#slider', function() {
		timer.pause();
	})
	$(document).on('mouseleave', '#slider', function() {
		timer.resume();
	})
	// <-- End Slider events -->
});
