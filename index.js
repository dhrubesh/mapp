mapboxgl.accessToken = 'pk.eyJ1IjoiZGhydWJlc2hoIiwiYSI6ImNqMnAyMWJydDAyaWQycXBoNWo0YmF1dnkifQ.YQSKbXX4vPTiVQTnsk0S7w';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v9',
center: [78.962880, 20.593684],
  zoom: 4,
  hash: true,
  renderWorldCopies: true,
  trackResize: true
});
