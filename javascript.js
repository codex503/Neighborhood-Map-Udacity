 var map;
      // Create a new blank array for all the listing markers.
      var markers = [];
      function initMap() {
        // Constructor creates a new map - only center and zoom are required.
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7413549, lng: -73.9980244},
          zoom: 13,
          mapTypeControl: false
          
        });
        
        // These are the real estate listings that will be shown to the user.
        // Normally we'd have these in a database instead.
        var locations = [
          {title: 'Vapiano', 
           location: {lat: 40.738992, lng: -73.992482}
          },
          
          {title: "S'MAC", 
           location: {lat: 40.746166, lng: -73.979275}
          },

          {title: 'Amelie Wine Bar', 
           location: {lat: 40.735989, lng: -73.997670}
          },
          
          {title: 'Da Marcella', 
           location: {lat: 40.727556, lng: -73.999987}
          },
          
          {title: 'Carroll Place', 
           location: {lat: 40.732784, lng: -74.001135}
          },

          {title: "Olive's", 
           location: {lat: 40.726353, lng: -74.002082}
          }
        ];
        var largeInfowindow = new google.maps.InfoWindow();
        // The following group uses the location array to create an array of markers on initialize.
        for (var i = 0; i < locations.length; i++) {
          // Get the position from the location array.
          var position = locations[i].location;
          var title = locations[i].title;
          // Create a marker per location, and put into markers array.
           var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
          });
          // Push the marker to our array of markers.
          markers.push(marker);
          // Create an onclick event to open an infowindow at each marker.
          marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
          });
        }
        
      }


      // This function populates the infowindow when the marker is clicked. We'll only allow
      // one infowindow which will open at the marker that is clicked, and populate based
      // on that markers position.
      function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div>');
          infowindow.open(map, marker);
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
        }
      }


      