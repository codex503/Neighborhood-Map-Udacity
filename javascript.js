var map;
      function initMap() {
        // Constructor creates a new map - only center and zoom are required.
        map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
          center: {lat: 40.7413549, lng: -73.9980244}
          
        });
      }
