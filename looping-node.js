// json
// array

// for loop

// functions

// type script

// angular

// string , boolean , integer , array , json

let myMessage = "good morning";

let endNumber = 100;

let isSwitchOn = true;

let classMarks = [100, 90, 10, 20, 35, 75, 60];

let akmMovie = {
  std: 8,
  height: "100cm",
  color: "brown",
  weight: 90,
  iq: 80,
  isAffected: false,
  allSubmarks: [10, 20, 30, 40, 12],
  // [key] : [value] -> value can be string, array , boolean , int , json
};

console.log(akmMovie.iq);

let BATAmensShow = {
  headerText: "BATA Mens Boss-ace Uniform Dress Shoe    ",
  brand: "bata",
  brandHref:
    "https://www.amazon.in/s/ref=bl_sl_s_sh_web_1571283031?ie=UTF8&node=1571283031&field-brandtextbin=BATA",
  rating: 3.6,
  price: 619,
  mrp: 999,
  discont: -38,
  brandVideo: "video-url",
};

console.log(BATAmensShow.brand);

// any json will have key value pairs ;;;

let arrays = [
  "BATA Mens Boss-ace Uniform Dress Shoe",
  "bata",
  "https://www.amazon.in/s/ref=bl_sl_s_sh_web_1571283031?ie=UTF8&node=1571283031&field-brandtextbin=BATA",
  ,
  3.6,
  619,
  999,
  -38,
];

console.log(arrays[0]);

let inputArray = [100, 2234, 5, 5234, 2, 1, 1, 3, 4, 6123, 2];

let result = 0;

// function getSum(inputArray) {
//   for (let i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] % 2 !== 0) {
//       result = inputArray[i] + result;
//     }
//   }
//   return result;
// }

// console.log(getSum(inputArray), "result");

function forLoopFunction(element) {
  result = element + result;
}

inputArray.forEach((element) => {
  result = element + result;
});

console.log(result, "result");

function myFunction(args) {}

let myFunctionArray = (args) => {};

// arrow function

let arrayOdds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

let evenArray = arrayOdds.map((element) => element + 1);

console.log(evenArray,'evenArray');

