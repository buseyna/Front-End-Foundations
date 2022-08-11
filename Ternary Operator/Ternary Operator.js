const person = {
    name:"Bob",
    height: 70, //inches
    shoeHeight: 1, //inches
    hatHeight: 2, //inches
    getHeight: function(wearingClothes = false, withHat = false){
        var height = this.height;

        // if (wearingClothes){
        //     height += this.shoeHeight
        //     if(withHat){
        //         height += this.hatHeight;
        //     }
        // }

        // height += wearingClothes ? this.shoeHeight: 0;
        // height += (wearingClothes && withHat) ? this. hatHeight: 0;
        //same above but in another way
        height += wearingClothes ? (withHat ? (this.shoeHeight + this.hatHeight) : this.shoeHeight) : 0;

        return height;
    }
}
let heightNotClothes = person.getHeight();  // = 70
let heightWithClothes = person.getHeight(true);  // = 71
let heightWithClothesHat = person.getHeight(true, true);  // = 72

console.log("Height without clothing:" + heightNotClothes);
console.log("Height with clothing:" + heightWithClothes);
console.log("Height with clothing:" + heightWithClothesHat);

//==================================

//Ex:

let age1 = 17;

const isOldEnough = age1 >= 18 ? 'Welcome to our site.' : 'Sorry; you must be 18 or older to enter.';

console.log(isOldEnough);

//The if...else equivalent to this would be:

let age = 17;

if (age >= 18) {
  ('Welcome to our site.');
} else {
  ('Sorry, you must be 18 or older to enter');
}

//==========================
let isOdd = false;

isOdd ? console.log(1) : console.log(2);

let isOddb = true;

isOddb ? console.log(1) : console.log(2);
//==============================
let pokemon = 130;

const title = pokemon < 145 ? 'New Trainer' : 'Master';

console.log(title);
//===========================
let age2 = 6;

const inKindergarten = age2 < 5 ? ' Too young' : 'Old Enough';
//=================
