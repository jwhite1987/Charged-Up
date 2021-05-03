var map = L.map("map", {
  center: [35, -95],
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

d3.json("static/data/allSites.json").then((d, i) => {

  var newData = d.filter(a => a.address.country == 'USA');
  console.log(newData)



  for (var index = 0; index < newData.length; index++) {
    var charging = d[index].gps;
    if (d[index].address.country == 'USA') {
      L.circle([charging.latitude, charging.longitude], {opacity: 0.75, color: 'rgb(255, 99, 132)'}).addTo(map)
      .bindPopup(`${d[index].address.city}, ${d[index].address.state}`); }

    }})
