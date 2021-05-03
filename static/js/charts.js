source = "static/data/allSites.json"

d3.json(source).then((d, i) => {
  var usaData = d.filter(a => a.address.country == 'USA');
  var states = [... new Set(usaData.map(obj=>obj['address']['state']))]
  var ctx = document.getElementById('myChart');
  var count = {};
  usaData.map(a => a.address.state).forEach(function(i) { count[i] = (count[i]||0) + 1;});
  console.log(count);
  var mixedChart = new Chart(ctx, {
      data: {
        datasets: [{
          type: 'bar',
          label: 'Bar Dataset',
          data: count,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)'
      }],
      labels: states
    },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Charging Stations per State'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            stacked: true,
            title: {
              display: true,
              text: 'Number of Stations'
            }
          }
        }
      }
  })
})
const source2 = "static/data/ElectricCarData_Clean.csv";
var ctx2 = document.getElementById('myChart2');

function init() {
  d3.csv(source2).then((d) => {
    var brand = d.map(a => a.Brand);
    var model = d.map(a => a.Model);
    var range = d.map(a => a.Range_Km);

      var mixedChart = new Chart(ctx2, {
          data: {
            datasets: [{
              type: 'bar',
              label: 'Bar Dataset',
              data: range,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)'
          }],
          labels: (brand, model)
        },
          options: {
            responsive: true,
            indexAxis: 'x',
            plugins: {
              title: {
                display: true,
                text: 'Range per Model'
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                stacked: true,
                title: {
                  display: true,
                  text: 'Number of Stations'
              }},
              x: {
                title: {
                  display: true,
                  text: 'Models'
                }
              }
            }
          }

      })


// }});



})}
init();
