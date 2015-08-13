// TICK 1. write an event listener on the basic-calc button
// TICK 2. inside the function on that event listener collect the values from the user and store them in variables
// TICK 3. do the relevant calculations on those variables
// TICK 4. show the answer div
// TICK 5. update the text of the answer div accordingly
  // debugger;
  // event.preventDefault();

var basicButton = document.getElementById('basic-calc');
var basicNum1; // input numbers
var basicNum2; 
var basicOp; // operator selected by user
var basicAns; // This is what is returned by the switch, below are display elements. 
var basicAnsBox = document.getElementById('basic-answer');
var basicAnsDisplay = document.getElementById('basic-answer-alert'); 

basicButton.addEventListener('click', basicGet);

function basicGet() {
  basicOp = document.getElementById('basic-operation').value; // Gets value from dropdown, can return: +-*/
  basicNum1 = parseFloat(document.getElementById('basic-num-1').value); // Set basicNum vars to ParseFloated value of user inputs on 
  basicNum2 = parseFloat(document.getElementById('basic-num-2').value); // input boxes with IDs basic-num-1/2. 
  basicSum(basicNum1, basicNum2); // Calls the function that does the maths. 
}

function basicSum(basicNum1, basicNum2) {
  switch(basicOp) {
    case"+":
      basicAns = (basicNum1 + basicNum2).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
      console.log(basicAns);
      basicAnsBox.className = "show";
      basicAnsDisplay.innerHTML = basicAns;
      break;
    case"-":
      basicAns = (basicNum1 - basicNum2).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
      console.log(basicAns);
      basicAnsBox.className = "show";
      basicAnsDisplay.innerHTML = basicAns;
      break;
    case"/":
      basicAns = (basicNum1 / basicNum2).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
      console.log(basicAns);
      basicAnsBox.className = "show";
      basicAnsDisplay.innerHTML = basicAns;
      break;
    case"*":
      basicAns = (basicNum1 * basicNum2).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
      console.log(basicAns);
      basicAnsBox.className = "show";
      basicAnsDisplay.innerHTML = basicAns;
      break;      
    default:
      alert("How on earth did you manage that from a Dropdown?!"); // Developer humour is coming along better than the coding!
  }
}

var bmiButton = document.getElementById('bmi-calc'); // the button
var bmiSelector = document.getElementById('bmi-units'); // the selector itself
var bmiUnit; // the value the selector is on
var bmiMassDisplay = document.getElementById('bmi-mass-unit'); // what unit the Mass is
var bmiHeightDisplay = document.getElementById('bmi-height-unit'); // what unit the Height is
var bmiMass = parseFloat(document.getElementById('bmi-mass').value);  // Sets bmiMass var to user input.
var bmiHeight = parseFloat(document.getElementById('bmi-height').value); // Sets bmiHeight var to user input.
var bmiAns;

bmiSelector.addEventListener('change', bmiChange); // when selector changed, run bmiChange.
bmiButton.addEventListener('click', bmiSum);  // when button is clicked do a thing.

function bmiChange() {
  bmiUnit = document.getElementById('bmi-units').value; // changes the value the selector is on
    if (bmiUnit === 'imperial') {                           // IF TIME: Change values user imputs when selector is changed.
      bmiMassDisplay.innerHTML = "lb";
      bmiHeightDisplay.innerHTML = "in";
      return bmiUnit;
    }
    else if (bmiUnit === 'metric') {
      bmiMassDisplay.innerHTML = "kg";
      bmiHeightDisplay.innerHTML = "m";
      return bmiUnit;
    }
}
function bmiSum(bmiMass, bmiHeight) {
  bmiMass = parseFloat(document.getElementById('bmi-mass').value);
  bmiHeight = parseFloat(document.getElementById('bmi-height').value);
  
  if (bmiUnit === 'imperial') {
    bmiAns = (bmiMass/(bmiHeight * bmiHeight)) * 703;
    console.log(bmiAns);
  }
  else if (bmiUnit === 'metric') {
    bmiAns = (bmiMass / Math.pow(bmiHeight, 2));
    console.log(bmiAns);
  }
}