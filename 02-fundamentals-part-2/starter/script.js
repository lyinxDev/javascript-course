console.log("Part 2 is now working")
// Functions - Declarations and Expressions
console.log("== FUNCTIONS ==")

// Function Declaration
function logger (){
    console.log("My name is Agatha");
}

// Calling / Running / Invoking the Function
logger();
logger();
logger();

// Functions with Parameters

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5,3))

const appleJuice = fruitProcessor (5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor (2,4);
console.log(appleOrangeJuice);

const juice1 = fruitProcessor (5,0);
const juice2 = fruitProcessor (2,4);
const juice3 = fruitProcessor (3,2);

console.log(juice1);

// Function Expressions

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

console.log(calcAge(2005))
console.log(calcAge(1996))

function introduce (firstName, lastName, age) {
    const introduction = `Hi, I"m ${firstName} ${lastName} and I"m ${age} years old`
    return introduction;
}

console.log(introduce("Agatha", "Filomeno", "20"))

function yearsUntilRetirement (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement}`;
    } else {
        return `${firstName} had already retired`;
    }
    }

    console.log(yearsUntilRetirement(2005, "Agatha"));

    // Global Scope
    const globalVar = "I am global";

    function testScope (){
    const localVar = "I am Local";
    console.log(globalVar);
    console.log(localVar);
    }

    testScope();
    console.log(localVar);
    console.log(globalVar);

    // CODING CHALLENGE #1

    // function to calculate average of 3 scores
    function calcAverage (score1, score2, score3){
    // code here
    const sum = score1 + score2 + score3;
    console.log
    }

    // function to check winner
    function checkWinner (avgDolphins, avgKoalas){

    }

    // Test Data 1
    let scoreDolphins = calcAverage (44, 23, 71);
    let scoreKoalas = calcAverage (65, 54, 49);

    console.log(checkWinner(scoreDolphins, scoreKoalas));

    // Test Data 2
    // let scoreDolphins = calcAverage (85, 54, 41);
    // let scoreKoalas = calcAverage (23, 34,2749);

    // console.log(checkWinner(scoreDolphins, scoreKoalas));



