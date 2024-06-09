function initMap() {
    var location = { lat: 40.7128, lng: -74.0060 }; // Coordinates for New York
    var map = new google.maps.Map(document.getElementById("google-map"), {
      zoom: 12,
      center: location,
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  