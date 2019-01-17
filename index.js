var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]

function dwarfRollCall(dwarves) {
 var array =[]
  for (var i=0;i<dwarves.length;i++){
    array.push(`${i+1}. ${dwarves[i]} `)
  }
  return array.join("")
}

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]

function summonCaptainPlanet(planeteerCalls){
 return planeteerCalls.map(a=>a.toUpperCase()+"!")
  return array.join(", ")
}

var words = ["earth", "wind", "heart", "fire"]

function longPlaneteerCalls(words){
  for(var i=0;i<words.length;i++){
    if (words[i].length>4){
      return true
    }
  }
  return false
}

var foods = ["cheddar", "gouda", "camembert"]

function findTheCheese (foods) {
  for(var i=0;i<foods.length;i++){
  if (foods[i]=="cheddar"
  ||foods[i]=="gouda"
  ||foods[i]=="camembert"
  ){
    return foods[i]
  }
}
return "no cheese!"
}