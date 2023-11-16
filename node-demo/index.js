let goodMorning = "goodMorning";

console.log(goodMorning);

let {
  LN10,
  Matrix,
  Unit,
  add,
  sum,
  subtract,
  multiply,
  divide,
  round,
  atan,
  log,
  sqrt,
  pow,
  chain,
  done,
  e,
  atan2,
  pi
} = require("mathjs");

let round1 = round(e, 3); // 2.718
let atan1 = atan2(3, -3) / pi; // 0.75
let log1 = log(10000, 10); // 4
let sq1 = sqrt(16); // 2i
let pow1 = pow(
  [
    [-1, 2],
    [3, 1],
  ],
  2
); // [[7, 0], [0, 7]]

// chaining
let result = chain(3).add(4).multiply(12).done(); // 14

console.log(round1, "round");
console.log(atan1, "atan");
console.log(log1, "log");
console.log(sq1, "sq");
console.log(pow1, "pow");
console.log(result, "result");
