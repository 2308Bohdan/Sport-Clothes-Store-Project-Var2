let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.00520, lng: 36.23641},
    zoom: 15,
  });
}