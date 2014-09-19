function initialize(){

		var mapOptions = {

			center: new google.maps.LatLng(49.0000,-8.0000),
			zoom: 6
		}

		var map = new google.maps.Map(document.getElementById("mapId"), mapOptions);
    	
    	$("#myModal").on("shown.bs.modal", function () {
        	google.maps.event.trigger(map, "resize");
    	});

	}

    google.maps.event.addDomListener(window, "load", initialize);
    