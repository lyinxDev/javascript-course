// console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

// // function alpha() {
// //   console.log('alpha:start');
// //   beta();
// //   console.log('alpha:end');
// // }

// // function beta() {
// //   console.log('beta');
// // }

// // alpha();

// // function outerFunction() {
// //   console.log('Outer function start');
// //   innerFunction();
// //   console.log('Outer function end');
// // }
// // function innerFunction() {
// //   console.log('Inner function');
// //   console.trace();
// // }

// // outerFunction();

// // const outer = 'global';

// // function demoScope() {
// //   const inner = 'function';
// //   if (true) {
// //     const blockConst = 'block';
// //     var functionVar = 'var-function-scoped';
// //     console.log(outer, inner, blockConst, functionVar);
// //   }
// //   console.log(outer, inner, functionVar);
// // }

// // demoScope();

// // const name = 'GlobalName';

// // function a() {
// //   const name = 'FunctionName';
// //   function b() {
// //     console.log(name);
// //   }
// //   b();
// // }

// // a();

// console.log(varX);
// // console.log(letX);
// // console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

'use strict';

// const person = {
//   name: 'Wonwoo ( ˃` ⩌ ´˂ )',
//   greet: function () {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

// person.greet();
// person.name = 'Agatha ꉂ(ˊᗜˋ*)♡';
// person.greet();

// const anotherPerson = {
//   name: 'Chiikawa ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧',
// };

// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// const greetFunction = person.greet;
// greetFunction();

// const button = document.querySelector('button');
// button.addEventListener('click', person.greet);

// button.addEventListener('click', () => person.greet());

// button.addEventListener('click', person.greet.bind(person));

// const obj = {
//   name: 'Object',

//   regularMethod: function () {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// obj.regularMethod();
// obj.arrowMethod();

// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod();
// quiz.arrowMethod();

// const timer = {
//   name: 'Timer',

//   // Old approach with self = this
//   start: function () {
//     console.log(`${this.name} starting...`);
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 5000);
//   },

//   startModern: function () {
//     console.log(`${this.name} starting modern`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     }, 1500);
//   },
// };

// timer.start();
// timer.startModern();

// const user = {
//   name: 'Agatha',
//   hobbies: ['Reading', 'Coding', 'Gaming'],

//   printHobbiesBad: () => {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`);
//     });
//   },

//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`);
//     });
//   },
// };

// // user.printHobbiesBad();
// user.printHobbiesGood();

// =========
// SECTION 3
// =========

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');
