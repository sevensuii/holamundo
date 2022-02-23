// <-- Global variables -->
let sliderNumber = 1;

// <-- Templates -->
let homeTemplate = `<!-- Slider  -->
<!-- 
	TODO Dar estilo a los botones
	TODO Cuando se haga hover, los botones se deberan mostrar, en otros casos estaran escondidos
 -->
	<div id="slider" class="h-1/5 flex justify-center">
		<div class="slide w-8/12 bg-white flex justify-between px-8">
			<div class="flex items-center text-5xl"><i class="fa-solid fa-angle-left cursor-pointer"></i></div>
			<!-- <img src="img/slider-azada1.jpg" class="h-80" alt="Imagen de una azada"> -->
			<!-- Slide 1 -->
			<div class="active slider-show-details-par animate__animated animate__fadeInRight" style="background-image: url('img/slider-azada1.jpg');" data-number="1">
				<div></div>
				<div class="slider-show-details ">
					<button class="w-40 bg-yellow-400 rounded-md border-yellow-900 border-2 hover:bg-yellow-500">Ver detalles</button><br>
					<button class="w-40 bg-green-400 rounded-md border-green-900 border-2 hover:bg-green-500 mt-2">Añadir a la cesta</button>
				</div>
				<div class="slider-show-details inside-info">
					<span class="font-bold">Azadilla Multi-star</span><br>
					<span class="font-bold">Precio: </span><span>16.40€</span>
				</div>
			</div>
			<!-- Slide 2 -->
			<div class="not-active slider-show-details-par animate__animated" style="background-image: url('img/slider-bomba1.jpg');" data-number="2">
				<div></div>
				<div class="slider-show-details ">
					<button class="w-40 bg-yellow-400 rounded-md border-yellow-900 border-2 hover:bg-yellow-500">Ver detalles</button><br>
					<button class="w-40 bg-green-400 rounded-md border-green-900 border-2 hover:bg-green-500 mt-2">Añadir a la cesta</button>
				</div>
				<div class="slider-show-details inside-info">
					<span class="font-bold">Bomba de piscina Sena</span><br>
					<span class="font-bold">Precio: </span><span>239.95€</span>
				</div>
			</div>
			<!-- Slide 3 -->
			<div class="not-active slider-show-details-par animate__animated" style="background-image: url('img/slider-hamaca1.jpg');" data-number="3">
				<div></div>
				<div class="slider-show-details ">
					<button class="w-40 bg-yellow-400 rounded-md border-yellow-900 border-2 hover:bg-yellow-500">Ver detalles</button><br>
					<button class="w-40 bg-green-400 rounded-md border-green-900 border-2 hover:bg-green-500 mt-2">Añadir a la cesta</button>
				</div>
				<div class="slider-show-details inside-info">
					<span class="font-bold">Hamaca lona</span><br>
					<span class="font-bold">Precio: </span><span>29.50€</span>
				</div>
			</div>
			<!-- Slide 4 -->
			<div class="not-active slider-show-details-par animate__animated" style="background-image: url('img/slider-pala1.jpg');" data-number="4">
				<div></div>
				<div class="slider-show-details ">
					<button class="w-40 bg-yellow-400 rounded-md border-yellow-900 border-2 hover:bg-yellow-500">Ver detalles</button><br>
					<button class="w-40 bg-green-400 rounded-md border-green-900 border-2 hover:bg-green-500 mt-2">Añadir a la cesta</button>
				</div>
				<div class="slider-show-details inside-info">
					<span class="font-bold">Pala Expert</span><br>
					<span class="font-bold">Precio: </span><span>37.50€</span>
				</div>
			</div>
			<!-- Slide 5 -->
			<div class="not-active slider-show-details-par animate__animated" style="background-image: url('img/slider-destornillador1.jpg');" data-number="5">
				<div></div>
				<div class="slider-show-details ">
					<button class="w-40 bg-yellow-400 rounded-md border-yellow-900 border-2 hover:bg-yellow-500">Ver detalles</button><br>
					<button class="w-40 bg-green-400 rounded-md border-green-900 border-2 hover:bg-green-500 mt-2">Añadir a la cesta</button>
				</div>
				<div class="slider-show-details inside-info">
					<span class="font-bold">Destornillador Multi-star Outils Wolf</span><br>
					<span class="font-bold">Precio: </span><span>58.95€</span>
				</div>
			</div>
			<!-- Slide 6 -->
			<div class="not-active slider-show-details-par animate__animated" style="background-image: url('img/slider-piscina1.jpg');" data-number="6">
				<div></div>
				<div class="slider-show-details ">
					<button class="w-40 bg-yellow-400 rounded-md border-yellow-900 border-2 hover:bg-yellow-500">Ver detalles</button><br>
					<button class="w-40 bg-green-400 rounded-md border-green-900 border-2 hover:bg-green-500 mt-2">Añadir a la cesta</button>
				</div>
				<div class="slider-show-details inside-info">
					<span class="font-bold">Piscina Bestway Fast</span><br>
					<span class="font-bold">Precio: </span><span>39.95€</span>
				</div>
			</div>
			<!-- Slide 7 -->
			<div class="not-active slider-show-details-par animate__animated" style="background-image: url('img/slider-mesa1.jpg');" data-number="7">
				<div></div>
				<div class="slider-show-details ">
					<button class="w-40 bg-yellow-400 rounded-md border-yellow-900 border-2 hover:bg-yellow-500">Ver detalles</button><br>
					<button class="w-40 bg-green-400 rounded-md border-green-900 border-2 hover:bg-green-500 mt-2">Añadir a la cesta</button>
				</div>
				<div class="slider-show-details inside-info">
					<span class="font-bold">Mesa Catering plegable Rossini</span><br>
					<span class="font-bold">Precio: </span><span>112.95€</span>
				</div>
			</div>
			<!-- Slide 8 -->
			<div class="not-active slider-show-details-par animate__animated" style="background-image: url('img/slider-rastrillo1.jpg');" data-number="8">
				<div></div>
				<div class="slider-show-details ">
					<button class="w-40 bg-yellow-400 rounded-md border-yellow-900 border-2 hover:bg-yellow-500">Ver detalles</button><br>
					<button class="w-40 bg-green-400 rounded-md border-green-900 border-2 hover:bg-green-500 mt-2">Añadir a la cesta</button>
				</div>
				<div class="slider-show-details inside-info">
					<span class="font-bold">Escoba para hojas Multi-star</span><br>
					<span class="font-bold">Precio: </span><span>36.70€</span>
				</div>
			</div>
			<!-- Slide 9 -->
			<div class="not-active slider-show-details-par animate__animated" style="background-image: url('img/slider-set-sulam.jpg');" data-number="9">
				<div></div>
				<div class="slider-show-details ">
					<button class="w-40 bg-yellow-400 rounded-md border-yellow-900 border-2 hover:bg-yellow-500">Ver detalles</button><br>
					<button class="w-40 bg-green-400 rounded-md border-green-900 border-2 hover:bg-green-500 mt-2">Añadir a la cesta</button>
				</div>
				<div class="slider-show-details inside-info">
					<span class="font-bold">Set Sulam-7 Acero Hevea Jardin</span><br>
					<span class="font-bold">Precio: </span><span>225.00€</span>
				</div>
			</div>
			<div class="flex items-center text-5xl"><i class="fa-solid fa-angle-right cursor-pointer"></i></div>
		</div>
	</div>
<!-- End slider -->
<!-- Categorías destacadas -->
	<div class="w-4/6 mx-auto text-xl mt-3" id="selected-category">
		<span class="spanish">Categorías populares</span><span class="english">Popular categories</span>
	</div>
<!-- START categories -->
	<div class="w-4/6  mx-auto flex justify-around mt-4">
		<div class="inline-block">
			<div class="rounded-lg shadow-lg bg-white max-w-sm">
				<a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
					<img class="rounded-t-lg w-full" src="img/cat-mobiliario.jpg" alt="" />
				</a>
				<div class="p-6">
					<h5 class="text-gray-900 text-xl font-medium mb-2 text-center">
						<span class="spanish">Mobiliario</span><span class="english">Furniture</span>
					</h5>
					<p class="text-gray-700 text-base mb-8 h-8 w-64">
						<span class="spanish">Compra algunas decoraciones para tu precioso jardín</span>
						<span class="english">Buy some furniture for your beatiful garden</span>
					</p>
					<div class="flex justify-center">
						<button type="button"
							class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded 
								shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
								active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
							<span class="spanish">Ir</span>
							<span class="english">Go</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="inline-block">
			<div class="rounded-lg shadow-lg bg-white max-w-sm">
				<a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
					<img class="rounded-t-lg w-full" src="img/cat-herramientas.jpg" alt="" />
				</a>
				<div class="p-6">
					<h5 class="text-gray-900 text-xl font-medium mb-2 text-center">
						<span class="spanish">Herramientas</span>
						<span class="english">Tools</span>
					</h5>
					<p class="text-gray-700 text-base mb-8 h-8 w-64">
						<span class="spanish">Echa un vistazo a nuestras herramientas de jardín</span>
						<span class="english">Take a look on our garden's tools</span>
					</p>
					<div class="flex justify-center">
						<button type="button"
							class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase 
								rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none 
									focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
							<span class="spanish">Ir</span>
							<span class="english">Go</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="inline-block">
			<div class="rounded-lg shadow-lg bg-white max-w-sm">
				<a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
					<img class="rounded-t-lg w-full" src="img/cat-piscina.jpg" alt="" />
				</a>
				<div class="p-6">
					<h5 class="text-gray-900 text-xl font-medium mb-2 text-center">
						<span class="spanish">Piscinas</span>
						<span class="english">Pools</span>
					</h5>
					<p class="text-gray-700 text-base mb-8 h-8 w-64">
						<span class="spanish">¿No te apetece un bañito?</span>
						<span class="english">Don't you feel for a swim?</span>
					</p>
					<div class="flex justify-center">
						<button type="button"
							class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase 
								rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
								focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
							<span class="spanish">Ir</span>
							<span class="english">Go</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
<!-- Fin categorias destacadas -->`;



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
		$.ajax({
			type: "get",
			url: "http://localhost/tiendajquery/getAllItems.php",
			dataType: "json",
			success: function (response) {
				console.log(response);
				let myProd = `<div class="text-4xl h-16 text-center bg-blue-50 mb-12">
					<span class="spanish">Todos los productos</span>
					<span class="english">All products</span>
				</div><div class="flex flex-wrap w-11/12 mx-auto">`;
				response.forEach(producto => myProd += `
				<div class="flex justify-center mr-6 mb-6">
					<div class="flex flex-col align-center justify-between w-96 rounded-lg bg-white shadow-lg">
					  <img class=" w-full h-96 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="${producto.imagen}" alt="" />
					  <div class="p-6 flex flex-col justify-start">
						<h5 class="text-gray-900 text-xl font-medium mb-2">${producto.nombre}</h5>
						<p class="text-gray-700 text-base mb-4">
						  ${producto.descripcion}
						</p>
						<p class="text-gray-600 text-xl"><span class='spanish'>Precio</span><span class='english'>Price</span>: ${producto.precio}€</p>
						<p class="text-gray-600 text-md"><span class='spanish'>Disponibles</span><span class='english'>Available</span>: ${producto.cantidad}</p>
						<button type="button" class="mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"><span class='spanish'>Añadir al carrito</span><span class='english'>Add to cart</span></button>
					  </div>
					</div>
				  </div>`)

				myProd += `</div>`  
			
				$('#main-container').html(myProd);

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
		$('#main-container').html(homeTemplate);

		if( $('#home').hasClass('oculto-en') ) {
			$('.english').hide();
		}
		else {
			$('.spanish').hide();

		}
	});

	$(document).on('click','#show-furniture', function() {
		$.ajax({
			type: "get",
			url: "http://localhost/tiendajquery/getCategoryItems.php?categoria='mobiliario'",
			dataType: "json",
			success: function (response) {
				console.log(response);
				let myProd = `<div class="text-4xl h-16 text-center bg-blue-50 mb-12">
					<span class="spanish">Todos los productos</span>
					<span class="english">All products</span>
				</div><div class="flex flex-wrap w-11/12 mx-auto">`;
				response.forEach(producto => myProd += `
				<div class="flex justify-center mr-6 mb-6">
					<div class="flex flex-col align-center justify-between w-96 rounded-lg bg-white shadow-lg">
					  <img class=" w-full h-96 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="${producto.imagen}" alt="" />
					  <div class="p-6 flex flex-col justify-start">
						<h5 class="text-gray-900 text-xl font-medium mb-2">${producto.nombre}</h5>
						<p class="text-gray-700 text-base mb-4">
						  ${producto.descripcion}
						</p>
						<p class="text-gray-600 text-xl"><span class='spanish'>Precio</span><span class='english'>Price</span>: ${producto.precio}€</p>
						<p class="text-gray-600 text-md"><span class='spanish'>Disponibles</span><span class='english'>Available</span>: ${producto.cantidad}</p>
						<button type="button" class="mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"><span class='spanish'>Añadir al carrito</span><span class='english'>Add to cart</span></button>
					  </div>
					</div>
				  </div>`)

				myProd += `</div>`  
			
				$('#main-container').html(myProd);

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
		$.ajax({
			type: "get",
			url: "http://localhost/tiendajquery/getCategoryItems.php?categoria='herramientas'",
			dataType: "json",
			success: function (response) {
				console.log(response);
				let myProd = `<div class="text-4xl h-16 text-center bg-blue-50 mb-12">
					<span class="spanish">Todos los productos</span>
					<span class="english">All products</span>
				</div><div class="flex flex-wrap w-11/12 mx-auto">`;
				response.forEach(producto => myProd += `
				<div class="flex justify-center mr-6 mb-6">
					<div class="flex flex-col align-center justify-between w-96 rounded-lg bg-white shadow-lg">
					  <img class=" w-full h-96 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="${producto.imagen}" alt="" />
					  <div class="p-6 flex flex-col justify-start">
						<h5 class="text-gray-900 text-xl font-medium mb-2">${producto.nombre}</h5>
						<p class="text-gray-700 text-base mb-4">
						  ${producto.descripcion}
						</p>
						<p class="text-gray-600 text-xl"><span class='spanish'>Precio</span><span class='english'>Price</span>: ${producto.precio}€</p>
						<p class="text-gray-600 text-md"><span class='spanish'>Disponibles</span><span class='english'>Available</span>: ${producto.cantidad}</p>
						<button type="button" class="mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"><span class='spanish'>Añadir al carrito</span><span class='english'>Add to cart</span></button>
					  </div>
					</div>
				  </div>`)

				myProd += `</div>`  
			
				$('#main-container').html(myProd);

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
		$.ajax({
			type: "get",
			url: "http://localhost/tiendajquery/getCategoryItems.php?categoria='piscinas'",
			dataType: "json",
			success: function (response) {
				console.log(response);
				let myProd = `<div class="text-4xl h-16 text-center bg-blue-50 mb-12">
					<span class="spanish">Todos los productos</span>
					<span class="english">All products</span>
				</div><div class="flex flex-wrap w-11/12 mx-auto">`;
				response.forEach(producto => myProd += `
				<div class="flex justify-center mr-6 mb-6">
					<div class="flex flex-col align-center justify-between w-96 rounded-lg bg-white shadow-lg">
					  <img class=" w-full h-96 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="${producto.imagen}" alt="" />
					  <div class="p-6 flex flex-col justify-start">
						<h5 class="text-gray-900 text-xl font-medium mb-2">${producto.nombre}</h5>
						<p class="text-gray-700 text-base mb-4">
						  ${producto.descripcion}
						</p>
						<p class="text-gray-600 text-xl"><span class='spanish'>Precio</span><span class='english'>Price</span>: ${producto.precio}€</p>
						<p class="text-gray-600 text-md"><span class='spanish'>Disponibles</span><span class='english'>Available</span>: ${producto.cantidad}</p>
						<button type="button" class="mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"><span class='spanish'>Añadir al carrito</span><span class='english'>Add to cart</span></button>
					  </div>
					</div>
				  </div>`)

				myProd += `</div>`  
			
				$('#main-container').html(myProd);

				if( $('#home').hasClass('oculto-en') ) {
					$('.english').hide();
				}
				else {
					$('.spanish').hide();

				}

			}
		});
	})


	// $('#go-login-btn').click(function() {
	// 	let usu = $('#login-user').prop('value');
	// 	let usuPass =$('#login-pass').prop('value')

	// 	$.ajax({
	// 		type: 'post',
	// 		url: "http://localhost/tiendajquery/checkUser";
	// 		data: {usuario:usu};
	// 		datatype: 'json';
	// 		success : function(response){
	// 			console.log(response);
	// 		}
	// 	});
	// });


});
