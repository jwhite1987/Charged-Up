source = "static/data/allSites.json"

d3.json(source).then((d, i) => {
  usaData = d.filter(a => a.address.country == 'USA');
  console.log(
  [... new Set(usaData.map(obj=>obj['address']['state']))].forEach(state=>d3.select('select').append('option').text(state))
)
})

var dropdown = d3.select("#selDataset");
var dataset = dropdown.property("value");

function optionChanged(dataset) {
  d3.json(source).then((d, i) => {
    var newData = d.filter(a => a.address.state == dataset);
    console.log(newData)
    d3.select("tbody")
      .html("");
    d3.select("tbody")
      .selectAll("tr")
      .data(newData)
      .enter()
      .append("tr")
      .html(function(d) {
        return `<td>${d.name}</td><td>${d.address.street}</td><td>${d.status}</td>`;
      });
  d3.select(".total")
    .html(`Total: ${newData.length}`)

})}
