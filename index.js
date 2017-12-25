function takeANumber(line,name){
<<<<<<< HEAD
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line,name){
  for (let i = 0; i < line.length; i++){
  return `Currently serving ${line.shift(name)}.`
  }
  return "There is nobody waiting to be served!"
}
function currentLine(line, name){
if (line.length === 0){ 
  return "The line is currently empty."
}
var lineNow = [];
for(var i=0; i < line.length; i++) {
    lineNow.push(i+1 + ". "+ line[i]);
  }
<<<<<<< HEAD
  return "The line is currently: " + lineNow.join(', ');
}
=======
=======
  return 
>>>>>>> fbdf453b855cbe538e62ea867d3edd072871ac98
}
>>>>>>> 40e083ae303259928e0d148e27c907ec383fb408
