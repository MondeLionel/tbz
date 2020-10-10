(function(){


// ****************************************************************** 
	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	function success(pos) {
		var crd = pos.coords;

		console.log('Your current position is:');
		console.log(`Latitude : ${crd.latitude}`);
		console.log(`Longitude: ${crd.longitude}`);
		console.log(`More or less ${crd.accuracy} meters.`);
	}

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	navigator.geolocation.getCurrentPosition(success, error, options);


	// ****************************************************************** 


	window.onload = function() {
		var startPos;
		var startPosLat;
		var startPosLong;
		var distance;

		if (navigator.geolocation) {

			startPosLat = -29.91708;
			startPosLong = 30.97528;

     	navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude + " is my current latitude");
        console.log(position.coords.longitude+ " is my current longitude");

        distance = calculateDistance(startPosLat, startPosLong,position.coords.latitude, position.coords.longitude)
        console.log(distance);

        if(distance < .05){
          console.log("Yes, were inside .05 KM!!! :) A+")
      } 
      if(distance > .05){
          console.log("No, not inside .05 KM :(")

      }
  });
  }	
};




// ****************************************************************** 




  // Reused code - copyright Moveable Type Scripts - retrieved May 4, 2010.
  // http://www.movable-type.co.uk/scripts/latlong.html
  // Under Creative Commons License http://creativecommons.org/licenses/by/3.0/
  function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = (lat2-lat1).toRad();
    var dLon = (lon2-lon1).toRad();
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
}
Number.prototype.toRad = function() {
	return this * Math.PI / 180;
}
})()