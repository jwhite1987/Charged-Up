var margin = {top: 100, right: 0, bottom: 0, left: 0},
  width = 800 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom,
  innerRadius = 25,
  outerRadius = Math.min(width, height) / 2;

var svg = d3.select("#graph")
  .append("svg")
    // .attr("width", width + margin.left + margin.right)
    // .attr("height", height + margin.top + margin.bottom)
    .attr("viewBox", `0 0 800 600`)
  .append("g")
    .attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")");

d3.csv("assets/data/ElectricCarData_Clean.csv").then(data => {
  data.sort(function(a,b) { return a.Range_Km - b.Range_Km; });
  var x = d3.scaleBand()
    .range([0, 2* Math.PI])
    .align(0)
    .domain(data.map(d => d.Model));

  var y = d3.scaleRadial()
    .range([innerRadius, outerRadius])
    .domain([0, 800]);

  svg.append("g")
    .selectAll("path")
    .data(data)
    .enter()
    .append("path")
    .attr("fill", "#69b3a2")
    .attr("opacity", "1")
    .attr("d", d3.arc()     // imagine your doing a part of a donut plot
        .innerRadius(innerRadius)
        .outerRadius(function(d) { return y(d.Range_Km); })
        .startAngle(function(d) { return x(d.Model); })
        .endAngle(function(d) { return x(d.Model) + x.bandwidth(); })
        .padAngle(0.01)
        .padRadius(innerRadius))


  svg.append("g")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
      .attr("text-anchor", function(d) { return (x(d.Model) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
      .attr("transform", function(d) { return "rotate(" + ((x(d.Model) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (y(d.Range_Km)+10) + ",0)"; })
    .append("text")
      .text(function(d){return(`${d.Model}`)})
      .attr("transform", function(d) { return (x(d.Model) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
      .style("font-size", "8px")
      .style("font-weight", "bold")
      .attr("alignment-baseline", "middle")


    var yAxis = svg.append("g")
       .attr("text-anchor", "middle");
    var yTick = yAxis
      .selectAll("g")
      .data(y.ticks(5).slice(1))
      .enter().append("g");

    yTick.append("circle")
        .attr("fill", "none")
        .attr("stroke", "#000")
        .attr("opacity", "0.25")
        .attr("r", y);

    yTick.append("text")
        .attr("y", function(d) { return -y(d); })
        .attr("dy", "0.35em")
        .attr("fill", "none")
        .attr("stroke", "#fff")
        .attr("stroke-width", 5)
        .attr("opacity", "0.25")
        .text(y.tickFormat(5, "s"));

    yTick.append("text")
        .attr("y", function(d) { return -y(d); })
        .attr("dy", "0.35em")
        .attr("opacity", "0.25")
        .text(y.tickFormat(5, "s"));

    yAxis.append("text")
        .attr("y", function(d) { return -y(y.ticks(5).pop()); })
        .attr("dy", "-1em")
        .attr("opacity", "0.25")
        .text("Range (Km)");



});
