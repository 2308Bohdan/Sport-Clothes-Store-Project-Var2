let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.001560, lng: 36.231537},
    zoom: 15,
  });
}