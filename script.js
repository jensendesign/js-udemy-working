/* 
let js = "amazing";
console.log(49 + 4 + 112);

console.log('Jonas');
console.log(23);

let country = 'USA';
let continent = 'North America';
let population = '300';

console.log(country);
console.log(continent);
console.log(population + 'M'); 

var myJava = 2;
console.log(myJava);
console.log(typeof myJava);

var myUndefined;
console.log(myUndefined);
console.log(typeof myUndefined);

console.log(typeof null);


let age = 30;
// mutate variables 
age = 31;

const birthYear = 1967;


// math operators
const now = 2037;
const ageJohn = now - 1991;
const ageSara = now - 1943;
console.log(ageJohn, ageSara);
console.log(ageJohn * 2, ageJohn / 10, 2 ** 3);

const person1 = 'Bill';
const person2 = 'Steve';
console.log(person1 + " " + person2);

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //adding 1 101
x--; //minus 1 100
console.log(x);

// comparison operators
console.log(ageJohn < ageSara); // >, <, >=, <=
console.log(ageSara >= 95);

// exercise
const population = 300000000;
console.log(population / 2);
console.log(population + 1);
console.log(population > 6000000);
console.log(3300000 > population);
const description = 'Portugal is in Europe, and its 11 million people speak portuguese';


const now = 2037;
const ageJohn = now - 1991;
const ageSara = now - 1943;

console.log(now - 1991 > now - 1943);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJohn + ageSara) / 2;
console.log(ageJohn, ageSara);
console.log(averageAge);


const firstName = 'Bill';
const lastName = 'Jensen';
const birthYear = 1965;
const year = 2020;
const job = 'designer';

const bill = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(bill);

// -------- template literals

const billNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(billNew);

console.log(`I'm a design`);

console.log(`String with
multiple
lines`);
*/

// ------ decisions

// const age = 14;

// if (age >= 18) {
//   console.log("Sara is old enough to drive 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`No driving for Sara! Wait another ${yearsLeft} years. ⏳`);
// }

// const birthYear = 2001;

// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);


// SWITCH Statement -----------
// const day = 'sunday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan my course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Code examples');
//     break;
//   case 'friday':
//     console.log('Record video');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//     break;
//   default:
//     console.log('Not a valid day');
// }

// if (day === 'monday') {
//   console.log('Plan my course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Code examples');
// } else if (day === 'friday') {
//   console.log('Record video');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend');
// } else {
//   console.log('Not a valid day');
// }

// ----- Statements and Expressions

// 3 + 4 //expression   - produce value
// 1991 //expression   - produce value
// true && false && !false //expression   - produce value

// if (23 > 10) { // this is a statement - like a full sentence
//   const str = 'This is the answer'; // actions get performed
// }

// const me = 'Bill';
// console.log(`I'm ${me} expressions in literals`);

// Conditional - Ternary Operator

const age = 18;
// age >= 18 ? console.log('Drink wine 🍷') : console.log('Drink water 💦');

// const drink = age >= 18 ? 'drink wine 🍷' : 'drink water 💦';
// console.log(drink);

console.log(`I like to ${age >= 18 ? 'drink wine 🍷' : 'drink water 💦'} because I am ${age}.`)
