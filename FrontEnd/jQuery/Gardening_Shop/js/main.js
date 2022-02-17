// <-- Templates -->

let homeTemplate = `<!-- Slider main container -->
<div id="carouselExampleCaptions" class="carousel slide relative w-5/6 mx-auto" data-bs-ride="carousel">
	<div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
		<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
			aria-current="true" aria-label="Slide 1"></button>
		<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
			aria-label="Slide 2"></button>
		<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
			aria-label="Slide 3"></button>
	</div>
	<div class="carousel-inner relative w-full overflow-">
		<div class="carousel-item active relative float-left w-full">
			<img src="img/slode1.png" class="block w-full" alt="..." />
			<div class="carousel-caption  md:block absolute text-center">
				<h5 class="text-xl">First slide label</h5>
				<p>
					Some representative placeholder content for the first slide.
				</p>
			</div>
		</div>
		<div class="carousel-item relative float-left w-full">
			<img src="img/slode2.png" class="block w-full" alt="..." />
			<div class="carousel-caption  md:block absolute text-center">
				<h5 class="text-xl">Second slide label</h5>
				<p>
					Some representative placeholder content for the second slide.
				</p>
			</div>
		</div>
		<div class="carousel-item relative float-left w-full">
			<img src="img/slode3.png" class="block w-full" alt="..." />
			<div class="carousel-caption  md:block absolute text-center">
				<h5 class="text-xl">Third slide label</h5>
				<p>
					Some representative placeholder content for the third slide.
				</p>
			</div>
		</div>
	</div>
	<button
		class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
		type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
		<span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-="true"></span>
		<span class="visually-">Previous</span>
	</button>
	<button
	class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
	type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
	<span class="visually-">Next</span>
	<span class="carousel-control-next-icon inline-block bg-no-repeat" aria-="true"></span>
	</button>
</div>
<!-- Categorías destacadas -->
<div class="spanish w-5/6 mx-auto text-xl mt-3" id="selected-category">
	Categorías populares
</div>
<div class="english  w-5/6 mx-auto text-xl mt-3" id="selected-category">
	Popular
</div>
<!-- START spanish categories -->
<div class="spanish w-5/6 bg-slate-900 mx-auto flex justify-between mt-4">
	<div class="inline-block">
		<div class="rounded-lg shadow-lg bg-white max-w-sm">
			<a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
				<img class="rounded-t-lg w-full" src="img/cat-mobiliario.jpg" alt="" />
			</a>
			<div class="p-6">
				<h5 class="text-gray-900 text-xl font-medium mb-2 text-center">
					Mobiliario
				</h5>
				<p class="text-gray-700 text-base mb-8 h-8 w-64">
					Compra algunas decoraciones para tu precioso jardín
				</p>
				<div class="flex justify-center">
					<button type="button"
						class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ir</button>
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
					Herramientas
				</h5>
				<p class="text-gray-700 text-base mb-8 h-8 w-64">
					Echa un vistazo a nuestras herramientas de jardín
				</p>
				<div class="flex justify-center">
					<button type="button"
						class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ir</button>
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
					Piscinas
				</h5>
				<p class="text-gray-700 text-base mb-8 h-8 w-64">
					¿No te apetece un bañito?
				</p>
				<div class="flex justify-center">
					<button type="button"
						class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ir</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- END spanish categories -->
<!-- START english categories -->
<div class="english w-5/6 bg-slate-900 mx-auto flex justify-between mt-4">
	<div class="inline-block">
		<div class="rounded-lg shadow-lg bg-white max-w-sm">
			<a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
				<img class="rounded-t-lg w-full" src="img/cat-mobiliario.jpg" alt="" />
			</a>
			<div class="p-6">
				<h5 class="text-gray-900 text-xl font-medium mb-2 text-center">
					Furniture
				</h5>
				<p class="text-gray-700 text-base mb-8 h-8 w-64">
					Buy some furniture for your beatiful garden
				</p>
				<div class="flex justify-center">
					<button type="button"
						class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ir</button>
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
					Tools
				</h5>
				<p class="text-gray-700 text-base mb-8 h-8 w-64">
					Take a look on our garden's tools
				</p>
				<div class="flex justify-center">
					<button type="button"
						class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ir</button>
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
					Pools
				</h5>
				<p class="text-gray-700 text-base mb-8 h-8 w-64">
					Don't you feel like a swim?
				</p>
				<div class="flex justify-center">
					<button type="button"
						class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ir</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- END english categories -->
<!-- Fin categorias destacadas -->`;

let FormTemplate = `<div class="spanish flex justify-around">
<div class="w-1/5"></div>
<div class="block p-6 rounded-lg shadow-lg bg-white max-w-md w-1/5">
	<form>
	  <div class="form-group mb-6">
		<input type="text" class="form-control block
		  w-full
		  px-3
		  py-1.5
		  text-base
		  font-normal
		  text-gray-700
		  bg-white bg-clip-padding
		  border border-solid border-gray-300
		  rounded
		  transition
		  ease-in-out
		  m-0
		  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
		  placeholder="Nombre">
	  </div>
	  <div class="form-group mb-6">
		<input type="email" class="form-control block
		  w-full
		  px-3
		  py-1.5
		  text-base
		  font-normal
		  text-gray-700
		  bg-white bg-clip-padding
		  border border-solid border-gray-300
		  rounded
		  transition
		  ease-in-out
		  m-0
		  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
		  placeholder="Correo electronico">
	  </div>
	  <div class="form-group mb-6">
		<textarea
		class="
		  form-control
		  block
		  w-full
		  px-3
		  py-1.5
		  text-base
		  font-normal
		  text-gray-700
		  bg-white bg-clip-padding
		  border border-solid border-gray-300
		  rounded
		  transition
		  ease-in-out
		  m-0
		  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
		"
		id="exampleFormControlTextarea13"
		rows="3"
		placeholder="Cuentanos algo..."
	  ></textarea>
	  </div>
	  <div class="form-group form-check text-center mb-6">
		<input type="checkbox"
		  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
		  id="exampleCheck87" checked>
		<label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Quiero una copia de este mensaje</label>
	  </div>
	  <button type="submit" class="
		w-full
		px-6
		py-2.5
		bg-blue-600
		text-white
		font-medium
		text-xs
		leading-tight
		uppercase
		rounded
		shadow-md
		hover:bg-blue-700 hover:shadow-lg
		focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
		active:bg-blue-800 active:shadow-lg
		transition
		duration-150
		ease-in-out">Enviar</button>
	</form>
  </div>
  <div class="w-2/5">
	<img src="img/form-green-flowers.gif" alt="Watering flowers">
</div>
</div>
<div class="english flex justify-center">
<div class="w-1/5"></div>
<div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
	<form>
	  <div class="form-group mb-6">
		<input type="text" class="form-control block
		  w-full
		  px-3
		  py-1.5
		  text-base
		  font-normal
		  text-gray-700
		  bg-white bg-clip-padding
		  border border-solid border-gray-300
		  rounded
		  transition
		  ease-in-out
		  m-0
		  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
		  placeholder="Name">
	  </div>
	  <div class="form-group mb-6">
		<input type="email" class="form-control block
		  w-full
		  px-3
		  py-1.5
		  text-base
		  font-normal
		  text-gray-700
		  bg-white bg-clip-padding
		  border border-solid border-gray-300
		  rounded
		  transition
		  ease-in-out
		  m-0
		  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
		  placeholder="Email address">
	  </div>
	  <div class="form-group mb-6">
		<textarea
		class="
		  form-control
		  block
		  w-full
		  px-3
		  py-1.5
		  text-base
		  font-normal
		  text-gray-700
		  bg-white bg-clip-padding
		  border border-solid border-gray-300
		  rounded
		  transition
		  ease-in-out
		  m-0
		  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
		"
		id="exampleFormControlTextarea13"
		rows="3"
		placeholder="Tell us something..."
	  ></textarea>
	  </div>
	  <div class="form-group form-check text-center mb-6">
		<input type="checkbox"
		  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
		  id="exampleCheck87" checked>
		<label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this message</label>
	  </div>
	  <button type="submit" class="
		w-full
		px-6
		py-2.5
		bg-blue-600
		text-white
		font-medium
		text-xs
		leading-tight
		uppercase
		rounded
		shadow-md
		hover:bg-blue-700 hover:shadow-lg
		focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
		active:bg-blue-800 active:shadow-lg
		transition
		duration-150
		ease-in-out">Send</button>
	</form>
  </div>
  <div class="w-2/5">
	  <img src="img/form-green-flowers.gif" alt="Watering flowers">
  </div>
</div>`;

// <-- End Templates -->


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

	$('#cart, #close-cart').click(function() {
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
});
