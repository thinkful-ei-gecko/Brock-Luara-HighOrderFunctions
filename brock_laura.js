"use strict";

/*function repeat(fn, n){
  for (let i = 0; i < n; i++){
    fn();
  }
}

function hello(){
  console.log('Hello World');
}

repeat(hello, 5);

function goodbye(){
  console.log('Goodbye Cruel World');
}

repeat(goodbye, 5);



function filter(arr, fn) {
  let newArray = [];
  for (let i=0; i<arr.length; i++) {
    if ( fn(arr[i]) ) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const predicate = (name) => {
  return name[0] === 'R';
};
const filteredNames = filter(myNames, predicate);

console.log(filteredNames) */
// => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

/*function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return location => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);

    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${warningCounter === 1 ? 'time' :'times'}.`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const godzilla = hazardWarningCreator('GODZIIIRRRRAAAAA');
const alien = hazardWarningCreator('Aliens in the sky');

rocksWarning('Downtown and EastTown');
godzilla('The City and the Beach');
alien('The Farm and the Crop circle');*/

//TURTLE STEPS::::::::::

/*let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let forwardLeftMoves = turtleSteps.filter(stepCombo => stepCombo[0] >= 0 && stepCombo[1] >= 0);

let stepCounter = forwardLeftMoves.map(summingFunction);

function summingFunction(move) {
  return move[0] + move[1];
}

console.log(stepCounter);

let forward = 0;
let leftward = 0;

let tallies = forwardLeftMoves.forEach(totalUp);

function totalUp(move) {
  forward += move[0];
  leftward += move[1];
  return `Forward move total: ${forward}, Leftward move total: ${leftward}`;
}

console.log(tallies);*/

//REDUCE:::::::
//NOTE: W3 schools says that .reduce is a mathematical type of operation
//so it's not clear how to use that with an array of strings...
// this doesn't work, but some parts are probably good

// second attempt
const input =
  'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const newArr = input.split('');
let decoder = newArr.reduce((decodeString, word) => {
  if (word.length === 3) {
    return decodeString + '';
  } else {
    return decodeString + word[word.length - 1].toUpperCase();
  }
}, '');
console.log(decoder);

// first attempt
/* let newArray = function convertToArray(string) {
  let stringArray = string.split(" ");
  console.log(stringArray);
  return stringArray;
}
convertToArray(input);
console.log(newArray);

function decoder(array) {
  let initialValue = "";
  newArray.reduce(word) {
    if (word.length === 3) {
      initialValue += " ";
    }
    else {
      let endLetter = word.lastIndexOf();
      initialValue += word[endLetter].toUpperCase();
    }
  }
  console.log(initialValue);
  return initialValue;
};
decoder(newArray);

*/
