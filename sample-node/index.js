let _ = require("lodash");

function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(_.lowerCase(year + "IS A LEAP YEAR"));
  } else {
    console.log(_.lowerCase(year + "IS NOT A LEAP YEAR"));
  }
}

// take input
const year = 2045;

checkLeapYear(year);
