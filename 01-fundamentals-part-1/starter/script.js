// JavaScript Fundamentals - Part 1
// We'll write our code here!

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("=== VARIABLES ===");

let firstName = "Agatha";
console.log(firstName);

let age = 19;
age = 20
console.log(age);

const birthYear = 2005;
console.log(birthYear);

const PI = 3.1415;
console.log(PI);

const country = "Philippines";
const language = "Filipino";
const population = 100;

// let firstName = "Agatha";
let myCurrentJob = "Designer";

console.log("=== DATA TYPES ===");

// let age = 20;
console.log(age);
console.log(typeof age);

// let firstName = "Agatha";
console.log(firstName);
console.log(typeof firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year); 
console.log(typeof year); 

let dynamicVariable = 12;
console.log(dynamicVariable, typeof dynamicVariable); [23, "number"]

dynamicVariable = "Now I'm a string!";
console.log(dynamicVariable, typeof dynamicVariable); ["Now I'm a string!", "string"]

dynamicVariable = true;
console.log(dynamicVariable, typeof dynamicVariable); [true, "boolean"]

console.log("=== Exercise 1: Personal Info Variables ===");

// Create these variables about yourself:
// 1. Your first name (const)
const myfirstName = "Agatha";
// 2. Your age (let - it changes every year!)
let myAge = 20;
// 3. Your favorite number (const)
const favoriteNumber = 707;
// 4. Whether you like JavaScript so far (boolean)
let likesJavaScript = true;

// Log each variable and its type to the console
console.log("First Name:", myfirstName, "// Type:", typeof myfirstName);
console.log("Age:", myAge, "// Type:", typeof myAge);
console.log("Favorite Number:", favoriteNumber, "// Type:", typeof favoriteNumber);
console.log("Likes JavaScript:", likesJavaScript, "// Type:", typeof likesJavaScript);

console.log("=== Exercise 2: Variable Reassignment ===");

// 1. Create a let variable called 'score' with value 100
let score = 100; 
// 2. Log it to the console
console.log("Initial Score:", score);
// 3. Change it to 150
score = 150;
// 4. Log it again
console.log("Updated Score:", score);
// 5. Try the same with const - what happens?
const constScore = 200;
console.log("Initial Const Score:", constScore);
constScore = 250;
console.log("Updated Const Score:", constScore);
// Updated const score threw an error :script.js:91 Uncaught TypeError: Assignment to constant variable.

console.log("=== Exercise 3: Data Type Detective ===");

// Use typeof to check the data type of these values:
console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);

// What do you think each one will return?
// I think it will return or print the data type of each value as follows:
// "number"
// "string"
// "boolean"
// "undefined"
