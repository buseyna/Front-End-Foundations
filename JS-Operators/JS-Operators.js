let number = 0;

number = 5+3 - (2*4) + (2/2); //1

number += 5; //6
number -= 1; //5

let remainder = number % 4; //1

//---
let dequals = 5 == 4; //false

let dnotEquals = 5 !=4 ; //true

let ggreaterThan = 5 > 4; //true
ggreaterThan = 5 > 5; // false
let ggreaterThanOrEqual = 5 >= 5;// true


let lessThan = 5 < 4; //false
lessThan = 5 < 5; // false
let lessThanOrEqual = 5 <= 5;// true

let equals = 5 == '5'; // true
equals = 5 === '5'; ///false

let notEquals = 5 != '5'; //false
notEquals = 5 !== '5'; // true

//--

let hasBread = true;
let hasPeanutButter = true;
let hasJam = false;

let canMakerPBSandwich = hasBread && hasPeanutButter;
let canMakerPBJellySanswich = hasBread && hasPeanutButter && hasJam;

let canEat = canMakerPBSandwich || canMakerPBJellySanswich;

let isHungry = false;
let mustEat = true;

let didEat = canEat && (isHungry || mustEat);
isHungry = !didEat;


//Operators Activity
/*Using the logical operator for AND, complete the if statement to check if both of the variables even and odd are greater than 19.*/

let oodd = 7;
let eeven = 20;
let greaterThan;
if((eeven>19)||(oodd>19)){
    greaterThan = true;
}
else {
    greaterThan = false;
}

//Using the comparison operator for equal value and equal type, complete the if statement to check if even is equal to odd.
let odd = "20";
let even = 20;
let equalTo;
if(even === odd){
    equalTo = true;
}
else {
    equalTo = false;
}

//Spread Operator

function sumOfAllItems(arrayOfIntegers){
    let total = 0;
    for(let i = 0; i < arrayOfIntegers.length; i++) {
total += arrayOfIntegers[i];
    }
    return total;
}

let mary = [9, 11, 9];  //total = 29
let bill = [8, 14, 5];  //total = 26
let spike = [13, 4, 5]; //total = 22
                        //total = 77

let marySales = sumOfAllItems(mary);
let billSales = sumOfAllItems(bill);
let spikeSales = sumOfAllItems(spike);

let allSales = [...mary, ...bill, ...spike];
let totalSales = sumOfAllItems(allSales);

console.log("Mary sold = " + marySales);
console.log("Bill sold = " + billSales);
console.log("Spike sold = " + spikeSales);
console.log("Total cookies sold = " + totalSales);