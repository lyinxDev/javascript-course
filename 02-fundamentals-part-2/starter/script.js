// // // console.log("Part 2 is now working")
// // // // Functions - Declarations and Expressions
// // // console.log("== FUNCTIONS ==")

// // // // Function Declaration
// // // function logger (){
// // //     console.log("My name is Agatha");
// // // }

// // // // Calling / Running / Invoking the Function
// // // logger();
// // // logger();
// // // logger();

// // // // Functions with Parameters

// // // function fruitProcessor(apples, oranges){
// // //     console.log(apples, oranges);
// // //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //     return juice;
// // // }

// // // console.log(fruitProcessor(5,3))

// // // const appleJuice = fruitProcessor (5,0);
// // // console.log(appleJuice);

// // // const appleOrangeJuice = fruitProcessor (2,4);
// // // console.log(appleOrangeJuice);

// // // const juice1 = fruitProcessor (5,0);
// // // const juice2 = fruitProcessor (2,4);
// // // const juice3 = fruitProcessor (3,2);

// // // console.log(juice1);

// // // // Function Expressions

// // // const calcAge = function (birthYear) {
// // //     return 2025 - birthYear;
// // // }

// // // console.log(calcAge(2005))
// // // console.log(calcAge(1996))

// // // function introduce (firstName, lastName, age) {
// // //     const introduction = `Hi, I"m ${firstName} ${lastName} and I"m ${age} years old`
// // //     return introduction;
// // // }
// // // console.log(introduce("Agatha", "Filomeno", "20"))

// // // function yearsUntilRetirement (birthYear, firstName){
// // //     const age = calcAge(birthYear);
// // //     const retirement = 65 - age;

// // //     if (retirement > 0) {
// // //         return `${firstName} retires in ${retirement}`;
// // //     } else {
// // //         return `${firstName} had already retired`;
// // //     }
// // //     }

// // //     console.log(yearsUntilRetirement(2005, "Agatha"));

// // //     // Global Scope
// // //     const globalVar = "I am global";

// // //     function testScope (){
// // //     const localVar = "I am Local";
// // //     console.log(globalVar);
// // //     console.log(localVar);
// // //     }

// // //     testScope();
// // //     console.log(globalVar);

// // //     // CODING CHALLENGE #1

// // //     // Your Tasks:

// // //     // Create a function calcAverage to calculate the average of 3 scores
// // //     // Use the function to calculate the average for both teams
// // //     // Create a function checkWinner that determines the winner
// // //     // Use your functions to determine the winner for different test data
// // //     // Test Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// // //     // Test Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// // //     function calcAverage(score1, score2, score3){
// // //         return(score1 + score2 + score3) / 3;
    
// // //     }
// // //     // checking the winner
// // //     function checkWinner(avgDolphins, avgKoalas){
// // //         if(avgDolphins >= 2 * avgKoalas){
// // //             return`Dolphins win (${avgDolphins} vs ${scoreKoalas})`;
// // //         }else if(scoreKoalas >= 2 * scoreDolphins){
// // //             return`Koalas win (${avgKoalas} vs ${avgDolphins})`;
// // //         }else{
// // //             return `No team wins! Koalas: ${avgKoalas}, Dolphins: ${avgDolphins}`;
// // //         }
// // //     }
    
// // //     //test data 1
// // //     let scoreDolphins = calcAverage(44, 23, 71);
// // //     let scoreKoalas = calcAverage(65, 54, 49);
// // //     console.log(checkWinner (scoreDolphins, scoreKoalas));
    
// // //     //test data 2
// // //     scoreDolphins = calcAverage(85, 54, 41);
// // //     scoreKoalas = calcAverage(23, 34, 27);
// // //     console.log(checkWinner(scoreDolphins, scoreKoalas));
    

// // const student1Grade = 85;
// // const student2Grade = 92;
// // const student3Grade = 78;

// // const grade = [85, 92, 78, 96, 88];
// // console.log(grade);

// // const friends = ["Chiikawa", "Hachiware", "Usagi"];
// // console.log(friends);

// // const mixed = ['Agatha', 20, true, friends];
// // console.log(mixed);

// // const years = new Array (1984, 2008, 2025, 2020);
// // console.log(years);

// // // Array Indexing starts at 0
// // console.log(friends[0]);
// // console.log(friends[1]);
// // console.log(friends[2]);

// // console.log(friends.length);

// // console.log(friends[friends.length-1]);

// // friends [1] = "Wonwoo";
// // console.log(friends);

// // // Arrays can contain expressions and function calls
// // const firstName = "Agatha";
// // const agatha = [firstName, "Celyn", 2025 - 2005];
// // console.log(agatha);

// // const calcAge = function (birthYear) {
// //     return 2025 - birthYear;
// // };

// // const ages = [calcAge(2000), calcAge(2011), calcAge(1999)];
// // console.log(ages);

// // // Array Methods

// // const newLength = friends.push("Hachiware");
// // console.log(friends);
// // console.log(newLength);

// // friends.unshift("Miku");
// // console.log(friends);

// // // Removing Elements

// // const popped = friends.pop();
// // const popped2 = friends.pop();
// // console.log(popped);
// // console.log(popped2);
// // console.log(friends);

// // const shifted = friends.shift();
// // console.log(shifted);
// // console.log(friends);

// // // Finding Elements

// // console.log(friends.indexOf("Chiikawa"));
// // console.log(friends.indexOf("Usagi"));

// // console.log(friends.includes("Chiikawa"));
// // console.log(friends.includes("Jygzy"));

// // console.log(friends)

// // // Array Iteration Loops

// // for (let i = 0; i < friends.length; i++) {
// //     console.log(friends[i]);
// // }

// // friends.forEach(
// //     function(friend, index) {
// //         console.log(`Friend ${index}: ${friend}`);
// //     }
// // )
// // friends.forEach((friend, index) => {
// //     console.log(`Friend ${index + 1}: ${friend}`);
// // })

// // const grades2 = [85, 92, 78, 96, 88, 74];
// // let total = 0;

// // for (let i = 0; i < grades2.length; i++) {
// //     total += grades2 [i];
// // }

// // const average2 = total / grades2.length;
// // console.log(`Average Grade: ${average2.toFixed(2)}`);

// // let passedCount = 0;
// // grades2.forEach((grade) => {
// //     if (grade >= 70) passedCount ++
// // });

// // console.log(`${passedCount} out of ${grades2.length} students passed`)

// // // Coding Challenge #2 - Student Grade Manager

// // const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];

// // // Function to Calculate Average
// // function calculateAverage(grades3) {
// //   let sum = 0;
// //   for (let i = 0; i < grades3.length; i++) {
// //     sum += grades3[i];
// //   }
// //   return sum / grades3.length;
// // }

// // // Function to find Highest Grade
// // function findHighestGrade(grades3) {
// //   let highest = grades3[0];
// //   for (let i = 1; i < grades3.length; i++) {
// //     if (grades3[i] > highest) {
// //       highest = grades3[i];
// //     }
// //   }
// //   return highest;
// // }

// // // Function to find Lowest Grade
// // function findLowestGrade(grades3) {
// //   let lowest = grades3[0];
// //   for (let i = 1; i < grades3.length; i++) {
// //     if (grades3[i] < lowest) {
// //       lowest = grades3[i];
// //     }
// //   }
// //   return lowest;
// // }

// // // Function to count Passing Students
// // function countPassing(grades3, passingGrade) {
// //   let passingCount = 0;
// //   for (let i = 0; i < grades3.length; i++) {
// //     if (grades3[i] >= passingGrade) {
// //       passingCount++;
// //     }
// //   }
// //   return passingCount;
// // }

// // // Generate Complete Report
// // const average = calculateAverage(grades3);
// // const highest = findHighestGrade(grades3);
// // const lowest = findLowestGrade(grades3);
// // const passing = countPassing(grades3, 70); // Passing Grade

// // console.log("=== GRADE REPORT ===");
// // console.log(`Average: ${average.toFixed(2)}`);
// // console.log(`Highest: ${highest}`);
// // console.log(`Lowest: ${lowest}`);
// // console.log(`Passing students: ${passing} out of ${grades3.length}`);

// console.log("=== OBJECTS ===");

// const agathaObject = {
//     firstName: "Agatha",
//     lastName: "Filomeno",
//     age: 2025 - 2005,
//     job: "Student",
//     friends: ["Chiikawa", "Hachiware", "Usagi"]
// }

// console.log(agathaObject);

// // Property Access Methods
// // Dot Notation
// console.log(agathaObject.firstName);
// console.log(agathaObject.lastName);
// console.log(agathaObject.age);

// // Bracket Notation
// console.log(agathaObject["firstName"]);
// console.log(agathaObject["lastName"]);
// console.log(agathaObject["age"]);

// const nameKey = "Name";
// console.log(agathaObject["first" + nameKey]);



// // Modifying Existing Properties
// agathaObject.job = 'Graphic Designer';
// agathaObject['age'] = 21;
// console.log(agathaObject);

// // Add New Properties
// agathaObject.location = "Philippines";
// agathaObject['twitter'] = '@agathacelyn';
// agathaObject.hasDriverLicense = true;
// console.log(agathaObject);

// // When to Use Dot vs Bracket Notation
// const property = "job";
// console.log(agathaObject[property]);

// console.log("=== Exercise 1 ===");

// // 1. Create a 'book' object
// const book = {
//   title: "The Apothecary Diaries",
//   author: "Natsu Hyuuga",
//   pages: 288,
//   isRead: false
// };

// // 2. Create a 'playlist' object
// const playlist = {
//   name: "Chill Vibes",
//   creator: "Agatha",
//   songs: ["Latte", "Kyusu", "Shade"],
//   genre: "Lo-fi"
// };

// // 3. Access and log different properties
// console.log(book.title);
// console.log(book["author"]);
// console.log(playlist.name);
// console.log(playlist["creator"]);

// // 4. Add new properties
// book.language = "Japanese";
// playlist.year = 2025;

// // 5. Modify existing properties
// book.isRead = true;
// book.pages = 320;
// playlist.genre = "Indie Pop";
// playlist.name = "My Favorite Songs";

// // Display updated objects
// console.log(book);
// console.log(playlist);


// // Objects

// const person = {
//   name: "Agatha",
//   age: 20,
//   occupation: "Student",
// };

// const car = {
//   brand: "Toyota",
//   model: "Vios",
//   year: 2020,
//   color: "Pink",
// };

// // Objects can contain arrays and other objects
// const student = {
//   name: "Agatha",
//   grades: [85, 92, 78],
//   address: {
//     street: "4321 Main St",
//     city: "Quezon City",
//     country: "Philippines",
//   },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);


// // Object Methods

// const agatha = {
//   firstName: "Agatha",
//   lastName: "Filomeno",
//   birthYear: 2005,
//   job: "Student",
//   friends: ["Chiikawa", "Hachiware", "Usagi"],
//   hasDriverLicense: true,

//   calcAge: function (birthYear) {
//     return 2025 - birthYear;
//   }
// };

// console.log(agatha.calcAge(2005));
// console.log(agatha.calcAge(agatha.birthYear));

// // Using 'this' Keyword
// const agatha2 = {
//   firstName: "Agatha",
//   lastName: "Filomeno",
//   birthYear: 2005,
//   job: "Student",
//   friends: ["Chiikawa", "Hachiware", "Usagi"],
//   hasDriverLicense: true,

//   calcAge: function () {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year-old ${this.job}, and she has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;  
//   }
// };

//   console.log(agatha2.calcAge());
//   console.log(agatha2.age);
//   console.log(agatha2.getSummary());


// console.log("=== Exercise 2 ===");

// // 1. Create a 'calculator' object
// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",

//   // 2. Methods
//   add: function () {
//     return this.num1 + this.num2;
//   },

//   subtract: function () {
//     return this.num1 - this.num2;
//   },

//   multiply: function () {
//     return this.num1 * this.num2;
//   },

//   divide: function () {
//     return this.num2 !== 0 ? this.num1 / this.num2 : "Error: Division by zero";
//   },

//   // 3. Method: calculate()
//   calculate: function () {
//     if (this.operator === "+") {
//       return this.add();
//     } else if (this.operator === "-") {
//       return this.subtract();
//     } else if (this.operator === "*") {
//       return this.multiply();
//     } else if (this.operator === "/") {
//       return this.divide();
//     } else {
//       return "Error: Invalid operator";
//     }
//   },

//   // 4. Method: getResult()
//   getResult: function () {
//     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//   },
// };

// // 5. Test your calculator
// console.log(calculator.calculate()); // 15
// console.log(calculator.getResult()); // "10 + 5 = 15"

// console.log("=== Coding Challenge #3: User Profile System ===");

// const user = {
//   firstName: "Agatha",
//   lastName: "Filomeno",
//   birthYear: 2005,
//   location: "Manila",
//   interests: ["reading", "listening to music", "watching anime"],
//   friends: [
//     { name: "Cheyenne", status: "active" },
//     { name: "Louren", status: "inactive" },
//     { name: "Jygzy", status: "active" },
//   ],
//   isActive: true,

//   // 1. Calculate age method
//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   },

//   // 2. Add friend method
//   addFriend: function (name, status = "active") {
//     this.friends.push({ name: name, status: status });
//     return this.friends.length;
//   },

//   // 3. Get active friends count
//   getActiveFriends: function () {
//     return this.friends.filter(friend => friend.status === "active").length;
//   },

//   // 4. Toggle active status
//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   // 5. Generate profile summary
//   getSummary: function () {
//     this.calcAge(); 
//     return `
//   👤 Profile Summary 👤 
//   --------------------
//   Name: ${this.firstName} ${this.lastName}
//   Age: ${this.age}
//   Location: ${this.location}
//   Status: ${this.isActive ? "Active 👍" : "Inactive 👎"}
//   Friends: ${this.friends.length} total (${this.getActiveFriends()} active)
//   Interests: ${this.interests.join(", ")}
//   `;
//   },
// };

// // Test your user profile system
// console.log(user.getSummary());

// user.addFriend("Nicole", "active");
// user.toggleStatus();

// console.log("\nAfter updates:");
// console.log(user.getSummary());


// Query Selector that uses CSS selectors
const message = document.querySelector(".message");
// gets us the entire element object with all its properties
console.log(message);

const button = document.querySelector("#btn");
console.log(button);

const heading = document.querySelector("h1");
console.log(heading);

// Query Selector returns the first matching element

console.log(message.textContent);
console.log(button.id);
console.log(heading.tagName);
console.log(heading.textContent);

// getElementById - only for ID
const buttonByID = document.getElementById("btn");
console.log(buttonByID)
console.log(buttonByID === button);

// querySelectorAll - MULTIPLE elements
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);
console.log(allParagraphs[0]);

console.log("=== Exercise 1: Element Selection Practice ===");

// 1. Select the element with class 'guess' and log it
const guessInput = document.querySelector(".guess");
console.log(guessInput);

// 2. Select the element with ID 'btn' using both querySelector and getElementById
const buttonQuery = document.querySelector("#btn");
const buttonById = document.getElementById("btn");
console.log(buttonQuery); 
console.log(buttonById);
console.log(buttonQuery === buttonById);

// 3. Select all spans and log the collection
const allSpans = document.querySelectorAll("span");
console.log(allSpans);

// 4. Select the first span element and log its textContent
const firstSpan = document.querySelector("span");
console.log(firstSpan.textContent);

// 5. Experiment with different CSS selectors
console.log(document.querySelector(".container"));
console.log(document.querySelector("div span"));
console.log(document.querySelector("button#btn"));


// Modofying Elements content
const message2 = document.querySelector(".message");

// Text Content
console.log(message2.textContent);
message2.textContent = "Hello From JAVASCRIPT!";
console.log(message2.textContent);


// Inner HTML
message2.innerHTML = '<strong> Bold text from JS </strong>';

// intertext
console.log(message2.innerText);

// Input element value
const input = document.querySelector(".guess");
console.log(input.value);

const heading2 = document.querySelector("h1");
heading2.style.color = "red";
heading2.style.backgroundColor = "yellow";
heading2.style.fontSize = "3rem";
heading2.style.padding = "20px";
heading2.style.borderRadius = "20px";

const button2 = document.querySelector("#btn");
button2.style.backgroundColor = "blue";
button2.style.color = "white";
button2.style.fontSize = "1.5rem";
button2.style.border = "none";
button2.style.padding = "20px";
button2.style.borderRadius = "10px";

console.log("=== Exercise 2: Content and Style Practice ===");

const heading3 = document.querySelector("h1");
const button3 = document.querySelector("#btn");
const input3 = document.querySelector(".guess");
const message3 = document.querySelector(".message");
const scoreValue = document.querySelector(".score-value");

// 1. Change h1 text
heading3.textContent = "Agatha Filomeno";
console.log("Changed heading text:", heading3.textContent);

// 2. Style the button
button.style.backgroundColor = "pink";
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "5px";
console.log("Styled button:", button);

// 3. Set placeholder
input.placeholder = "Type something cool...";
console.log("Set input placeholder:", input.placeholder);

// 4. HTML formatting in message
message.innerHTML = "This is <strong>bold</strong> text from JavaScript!";
console.log("Updated message with bold text:", message.innerHTML);

// 5. Style the score
scoreValue.style.fontSize = "2rem";
scoreValue.style.color = "green";
scoreValue.style.fontWeight = "bold";
console.log("Styled score:", scoreValue);



// Event Listeners - User Interaction
button2.addEventListener("click", function() {
    console.log("Button was Clicked!");
    message.style.color = "purple";
    message.textContent = "Button was Clicked!";
}
);

let clickCount = 0;

button.addEventListener("click", function () {
  clickCount++;
  button.textContent = `Clicked ${clickCount} times`;
  button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

// input events
const display  = document.querySelector(".message");
input.addEventListener("input", function() {
  const userText = input.value;
  display.textContent = `You typed: ${userText}`;
  display.style.fontSize = `${userText.length + 10}px`;
});

// keyboard events - responds to key presses
input.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);
  if (event.key === "Enter") {
    message.textContent = `You pressed Enter! Text was: ${input.value}`;
    input.value = ""; // Clear input
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    // Reset everything
    message.textContent = "Reset with Escape key!";
    input.value = "";
    clickCount = 0;
    button.textContent = "Click Me!";
  }
});

console.log("=== Exercise 3: Event Listener Practice ===");

// Select elements
const headingEx3 = document.querySelector("h1");
const inputEx3 = document.querySelector(".guess");
const buttonEx3 = document.querySelector("#btn");
const messageEx3 = document.querySelector(".message");

// 1. Click event on h1
console.log("1. Adding click event to <h1>...");
headingEx3.addEventListener("click", function () {
  headingEx3.style.color = "purple";
  console.log("Heading clicked -> color changed to purple");
});

// 2. Character count display
console.log("2. Adding input event to .guess...");
inputEx3.addEventListener("input", function () {
  const count = inputEx3.value.length;
  messageEx3.textContent = `Character count: ${count}`;
  console.log(`Input updated -> ${count} characters`);
});

// 3. Spacebar response
console.log("3. Adding keydown event for Spacebar...");
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    messageEx3.textContent = "Spacebar pressed!";
    console.log("Spacebar pressed!");
  }
});

// 4. Hover effect for button
console.log("4. Adding hover (mouseenter & mouseleave) events to button...");
buttonEx3.addEventListener("mouseenter", function () {
  buttonEx3.textContent = "Hovering!";
  console.log("Mouse entered button");
});

buttonEx3.addEventListener("mouseleave", function () {
  buttonEx3.textContent = "Click Me!";
  console.log("Mouse left button");
});

// 5. Double-click event on heading
console.log("5. Adding double-click event to <h1>...");
headingEx3.addEventListener("dblclick", function () {
  headingEx3.textContent = "Double-clicked!";
  headingEx3.style.backgroundColor = "lightblue";
  console.log("Heading double-clicked -> text & background changed");
});
