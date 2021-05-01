source = "assets/data/allSites.json"

d3.json(source).then((d, i) => {
  // var list = d.map(d => d.address.state);
  // console.log(list)
  var usaData = d.filter(d => d.address.country == 'USA');
  var newStates = d3.group(usaData, a => a.address.state)
  var newLog = (newStates.get("CA"))


  console.log(newLog[0].status)



})
