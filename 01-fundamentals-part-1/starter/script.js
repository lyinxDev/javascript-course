// // // // JavaScript Fundamentals - Part 1
// // // // We'll write our code here!

// // // let js = "amazing";
// // // console.log(40 + 8 + 23 - 10);

// // // console.log("=== VARIABLES ===");

// // // let firstName = "Agatha";
// // // console.log(firstName);

// // // let age = 19;
// // // age = 20
// // // console.log(age);

// // // const birthYear = 2005;
// // // console.log(birthYear);

// // // const PI = 3.1415;
// // // console.log(PI);

// // // const country = "Philippines";
// // // const language = "Filipino";
// // // const population = 100;

// // // // let firstName = "Agatha";
// // // let myCurrentJob = "Designer";

// // // console.log("=== DATA TYPES ===");

// // // // let age = 20;
// // // console.log(age);
// // // console.log(typeof age);

// // // // let firstName = "Agatha";
// // // console.log(firstName);
// // // console.log(typeof firstName);

// // // let javascriptIsFun = true;
// // // console.log(javascriptIsFun);
// // // console.log(typeof javascriptIsFun);

// // // let year;
// // // console.log(year); 
// // // console.log(typeof year); 

// // // let dynamicVariable = 12;
// // // console.log(dynamicVariable, typeof dynamicVariable); [23, "number"]

// // // dynamicVariable = "Now I'm a string!";
// // // console.log(dynamicVariable, typeof dynamicVariable); ["Now I'm a string!", "string"]

// // // dynamicVariable = true;
// // // console.log(dynamicVariable, typeof dynamicVariable); [true, "boolean"]

// // // console.log("=== Exercise 1: Personal Info Variables ===");

// // // // Create these variables about yourself:
// // // // 1. Your first name (const)
// // // const myfirstName = "Agatha";
// // // // 2. Your age (let - it changes every year!)
// // // let myAge = 20;
// // // // 3. Your favorite number (const)
// // // const favoriteNumber = 707;
// // // // 4. Whether you like JavaScript so far (boolean)
// // // let likesJavaScript = true;

// // // // Log each variable and its type to the console
// // // console.log("First Name:", myfirstName, "// Type:", typeof myfirstName);
// // // console.log("Age:", myAge, "// Type:", typeof myAge);
// // // console.log("Favorite Number:", favoriteNumber, "// Type:", typeof favoriteNumber);
// // // console.log("Likes JavaScript:", likesJavaScript, "// Type:", typeof likesJavaScript);

// // // console.log("=== Exercise 2: Variable Reassignment ===");

// // // // 1. Create a let variable called 'score' with value 100
// // // let score = 100; 
// // // // 2. Log it to the console
// // // console.log("Initial Score:", score);
// // // // 3. Change it to 150
// // // score = 150;
// // // // 4. Log it again
// // // console.log("Updated Score:", score);
// // // // 5. Try the same with const - what happens?
// // // const constScore = 200;
// // // console.log("Initial Const Score:", constScore);
// // // constScore = 250;
// // // console.log("Updated Const Score:", constScore);
// // // // Updated const score threw an error :script.js:91 Uncaught TypeError: Assignment to constant variable.

// // // console.log("=== Exercise 3: Data Type Detective ===");

// // // // Use typeof to check the data type of these values:
// // // console.log(typeof 42);
// // // console.log(typeof "Hello");
// // // console.log(typeof true);
// // // console.log(typeof undefined);

// // // // What do you think each one will return?
// // // // I think it will return or print the data type of each value as follows:
// // // // "number"
// // // // "string"
// // // // "boolean"
// // // // "undefined"

// // console.log("=== MATH OPERATORS ===");

// // const now = 2025;
// // const ageAgatha = now - 2005;
// // const ageWonwoo = now - 1996;
// // console.log(ageAgatha, ageWonwoo); // 20, 29

// // console.log(ageAgatha * 2, ageWonwoo / 10, 2 ** 3);

// // console.log("Math Operations:");
// // console.log("Addition:", 10 + 5); 
// // console.log("Subtraction:", 20 - 8); 
// // console.log("Multiplication:", 4 * 7);
// // console.log("Division:", 15 / 3); 
// // console.log("Exponentiation:", 2 ** 3); 

// // const firstName = "Agatha";
// // const lastName = "Filomeno";
// // console.log(firstName + " " + lastName); // "Agatha Filomeno"

// // console.log("Hello " + "World" + "!"); // "HelloWorld!"
// // console.log("I am " + 20 + " years old"); // "I am 20 years old"

// // console.log("=== ASSIGNMENT OPERATORS ===");

// // let x = 10 + 15; // 15
// // console.log("x starts as:", x);

// // x += 10;
// // console.log("After x += 10:", x);

// // x *= 4;
// // console.log("After x *= 4:", x);

// // x /= 2;
// // console.log("After x /= 2:", x);

// // x++;
// // console.log("After x++:", x); 

// // x--; 
// // console.log("After x-- twice:", x);

// // console.log("=== Exercise: Score Calculator ===");

// // // Practice assignment operators:
// // // 1. Create a variable 'score' with value 100
// // let score = 100;
// // // 2. Add 50 using +=
// // score += 50;  
// // // 3. Multiply by 2 using *=
// // score *= 2;    
// // // 4. Subtract 25 using -=
// // score -= 25;   
// // // 5. Use ++ twice
// // score++;    
// // score++;      
// // // 6. Log the final result
// // console.log("Final Score:", score);

// // console.log("For the final score to be 377, this is the right way:")

// // let score2 = 100;
// // score2 += 50; 
// // score2 *= 2;  
// // score2 += 75;
// // score2++;
// // score2++;      
// // console.log("Updated Final Score:", score2); 

// // console.log("=== COMPARISON OPERATORS ===");

// // console.log("Age Comparison:");
// // console.log(ageAgatha > ageWonwoo); 
// // console.log(ageAgatha >= 20);
// // console.log(ageWonwoo < 29);

// // console.log("Number Comparisons:");
// // console.log(25 > 20);
// // console.log(15 < 10);
// // console.log(18 >= 18);
// // console.log(16 <= 15);

// // const isFullAge = ageAgatha >= 18;
// // console.log("Agatha is an adult:", isFullAge);

// // const isWonwooOlder = ageWonwoo > ageAgatha;
// // console.log("Wonwoo is older:", isWonwooOlder);

// // console.log("Complex Comparisons:"); 'Complex Comparisons'
// // console.log(now - 1991 > now - 2018); true

// // console.log("=== Exercise: Age Verification ===");

// // // Create comparison examples:
// // const myAge = 20;
// // // 1. Compare your age to 18 (>=)
// // console.log("Is my Age greater than 18?", myAge >= 18); 
// // // 2. Check if 100 is greater than 99
// // console.log("Is 100 greater than 99?", 100 > 99); 
// // // 3. Store a comparison result in a variable
// // const isMinor = myAge < 18;
// // console.log("Am I still a minor?", isMinor);
// // // 4. Compare the result of two calculations
// // console.log("Is 5 + 5 greater than 2 * 3?", (5 + 3) > (2 * 3));

// // console.log("=== OPERATOR PRECEDENCE ===");

// // const rightNow = 2025;
// // const ageAgatha2 = rightNow - 2005;
// // const ageWonwoo2 = rightNow - 1996;

// // console.log(rightNow - 2005 > rightNow - 1996); // true
// // // Math first: (2025 - 2005) > (2025 - 1996)
// // // Then compare: 20 > 29 = false

// // let z, y;
// // z = y = 25 - 10 - 5;
// // console.log(x,y); 

// // const averageAge = (ageAgatha + ageWonwoo) / 2;
// // console.log(ageAgatha, ageWonwoo, averageAge);

// // console.log("=== BMI Calculator ===");

// // // TEST DATA 1
// // // const massMark = 78;
// // // const heightMark = 1.69;
// // // const massJohn = 92;
// // // const heightJohn = 1.95;

// // // TEST DATA 2
// // const massMark = 95;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;

// // // 1. Calculate BMIs
// // const bmiMark = massMark / heightMark ** 2;
// // const bmiJohn = massJohn / heightJohn ** 2;

// // // 2. Create markHigherBMI variable
// // const markHigherBMI = bmiMark > bmiJohn;

// // // 3. Log results to console
// // console.log("Mark's BMI: ", bmiMark);
// // console.log("John's BMI: ", bmiJohn);

// // console.log("Does Mark have higher BMI than John?", markHigherBMI);

// console.log("=== Strings and Template Literals ===");

// const firstName = "Agatha";
// const job = "Designer";
// const birthYear = 2005;
// const year = 2025;

// const agatha = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(agatha);

// console.log(`I'm ${2025 - 2005} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`); // true

// // You can use backticks for any string
// console.log(`Just a regular string...`);

// console.log("=== Exercise 1: Personal Introduction ===");

// // Create variables for:
// const myName = "Agatha";
// const myAge = 20; 
// const myJob = "Student";
// const currentYear = 2025;

// // Use template literals to create:
// console.log(`Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`);

// console.log("=== Exercise 2: Math in Templates ===");

// // Create a template literal that:
// // 1. Calculates your birth year: currentYear - myAge
// // 2. Shows a calculation: 10 * 5
// // 3. Includes a comparison: myAge >= 18
// console.log(`Born in ${currentYear - myAge}, 10*5 = ${10 * 5}, Adult: ${myAge >= 18}`);

// const age = 22;

// if (age >= 18) {
//   console.log("Micah can start driving with a license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Micah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear2 = 2005;

// let century;
// if (birthYear2 <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century); 

// const score = 83;

// if (score >= 60) {
//   console.log(`You passed with ${score} points! 🎉`);
//   console.log("Congratulations!");
// } else {
//   const pointsNeeded = 60 - score;
//   console.log(`You failed. Need ${pointsNeeded} more points.`);
// }

// console.log("=== Exercise 1: Grade Calculator ===");

// // Create a grade calculator:
// const testScore = 74;
// if (testScore >= 90) {
//   console.log("Excellent! Grade A");
// } else if (testScore >= 80) {
//   console.log("Good job! Grade B");
// } else if (testScore >= 70) {
//   console.log("Not bad! Grade C");
// } else if (testScore >= 60) {
//   console.log("You passed! Grade D");
// } else {
//   console.log("You failed! Study harder");
// }

// console.log("=== Exercise 2: Age Verification ===");


// // Create an age verification system:
// const userAge = 8;

// if (userAge >= 18) {
//   console.log("Welcome! You can access all content");
// } else if (userAge >= 13) {
//   console.log("Welcome! Restricted content only");
// } else {
//   console.log("Sorry, you're too young");
// }

// // Truthy and Falsy Values
// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean( undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }
// // Test with money = 0 - what happens? // hahaha T-T

// let height = 154; // 0: This is a valid height!
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED"); // This runs even though height IS defined!
// }

// // Better approach for checking if defined:
// if (height !== undefined) {
//   console.log("Height is defined");
// }

// console.log("=== Exercise: Truth Detector ===");

// // Test these values with Boolean() and if statements:
// const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

// // Loop through each value in the array
// for (let val of values) {
// // 1. Log the actual value
// console.log("Value:", val);

// // 2. Log the Boolean conversion of the value
//   console.log("Boolean:", Boolean(val));

// // 3. Test it in an if statement to check if it's truthy or falsy
// if (val) {
//     console.log("Result: Truthy! ✅");
// } else {
//     console.log("Result: Falsy! ❌");
// }
// }

// console.log("=== Coding Challenge #2: BMI Comparison ===");

// // TEST DATA 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // 1. Calculate BMIs
// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// // 2. Create markHigherBMI variable
// const markHigherBMI = bmiMark > bmiJohn;

// // 3. Log results
// console.log(`Mark's BMI: ${bmiMark.toFixed(1)}`);
// console.log(`John's BMI: ${bmiJohn.toFixed(1)}`);
// console.log("Does Mark have higher BMI than John?", markHigherBMI);

// // 4. Intelligent output with if/else
// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI (${bmiMark.toFixed(1)}) is higher than John's (${bmiJohn.toFixed(1)})!`);
// } else {
//   console.log(`John's BMI (${bmiJohn.toFixed(1)}) is higher than Mark's (${bmiMark.toFixed(1)})!`);
// }

// Type Conversion and Coercion

// type conversion (manual!!!!)
const inputYear = "2005";
console.log(Number(inputYear), inputYear); // 2005, "2005"
console.log(Number(inputYear) + 20); // 20

console.log(Number("Jonas")); // NaN (Not a Number)
console.log(typeof NaN); // "number" (weird but true!)

console.log(String(23), 23); // "23", 23
console.log(typeof String(23)); // "string"

// type coercion (automatic!!!)
console.log("I am " + 20 + " years old"); // "I am 20 years old"
console.log("23" - "10" - 3); // 10 (strings become numbers)
console.log("23" / "2"); // 11.5 (division converts to numbers)
console.log("23" * "2"); // 46 (multiplication converts to numbers)

// Can you guess what these will output?
let n = 11; // initialize first
n = n - 1;
console.log(n); // Output: 10


console.log(2 + 3 + 4 + "5"); // Output will be 95
console.log("10" - "4" - "3" - 2 + "5"); // Output will be 15

console.log("=== Exercise 1: Conversion Detective ===");

// Predict the output, then test:
console.log("5" + 2); // Your guess: 52
console.log("5" - 2); // Your guess: 3
console.log("5" * 2); // Your guess: 10
console.log("5" / 2); // Your guess: 2.5

// Convert these explicitly:
const userAge = "25"; // Convert to number
const userAgeNum = Number(userAge);

const userScore = 95; // Convert to string
const userScoreStr = String(userScore);

console.log("Converted Age (Number):", userAgeNum, typeof userAgeNum);
console.log("Converted Score (String):", userScoreStr, typeof userScoreStr);

console.log("=== Exercise 2: Fix the Bug ===");

// This calculator has a bug - fix it! 
const num1 = prompt("First number:");   // Returns string
const num2 = prompt("Second number:");  // Returns string
const sum = Number(num1) + Number(num2); // Convert to numbers
console.log(`Sum: ${sum}`);

// the original code has no conversion, my new (fixed) code has conversion, and it works correctly now!

console.log("18" === 18); // false - different types
console.log("18" == 18); // true - coercion happens
console.log(18 === 18); // true - same type and value

// == can be dangerous 
console.log("0" == 0); // true (string converted)
console.log(0 == false); // true (boolean converted)
console.log("0" == false); // true (both converted)
console.log(null == undefined); // true (special case)

// weird cases that causes bugs
console.log("" == 0); // true
console.log("   " == 0); // true (spaces trimmed    )

// Convert explicitly, then compare strictly
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 707) {
  console.log("Cool! 707 is an amazing number!");
} else if (favourite === 2) {
  console.log("2 is also a cool number");
} else if (favourite === 5) {
  console.log("5 is also a cool number");
} else {
  console.log("Number is not 707 or 2 or 5");
}

// Not-equal operator
if (favourite !== 707) console.log("Why not 707?");

console.log("=== Exercise 1: Equality Detective ===");

// Test these comparisons - predict first, then run:
console.log(5 === "5"); // Your guess: False, because they are different types
console.log(5 == "5"); // Your guess: True, because == does type coercion
console.log(true === 1); // Your guess: False, because true is a boolean and 1 is a number
console.log(true == 1); // Your guess: True, because == does type coercion
console.log(false === 0); // Your guess: False, because false is a boolean and 0 is a number
console.log(false == 0); // Your guess: True, because == does type coercion

console.log("=== Exercise 2: Fix the Login System ===");

const username = prompt("Username:");
const password = prompt("Password:");

// use === for strict equality (no type coercion)
if (username === "Agatha02" && password === "12345") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND: both must be true
console.log(hasDriversLicense || hasGoodVision); // OR: one must be true
console.log(!hasDriversLicense); // NOT: inverts the value

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Agatha is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// More complex scenarios
const age = 20;
const hasPermission = true;
const hasExperience = false;

// Can drive if: (age >= 18 OR has permission) AND has experience
if ((age >= 18 || hasPermission) && hasExperience) {
  console.log("Approved to drive!!!");
} else {
  console.log("Not approved to drive :((");
}

console.log("=== Exercise 1: Club Entry System ===");

const age1 = 20;      // Try different values
const hasID = true;  // Try different values
const isVIP = false; // Try different values

// Entry allowed if: (age >= 21 AND hasID) OR isVIP
if ((age1 >= 21 && hasID) || isVIP) {
  console.log("Welcome to the club!!!");
} else {
  console.log("Sorry, you cannot enter :((");
}

console.log("=== Exercise 2: Weather Advisor ===");

const temperature = 25; // Celsius
const isRaining = false;
const isWindy = true;

// Advice rules:
// Perfect day: temp 20-30 AND not raining AND not windy
// Good day: temp 15-35 AND not raining
// Stay inside: anything else

if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
  console.log("Perfect day!");
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
  console.log("Good day!!!");
} else {
  console.log("Stay inside!!!");
}

// The Conditional (Ternary) Operator

const age2 = 13

// Basic ternary: condition ? valueIfTrue : valueIfFalse
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

// Equivalent if/else (more verbose)
let drink2;
if (age2 >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

const score1 = 85; // just use "score" instead of "score1"
const isLoggedIn1 = true;
const isPremium1 = false;

let grade;
let bonus = false;

// ✅ Ternary operators
const status = score1 >= 60 ? "passed" : "failed";
const message = isLoggedIn1 ? "Welcome back!" : "Please log in";
const discount = isPremium1 ? 0.2 : 0.1;

// ✅ If/else for more complex grading
if (score1 >= 90) {
  console.log("Excellent!!!");
  grade = "A";
  bonus = true;
} else if (score1 >= 80) {
  console.log("Good job!!!");
  grade = "B";
}

console.log(status, message, discount, grade, bonus);


console.log("=== Exercise 1: Status Messages ===");

// 1. Login status
const isLoggedIn = true;
let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";
console.log(welcomeMessage);

// 2. Price with discount
const isPremium = false;
let price = isPremium ? 100 * 0.8 : 100;
console.log(`Price: ${price}`);

console.log("=== Exercise 2: Smart Responses ===");

const score = 85;
const weather = "sunny";
const battery = 15; // percentage

// ternary messages
console.log(`Your score: ${score} (${score >= 75 ? "Passed" : "Failed"})`);
console.log(`Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`);
console.log(`Battery: ${battery}% (${battery < 20 ? "Low battery warning!" : "Battery is OK"})`);

console.log("===  Final Challenge: Tip Calculator ===");

const bill = 40; // Try 275, 40, 430

// Step 1: Tip calculation (ternary, no if/else)
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// Step 2: Output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
