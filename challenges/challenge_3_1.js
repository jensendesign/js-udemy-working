///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// Create array of temps
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

// Create empty array to push values
let tempString = [];

// Function to pull in array as argument
const printForecast = function (temps) {
  for (i = 0; i < temps.length; i++) {
    // - Loop through values
    // - push to array // with days // and literal
    tempString.push(` ${temps[i]}ºC in ${[i + 1]} days ...`);
  }
  let forecastString = tempString.join(); // construct string of varied length
  return `"...${forecastString}"`;
};

console.log(printForecast(arr2));
