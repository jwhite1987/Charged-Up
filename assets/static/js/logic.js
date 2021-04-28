var map = L.map("map", {
  center: [37.0902, -95.7129],
  zoom: 3,
  attributionControl: false
});

var map1 = L.map("map1", {
  center: [55.37, -3.44],
  zoom: 4,
  attributionControl: false
});

var map2 = L.map("map2", {
  center: [50.13, -95.35],
  zoom: 3,
  attributionControl: false
});

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  // attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY,
  zIndex: 0
}).addTo(map);

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  // attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY,
  zIndex: 0
}).addTo(map1);

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  // attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY,
  zIndex: 0
}).addTo(map2);

d3.json("assets/data/allSites.json").then(function(response) {
  var list = response;
  var newList = response.map((d, i) => d.address.country)
  let unique = [...new Set(newList)]
  console.log(unique)

  for (var index = 0; index < list.length; index++) {
    var charging = response[index].gps;
    if (response[index].address.country == 'USA') {
      L.circle([charging.latitude, charging.longitude], {opacity: 0.75, color: 'rgb(255, 99, 132)'}).addTo(map)
      .bindPopup(`${response[index].address.city}, ${response[index].address.state}`);}
    if (response[index].address.country == 'United Kingdom') {
      L.circle([charging.latitude, charging.longitude], {opacity: 0.75, color: 'rgb(255, 99, 132)'}).addTo(map1)
      .bindPopup(`${response[index].address.city}`);}
    if (response[index].address.country == 'Canada') {
      L.circle([charging.latitude, charging.longitude], {opacity: 0.75, color: 'rgb(255, 99, 132)'}).addTo(map2)
      .bindPopup(`${response[index].address.city}`);
    }
  }

});
