// @autor: Nancy Zitle Juarez 
// Fecha de inicio : 06/06/2017
var cargarPagina = function() {
	setTimeout(function(){
		location.href = "./view/paginaInicial.html";
	},1000);
}

$(document).ready(cargarPagina);