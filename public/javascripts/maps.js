function initialize(){

		var mapOptions = {

			center: new google.maps.LatLng(0,0),
			zoom: 4
		}

		var map = new google.maps.Map(document.getElementById("mapId"), mapOptions);
	}

google.maps.event.addDomListener(window, "load", initialize);