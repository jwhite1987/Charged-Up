var ctx = document.getElementById('myChart');



d3.csv("assets/data/ElectricCarData_Clean.csv").then(data => {

// console.log(data.Brand);
var dropdownIds = data.map(d => d.Brand);
let unique = [...new Set(dropdownIds)];
unique.sort();

  d3.select("#selDataset")
    .selectAll('option')
    .data(unique)
    .enter()
    .append('option')
    .attr('value', data => data)
    .text(data => data);
    var brand = d3.select("#selDataset").property("value");
    var newData = data.filter(a => a.Brand == brand);
    console.log(newData)

var mixedChart = new Chart(ctx, {
    data: {
      datasets: [{
        type: 'bar',
        label: 'Bar Dataset',
        data: data.map(d => d.Range_Km),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)'
    }, {
        type: 'line',
        label: 'Line Dataset',
        data: data.map(d => d.FastCharge_KmH),
        fill: false,
        borderColor: 'rgb(54, 162, 235)'
    }],
    labels: newData.map(d => d.Model)
  },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Car Models per Brand'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          stacked: true,
          title: {
            display: true,
            text: 'Range and Fast Charge (Km/KmH)'
          }
        }
      }
    }

})

})
// var chart = Chart.getChart("myChart");

// d3.selectAll("#selDataset").on("change", optionChanged, chart.destroy());
var dropdown = d3.select("#selDataset");
var dataset = dropdown.property("value");

function optionChanged (dataset) {
  d3.csv("assets/data/ElectricCarData_Clean.csv").then(data => {
    var newData = data.filter(a => a.Brand == dataset);
    var chart = Chart.getChart("myChart");
    d3.selectAll("#selDataset").on("change", chart.destroy());
    var newChart = new Chart(ctx, {
        data: {
          datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: data.map(d => d.Range_Km),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)'
        }, {
            type: 'line',
            label: 'Line Dataset',
            data: data.map(d => d.FastCharge_KmH),
            fill: false,
            borderColor: 'rgb(54, 162, 235)'
        }],
        labels: newData.map(d => d.Model)
      },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Car Models per Brand'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              stacked: true,
              title: {
                display: true,
                text: 'Range and Fast Charge (Km/KmH)'
              }
            }
          }
        }
        // chart.update()
      })
    })
  }
