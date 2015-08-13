console.log("lo Tosh got a Toshiba?");

// TICK 1. write an event listener on the basic-calc button
// 2. inside the function on that event listener collect the values from the user and store them in variables
// 3. do the relevant calculations on those variables
// 4. show the answer div
// 5. update the text of the answer div accordingly

var basicButton = document.getElementById('basic-calc');
var basicNum1;
var basicNum2;

basicButton.addEventListener('click', clicked);

function clicked() {
  // debugger;
  // event.preventDefault();
  basicNum1 = document.getElementById('basic-num-1').value; // sets basicNum vars to value of user inputs on 
  basicNum2 = document.getElementById('basic-num-2').value; // boxes with IDs basic-num-1/2. 
  basicOp = document.getElementById('basic-operation').value; // Gets value from dropdown, can return: +-*/
  console.log(basicNum1);
  console.log(basicNum2);
  console.log(basicOp);
  console.log('clicked!');
}