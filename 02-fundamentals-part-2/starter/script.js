// console.log("Part 2 is now working")
// // Functions - Declarations and Expressions
// console.log("== FUNCTIONS ==")

// // Function Declaration
// function logger (){
//     console.log("My name is Agatha");
// }

// // Calling / Running / Invoking the Function
// logger();
// logger();
// logger();

// // Functions with Parameters

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(5,3))

// const appleJuice = fruitProcessor (5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor (2,4);
// console.log(appleOrangeJuice);

// const juice1 = fruitProcessor (5,0);
// const juice2 = fruitProcessor (2,4);
// const juice3 = fruitProcessor (3,2);

// console.log(juice1);

// // Function Expressions

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// console.log(calcAge(2005))
// console.log(calcAge(1996))

// function introduce (firstName, lastName, age) {
//     const introduction = `Hi, I"m ${firstName} ${lastName} and I"m ${age} years old`
//     return introduction;
// }
// console.log(introduce("Agatha", "Filomeno", "20"))

// function yearsUntilRetirement (birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement}`;
//     } else {
//         return `${firstName} had already retired`;
//     }
//     }

//     console.log(yearsUntilRetirement(2005, "Agatha"));

//     // Global Scope
//     const globalVar = "I am global";

//     function testScope (){
//     const localVar = "I am Local";
//     console.log(globalVar);
//     console.log(localVar);
//     }

//     testScope();
//     console.log(globalVar);

//     // CODING CHALLENGE #1

//     // Your Tasks:

//     // Create a function calcAverage to calculate the average of 3 scores
//     // Use the function to calculate the average for both teams
//     // Create a function checkWinner that determines the winner
//     // Use your functions to determine the winner for different test data
//     // Test Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
//     // Test Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

//     function calcAverage(score1, score2, score3){
//         return(score1 + score2 + score3) / 3;
    
//     }
//     // checking the winner
//     function checkWinner(avgDolphins, avgKoalas){
//         if(avgDolphins >= 2 * avgKoalas){
//             return`Dolphins win (${avgDolphins} vs ${scoreKoalas})`;
//         }else if(scoreKoalas >= 2 * scoreDolphins){
//             return`Koalas win (${avgKoalas} vs ${avgDolphins})`;
//         }else{
//             return `No team wins! Koalas: ${avgKoalas}, Dolphins: ${avgDolphins}`;
//         }
//     }
    
//     //test data 1
//     let scoreDolphins = calcAverage(44, 23, 71);
//     let scoreKoalas = calcAverage(65, 54, 49);
//     console.log(checkWinner (scoreDolphins, scoreKoalas));
    
//     //test data 2
//     scoreDolphins = calcAverage(85, 54, 41);
//     scoreKoalas = calcAverage(23, 34, 27);
//     console.log(checkWinner(scoreDolphins, scoreKoalas));
    

const student1Grade = 85;
const student2Grade = 92;
const student3Grade = 78;

const grade = [85, 92, 78, 96, 88];
console.log(grade);

const friends = ["Chiikawa", "Hachiware", "Usagi"];
console.log(friends);

const mixed = ['Agatha', 20, true, friends];
console.log(mixed);

const years = new Array (1984, 2008, 2025, 2020);
console.log(years);

// Array Indexing starts at 0
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length-1]);

friends [1] = "Wonwoo";
console.log(friends);

// Arrays can contain expressions and function calls
const firstName = "Agatha";
const agatha = [firstName, "Celyn", 2025 - 2005];
console.log(agatha);

const calcAge = function (birthYear) {
    return 2025 - birthYear;
};

const ages = [calcAge(2000), calcAge(2011), calcAge(1999)];
console.log(ages);

// Array Methods

const newLength = friends.push("Hachiware");
console.log(friends);
console.log(newLength);

friends.unshift("Miku");
console.log(friends);

// Removing Elements

const popped = friends.pop();
const popped2 = friends.pop();
console.log(popped);
console.log(popped2);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// Finding Elements

console.log(friends.indexOf("Chiikawa"));
console.log(friends.indexOf("Usagi"));

console.log(friends.includes("Chiikawa"));
console.log(friends.includes("Jygzy"));

console.log(friends)

// Array Iteration Loops

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

friends.forEach(
    function(friend, index) {
        console.log(`Friend ${index}: ${friend}`);
    }
)
friends.forEach((friend, index) => {
    console.log(`Friend ${index + 1}: ${friend}`);
})

const grades2 = [85, 92, 78, 96, 88, 74];
let total = 0;

for (let i = 0; i < grades2.length; i++) {
    total += grades2 [i];
}

const average2 = total / grades2.length;
console.log(`Average Grade: ${average2.toFixed(2)}`);

let passedCount = 0;
grades2.forEach((grade) => {
    if (grade >= 70) passedCount ++
});

console.log(`${passedCount} out of ${grades2.length} students passed`)

// Coding Challenge #2 - Student Grade Manager

const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to Calculate Average
function calculateAverage(grades3) {
  let sum = 0;
  for (let i = 0; i < grades3.length; i++) {
    sum += grades3[i];
  }
  return sum / grades3.length;
}

// Function to find Highest Grade
function findHighestGrade(grades3) {
  let highest = grades3[0];
  for (let i = 1; i < grades3.length; i++) {
    if (grades3[i] > highest) {
      highest = grades3[i];
    }
  }
  return highest;
}

// Function to find Lowest Grade
function findLowestGrade(grades3) {
  let lowest = grades3[0];
  for (let i = 1; i < grades3.length; i++) {
    if (grades3[i] < lowest) {
      lowest = grades3[i];
    }
  }
  return lowest;
}

// Function to count Passing Students
function countPassing(grades3, passingGrade) {
  let passingCount = 0;
  for (let i = 0; i < grades3.length; i++) {
    if (grades3[i] >= passingGrade) {
      passingCount++;
    }
  }
  return passingCount;
}

// Generate Complete Report
const average = calculateAverage(grades3);
const highest = findHighestGrade(grades3);
const lowest = findLowestGrade(grades3);
const passing = countPassing(grades3, 70); // Passing Grade

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades3.length}`);