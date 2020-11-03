'use strict'

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

// const calcTip = function(bill) {
//     if (bill <= 300 && bill >= 50) {
//         let tip = bill * 0.15;
//         return tip;
//     } else {
//         let tip = bill * 0.2;
//         return tip
//     }
// }

// const tip1 = calcTip(bill[0]);
// const tip2 = calcTip(bill[1]);
// const tip3 = calcTip(bill[2]);
// const tips = [tip1, tip2, tip3];

// const total1 = calcTotal(bill[0], tips[0]);
// const total2 = calcTotal(bill[1], tips[1]);
// const total3 = calcTotal(bill[2], tips[2]);
// const totals = [total1, total2, total3];



// function to calc tips
const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

// bills array
const bill = [125, 555, 44];
console.log(bill);

// tips array
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
console.log(tips);

// function to find totals
const calcTotal = (bill, tips) => bill + tips;

// totals array
const totals = [calcTotal(bill[0], tips[0]), calcTotal(bill[1], tips[1]), calcTotal(bill[2], tips[2])]
console.log(totals)
