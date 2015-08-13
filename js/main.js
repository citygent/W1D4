console.log("lo Tosh got a Toshiba?");

// 1. write an event listener on the basic-calc button
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
  basicNum1 = document.getElementById('basic-num-1').value;
  basicNum2 = document.getElementById('basic-num-2').value;
  console.log(basicNum1);
  console.log(basicNum2);
  console.log('clicked!');
}