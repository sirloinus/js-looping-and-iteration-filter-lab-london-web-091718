function findMatching(drivers, name){
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, letters){
  let nameLength = letters.length
  return drivers.filter(driver => driver.slice(0, nameLength) === letters)
}

function matchName(drivers, name){
  return drivers.filter(driver => driver.name === name)
}
