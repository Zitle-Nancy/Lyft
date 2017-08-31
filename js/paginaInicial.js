var cargarPagina = function() {
	$('#btn-registrate').click(registrate);
}

var registrate = function(){
	location.href = "registrate.html";
}

$(document).ready(cargarPagina);