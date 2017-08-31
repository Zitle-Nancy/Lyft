(function() {
	var cargarPagina = function(){
		var obtenerNumero = localStorage.getItem('numeroCel');
		$('#numero').text(obtenerNumero);
		$('#generarNumero').click(generarNumeroAleatorio);
		// concateno los eventos con un punto a esta accion se conoce chaining
		$('.numeroAleatorio').keyup(comprobarInputs).keyup(saltarInputs);
		$('.numeroAleatorio').keydown(validarNumeros);
		$('#comprobarClave').click(comprobarClave);
		generarNumeroAleatorio();
	}
	var generarNumeroAleatorio = function(){
		var numAlmacenadohtml = $('#numeroAlmacenado');
		var arregloNumero = [];
		for(var i=0; i<3; i++){
			var numeroRandom = Math.floor(Math.random()*10);
			arregloNumero.push(numeroRandom);
		}
		var serie = arregloNumero.join('');
		console.log(serie);
		localStorage.setItem('numeroAlmacenado',serie);
		//la alerta debe de ir antes del return
		swal("Tu codigo es:", "LAB " + serie );	
	}
	var comprobarInputs = function(){
		// obtener el boton
		var btnValidar = $(this).parents('.container').next().children().eq(0);
		var valido = true;
		$('.numeroAleatorio').each(function(indice, elemento){
			var inputs = $(elemento).val().trim().length;
			// primera validacion debe ser su longitud solo 1
			valido = valido && (inputs === 1);
			// queda true cuando los tres estan limpios
		});
		if(valido){
			btnValidar.removeAttr('disabled');
		}else{
			btnValidar.attr('disabled',true);
		}	
	}
	var validarNumeros = function(e){
		if(e.keyCode != 8 &&(e.keyCode < 48 || e.keyCode > 57)){
			e.preventDefault();
		}
	}
	var comprobarClave = function(serie){
		var arreglo = [];
		$('.numeroAleatorio').each(function(indice,elemento){
			var valorElemento = $(elemento).val();
			arreglo.push(valorElemento);
		});
		var arregloConcatenado = arreglo.join('');
		var obtenerNumeroAlmacenado = localStorage.getItem('numeroAlmacenado');
		if(arregloConcatenado === obtenerNumeroAlmacenado){
			location.href = "../view/formularioRegistro.html";
		}else{
			sweetAlert("Oops...", "Codigo incorrecto", "error");
		}
		$('.numeroAleatorio').val('');
	}
	var saltarInputs = function(){
		var elemento = $(this).val().length;
		var siguienteElemento = $(this).parent().next().children();
		var elementoAtributos = $(this).attr('maxlength');
		if (elemento == elementoAtributos){
			siguienteElemento.focus();	
		}
	}
	$(document).ready(cargarPagina);
})();