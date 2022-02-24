// <-- Global variables -->
let sliderNumber = 1;

let app, myDetails;

// <-- Templates -->
let contactTemplate = `<div class="flex justify-around">
<div class="w-1/5"></div>
<div class="block p-6 rounded-lg shadow-lg bg-white max-w-md w-1/5">
	<form>
	  <div class="form-group mb-6">
		<input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
		  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
		  focus:border-blue-600 focus:outline-none" id="exampleInput7"
		  placeholder="Nombre">
	  </div>
	  <div class="form-group mb-6">
		<input v-model='email' @keyup.enter="greeting = 'HELL4O'" type="email" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
		  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
		  focus:outline-none" id="exampleInput8" placeholder="Correo electronico">
	  </div>
	  <div class="form-group mb-6">
		<textarea
		class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
		  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
		id="exampleFormControlTextarea13" rows="3" placeholder="Cuentanos algo..."
	  ></textarea>
	  </div>
	  <div class="form-group form-check text-center mb-6">
		<input type="checkbox"
		  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 
			checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain 
			mr-2 cursor-pointer"
		  id="exampleCheck87" checked>
		<label class="form-check-label inline-block text-gray-800" for="exampleCheck87">
			<span class="spanish">Quiero una copia de este mensaje</span>
			<span class="english">Send me a copy of this message</span>
		</label>
	  </div>
	  <button type="submit" class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded		shadow-md
		hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800
		active:shadow-lg transition	duration-150 ease-in-out">Enviar</button>
	</form>
  </div>
  <div class="w-2/5">
	<img src="img/form-green-flowers.gif" alt="Watering flowers">
</div>
</div>`;

let homeTemplate = ``;



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
	$('#login').hide();
	var timer = new IntervalTimer(function () {
        slideToRight();
    }, 3000);
    $('.switch label').click(function() {
		$('.spanish').toggle();
		$('.english').toggle();
		$('#home').toggleClass('oculto-en');
		console.log('Has cambiado de idioma');

		
		$(".slide-toggle").click(function(){
            $(".box").animate({
                width: "toggle"
            });
        });
	})
	console.log('aaaaa');

	$(document).on('click', '#login-btn', function() {
		$('#login').removeClass('animate__fadeInDownBig animate__fadeOutDownBig');
		$('#login').addClass('animate__fadeInDownBig');
		$('#login').show();
	})
	$(document).on('click', '#close-login', function() {
		$('#login').removeClass('animate__fadeInDownBig animate__fadeOutDownBig');
		$('#login').addClass('animate__fadeOutDownBig');
		
	})
	
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
						
			$('#login').removeClass('animate__fadeInDownBig animate__fadeOutDownBig');
			$('#login').addClass('animate__fadeOutDownBig');
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


	$('#products').click(function() {

		if (app != undefined) {
			app.unmount();
			app.destroy;
		}

		$.ajax({
			type: "get",
			url: "http://localhost/tiendavue/getAllItems.php",
			dataType: "json",
			success: function (response) {
				// ajaxResp = response;
				console.table(response);
				app = Vue.createApp({
					data() {
						return {
							objetos: response,
						}
					},
					template: `<div class="text-4xl h-16 text-center bg-blue-50 mb-12">
					 	<span class="spanish">Todos los productos</span>
					 	<span class="english">All products</span>
						</div><div class="flex flex-wrap w-11/12 mx-auto">
						<div v-for='producto in objetos' class="flex justify-center mr-6 mb-6">
							<div class="flex flex-col align-center justify-between w-96 rounded-lg bg-white shadow-lg">
							<img class=" w-full h-96 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" v-bind:src="producto.imagen" alt="" />
							<div class="p-6 flex flex-col justify-start">
								<h5 class="text-gray-900 text-xl font-medium mb-2">{{producto.nombre}}</h5>
								<p class="text-gray-700 text-base mb-4">
								{{producto.descripcion}}
								</p>
								<p class="text-gray-600 text-xl"><span class='spanish'>Precio</span><span class='english'>Price</span>: {{producto.precio}}€</p>
								<p class="text-gray-600 text-md"><span class='spanish'>Disponibles</span><span class='english'>Available</span>: {{producto.cantidad}}</p>
								<button type="button" class="mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"><span class='spanish'>Añadir al carrito</span><span class='english'>Add to cart</span></button>
							</div>
							</div>
						</div>`
				})

				app.mount('#secondary-cont');

				// let myProd = `<div class="text-4xl h-16 text-center bg-blue-50 mb-12">
				// 	<span class="spanish">Todos los productos</span>
				// 	<span class="english">All products</span>
				// </div><div class="flex flex-wrap w-11/12 mx-auto">`;
				// response.forEach(producto => myProd += `
				// <div class="flex justify-center mr-6 mb-6">
				// 	<div class="flex flex-col align-center justify-between w-96 rounded-lg bg-white shadow-lg">
				// 	  <img class=" w-full h-96 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="${producto.imagen}" alt="" />
				// 	  <div class="p-6 flex flex-col justify-start">
				// 		<h5 class="text-gray-900 text-xl font-medium mb-2">${producto.nombre}</h5>
				// 		<p class="text-gray-700 text-base mb-4">
				// 		  ${producto.descripcion}
				// 		</p>
				// 		<p class="text-gray-600 text-xl"><span class='spanish'>Precio</span><span class='english'>Price</span>: ${producto.precio}€</p>
				// 		<p class="text-gray-600 text-md"><span class='spanish'>Disponibles</span><span class='english'>Available</span>: ${producto.cantidad}</p>
				// 		<button type="button" class="mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"><span class='spanish'>Añadir al carrito</span><span class='english'>Add to cart</span></button>
				// 	  </div>
				// 	</div>
				//   </div>`)

				// myProd += `</div>`  
			
				// $('#secondary-cont').html(myProd);
				// $('#secondary-cont').show();
				// $('#main-container').hide();

				if( $('#home').hasClass('oculto-en') ) {
					$('.english').hide();
				}
				else {
					$('.spanish').hide();

				}

			}
		});
	})
	$('#home').click(function() {
		// $('#main-container').html(homeTemplate);
		// $('#main-container').show();
		// $('#secondary-cont').hide();


		if( $('#home').hasClass('oculto-en') ) {
			$('.english').hide();
		}
		else {
			$('.spanish').hide();

		}
	});

	$(document).on('click','#show-furniture', function() {
		
		if (app != undefined) {
			app.unmount();
			app.destroy;
		}
		
		$.ajax({
			type: "get",
			url: "http://localhost/tiendavue/getCategoryItems.php?categoria='mobiliario'",
			dataType: "json",
			success: function (response) {
				console.table(response);

				app = Vue.createApp({
					data() {
						return {
							objetos: response,
						}
					},
					template: `<div class="text-4xl h-16 text-center bg-blue-50 mb-12">
					 	<span class="spanish">Mobiliario</span>
					 	<span class="english">Furniture</span>
						</div><div class="flex flex-wrap w-11/12 mx-auto">
						<div v-for='producto in objetos' class="flex justify-center mr-6 mb-6">
							<div class="flex flex-col align-center justify-between w-96 rounded-lg bg-white shadow-lg">
							<img class=" w-full h-96 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" v-bind:src="producto.imagen" alt="" />
							<div class="p-6 flex flex-col justify-start">
								<h5 class="text-gray-900 text-xl font-medium mb-2">{{producto.nombre}}</h5>
								<p class="text-gray-700 text-base mb-4">
								{{producto.descripcion}}
								</p>
								<p class="text-gray-600 text-xl"><span class='spanish'>Precio</span><span class='english'>Price</span>: {{producto.precio}}€</p>
								<p class="text-gray-600 text-md"><span class='spanish'>Disponibles</span><span class='english'>Available</span>: {{producto.cantidad}}</p>
								<button type="button" class="mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"><span class='spanish'>Añadir al carrito</span><span class='english'>Add to cart</span></button>
							</div>
							</div>
						</div>`
				})

				app.mount('#secondary-cont');
				// let myProd = `<div class="text-4xl h-16 text-center bg-blue-50 mb-12">
				// 	<span class="spanish">Todos los productos</span>
				// 	<span class="english">All products</span>
				// </div><div class="flex flex-wrap w-11/12 mx-auto">`;
				// response.forEach(producto => myProd += `
				// <div class="flex justify-center mr-6 mb-6">
				// 	<div class="flex flex-col align-center justify-between w-96 rounded-lg bg-white shadow-lg">
				// 	  <img class=" w-full h-96 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="${producto.imagen}" alt="" />
				// 	  <div class="p-6 flex flex-col justify-start">
				// 		<h5 class="text-gray-900 text-xl font-medium mb-2">${producto.nombre}</h5>
				// 		<p class="text-gray-700 text-base mb-4">
				// 		  ${producto.descripcion}
				// 		</p>
				// 		<p class="text-gray-600 text-xl"><span class='spanish'>Precio</span><span class='english'>Price</span>: ${producto.precio}€</p>
				// 		<p class="text-gray-600 text-md"><span class='spanish'>Disponibles</span><span class='english'>Available</span>: ${producto.cantidad}</p>
				// 		<button type="button" class="mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"><span class='spanish'>Añadir al carrito</span><span class='english'>Add to cart</span></button>
				// 	  </div>
				// 	</div>
				//   </div>`)

				// myProd += `</div>`  
			
				// $('#secondary-cont').html(myProd);
				// $('#secondary-cont').show();
				// $('#main-container').hide();

				if( $('#home').hasClass('oculto-en') ) {
					$('.english').hide();
				}
				else {
					$('.spanish').hide();

				}

			}
		});
	})

	$(document).on('click','#show-tools',function() {
		
		if (app != undefined) {
			app.unmount();
			app.destroy;
		}
		
		$.ajax({
			type: "get",
			url: "http://localhost/tiendavue/getCategoryItems.php?categoria='herramientas'",
			dataType: "json",
			success: function (response) {
				console.table(response);

				app = Vue.createApp({
					data() {
						return {
							objetos: response,
						}
					},
					template: `<div class="text-4xl h-16 text-center bg-blue-50 mb-12">
					 	<span class="spanish">Herramientas</span>
					 	<span class="english">Tools</span>
						</div><div class="flex flex-wrap w-11/12 mx-auto">
						<div v-for='producto in objetos' class="flex justify-center mr-6 mb-6">
							<div class="flex flex-col align-center justify-between w-96 rounded-lg bg-white shadow-lg">
							<img class=" w-full h-96 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" v-bind:src="producto.imagen" alt="" />
							<div class="p-6 flex flex-col justify-start">
								<h5 class="text-gray-900 text-xl font-medium mb-2">{{producto.nombre}}</h5>
								<p class="text-gray-700 text-base mb-4">
								{{producto.descripcion}}
								</p>
								<p class="text-gray-600 text-xl"><span class='spanish'>Precio</span><span class='english'>Price</span>: {{producto.precio}}€</p>
								<p class="text-gray-600 text-md"><span class='spanish'>Disponibles</span><span class='english'>Available</span>: {{producto.cantidad}}</p>
								<button type="button" class="mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"><span class='spanish'>Añadir al carrito</span><span class='english'>Add to cart</span></button>
							</div>
							</div>
						</div>`
				})

				app.mount('#secondary-cont');
				// let myProd = `<div class="text-4xl h-16 text-center bg-blue-50 mb-12">
				// 	<span class="spanish">Todos los productos</span>
				// 	<span class="english">All products</span>
				// </div><div class="flex flex-wrap w-11/12 mx-auto">`;
				// response.forEach(producto => myProd += `
				// <div class="flex justify-center mr-6 mb-6">
				// 	<div class="flex flex-col align-center justify-between w-96 rounded-lg bg-white shadow-lg">
				// 	  <img class=" w-full h-96 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="${producto.imagen}" alt="" />
				// 	  <div class="p-6 flex flex-col justify-start">
				// 		<h5 class="text-gray-900 text-xl font-medium mb-2">${producto.nombre}</h5>
				// 		<p class="text-gray-700 text-base mb-4">
				// 		  ${producto.descripcion}
				// 		</p>
				// 		<p class="text-gray-600 text-xl"><span class='spanish'>Precio</span><span class='english'>Price</span>: ${producto.precio}€</p>
				// 		<p class="text-gray-600 text-md"><span class='spanish'>Disponibles</span><span class='english'>Available</span>: ${producto.cantidad}</p>
				// 		<button type="button" class="mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"><span class='spanish'>Añadir al carrito</span><span class='english'>Add to cart</span></button>
				// 	  </div>
				// 	</div>
				//   </div>`)

				// myProd += `</div>`  
			
				// $('#secondary-cont').html(myProd);
				// $('#secondary-cont').show();
				// $('#main-container').hide();

				if( $('#home').hasClass('oculto-en') ) {
					$('.english').hide();
				}
				else {
					$('.spanish').hide();

				}

			}
		});
	})

	$(document).on('click','#show-pools', function() {
		
		if (app != undefined) {
			app.unmount();
			app.destroy;
		}
		
		$.ajax({
			type: "get",
			url: "http://localhost/tiendavue/getCategoryItems.php?categoria='piscinas'",
			dataType: "json",
			success: function (response) {
				console.table(response);

				app = Vue.createApp({
					data() {
						return {
							objetos: response,
						}
					},
					template: `<div class="text-4xl h-16 text-center bg-blue-50 mb-12">
					 	<span class="spanish">Piscinas</span>
					 	<span class="english">Pools</span>
						</div><div class="flex flex-wrap w-11/12 mx-auto">
						<div v-for='producto in objetos' class="flex justify-center mr-6 mb-6">
							<div class="flex flex-col align-center justify-between w-96 rounded-lg bg-white shadow-lg">
							<img class=" w-full h-96 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" v-bind:src="producto.imagen" alt="" />
							<div class="p-6 flex flex-col justify-start">
								<h5 class="text-gray-900 text-xl font-medium mb-2">{{producto.nombre}}</h5>
								<p class="text-gray-700 text-base mb-4">
								{{producto.descripcion}}
								</p>
								<p class="text-gray-600 text-xl"><span class='spanish'>Precio</span><span class='english'>Price</span>: {{producto.precio}}€</p>
								<p class="text-gray-600 text-md"><span class='spanish'>Disponibles</span><span class='english'>Available</span>: {{producto.cantidad}}</p>
								<button type="button" class="mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"><span class='spanish'>Añadir al carrito</span><span class='english'>Add to cart</span></button>
							</div>
							</div>
						</div>`
				})

				app.mount('#secondary-cont');

				// let myProd = `<div class="text-4xl h-16 text-center bg-blue-50 mb-12">
				// 	<span class="spanish">Todos los productos</span>
				// 	<span class="english">All products</span>
				// </div><div class="flex flex-wrap w-11/12 mx-auto">`;
				// response.forEach(producto => myProd += `
				// <div class="flex justify-center mr-6 mb-6">
				// 	<div class="flex flex-col align-center justify-between w-96 rounded-lg bg-white shadow-lg">
				// 	  <img class=" w-full h-96 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="${producto.imagen}" alt="" />
				// 	  <div class="p-6 flex flex-col justify-start">
				// 		<h5 class="text-gray-900 text-xl font-medium mb-2">${producto.nombre}</h5>
				// 		<p class="text-gray-700 text-base mb-4">
				// 		  ${producto.descripcion}
				// 		</p>
				// 		<p class="text-gray-600 text-xl"><span class='spanish'>Precio</span><span class='english'>Price</span>: ${producto.precio}€</p>
				// 		<p class="text-gray-600 text-md"><span class='spanish'>Disponibles</span><span class='english'>Available</span>: ${producto.cantidad}</p>
				// 		<button type="button" class="mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"><span class='spanish'>Añadir al carrito</span><span class='english'>Add to cart</span></button>
				// 	  </div>
				// 	</div>
				//   </div>`)

				// myProd += `</div>`  
			
				// $('#secondary-cont').html(myProd);
				// $('#secondary-cont').show();
				// $('#main-container').hide();

				if( $('#home').hasClass('oculto-en') ) {
					$('.english').hide();
				}
				else {
					$('.spanish').hide();

				}

			}
		});
	})

	$('#contact').click(function(){
		
		if (app != undefined) {
			app.unmount();
			app.destroy;
		}

		app = Vue.createApp({
			template: `<div class="flex justify-around">
			<div class="w-1/5"></div>
			<div class="block p-6 rounded-lg shadow-lg bg-white max-w-md w-1/5">
				<form>
				  <div class="form-group mb-6">
					<input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
					  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
					  focus:border-blue-600 focus:outline-none" id="exampleInput7"
					  placeholder="Nombre">
				  </div>
				  <div class="form-group mb-6">
					<input v-model="email" type="email" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
					  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
					  focus:outline-none" id="exampleInput8" placeholder="Correo electronico">
				  </div>
				  <div class="form-group mb-6">
					<textarea
					class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
					  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					id="exampleFormControlTextarea13" rows="3" placeholder="Cuentanos algo..."
				  ></textarea>
				  </div>
				  <div class="form-group form-check text-center mb-6">
					<input type="checkbox"
					  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 
						checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain 
						mr-2 cursor-pointer"
					  id="exampleCheck87" checked>
					<label class="form-check-label inline-block text-gray-800" for="exampleCheck87">
						<span class="spanish">Quiero una copia de este mensaje a {{email}}</span>
					</label>
				  </div>
				  <button type="submit" class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded		shadow-md
					hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800
					active:shadow-lg transition	duration-150 ease-in-out">Enviar</button>
				</form>
			  </div>
			  <div class="w-2/5">
				<img src="img/form-green-flowers.gif" alt="Watering flowers">
			</div>
			</div>`,
			data() {
				return {
					email: ''
				}
			}
		});

		app.mount('#secondary-cont');
	})

	myDetails = Vue.createApp({
		data() {
			return {
				showDetails: false,
				nombre: 'a',
				precio: 'a',
				descripcion: 'a',
				imagen: 'a',
				cantidad: 'a',
			}			
		},
		methods: {
			actualizar(iid) {
				console.log(this);
				let response1;
				$.ajax({
					type: "get",
					url: `http://localhost/tiendavue/getSingleItem.php?id=${iid}`,
					dataType: "json",
					success: function (response) {
						response1 = response;
					}
				});
				this.nombre = response1.nombre;
				this.precio = response1.precio;
				this.descripcion = response1.descripcion;
				this.imagen = response1.imagen;
				this.cantidad = response1.cantidad;
				this.showDetails = !this.showDetails;
				console.log(this.nombre);
				console.log(this.precio);
				console.log(this.descripcion);
				console.log(this.imagen);
				console.log(this.cantidad);
				console.log(this.showDetails);
			}
		}
	});

	myDetails.mount('#lets-show-item-details');

	$('.show-datails').click(function(){
		// let myid = $('show-datails').closest('.active')
		let myid = $(this).closest('.father').prop('dataset')['id'];
		// console.log(myid);
		myDetails._component.methods.actualizar(myid);
		// myDetails.methods.actualizar(myid);

		// $.ajax({
		// 	type: "get",
		// 	url: `http://localhost/tiendavue/getSingleItem.php?id=${myid}`,
		// 	dataType: "json",
		// 	success: function (response) {
		// 		// console.log(response)

				


		// 		// $('#myname').html(response.nombre);
		// 		// $('#mydesc').html(response.descripcion);
		// 		// $('#myprice').html(response.precio);
		// 		// $('#mycant').html(response.cantidad);
		// 		// $("#myimg").attr("src",response.imagen);
		// 	}
		// })
	})


	// $('#go-login-btn').click(function() {
	// 	let usu = $('#login-user').prop('value');
	// 	let usuPass =$('#login-pass').prop('value')

	// 	$.ajax({
	// 		type: 'post',
	// 		url: "http://localhost/tiendavue/checkUser";
	// 		data: {usuario:usu};
	// 		datatype: 'json';
	// 		success : function(response){
	// 			console.log(response);
	// 		}
	// 	});
	// });


});
