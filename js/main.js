// TICK 1. write an event listener on the basic-calc button
// TICK 2. inside the function on that event listener collect the values from the user and store them in variables
// TICK 3. do the relevant calculations on those variables
// 4. show the answer div
// 5. update the text of the answer div accordingly

var basicButton = document.getElementById('basic-calc');
var basicNum1;
var basicNum2;
var basicOp;
var basicAns;
var basicAnsBox = document.getElementById("basic-answer");
var basicAnsDisplay = 

basicButton.addEventListener('click', basicGet);

function basicGet() {
  // debugger;
  // event.preventDefault();
  basicOp = document.getElementById('basic-operation').value; // Gets value from dropdown, can return: +-*/
  basicNum1 = parseFloat(document.getElementById('basic-num-1').value); // Set basicNum vars to ParseFloated value of user inputs on 
  basicNum2 = parseFloat(document.getElementById('basic-num-2').value); // input boxes with IDs basic-num-1/2. 
  console.log(basicNum1); // REMOVE WHEN DONE
  console.log(basicNum2); // REMOVE WHEN DONE
  console.log(typeof basicNum1, typeof basicNum2); // REMOVE WHEN DONE
  console.log('clicked!'); // REMOVE WHEN DONE
    switch(basicOp) {
      case"+":
        basicAns = (basicNum1 + basicNum2).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
        console.log(basicAns);
        basicAnsBox.className = "show";
        break;
      case"-":
        basicAns = (basicNum1 - basicNum2).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
        console.log(basicAns);
        basicAnsBox.className = "show";
        break;
      case"/":
        basicAns = (basicNum1 / basicNum2).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
        console.log(basicAns);
        basicAnsBox.className = "show";
        break;
      case"*":
        basicAns = (basicNum1 * basicNum2).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
        console.log(basicAns);
        basicAnsBox.className = "show";
        break;      
      default:
        alert("How on earth did you manage that from a Dropdown?!"); // Developer humour is coming along better than the coding!
    }
}