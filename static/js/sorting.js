source = "static/data/allSites.json"

d3.json(source).then((d, i) => {
  var usaData = d.filter(d => d.address.country == 'USA');
  var newStates = d3.group(usaData, a => a.address.state)
  var newLog = (newStates.get("CA"))



  console.log(newLog)

  console.log(


[... new Set(usaData.map(obj=>obj['address']['state']))].forEach(state=>d3.select('select').append('option').text(state))

  )




})
