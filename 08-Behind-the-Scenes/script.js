'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let outPut = `${firstName} is ${age} born in ${birthYear}`;
    console.log(outPut);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Create NEW vars
      const firstName = 'Mark'; // different var with same name - diff scope **
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      //   function add(a, b) {
      //     return a + b;
      //   }
      // Redefine var
      outPut = 'NEW OUTPUT';
    }
    console.log(millenial);
    console.log(outPut);
    // console.log(add(1, 2));
  }
  printAge();
  return age;
}

const firstName = 'Bill';

calcAge(1991);
