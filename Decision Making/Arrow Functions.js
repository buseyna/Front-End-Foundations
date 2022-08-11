const power = (value, exponent =2) => value ** exponent;
//squaring: n^2 -- 3^2 = 9
// function square(value) {
//     return value * value;
// }
//converting to use error notation we dont not need return keyword 
//const square = value => value * value
const square = value => power(value);


//cubing: n^3 -- 3^3 = 27
// function cube(value) {
//     return value * value * value;
// }
//const cube = value => value * value * value;
const cube = value => power(value, 3);


//output
let value = 3;
let exp = 4;
console.log(square(value));
console.log(cube(value));
console.log(power(value, exp));


/*Write an arrow function named doubleAge that has a single parameter age and returns the product of age and 2.

HINT: The product of two numbers a and b is a * b.*/

// function  doubleAge(age) {
//     return age * 2;
//   }

  const doubleAge = age => age * 2
  let age = 20;

  console.log(doubleAge);
  //===================
  const doubleAge1 = (age) => {
    return age * 2;
  }

/*Write an arrow function named defaultParam that has two parameters:
parameter a
parameter b that has a default value of 10.
The function should return the product of a and b.*/

const defaultParam = (a, b = 10) => {
    return  [a , b];
}
const [a , b] = defaultParam();
console.log(defaultParam(a,b));