const source = "assets/data/ElectricCarData_Clean.csv";
var ctx = document.getElementById('myChart');

function init() {
  d3.csv(source).then((d) => {
    var brand = d.map(a => a.Brand);
    var model = d.map(a => a.Model);
    var accel = d.map(a => a.AccelSec);
    var range = d.map(a => a.Range_Km);
    var topspeed = d.map(a => a.TopSpeed_KmH);
    var efficiency = d.map(a => a.Efficiency_WhKm);
    var fastcharge = d.map(a => a.FastCharge_KmH);
    var rapidcharge = d.map(a => a.RapidCharge);
    var powertrain = d.map(a => a.PowerTrain);
    var plugtype = d.map(a => a.PlugType);
    var bodystyle = d.map(a => a.BodyStyle);
    var segment = d.map(a => a.Segment);
    var seats = d.map(a => a.Seats);
    var price = d.map(a => a.PriceEuro);

    var carInfo = d[1];
    var dropdownIds = model;
    let unique = [...new Set(dropdownIds)]
    unique.sort();
    console.log(unique)

    d3.select("#selDataset")
      .selectAll('option')
      .data(unique)
      .enter()
      .append('option')
      .attr('value', d => d)
      .text(d => d);

    d3.select("#car-data").append('ul')
      .html("")
      .attr("style", "list-style: none;")
      .attr("class", "list-group")
      .append('li').text(`Brand: ${carInfo.Brand}`)
      .append('li').text(`Model: ${carInfo.Model}`)
      .append('li').text(`Accel/Sec: ${carInfo.AccelSec}`)
      .append('li').text(`Range (Km): ${carInfo.Range_Km}`)
      .append('li').text(`Top Speed (KmH): ${carInfo.TopSpeed_KmH}`)
      .append('li').text(`Efficiency (WhKm): ${carInfo.Efficiency_WhKm}`)
      .append('li').text(`Fast Charge (KmH): ${carInfo.FastCharge_KmH}`)
      .append('li').text(`Rapid Charge: ${carInfo.RapidCharge}`)
      .append('li').text(`Powertrain: ${carInfo.PowerTrain}`)
      .append('li').text(`Plug Type: ${carInfo.PlugType}`)
      .append('li').text(`Body Style: ${carInfo.BodyStyle}`)
      .append('li').text(`Segment: ${carInfo.Segment}`)
      .append('li').text(`Seats: ${carInfo.Seats}`)
      .append('li').text(`Price (Euro): ${carInfo.PriceEuro}`)
      console.log(price)
    d3.selectAll('li').attr("list-group-item");
      carLabels = ['Accel/Sec', 'Range(Km)', 'Top Speed', 'Efficiency (WhKm)', 'Fast Charge (KmH)']
      var newData = [];
      newData = [(carInfo.AccelSec), (carInfo.Range_Km), (carInfo.TopSpeed_KmH), (carInfo.Efficiency_WhKm), (carInfo.FastCharge_KmH)];
      console.log(newData)
      var mixedChart = new Chart(ctx, {
          data: {
            datasets: [{
              type: 'bar',
              label: 'Bar Dataset',
              data: newData,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)'
          }],
          labels: carLabels
        },
          options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
              title: {
                display: true,
                text: carInfo.Model
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                stacked: true
              },
              x: {
                title: {
                  display: true,
                  text: ''
                }
              }
            }
          }

      })


// }});



})}
init();
var dropdown = d3.select("#selDataset");
var dataset = dropdown.property("value");

function optionChanged(dataset) {

  d3.csv(source).then((data) => {
    var input = data.filter(a => a.Model.toString() == dataset)[0]

    d3.select("#car-data").append('ul')
    var ul = d3.select("#car-data")
    ul
      .html("")
      .attr("style", "list-style: none;")
      .append('li').text(`Brand: ${input.Brand}`)
      .append('li').text(`Model: ${input.Model}`)
      .append('li').text(`Accel/Sec: ${input.AccelSec}`)
      .append('li').text(`Range (Km): ${input.Range_Km}`)
      .append('li').text(`Top Speed (KmH): ${input.TopSpeed_KmH}`)
      .append('li').text(`Efficiency (WhKm): ${input.Efficiency_WhKm}`)
      .append('li').text(`Fast Charge (KmH): ${input.FastCharge_KmH}`)
      .append('li').text(`Rapid Charge: ${input.RapidCharge}`)
      .append('li').text(`Powertrain: ${input.PowerTrain}`)
      .append('li').text(`Plug Type: ${input.PlugType}`)
      .append('li').text(`Body Style: ${input.BodyStyle}`)
      .append('li').text(`Segment: ${input.Segment}`)
      .append('li').text(`Seats: ${input.Seats}`)
      .append('li').text(`Price (Euro): ${input.PriceEuro}`);
    var newData = [];
    newData = [(input.AccelSec), (input.Range_Km), (input.TopSpeed_KmH), (input.Efficiency_WhKm), (input.FastCharge_KmH)];
    var chart = Chart.getChart("myChart");
    d3.selectAll("#selDataset").on("change", chart.destroy());
    carLabels = ['Accel/Sec', 'Range(Km)', 'Top Speed', 'Efficiency (WhKm)', 'Fast Charge (KmH)']
    var mixedChart = new Chart(ctx, {
        data: {
          datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: newData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)'
        }],
        labels: carLabels
      },
        options: {
          responsive: true,
          indexAxis: 'y',
          plugins: {
            title: {
              display: true,
              text: input.Model
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              stacked: true
            },
            x: {
              title: {
                display: true,
                text: ''
              }
            }
          }
        }

    })
    })
  }
