/* Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMI's using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

const massMark = 78; // kg
const massJohn = 92; // kg
const heightMark = 1.69; // m
const heightJohn = 1.95; // m

const bmiJohn = massJohn / heightJohn ** 2; // m over kg
const bmiMark = massMark / (heightMark * heightMark); // m over kg

console.log(bmiMark, bmiJohn);
const markHigherBMI = bmiMark > bmiJohn;
console.log(massMark, heightMark, massJohn, heightJohn);
console.log('It is ' + markHigherBMI + ' that Mark has a higher BMI than John');


const massMark2 = 95; // kg
const massJohn2 = 85; // kg
const heightMark2 = 1.88; // m
const heightJohn2 = 1.76; // m

const bmiJohn2 = massJohn2 / heightJohn2 ** 2; // m over kg
const bmiMark2 = massMark2 / heightMark2 ** 2; // m over kg

console.log(bmiMark2, bmiJohn2);
const markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(massMark2, heightMark2, massJohn2, heightJohn2);
console.log('It is ' + markHigherBMI2 + ' that Mark has a higher BMI than John');
