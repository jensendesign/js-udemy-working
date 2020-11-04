"use strict";

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

/*
const friend1 = 'Mike';
const friend2 = 'Steve';
const friend3 = 'Peter';

const friends = ['Mike', 'Steve', 'Peter'];
console.log(friends);

const y = new Array(1991, 2102, 1833, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Bill'
const bill = [firstName, 'Jensen', 2020 - 1965, 'designer', friends];
console.log(bill);

// exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
  console.log(ages);
  */

/*
  // add elements
const friends = ['Mike', 'Steve', 'Peter'];
const newLength = friends.push('Bob'); // also returns length
console.log(friends);
console.log(newLength);

friends.unshift('Tom');
console.log(friends);

// remove elements
friends.pop(); // last
const popped = friends.pop(); // returns removed element
console.log(friends);
console.log(popped);

const shifted = friends.shift();
console.log(friends);
console.log(shifted);

console.log(friends.indexOf('Steve'));

console.log(friends.includes('Steve'));
console.log(friends.includes('Bob'));
console.log(friends.includes('steve')); // strict equality

if (friends.includes('Mike')) {
  console.log('You have a friend called Mike');
}
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
x///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

*/

/*
// ////////////////
// Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(`Sorry, ${interestedIn} is not an option! Choose between firstName, lastName, age, job, and friends`);
}

jonas.location = "Spain";
jonas['twitter'] = '@jonas';
console.log(jonas);

// Challenge
// 'Jonas has three friends, and his best friend is called Michael'

console.log(jonas.firstName);
console.log(jonas.friends.length);
console.log(jonas.friends[0]);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);
*/

/*
// including function is a method in object
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann', // string
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'], // array
  hasDriversLicense: false, //boolean

  // calcAge: function(birthYear) { //function
  //   return 2037 - birthYear;
  // }

  // calcAge: function() {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  licenseBoolean: function () {
    if (this.hasDriversLicense) {
      this.licenseObject = "has a driver's license";
      return this.licenseObject;
    } else {
      this.licenseObject = "doesn't have a driver's license";
      return this.licenseObject;
    }
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year-old ${this.job}, and he ${this.hasDriversLicense ? "has a" : "don't have a"} driver's license.`
  }
};

jonas.calcAge();
jonas.licenseBoolean();
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas['calcAge'](1800));

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"

console.log(`${jonas.firstName} is a ${jonas.age}-year-old ${jonas.job}, and he ${jonas.licenseObject}.`);

console.log(jonas.getSummary());
*/

/* - FOR LOOP ---------------
// console.log('Lifting weights rep 1');
// console.log('Lifting weights rep 2');
// console.log('Lifting weights rep 3');
// console.log('Lifting weights rep 4');
// console.log('Lifting weights rep 5');
// console.log('Lifting weights rep 6');

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++ ) {
//   console.log(`Lifting weights repitition ${rep} 🏋️‍♂️`);
// }

for (let i = 1; i <= 10; i++ ) {
  console.log(`Lifting weights repitition ${i} 🏋️‍♂️`);
}

*/

/*
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

const types = [];
// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);
// console.log(jonasArray[3]);
// console.log(jonasArray[4]);
// 5 does NOT EXIST

// Loop through Array
for (let i = 0; i < jonasArray.length; i++) {
  // reading an array
  console.log(jonasArray[i], typeof jonasArray[i]);
  //construct an array from previous array - filling an array
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--- Break With Number ---')
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === 'number') break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}
*/

/* 
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

// typical order 0, 1, 2, 3...
// backwards 4, 3, 2, 1, 0


for (let i =jonas.length - 1; i >= 0 ; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 4; exercise++) {
  console.log(`----- Group ${exercise}`);
  let times = exercise + 2;
  for (let rep = 1; rep <= times; rep++) {
    console.log(`--Exercise ${exercise}, rep ${rep} 🏋️‍♂️`);
  }
}
*/

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++ ) {
//   console.log(`Lifting weights repetitions ${rep} 🏋️‍♂️`);
// }

// let rep = 1;
// while (rep <= 5) {
//   console.log(`Lifting weights reps ${rep} 🏋️‍♂️`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("BAM! a 6!");
}
