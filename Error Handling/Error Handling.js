const average = arrayOfNumbers => {
    if(typeof arrayOfNumbers == 'undefined' || arrayOfNumbers == null) {
     throw "Invalid input";   
    }
    if(arrayOfNumbers.length == 0) {
        throw "Empty input";
    }
    let total = 0.0;
    for (var i = 0; i < arrayOfNumbers.length; i++){
        total += arrayOfNumbers[i];
    }
    return total / arrayOfNumbers.length;
}

//==

const testData = data => {
    var result = 0;
    console.log("----");
    try{
        result = average(data);
        console.log("The average is" + result);
    }
    catch(err){
        console.log("ERROR:" + err);
    }
    finally {
       console.log("Completed testing" + data);
    }
}

let validData = [1, 2, 3, 4, 5]; // average = 3
let emptyData = []; // error = empty
let nullData = null; //error = invalid
let undefinedData; // error = invalid

testData(validData);
testData(emptyData);
testData(nullData);
testData(undefinedData);

//====================================
// try {
//     // code block goes here
//   } catch (err) {
//     // error handling
//   }
//====================================

//Look at an example of an errorless code snippet:

try {
    alert('Start of try block'); // #1 This line runs first
  
    // No errors occurred so you move on to number #2
  
    alert('End of try block'); // #2 This line runs next
  } catch (err) {
    alert('Catch is ignored because there are no errors'); // #3 This is line ignored due to there being no errors.
  }
  
  alert('...Then the execution continues'); // #4 This alert is executed
  //====================================
  //look at an example that contains an error:

  try {
    alert('Start of try block'); // #1 This line executes
  
    randomVariable; // error, variable is not defined!
  
    alert('End of try (never reached)'); // #2 This line is never reached
  } catch (err) {
    alert('Error has occurred!'); // #3 This is line executed since an error has occurred.
  }
  
  alert('...Then the execution continues'); // #4 Finally, this is executed.

  //=========================================
  //Look at the syntax structure for a try...catch...finally:
  try {
    // Block of code to try
  } catch (err) {
    // Block of code to handle errors
  } finally {
    // Block of code to be executed regardless of the try..catch result
  }

  //============================================

  function myFunction() {
    let message = document.getElementById("message");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
        if(x == "") throw "Please input a number";
        if(x < 10) throw "Your number is too low!";
        if(x > 25) throw "Your number is too high!";
    }
    catch(err) {
        message.innerHTML = "Input " + err;
    }
    finally {
        document.getElementById("demo").value = "";
    }
    
}
