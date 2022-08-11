const ANIMAL_TYPE ={
    DOG: {type:"dog", sound: "woof"},
    CAT: {type:"cat", sound: "meow"},
    LION: {type:"lion", sound: "roar"},
}
const pet1 = {
    name: "Spike",
    type: ANIMAL_TYPE.DOG
}
const pet2 = {
    name: "Sylvester",
    type: ANIMAL_TYPE.CAT
}
const checkIfPet = pet => {
    switch(pet.type) {
        case ANIMAL_TYPE.DOG:
        case ANIMAL_TYPE.CAT:
            return true;
        default:
                return false;
    }
}
const checkIfDog = pet => {
    if(!checkIfPet(pet)){
        return pet.name + " is not a pet"
    }
    switch(pet.type){
        case ANIMAL_TYPE.DOG:
            return pet.name + " says" + pet.type.sound;
            default:
            return pet.name + " is not a " + ANIMAL_TYPE.DOG.type;    
    }
}

const checkIfCAT = pet => {
    if(!checkIfPet(pet)){
        return pet.name + " is not a pet"
    }
    switch(pet.type){
        case ANIMAL_TYPE.CAT:
            return pet.name + " says" + pet.type.sound;
            default:
            return pet.name + " is not a " + ANIMAL_TYPE.CAT.type;    
    }
}
console.log("CHECKING IF PETS ARE DOGS");
console.log(checkIfDog(pet1));
console.log(checkIfDog(pet2));

console.log("CHECKING IF PETS ARE CATS");
console.log(checkIfCAT(pet1));
console.log(checkIfCAT(pet2));


//Structure
// switch (expression) {
//     case value1:
//       statement1;
//       break;
//     case value2:
//       statement2;
//       break;
//     case value3:
//       statement3;
//       break;
//     default:
//       defaultStatement;
//   }
//   // replaicing if statement
//   if (expression == value1) {
//     statement1;
//   } else if (expression == value2) {
//     statement2;
//   } else if (expression == value3) {
//     statement3;
//   } else {
//     defaultStatement;
//   }
  //Swich statement
  let day = 4;
let dayName;
switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}
console.log(dayName);

//another ex:

let grade = 7;
let school;

switch (grade) {
  case 1:
    school = 'Elementary School';
    break;
  case 2:
    school = 'Elementary School';
    break;
  case 3:
    school = 'Elementary School';
    break;
  case 4:
    school = 'Elementary School';
    break;
  case 5:
    school = 'Elementary School';
    break;
  case 6:
    school = 'Middle School';
    break;
  case 7:
    school = 'Middle School';
    break;
  case 8:
    school = 'Middle School';
    break;
  case 9:
    school = 'High School';
    break;
  case 10:
    school = 'High School';
    break;
  case 11:
    school = 'High School';
    break;
  case 12:
    school = 'High School';
    break;
  default:
    school = 'Invalid Entry';
}

console.log(school);

//third ex:

let text;
switch (new Date().getDay()) {
  case 6:
    text = 'Today is Saturday';
    break;
  case 0:
    text = 'Today is Sunday';
    break;
  default:
    text = 'Darn, its a weekday. Looking forward to the weekend!';
}

console.log(text);