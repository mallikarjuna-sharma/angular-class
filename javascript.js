// concepts

// data types
// string , interger , array , json , boolean
// how to decalre a variable
// how to decalre a function
// how to call a function
// how to add two variables
// how to print a variable using console.logs
// how return variable from a function
// how to assign returned value from a function to a variable
// example ->let a  = getFunction()
// how to call a function from html tags to script tag

// what is document object
// event handlers like onclick

let variableName = "good morning";
let intergerName = 123123123;
let arrayName = [1, 2, 3, 4, 5, 6, false, true, "good"];
let booleanName = true;
let booName = false;
// arguments
// functions
// varialbe declaration
function subtractResults(number1, number2) {
  // let number1 = 100;
  // let number2 = 200;
  let result = number1 * number2;
  return result;
}
let resultFromFunction = subtractResults(3000, 2000);
console.log("result arrayName -> ", resultFromFunction);

function userClickedButton() {
  alert("called from userClickedButton ");
  document.getElementsByTagName("input")[0].value = "Coded from js";
  document.getElementById("user-name").style.visibility = "hidden";

  document.getElementById("submit-id").innerText = "Writtedn from JS";
}

function onInputChange() {
  console.log("logged from on input change");
}

function handleDarkClick() {
  document.body.style.backgroundColor = "black";
  document.getElementsByTagName("h1")[0].style.color = "white";
  document.getElementsByTagName("h6")[0].style.color = "white";
  document.getElementsByTagName("button")[0].style.color = "white";
}

function handleSubmitForm() {

  let age = document.getElementById("age").value;
  let dob = document.getElementById("dob").value;

  console.log(age);
  console.log(dob);
}

// user given inputs -> Js variables 
// user given events -> Js functions

// document
// how to get element from document
// how to set value to a html document 
// how to call a function on user click
// how to get value from html document 
// how to apply styles from document 

