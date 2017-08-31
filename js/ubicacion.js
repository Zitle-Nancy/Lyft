(function() {

	var cargarPagina = function() {
		comprobarNavegador();
	}

	function comprobarNavegador() {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(obtenerUbicacion, function(error){
				console.log(error);
			});
		}else{
			alert('Tu navegador no soporta el GPS');
		}
	}

	function obtenerUbicacion(position) {
		var coordenadas = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				}	
		mostrarMapa(coordenadas);
	}

	function mostrarMapa(coordenadas) {
		// console.log(coordenadas);
		var mapa = new google.maps.Map($('#mapa')[0], {
			zoom: 18,
			center: coordenadas
		});
		var marcador = new google.maps.Marker({
			position: coordenadas,
			map: mapa,
			title: 'Tu ubicación'
		});
		// codigo para obtener la ubicacion 
		var geocoder = new google.maps.Geocoder;
 		var infowindow = new google.maps.InfoWindow;
 		// mandamos a llamar a la funcion
 		geocodeLatLng(geocoder, mapa, infowindow);
	}

	function geocodeLatLng(geocoder, mapa, infowindow) {
		var coordenadasDireccion = mapa.center;
		/* mostramos la propiedad lat, pero como es una funcion
		que retorna el valor de lat, debemos llamar a la 
		funcion para ver el resultado que nos arroja y lo hacemos asi*/
		console.log(coordenadasDireccion.lat()); 
		var latlng = {
			lat: coordenadasDireccion.lat(),
		 	lng: coordenadasDireccion.lng()
		 };
		 
		 geocoder.geocode({'location': latlng}, function(results, status) {
		 	if (status === 'OK') {
		 		if (results[1]) {
		 			mapa.setZoom(18);
		 			var marker = new google.maps.Marker({
		 				position: latlng,
		 				map: mapa,
		 				title: 'aqui estas'
		 			});
		 			/* podemos cambiar el 0 al 8 de acuerdo a la informacion
		 			que necesitamos */
		 			var direccionInfo = results[0].formatted_address;
		 			/* esos es el cuadrito del dialogo y lo comento porque no 
		 			lo quiero visible
		 			infowindow.setContent(direccionInfo); 
		 			infowindow.open(mapa, marker); */
		 			$('#direccion').text(direccionInfo);
		 		} else {
		 			window.alert('No results found');
		 		}
		 	} else {
		 		window.alert('Geocoder failed due to: ' + status);
		 	}
		 });
	}

	$(document).ready(cargarPagina);
})();


// clave 

// AIzaSyC-cMvZ8V6F7KdwOCsedg6qe6kLVeQwcXQ