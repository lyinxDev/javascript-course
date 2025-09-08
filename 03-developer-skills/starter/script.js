// // // Professional Development Environment Setup

// // console.log('=== DEVELOPMENT ENVIRONMENT SETUP ===');

// // const messyExample = function (name, age) {
// //   if (age >= 18) {
// //     return 'Hello ' + name + ', you are an adult';
// //   } else {
// //     return 'Hello ' + name + ', you are a minor';
// //   }
// // };

// // console.log('Current messy code example:', messyExample('John', 25));
// // console.log('Goal: Automatic formatting, auto-refresh, and typing shortcuts');

// // // Extension Installation Test

// // function testExtensions() {
// //   const extensionTests = [
// //     { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
// //     { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
// //     {
// //       name: 'Auto Rename Tag',
// //       status: 'installed',
// //       purpose: 'HTML efficiency',
// //     },
// //   ];

// //   return extensionTests;
// // }

// // const extensionStatus = testExtensions();
// // console.log('Extension installation status:', extensionStatus);

// // // Prettier Configuration Test

// // // This code has terrible formatting - Prettier will fix it!
// // const prettierTest = {
// //   firstName: 'Sarah',
// //   lastName: 'Johnson',
// //   skills: ['JavaScript', 'React', 'Node.js'],
// //   isActive: true,
// // };

// // const messyFunction = function (x, y, z) {
// //   if (x > 0 && y > 0) {
// //     return x + y + z;
// //   } else {
// //     return 0;
// //   }
// // };

// // const messyArrow = items => {
// //   return items.map(item => {
// //     return item.toUpperCase();
// //   });
// // };

// // console.log(
// //   'Before Prettier formatting - this code works but looks unprofessional'
// // );

// // const studentTest = {
// //   firstName: 'your-name',
// //   skills: ['HTML', 'CSS', 'JavaScript'],
// //   experience: 'beginner',
// //   goals: ['become-developer', 'build-projects'],
// // };
// // const testFunc = function (data) {
// //   for (let i = 0; i < data.length; i++) {
// //     console.log(data[i]);
// //   }
// // };

// // // prettier workssss

// // // Live Server Testing

// // // Test 1: Basic live reload
// // let liveServerTest = 'Updated message - change #2';
// // console.log('Live Server test:', liveServerTest);

// // // Test 2: Time-based updates
// // const timeStamp = new Date().toLocaleTimeString();
// // const updateCount = 1;

// // console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // // Test 3: Function testing
// // function demonstrateLiveReload() {
// //   const randomColor = ['pink', 'yellow', 'orange', 'blue', 'red'][
// //     Math.floor(Math.random() * 5)
// //   ];
// //   const message = `Live Server rocks! Random color: ${randomColor}`;

// //   console.log(message);
// //   return message;
// // }

// // demonstrateLiveReload();

// // // Student Exercise: Add this function and test live reload
// // function showCurrentTime() {
// //   const now = new Date().toLocaleTimeString();
// //   console.log('Current time:', now);
// //   return now;
// // }

// // showCurrentTime();

// // // Code Snippets Testing

// // console.log("Testing snippet functionality - cl + Tab created this!");

// // function testSnippets() {
// //   console.log("Function created with snippet - func + Tab!");
// //   return "Snippets working perfectly!";
// // }

// // testSnippets();

// // const snippetTest = (message) => {
// //   console.log(`Arrow function from snippet: ${message}`);
// //   return message;
// // };

// // snippetTest("Snippets save so much typing time!");

// // // Environment Setup Verification

// // console.log("🎉 Professional Development Environment Complete!");
// // console.log("✅ Prettier: Automatic code formatting");
// // console.log("✅ Live Server: Automatic browser refresh");
// // console.log("✅ Snippets: Fast code generation");
// // console.log("✅ Extensions: Enhanced productivity");
// // console.log("Ready for professional JavaScript development!");

// // // Calculate time savings
// // function calculateTimeSavings() {
// //   const dailyConsoleLogs = 50;
// //   const keystrokesSavedPerLog = 11;
// //   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
// //   const monthlySavings = dailySavings * 22;

// //   console.log(`Daily keystrokes saved: ${dailySavings}`);
// //   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

// //   return { daily: dailySavings, monthly: monthlySavings };
// // }

// // calculateTimeSavings();

// console.log('=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===');

// console.log(
//   'Key insight: Professional developers think systematically, not just code'
// );

// console.log('Goal: Transform from beginner to professional problem-solver');

// // Section 1: The 4-Step Problem-Solving Framework
// console.log('4-Step Framework: Understand → Divide → Research → Implement');

// // Section 2: Practical Problem-Solving Application
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue; // skip errors

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log('Max:', max, 'Min:', min);
//   return max - min;
// };

// // Test data
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const amplitude = calcTempAmplitude(temperatures);
// console.log('Amplitude:', amplitude);

// // Section 3: Extended Challenge Practice

// const calcTempAmplitudeNew = function (t1, t2) {
//   // Merge the two arrays
//   const temps = t1.concat(t2);
//   console.log('Merged array:', temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue; // skip errors if any

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log('Max:', max, 'Min:', min);
//   return max - min;
// };

// // Test data
// const array1 = [3, 5, 1];
// const array2 = [9, 0, 5];

// const amplitudeNew = calcTempAmplitudeNew(array1, array2);
// console.log('Amplitude (two arrays):', amplitudeNew);

// console.log(
//   'Problem-solving framework applied successfully to extended challenge!'
// );

// Developer Skills Hour 3 - Research Skills & Debugging Fundamentals
'use strict';

console.log('=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===');

console.log(
  'Goal: Master research and debugging like a professional developer'
);
console.log(
  'Strategic research builds lasting knowledge, not just quick fixes'
);

////////////////////////////////////
// PROFESSIONAL GOOGLE RESEARCH TECHNIQUES

function demonstrateArrayMax(numbers) {
  const method1 = Math.max(...numbers); // spread operator
  let method2 = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > method2) method2 = numbers[i];
  }
  const method3 = numbers.reduce((max, current) =>
    current > max ? current : max
  );
  return { method1, method2, method3 };
}
const testNumbers = [3, 7, 2, 9, 1, 5];
console.log(
  'Multiple approaches from research:',
  demonstrateArrayMax(testNumbers)
);

////////////////////////////////////
// STACK OVERFLOW RESEARCH RESULTS

function reverseStringMethods(str) {
  const method1 = str.split('').reverse().join('');
  let method2 = '';
  for (let i = str.length - 1; i >= 0; i--) {
    method2 += str[i];
  }
  const method3 = [...str].reverse().join('');
  return { method1, method2, method3 };
}
console.log('Stack Overflow research results:', reverseStringMethods('hello'));

////////////////////////////////////
// MDN DOCUMENTATION MASTERY

function demonstrateConcat() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];
  const simple = array1.concat(array2);
  const multiple = array1.concat(array2, array3);
  console.log('Original array1 unchanged:', array1);
  return { simple, multiple };
}
console.log('MDN documentation applied:', demonstrateConcat());

// Section 2: Debugging Mastery

// SYSTEMATIC DEBUGGING METHODOLOGY

function calculateAverageScore(scores) {
  let total;
  for (let i = 0; i <= scores.length; i++) {
    total += scores[i];
  }
  return total / (scores.length + 1);
}
const testScores = [85, 92, 78, 96, 88];
console.log('Buggy result:', calculateAverageScore(testScores));

// Console Debugging Practice

// BROWSER DEVELOPER TOOLS MASTERY

function demonstrateConsoleDebugging(data) {
  console.group('Debugging Session');
  console.log('Input data:', data);
  if (typeof data !== 'object') {
    console.warn('Warning: Expected object, got', typeof data);
  }
  console.table(data);
  console.groupEnd();
  return Array.isArray(data) ? data.length : Object.keys(data).length;
}
demonstrateConsoleDebugging([1, 2, 3, 4, 5]);
demonstrateConsoleDebugging({ name: 'Agatha', age: 20, city: 'Manila' });

// Debugger Statement Practice

// DEBUGGER STATEMENT AND BREAKPOINTS

function stepThroughDebugging(numbers) {
  debugger; // open Sources tab in DevTools to pause here
  let sum = 0;
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    console.log(`Processing index ${i}: value = ${currentNumber}`);
    if (typeof currentNumber === 'number') {
      sum += currentNumber;
      count++;
    } else {
      console.error(`Invalid number at index ${i}:`, currentNumber);
    }
  }
  const average = count > 0 ? sum / count : 0;
  console.log('Final results:', { sum, count, average });
  return average;
}
const mixedNumbers = [10, 20, 'error', 30, null, 40];
console.log('Debug session result:', stepThroughDebugging(mixedNumbers));
