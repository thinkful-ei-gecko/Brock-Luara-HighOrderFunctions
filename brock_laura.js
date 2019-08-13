'use strict';

/* function repeat(fn, n){
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

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES
*/

function hazardWarningCreator(typeOfWarning) {
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
alien('The Farm and the Crop circle');