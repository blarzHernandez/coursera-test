var numberArray = [1,2,3,4,5,6,7,8,9];
console.log("Number array",numberArray);

function above5Filter(value) {
  return value >5;
}

var filteredNumberArray = numberArray.filter(above5Filter);

console.log("Filtered number array",filteredNumberArray);;
