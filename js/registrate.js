(function(){
	var cargarPagina = function() {
		//saber en cuanto la tecla sea presionada
		$('#icon_telephone').keyup(validarInput);
		//saber el codigo una vez que la tecla es presionada
		$('#icon_telephone').keydown(validarNumeros);
		$('#btn-siguiente').click(redireccionar);

	}
	var redireccionar = function(){
		var numero = $('#icon_telephone').val();
		localStorage.setItem('numeroCel', numero);
		location.href = 'validar.html';
		$('#icon_telephone').val('');
	}
	var validarInput = function(){
		var inTelefono = $(this).val().trim().length;	
		var obtenerBtn = $(this).parents('.container').next().children();
		// console.log(obtenerBtn);
		if(inTelefono != 10){
			obtenerBtn.attr('disabled',true);
		}else{
			obtenerBtn.removeAttr('disabled');
		}
	}
	var validarNumeros = function(e){
		var inNumeros = $(this);
		// console.log(e.keyCode);
			if (e.keyCode !== 8 && (e.keyCode < 48 || e.keyCode > 57)){
			// console.log('numeros');
			  e.preventDefault();
			}	
	}

	$(document).ready(cargarPagina);
})();