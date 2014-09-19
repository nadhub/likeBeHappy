app.run(function () {

	function init($scope){

		var input = document.getElementById("depart");

		var mapOptions = {
						center: new google.maps.LatLng(49.0000,-8.0000),
						zoom: 6
						}

		var map = new google.maps.Map(document.getElementById("mapId"), mapOptions);
    	
    	$("#myModal").on("shown.bs.modal", function () {
        	google.maps.event.trigger(map, "resize");
    	});


    	$scope.calculeRoute = function(){

    		var directionsService = new google.maps.DirectionsService();
    		var directiondisplay;
    		directiondisplay = new google.maps.DirectionsRenderer();
    		directiondisplay.setMap(map);
    		directiondisplay.setPanel(document.getElementById("panel"));

    		var start = document.getElementById("depart").value;
    		var end = document.getElementById("destination").value;
    		var request = {

    			origin: start,
    			destination : destination,
    			travelMode : google.maps.TravelMode.DRIVING
    		};

    		directionsService.route(request, function(result, status){

    			if (status == google.maps.DirectionsStatus.OK) {

    				directiondisplay.setDirections(result);
    			}else {
    				alert("Désolé il y a eu un souci lors du calcul. Voulez-vous réessayer ");
    			}
    		});
    	}
    	
	}

    google.maps.event.addDomListener(window, "load", init);

});

////////////////////
app.controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout){


	$scope.flashMessage = false;
	$scope.msg = "Nous recherchons le parcours le plus court pour vous...";

    $scope.showModal = function(){
    	
    	$scope.flashMessage = true; 

    	$timeout(function() {
    		$('#myModal').modal('show');   
    		$scope.flashMessage = false;
    
    	}, 1000);

    }	
        
        
    
}]);