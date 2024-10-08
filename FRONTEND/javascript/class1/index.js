console.log(address);

var address = "Bhubaneswar";

console.log(address);

//NULL
//let user;

let user =null;
//var user=null;
//const user=null;
console.log(typeof null); //object

let age = 23;
console.log("age");

// undefined
let data;
console.log(typeof data); //undefined
console.log(data);

//Number
let num1 =50;
let decimal_no=1.0001;
let pi=3.14;
let ge = 25;
let roll_no = 21;

//console.log(typeof null); //number

// todo addition , substraction, multiplication, and division then push it into your github account.

//addition
let num2=100;
let num3=125;
let addition = num2 + num3;
console.log(addition);

//Substraction

let num4=300;
let num5=200;
let substraction = num4 - num5;
console.log(substraction);

//multipilication

let num6=11;
let num7=11;
let mulltiplication = num6 * num7;
console.log(mulltiplication);

//division

let num8=400;
let num9=20;
let division = num8/num9;
console.log(division);


//string
let name='Satya'
let city="Bhubaneswar"
let age1=23;
let roll=2305274103;
let college="USBM"
let batch="MCA"
let varr= (`my name is: ${name}, i am from ${city},roll is: ${roll},and i am pursuing my mca degree from ${college}, city is: ${city} in batch is:  ${batch} `);
console.log(varr);

//BigInt
let huge_no = 4452434574546566767786643578999867654543566778787887;
console.log(typeof huge_no);

//symbol
let sym1 = Symbol("sym1");
let sym2 = Symbol("sym2");
console.log(sym1==sym2); //false

// NAN(Not a Number)
let num11 =0;
let num12 = 10;
console.log(num11/num12);

let numA ="SATYA";
let numB = 10;
console.log(numA/numB); //NAN

let numC = 0;
let numD = 10;
console.log(numC/numD);

//Boolean

let ismarried = false;
let issingle = true;
console.log(typeof ismarried); // boolean
console.log(typeof issingle); // boolean
console.log(ismarried);
console.log(issingle);


//to check the length of the  string
console.log(city.length);//11

let string =" satya ";
console.log(string.length);
console.log(string.length-2);

// type of coercion:
let score1 =100;
let score2 = "100"; 
let coercedaddition = score1 + score2 ;
console.log(coercedaddition);

console.log(score1-score2);
 
//let my_website = "www.qlith.com";
console.log(my_website.replace(".", "-"));


