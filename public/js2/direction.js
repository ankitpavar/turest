/* eslint-disable */
const dbutton = document.querySelector('.dPanel');
const popup = document.querySelector('.popup-wrapper');
const popclose = document.querySelector('.popup-close');
const searchBtn = document.querySelector('#search-btn');
const output_block = document.querySelector('.login-form1')

dbutton.addEventListener('click', () => {
  popup.style.display = 'block';
});
popclose.addEventListener('click', () => {
  popup.style.display = 'none';
});
popup.addEventListener('click', () => {
  popup.style.display = 'none';
});

searchBtn.addEventListener('click', () => {
  output_block.style.display = 'block';
})

function initMap() {
  this.map = new google.maps.Map(document.getElementById('map1'), {
    zoom: 10,
    styles: [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#ebe3cd'
          }
        ]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#523735'
          }
        ]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#f5f1e6'
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#c9b2a6'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#dcd2be'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#ae9e90'
          }
        ]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dfd2ae'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dfd2ae'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#93817c'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#a5b076'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#447530'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f5f1e6'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#fdfcf8'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f8c967'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#e9bc62'
          }
        ]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e98d58'
          }
        ]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#db8555'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#806b63'
          }
        ]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dfd2ae'
          }
        ]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#8f7d77'
          }
        ]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#ebe3cd'
          }
        ]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dfd2ae'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#b9d3c2'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#92998d'
          }
        ]
      }
    ]
  });
  this.marker = new google.maps.Marker({
    map: map
  });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );
      this.map.setCenter(initialLocation);
      this.marker.setPosition(initialLocation);
    });
  }
}

function searchBox() {
  initMap();
  var searchBoxField = new google.maps.places.SearchBox(
    document.getElementById('search-from')
  );
  var searchBoxFieldTo = new google.maps.places.SearchBox(
    document.getElementById('search-to')
  );

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBoxField.setBounds(map.getBounds());
  });

  searchBoxField.addListener('places_changed', function() {
    var newSeachFrom = searchBoxField.getPlaces();
    var bounds = new google.maps.LatLngBounds();
    var i, newPlace;

    for (i = 0; (newPlace = newSeachFrom[i]); i++) {
      newFrom = newPlace.geometry.location;
      map.setCenter(newPlace.geometry.location);
      marker.setPosition(newPlace.geometry.location);
    }
  });
}

function animation() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function customIcon() {
  var image =
    'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  if (marker.getIcon() != null) {
    marker.setIcon(null);
  } else {
    marker.setIcon(image);
  }
}

function removeMarker() {
  if (marker.getMap() == null) {
    marker.setMap(map);
  } else {
    marker.setMap(null);
  }
}

function calculateDistance() {
  var selectedMode;
  if (
    typeof document.getElementById('mode') != 'undefined' &&
    document.getElementById('mode')
  ) {
    selectedMode = document.getElementById('mode').value;
  }
  this.map = new google.maps.Map(document.getElementById('map1'), {
    zoom: 15
  });
  var directionsDisplay = new google.maps.DirectionsRenderer({
      draggable: false
    }),
    directionsService = new google.maps.DirectionsService();

  directionsDisplay.setMap(map);
  document.getElementById('dPanel').innerHTML = '';
  directionsDisplay.setPanel(document.getElementById('dPanel'));
  source = document.getElementById('search-from').value;
  destination = document.getElementById('search-to').value;

  var request = {
    origin: source,
    destination: destination,
    travelMode: selectedMode
      ? google.maps.TravelMode[selectedMode]
      : google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [source],
      destinations: [destination],
      travelMode: selectedMode
        ? google.maps.TravelMode[selectedMode]
        : google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC
    },
    function(response, status) {
      if (
        status == google.maps.DistanceMatrixStatus.OK &&
        response.rows[0].elements[0].status != 'ZERO_RESULTS'
      ) {
        var distanceKm = response.rows[0].elements[0].distance.text;
        var duration = response.rows[0].elements[0].duration.text;
        var distance = document.getElementById('output');
        distance.innerHTML =
          "<select id='mode' onchange='calculateDistance()'><option value='DRIVING'>Drive</option><option value='WALKING'>Walk</option><option value='TRANSIT'>Bus</option></select><br />";
        distance.innerHTML += 'Distance between  ' + source + ' and ' + destination + ' is ' +distanceKm + '<br />';
        distance.innerHTML += 'and it will take you ' + duration;
      } else {
        alert('Unable to find the distance via road.');
      }
    }
  );
}
