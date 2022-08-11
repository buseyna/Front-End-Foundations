// address object
let address = {
    street: '123 Street St.',
    city: 'Los Angeles',
    state:'CA',
    printDetails: function(){
        console.log("My address is:" +
        this.street + ", " +
        this.city + ", " +
        this.state);
    }
}
//person object  
let person = {
    name: 'John Smith',
    address: address,
    printDetails: function(){
        console.log("My name is: " + person.name);
        this.address.printDetails();
    }
}
person.printDetails();


//person object  
let sperson = {
    firstName: 'John',
    lastName: 'Smith',
    getFullName: function() {
      return person.firstName + ' ' + person.lastName;
      //console.log(this.firstName + ' ' + this.lastName);
    }
  };

  sperson.getFullName();

  let ssperson = {
    firstName: 'Bubu',
    lastName: 'Smith',
    getFullName: function() {
      console.log(this.firstName + ' ' + this.lastName);
    }
  };
ssperson.getFullName();

  let carMiles = {
    odometer: 5000,
    traveled: 250,
    getUpdatedOdometer: function() {
      return this.odometer + this.traveled;
    }
  };
  
  carMiles.getUpdatedOdometer();

  //Given the user object, add a method named fullName that concatenates the firstName and lastName with a space in between. Remember to use this and be sure to return the concatenated result.
  let user = {
    firstName: "Coder",
    lastName: "Bill",
   fullName: function(){
    return this.firstName + ' ' + this.lastName;
  }
  };

//this Keyword Activity
/*In the product object that is provided, the cost and deliveryFee are in US dollars. Add a method named newPayments to the product object that sums the cost and deliveryFee and returns the result in cents (multiply by 100). Remember to use this and to return the result.*/

let product = {
  cost: 1200,
  deliveryFee: 200,
  newPayments: function(){
return (this.cost + this.deliveryFee) * 100; 
//console.log(this.cost + this.deliveryFee * 100);
 }
};
product.newPayments();


  