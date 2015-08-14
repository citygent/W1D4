  // debugger;
  // event.preventDefault(); - For form events, no form events in this exercise.

var basicButton = document.getElementById('basic-calc');
basicButton.addEventListener('click', basicGet);

function basicGet() {
  var basicOp = document.getElementById('basic-operation').value; // Gets value from dropdown, can return: +-*/
  var basicNum1 = parseFloat(document.getElementById('basic-num-1').value); // Set basicNum vars to ParseFloated value of user inputs on 
  var basicNum2 = parseFloat(document.getElementById('basic-num-2').value); // input boxes with IDs basic-num-1/2. 
  if (!isNaN(basicNum1)) { // checks if user has input numbers. 
    basicSum(basicNum1, basicNum2, basicOp); // Calls the function that does the maths, passes the above vars. 
  }
}
function basicSum(basicNum1, basicNum2, basicOp) {
  var basicAns;
  switch(basicOp) {
    case"+":
      basicAns = (basicNum1 + basicNum2).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
      break;
    case"-":
      basicAns = (basicNum1 - basicNum2).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
      break;
    case"/":
      basicAns = (basicNum1 / basicNum2).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
      break;
    case"*":
      basicAns = (basicNum1 * basicNum2).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
      break;      
    default:
      alert("How on earth did you manage that from a Dropdown?!"); // Developer humour is coming along!
  }
  // function to call show answer instead of below?
  var basicAnsBox = document.getElementById('basic-answer');
  var basicAnsDisplay = document.getElementById('basic-answer-alert'); 
  basicAnsBox.className = "show"; // displays Green Box for answer. 
  basicAnsDisplay.innerHTML = basicAns; // displays answer in Green Box
}

var bmiButton = document.getElementById('bmi-calc'); // the button
var bmiSelector = document.getElementById('bmi-units'); // the selector itself
var bmiUnit; // the value the selector is on
var bmiMassDisplay = document.getElementById('bmi-mass-unit'); // what unit the Mass is
var bmiHeightDisplay = document.getElementById('bmi-height-unit'); // what unit the Height is
var bmiMass = parseFloat(document.getElementById('bmi-mass').value);  // Sets bmiMass var to user input.
var bmiHeight = parseFloat(document.getElementById('bmi-height').value); // Sets bmiHeight var to user input.
var bmiAns;
var bmiAnsBox = document.getElementById('bmi-answer');
var bmiAnsDisplay = document.getElementById('bmi-answer-alert');

bmiSelector.addEventListener('change', bmiChange); // when selector changed, run bmiChange.
bmiButton.addEventListener('click', bmiSum);  // when button is clicked run bmiSum.

function bmiChange() { // When selector is changed, make display changes on page...
  bmiUnit = document.getElementById('bmi-units').value; 
    if (bmiUnit === 'imperial') {      
      bmiMassDisplay.innerHTML = "lb";
      bmiHeightDisplay.innerHTML = "in";
    }
    else if (bmiUnit === 'metric') {
      bmiMassDisplay.innerHTML = "kg";
      bmiHeightDisplay.innerHTML = "m";
    }
}
function bmiSum(bmiMass, bmiHeight) { // If there's time split this into bmiSum and bmiGet like with basic.
  bmiMass = parseFloat(document.getElementById('bmi-mass').value); // Get values from user input boxes and 
  bmiHeight = parseFloat(document.getElementById('bmi-height').value); // parses them.
  bmiUnit = document.getElementById('bmi-units').value; // What unit user selected by the dropdown.
  if (bmiUnit === 'imperial') {       // IMPERIAL MATHS
    bmiAns = ((bmiMass/(bmiHeight * bmiHeight)) * 703).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
    bmiAnsBox.className = "show";   // display green box on answer generation
    bmiAnsDisplay.innerHTML = bmiAns; // displays answer to page.
  }
  else if (bmiUnit === 'metric') { // METRIC MATHS
    bmiAns = (bmiMass / Math.pow(bmiHeight, 2)).toFixed(2); //.toFixed(2) rounds float answers to 2 decimal places.
    bmiAnsBox.className = "show";  // display green box on answer generation
    bmiAnsDisplay.innerHTML = bmiAns; // displays answer to page.
  }
}

// The output is a string: “Your trip will take 3.5 hours and cost $255.33.”
// time = distance/ speed. // cost = (distance/mpg) * $pg
var distance;
var mpg;
var cpg;
var speed;
var tripBox = document.getElementById('trip-answer');
var tripDisplay = document.getElementById('trip-answer-alert');
var tripButton = document.getElementById('trip-calc');

tripButton.addEventListener('click', tripSum);

function tripSum(distance, mpg, cpg, speed) {
  distance = parseFloat(document.getElementById('trip-distance').value);
  mpg = parseFloat(document.getElementById('trip-mpg').value);
  cpg = parseFloat(document.getElementById('trip-cost').value);
  speed = parseFloat(document.getElementById('trip-speed').value);
  tripAns = ("Your trip will take "+ (distance/speed).toFixed(1) +" hours and cost &#163;"+((distance/mpg)*cpg).toFixed(2));
  tripBox.className = "show";
  tripDisplay.innerHTML = tripAns;
}
  // For every 1 MPH over 60 MPH, reduce the the MPG by 2 MPG (i.e. a car that normally gets 30 mpg would only get 28 mpg if its speed were 61 mph. Yes this gets silly at high speed where mpg goes to zero or gets negative.)

