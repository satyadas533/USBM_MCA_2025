//mathematical operator:
let num1 = 5;
let num2 = 3;
let result = (num1 = num2); //addition

//multiplication
let result1 = num1 * num2;

//substraction
let result2 = num1 - num2;

//division
let result3 = num1 / num2;

//or

let num8 = 5;
let num9 = 3;
let result8 = num8 + num9; //addition operator
let result9 = num8 - num9; //substraction operator
let result7 = num8 * num9; //multiplication operator
let result6 = num8 / num9; //division operator

//modulus to find the remainder
//modulo operator

let num3 = 29;
let odd = num3 % 2;
console.log(odd);

// Exponential operator

let square = 2 ** 2;
let cube = 2 ** 3;
console.log(square); //4

// Relational operator :
// To compare two values
// '!' --> Not operator
console.log(10 > 5); //Boolean
console.log(10 < 5); //Boolean
console.log(5 >= 5); //Boolean
console.log(10 > !5); //Boolean
console.log(!5); //Boolean

//Equality operator :
// `==` : Value check
// `===` : Value and Data type check

console.log(5 == 5); //Boolean
console.log(5 == 6);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");

// Conditional
// if (condition) {
//true code to be executed here
//}

//Falsy value :
// false, 0, -0, "", ``, '', null, undefined, NAN

if (-0.0512) {
  console.log("It is true");
}

//Task-1:
//Given total_bill, discount_start_price if you satisfy the condition print discount
//Available otherwise print No discount

let total_bill = 750;
if (total_bill > 500) {
  console.log("Discount available");
} else {
  console.log("No Discount");
}

//Task-2
let age = 60;
if (age >= 60) {
  console.log("Adult and Senior");
} else if (age >= 18) {
  console.log("Adult");
} else {
  console.log("minor");
}

//Task3
//check if (male) and then check (22+) then he can able to marry

//check the vowel

let char = "a";

switch (char) {
  case "a":
    console.log("it's vowel");
    break;

  case "e":
    console.log("it's vowel");
    break;

  case "i":
    console.log("it's vowel");
    break;
  case "o":
    console.log("it's vowel");
    break;

  case "u":
    console.log("it's vowel");
    break;

  default:
    console.log("it's not a vowel");
    break;
}

// todo: print week of the day in switch statement

let day = 4;
switch (day) {
  case 1:
    console.log("it's  monday");
    break;
  case 2:
    console.log("it's tuesday");
    break;
  case 3:
    console.log("it's wednesday");
    break;
  case 4:
    console.log("it's thursday");
    break;
  case 5:
    console.log("it's friday");
    break;
  case 6:
    console.log("it's saturday");
    break;
  case 7:
    console.log("it's sunday");
    break;
  default:
    console.log("no other days");
    break;
}

// todo the  one year= 12 months,
let monthnumber = 12;
switch (monthnumber) {
  case 1:
    console.log("it's  january");
    break;
  case 2:
    console.log("it's february");
    break;
  case 3:
    console.log("it's march");
    break;
  case 4:
    console.log("it's april");
    break;
  case 5:
    console.log("it's may");
    break;
  case 6:
    console.log("it's june");
    break;
  case 7:
    console.log("it's july");
    break;
  case 8:
    console.log("it's august");
    break;
  case 9:
    console.log("it's september");
    break;
  case 10:
    console.log("it's october");
    break;
  case 11:
    console.log("it's november");
    break;
  case 12:
    console.log("it's december");
    break;

  default:
    console.log("no other month");
    break;
}

// r1 module :

const readline = require("readline");
//console.log(readline);

const r1 = readline.createInterface({
  input: ProcessingInstruction.stdin,
  output: ProcessingInstruction.stdout,
});

let item1, item2, item3;

r1.question("Enter item", (input1) => {
  item1 = pareseInt(input1);

  if (item1 % 2 !== 0) console.log("This is Odd:", item1);
});
