'use strict';

function repeat(fn, n){
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
