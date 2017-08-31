(function(){
	var terminos = $('#terminos'), 
		nombre = $('#nombre'),
		apellidos = $('#apellidos'),
		email = $('#email'),
		boton = $('#btn-siguiente'),
		datos = $('.datos');
	var validarCheckbox = false, validar = false;
	var cargarPagina = function() {
		terminos.change(comprobarCheckbox);
		nombre.keypress(comprobarLetras);
		apellidos.keypress(comprobarLetras);
		email.change(comprobarEmail).keyup(comprobarEmail);
		datos.keyup(comprobarLongitud);
		boton.click(direccionar);
	}
	var comprobarCheckbox = function() {
 		if($(this).is(':checked')){
			validarCheckbox = true;
		}else {
			validarCheckbox = false;
		}
		activarBoton();
	}
	var comprobarLetras = function(event) {
		// console.log(event.keyCode);
		if((event.keyCode != 8 && event.keyCode != 32) && (event.keyCode < 97 || event.keyCode > 122) && (event.keyCode < 65 || event > 90)){
			event.preventDefault();
		}
	}
	var comprobarEmail = function() {
		var expresionRegular = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
		var validarEmail = expresionRegular.test(email.val().trim());
		console.log('el correo es' + validarEmail);
		if(validarEmail){
			validar = true;
		}else {
			validar= false;
		}
		activarBoton();
	};
	var comprobarLongitud = function() {
		datos.each(function(indice, elemento) {
			// console.log(elemento);
			var inputs = $(elemento).val().trim().length;
			validar = validar &&(inputs > 0 && inputs <= 25);
			console.log(validar);
		});
		activarBoton();
	}
	var activarBoton = function() {
		console.log(validar);
		if(validar && validarCheckbox){
			boton.removeAttr('disabled');	
		}else{	
			boton.attr('disabled',true);	
		}
	}
	var direccionar = function(){
		location.href = "./ubicacion.html";
	}
	
	$(document).ready(cargarPagina);
})();