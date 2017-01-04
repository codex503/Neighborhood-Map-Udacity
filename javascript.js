 var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.700936, lng: -73.712909},
          zoom: 14
        });
      }