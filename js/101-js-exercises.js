"use strict"; // leave this line here :)

// Keep this function definition in order to test expected vs. actual results
const assert = function(actual, expected, message = "") {

    // This compares primitive values and collections. If they differ, throw an error.
    if(JSON.stringify(actual) !== JSON.stringify(expected)) {
        console.error('[assert] expected:    ' + expected)
        console.error('[assert] instead got: ' + actual)
        throw Error("Assert failed in " + message);
    }
};


// Keep this function here in order to add correct questions to the counter
function addToDone(message) {
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(message);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    node.classList.add("finished");
    document.querySelector(".correct ul").appendChild(node);
    document.querySelector("#count").innerHTML = document.querySelectorAll('.finished').length + " of 101";
}


// Welcome to 101 Exercises in JS
// If you get "ReferenceError: someVariableName is not defined", that means you need to create a variable

// Exercise #0, Example Problem:
// Example problem setup: Create a variable named doingJSRightNow and assign it the boolean true.
// The line below creates the variable named doingJSRightNow and assigns the boolean value true
// To complete Exercise #0, uncomment the following line of JS
var doingJSRightNow = true

// The lines below will test your answer. If you see an error, then it means that your answer is incorrect or incomplete.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined to understand this error message.
assert(doingJSRightNow, true, "Exercise 0");


//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
// For more on variables, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
let onMarsRightNow = false;

assert(onMarsRightNow, false, "Exercise 1");
addToDone("Exercise 1 is correct.");

// Exercise 2
// For more on arrays, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.
let fruits = ['mango', 'banana', 'guava', 'kiwi', 'strawberry'];

assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry"], "Exercise 2");
addToDone("Exercise 2 is correct.");

// Exercise 3
// Create a variable named vegetables and assign it an array of strings containing the following vegetables.
// eggplant, broccoli, carrot, cauliflower, and zucchini
let vegetables = ['eggplant', 'broccoli', 'carrot', 'cauliflower', 'zucchini'];

assert(vegetables, ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"], "Exercise 3");
addToDone("Exercise 3 is correct.");


// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

assert(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Exercise 4");
addToDone("Exercise 4 is correct.");


// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.
fruits.push('tomato');

assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"], "Exercise 5");
addToDone("Exercise 5 is correct");


// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.
vegetables.push('tomato');

assert(vegetables,["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"], "Exercise 6");
addToDone("Exercise 6 is correct")


// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.
let someNumbers = numbers.reverse();

assert(someNumbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "Exercise 7")
addToDone("Exercise 7 is correct")



// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method
vegetables.sort();

assert(vegetables, ['broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 8")
addToDone("Exercise 8 is correct.")



// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order
fruits = fruits.sort().reverse();

assert(fruits, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana'], "Exercise 9")
addToDone("Exercise 9 is correct.")

// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.
let fruitsAndVeggies = fruits.concat(vegetables);

assert(fruitsAndVeggies, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana', 'broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 10")
addToDone("Exercise 10 is correct")

// This function generates a random number that is both positive and even
function randomPositiveEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}

// The next 4 lines create variables that hold these generated random numbers
var positiveEvenNumber = randomPositiveEvenNumber()
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();

// Writing functions
// See https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions for help with writing functions
// Be sure to return values from your function definitions. The assert statements will call/run your function(s) for you.


// Example function defintion:
// Write a sayHello function that adds the string "Hello, " to the beginning and "!" to the end of any given input.
const sayHello = name => "Hello, " + name + "!"; // es6 refactor

// function sayHello(name) {
//     return "Hello, " + name + "!";
// }

assert(sayHello("Jane"), "Hello, Jane!");
assert(sayHello("Pat"), "Hello, Pat!");
assert(sayHello("Astrud"), "Hello, Astrud!");
assert(sayHello("June"), "Hello, June!");
assert(sayHello("World"), "Hello, World!");


// Heres another example function definition
// This plusTwo function takes in a variable and adds the number 2 to it.
const plusTwo = x => x + 2; //es6 refactor

// function plusTwo(x) {
//     return x + 2;
// }

assert(plusTwo(3), 5, "3 plus 2 is five")
assert(plusTwo(-2), 0, "-2 plus 2 is zero")
assert(plusTwo(0), 2, "zero plus 2 is two")



// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one
const addOne = num => num + 1; //es6 refactor

// function addOne(num) {
//     return num + 1;
// }

assert(addOne(2), 3, "Exercise 11");
assert(addOne(0), 1, "Exercise 11");
assert(addOne(positiveEvenNumber), positiveEvenNumber + 1, "Exercise 11");
assert(addOne(negativeOddNumber), negativeOddNumber + 1, "Exercise 11");
addToDone("Exercise 11 is correct.")



// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
// Think about the definition of a number that is positive.
// Is 5 positive? Is 0.25 positive? Is 0.00001 positive? Is -0.001 positive?
// Is zero itself positive? What about infinity? What about negative infinity?
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators for guidance with JS comparison operators.
const isPositive = num => num > 0; // es6 refactor

// function isPositive(num) {
//     return num > 0;
// }


assert(isPositive(0.25), true, "Exercise 12");
assert(isPositive(0.00001), true, "Exercise 12");
assert(isPositive(Infinity), true, "Exercise 12");
assert(isPositive(0), false, "Exercise 12");
assert(isPositive(-0.001), false, "Exercise 12");
assert(isPositive(positiveOddNumber), true, "Exercise 12");
assert(isPositive(positiveEvenNumber), true, "Exercise 12");
assert(isPositive(negativeOddNumber), false, "Exercise 12");
assert(isPositive(negativeEvenNumber), false, "Exercise 12");
assert(isPositive(-Infinity), false, "Exercise 12");
addToDone("Exercise 12 is correct.")


// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.
const isNegative = num => num < 0; // es6 refactor

// function isNegative(num) {
//     return num < 0;
// }

assert(isNegative(positiveOddNumber), false, "Exercise 13");
assert(isNegative(positiveEvenNumber), false, "Exercise 13");
assert(isNegative(negativeOddNumber), true, "Exercise 13");
assert(isNegative(negativeEvenNumber), true, "Exercise 13");
addToDone("Exercise 13 is correct.")


// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.
const isOdd = num => num % 2 !== 0; // es6 refactor

// function isOdd(num) {
//     return num % 2 !== 0;
// }

assert(isOdd(positiveOddNumber), true, "Exercise 14");
assert(isOdd(positiveEvenNumber), false, "Exercise 14");
assert(isOdd(negativeOddNumber), true, "Exercise 14");
assert(isOdd(negativeEvenNumber), false, "Exercise 14");
addToDone("Exercise 14 is correct.")

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.
const isEven = num => !isOdd(num); // es6 refactor using previous defined function

// function isEven(num) {
//     return !isOdd(num);
// }

assert(isEven(2), true, "Exercise 15");
assert(isEven(positiveOddNumber), false, "Exercise 15");
assert(isEven(positiveEvenNumber), true, "Exercise 15");
assert(isEven(negativeOddNumber), false, "Exercise 15");
assert(isEven(negativeEvenNumber), true, "Exercise 15");
addToDone("Exercise 15 is correct.")


// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!
const identity = input => input; // es6 refactor

// function identity(input) {
//     return input;
// }

assert(identity(fruits), fruits, "Exercise 16");
assert(identity(vegetables), vegetables, "Exercise 16");
assert(identity(positiveOddNumber), positiveOddNumber, "Exercise 16");
assert(identity(positiveEvenNumber), positiveEvenNumber, "Exercise 16");
assert(identity(negativeOddNumber), negativeOddNumber, "Exercise 16");
assert(identity(negativeEvenNumber), negativeEvenNumber, "Exercise 16");
addToDone("Exercise 16 is correct.")


// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd
const isPositiveOdd = num => isPositive(num) && isOdd(num); // es6 refactor with previous defined functions

// function isPositiveOdd(num) {
//     return isPositive(num) && isOdd(num);
// }

assert(isPositiveOdd(3), true, "Exercise 17");
assert(isPositiveOdd(positiveOddNumber), true, "Exercise 17");
assert(isPositiveOdd(positiveEvenNumber), false, "Exercise 17");
assert(isPositiveOdd(negativeOddNumber), false, "Exercise 17");
assert(isPositiveOdd(negativeEvenNumber), false, "Exercise 17");
addToDone("Exercise 17 is correct.")


// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even
const isPositiveEven = num => isPositive(num) && isEven(num); // es6 refactor with previous defined functions

// function isPositiveEven(num) {
//     return isPositive(num) && isEven(num);
// }

assert(isPositiveEven(4), true, "Exercise 18" );
assert(isPositiveEven(positiveOddNumber), false, "Exercise 18");
assert(isPositiveEven(positiveEvenNumber), true, "Exercise 18");
assert(isPositiveEven(negativeOddNumber), false, "Exercise 18");
assert(isPositiveEven(negativeEvenNumber), false, "Exercise 18");
addToDone("Exercise 18 is correct.")


// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
const isNegativeOdd = num => isNegative(num) && isOdd(num); // es6 refactor with previous defined functions

// function isNegativeOdd(num) {
//     return isNegative(num) && isOdd(num);
// }

assert(isNegativeOdd(-3), true, "Exercise 19" );
assert(isNegativeOdd(positiveOddNumber), false, "Exercise 19");
assert(isNegativeOdd(positiveEvenNumber), false, "Exercise 19");
assert(isNegativeOdd(negativeOddNumber), true, "Exercise 19");
assert(isNegativeOdd(negativeEvenNumber), false, "Exercise 19");
addToDone("Exercise 19 is correct.")


// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.
const isNegativeEven = num => isNegative(num) && isEven(num); // es6 refactor with previous defined functions

// function isNegativeEven(num) {
//     return isNegative(num) && isEven(num);
// }

assert(isNegativeEven(-4), true, "Exercise 20" );
assert(isNegativeEven(positiveOddNumber), false, "Exercise 20");
assert(isNegativeEven(positiveEvenNumber), false, "Exercise 20");
assert(isNegativeEven(negativeOddNumber), false, "Exercise 20");
assert(isNegativeEven(negativeEvenNumber), true, "Exercise 20");
addToDone("Exercise 20 is correct.")



// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.
const half = num => num / 2; // es6 refactor

// function half(num) {
//     return num / 2
// }

assert(half(4), 2, "Exercise 21");
assert(half(5), 2.5, "Exercise 21");
assert(half(positiveOddNumber), positiveOddNumber / 2, "Exercise 21");
assert(half(positiveEvenNumber), positiveEvenNumber / 2, "Exercise 21");
assert(half(negativeOddNumber), negativeOddNumber / 2, "Exercise 21");
assert(half(negativeEvenNumber), negativeEvenNumber / 2, "Exercise 21");
addToDone("Exercise 21 is correct.")



// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.
const double = num => num * 2; // es6 refactor

// function double(num) {
//     return num * 2;
// }

assert(double(4), 8, "Exercise 22");
assert(double(5), 10, "Exercise 22");
assert(double(positiveOddNumber), positiveOddNumber * 2, "Exercise 22");
assert(double(positiveEvenNumber), positiveEvenNumber * 2, "Exercise 22");
assert(double(negativeOddNumber), negativeOddNumber * 2, "Exercise 22");
assert(double(negativeEvenNumber), negativeEvenNumber * 2, "Exercise 22");
addToDone("Exercise 22 is correct.")



// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.
const triple = num => num * 3; // es6 refactor

// function triple(num) {
//     return num * 3;
// }

assert(triple(4), 12, "Exercise 23");
assert(triple(5), 15, "Exercise 23");
assert(triple(positiveOddNumber), positiveOddNumber * 3, "Exercise 23");
assert(triple(positiveEvenNumber), positiveEvenNumber * 3, "Exercise 23");
assert(triple(negativeOddNumber), negativeOddNumber * 3, "Exercise 23");
assert(triple(negativeEvenNumber), negativeEvenNumber * 3, "Exercise 23");
addToDone("Exercise 23 is correct.")



// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.
const reverseSign = num => num * -1; // es6 refactor

// function reverseSign(num) {
//     return num * -1;
// }

assert(reverseSign(4), -4, "Exercise 24");
assert(reverseSign(-5), 5, "Exercise 24");
assert(reverseSign(positiveOddNumber), positiveOddNumber * -1, "Exercise 24");
assert(reverseSign(positiveEvenNumber), positiveEvenNumber * -1, "Exercise 24");
assert(reverseSign(negativeOddNumber), negativeOddNumber * -1, "Exercise 24");
assert(reverseSign(negativeEvenNumber), negativeEvenNumber * -1, "Exercise 24");
addToDone("Exercise 24 is correct.")



// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number
const absoluteValue = num => Math.abs(num); // es6 refactor

// function absoluteValue(num) {
//     return Math.abs(num);
// }

assert(absoluteValue(4), 4, "Exercise 25");
assert(absoluteValue(-5), 5, "Exercise 25");
assert(absoluteValue(positiveOddNumber), positiveOddNumber, "Exercise 25");
assert(absoluteValue(positiveEvenNumber), positiveEvenNumber, "Exercise 25");
assert(absoluteValue(negativeOddNumber), negativeOddNumber * -1, "Exercise 25");
assert(absoluteValue(negativeEvenNumber), negativeEvenNumber * -1, "Exercise 25");
addToDone("Exercise 25 is correct.")



// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.
const isMultipleOfThree = num => num % 3 === 0; // es6 refactor

// function isMultipleOfThree(num) {
//     return num % 3 === 0;
// }

assert(isMultipleOfThree(3), true, "Exercise 26");
assert(isMultipleOfThree(15), true, "Exercise 26");
assert(isMultipleOfThree(9), true, "Exercise 26");
assert(isMultipleOfThree(4), false, "Exercise 26");
assert(isMultipleOfThree(10), false, "Exercise 26");
addToDone("Exercise 26 is correct.")




// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.
const isMultipleOfFive = num => num % 5 === 0; // es6 refactor

// function isMultipleOfFive(num) {
//     return num % 5 === 0;
// }

assert(isMultipleOfFive(3), false, "Exercise 27");
assert(isMultipleOfFive(15), true, "Exercise 27");
assert(isMultipleOfFive(9), false, "Exercise 27");
assert(isMultipleOfFive(4), false, "Exercise 27");
assert(isMultipleOfFive(10), true, "Exercise 27");
addToDone("Exercise 27 is correct.")



// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.
const isMultipleOfBothThreeAndFive = num => isMultipleOfThree(num) && isMultipleOfFive(num); // es6 refactor using previous functions

// function isMultipleOfBothThreeAndFive(num) {
//     return isMultipleOfThree(num) && isMultipleOfFive(num);
// }

assert(isMultipleOfBothThreeAndFive(15), true, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(45), true, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(3), false, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(9), false, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(4), false, "Exercise 28");
addToDone("Exercise 28 is correct.")


// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.
const square = num => num * num; // es6 refactor

// function square(num) {
//     return num * num;
// }

assert(square(3), 9, "Exercise 29");
assert(square(2), 4, "Exercise 29");
assert(square(9), 81, "Exercise 29");
assert(square(positiveOddNumber), positiveOddNumber * positiveOddNumber, "Exercise 29");
addToDone("Exercise 29 is correct.")


// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.
const add = (x,y) => x + y; // es6 refactor

// function add(x, y) {
//     return x + y;
// }

assert(add(3, 2), 5, "Exercise 30");
assert(add(10, -2), 8, "Exercise 30");
assert(add(5, 7), 12, "Exercise 30");
addToDone("Exercise 30 is correct.")



// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.
const cube = num => num ** 3; // es6 refactor

// function cube(num) {
//     return Math.pow(num, 3);
// }

assert(cube(3), 27, "Exercise 31");
assert(cube(2), 8, "Exercise 31");
assert(cube(5), 125, "Exercise 31");
assert(cube(positiveOddNumber), positiveOddNumber * positiveOddNumber * positiveOddNumber, "Exercise 31");
addToDone("Exercise 31 is correct.")



// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided number
const squareRoot = num => Math.sqrt(num); // es6 refactor

// function squareRoot(num) {
//     return Math.sqrt(num);
// }

assert(squareRoot(4), 2.0, "Exercise 32");
assert(squareRoot(64), 8.0, "Exercise 32");
assert(squareRoot(81), 9.0, "Exercise 32");
addToDone("Exercise 32 is correct.")


// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.
const subtract = (x,y) => x - y; // es6 refactor

// function subtract(x, y) {
//     return x - y;
// }

assert(subtract(8, 6), 2, "Exercise 33");
assert(subtract(27, 4), 23, "Exercise 33");
assert(subtract(12, 2), 10, "Exercise 33");
addToDone("Exercise 33 is correct.")



// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.
const multiply = (x,y) => x * y; // es6 refactor

// function multiply(x, y) {
//     return x * y;
// }

assert(multiply(2, 1), 2, "Exercise 34");
assert(multiply(3, 5), 15, "Exercise 34");
assert(multiply(5, 2), 10, "Exercise 34");
addToDone("Exercise 34 is correct.")



// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.
const divide = (x,y) => x / y; // es6 refactor

// function divide(x, y) {
//     return x / y;
// }

assert(divide(27, 9), 3, "Exercise 35");
assert(divide(15, 3), 5, "Exercise 35");
assert(divide(5, 2), 2.5, "Exercise 35");
assert(divide(10, 2), 5, "Exercise 35");
addToDone("Exercise 35 is correct.")


// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.
const quotient = (x, y) => Math.floor(x /y ); //es6 refactor

// function quotient(x, y) {
//     return Math.floor(x/y);
// }

assert(quotient(27, 9), 3, "Exercise 36");
assert(quotient(5, 2), 2, "Exercise 36");
assert(quotient(10, 3), 3, "Exercise 36");
addToDone("Exercise 36 is correct.")


// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.
const remainder = (x, y) => x % y; // es6 refactor

// function remainder(x, y) {
//     return x % y;
// }

assert(remainder(3, 3), 0, "Exercise 37");
assert(remainder(5, 2), 1, "Exercise 37");
assert(remainder(7, 5), 2, "Exercise 37");
addToDone("Exercise 37 is correct.")


// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.
const sumOfSquares = (x, y) => square(x) + square(y); //es6 refactor using previous defined functions

// function sumOfSquares(x, y) {
//     return square(x) + square(y);
// }

assert(sumOfSquares(3, 2), 13, "Exercise 38");
assert(sumOfSquares(5, 2), 29, "Exercise 38");
assert(sumOfSquares(2, 4), 20, "Exercise 38");
addToDone("Exercise 38 is correct.")



// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.
const timesTwoPlusThree = num => num * 2 + 3; // es6 refactor

// function timesTwoPlusThree(num) {
//     return num * 2 + 3;
// }

assert(timesTwoPlusThree(0), 3, "Exercise 39");
assert(timesTwoPlusThree(1), 5, "Exercise 39");
assert(timesTwoPlusThree(2), 7, "Exercise 39");
assert(timesTwoPlusThree(3), 9, "Exercise 39");
assert(timesTwoPlusThree(5), 13, "Exercise 39");
addToDone("Exercise 39 is correct.")


// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.
const areaOfRectangle = (x, y) => x * y; //es6 refactor

// function areaOfRectangle(x, y) {
//     return x * y;
// }

assert(areaOfRectangle(1, 3), 3, "Exercise 40");
assert(areaOfRectangle(5, 2), 10, "Exercise 40");
assert(areaOfRectangle(2, 7), 14, "Exercise 40");
assert(areaOfRectangle(5.3, 10.3), 54.59, "Exercise 40");
addToDone("Exercise 40 is correct.")



// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle
const areaOfCircle = num => num * num * Math.PI; // es6 refactor

// function areaOfCircle(num) {
//     return num * num * Math.PI;
// }

assert(areaOfCircle(3), 28.274333882308138, "Exercise 41");
assert(areaOfCircle(5), 78.53981633974483, "Exercise 41");
assert(areaOfCircle(7), 153.93804002589985, "Exercise 41");
addToDone("Exercise 41 is correct.")


// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.
const circumference = num => Math.PI * num * 2; // es6 refactor

// function circumference(num) {
//     return Math.PI * num * 2;
// }

assert(circumference(3), 18.84955592153876, "Exercise 42");
assert(circumference(5), 31.41592653589793, "Exercise 42");
assert(circumference(7), 43.982297150257104, "Exercise 42");
addToDone("Exercise 42 is correct.")

// In earlier exercises, the solution was to use a logical AND.
// In some of the future exercises, the solution will be to use a logical OR.
// The following two example functions are examples that provide a hint on how to as

// Example function where the function returns true if the input is one OR two.
function isOneOrTwo(x) {
    return x == 1 || x == 2
}

// Example function where the input is one of 3 possibilities
function isOneOrTwoOrThree(x) {
    return x == 1 || x == 2 || x == 3
}

// Exercise 43
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.
const isVowel = value => 'aeiouAEIOU'.indexOf(value) !== -1; //es6 refactor

// function isVowel(value) {
//     return ('aeiouAEIOU'.indexOf(value) !== -1);
// }

assert(isVowel("a"), true, "Exercise 43");
assert(isVowel("U"), true, "Exercise 43");
assert(isVowel("banana"), false, "Exercise 43");
assert(isVowel("Q"), false, "Exercise 43");
assert(isVowel("y"), false, "Exercise 43");
addToDone("Exercise 43 is correct.")


// Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.
const hasVowels = value => {                // es6 refactor
    let vowelList = 'aeiouAEIOU';
    for (let i = 0; i < value.length; i += 1) {
        if (vowelList.indexOf(value[i]) !== -1) return true;
    }
    return false;
}

// function hasVowels(value) {
//     var vowelList = 'aeiouAEIOU'
//     for(var i = 0; i < value.length; i += 1) {
//         if(vowelList.indexOf(value[i]) !== -1) {
//             return true;
//         }
//     }
//     return false;
// }

assert(hasVowels("banana"), true, "Exercise 44");
assert(hasVowels("ubuntu"), true, "Exercise 44");
assert(hasVowels("QQQQ"), false, "Exercise 44");
assert(hasVowels("wyrd"), false, "Exercise 44");
addToDone("Exercise 44 is correct.")


// Exercise 45
// Write a function definition named countVowels that takes in value and returns the count of the number of vowels in a sequence.
const countVowels = value => {          // es6 refactor
    let count = 0;
    let vowelList = 'aeiouAEIOU';
    for (let i = 0; i < value.length; i += 1) {
        if (vowelList.indexOf(value[i]) !== -1) {
            count ++;
        }
    }
    return count;
};

// function countVowels(value) {
//     var vowelList = 'aeiouAEIOU';
//     var vowelCount = 0;
//     for(var i = 0; i < value.length; i += 1) {
//         if(vowelList.indexOf(value[i]) !== -1) {
//             vowelCount++
//         }
//     }
//     return vowelCount;
// }

assert(countVowels("banana"), 3, "Exercise 45");
assert(countVowels("ubuntu"), 3, "Exercise 45");
assert(countVowels("mango"), 2, "Exercise 45");
assert(countVowels("QQQQ"), 0, "Exercise 45");
assert(countVowels("wyrd"), 0, "Exercise 45");
addToDone("Exercise 45 is correct.")


// Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels
const removeVowels = str => str.replace(/[aeiouAEIOU]/ig, ''); // es6 refactor using reg exp

// function removeVowels(str) {
//     return str.replace(/[aeiouAEIOU]/ig, '');
// }

assert(removeVowels("banana"), "bnn", "Exercise 46");
assert(removeVowels("ubuntu"), "bnt", "Exercise 46");
assert(removeVowels("mango"), "mng", "Exercise 46");
assert(removeVowels("QQQQ"), "QQQQ", "Exercise 46");
addToDone("Exercise 46 is correct.")


// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel
const startsWithVowel = str => {        // es6 refactor
    let vowelList = 'aeiouAEIOU';
    return vowelList.indexOf(str[0]) !== -1;
}

// function startsWithVowel(str) {
//     var vowelList = 'aeiouAEIOU';
//     return vowelList.indexOf(str[0]) !== -1;
// }

assert(startsWithVowel("ubuntu"), true, "Exercise 47");
assert(startsWithVowel("banana"), false, "Exercise 47");
assert(startsWithVowel("mango"), false, "Exercise 47");
addToDone("Exercise 47 is correct.")


// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel
const endsWithVowel = str => {          // es6 refactor
    let vowelList = 'aeiouAEIOU';
    return vowelList.indexOf(str[str.length -1]) !== -1;
}

// function endsWithVowel(str) {
//     var vowelList = 'aeiouAEIOU';
//     return vowelList.indexOf(str[str.length - 1]) !== -1;
// }

assert(endsWithVowel("ubuntu"), true, "Exercise 48");
assert(endsWithVowel("banana"), true, "Exercise 48");
assert(endsWithVowel("mango"), true, "Exercise 48");
assert(endsWithVowel("spinach"), false, "Exercise 48");
addToDone("Exercise 48 is correct.")


// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel
const startsAndEndsWithVowel = str => startsWithVowel(str) && endsWithVowel(str); // es6 refactor

// function startsAndEndsWithVowel(str) {
//     return startsWithVowel(str) && endsWithVowel(str);
// }

assert(startsAndEndsWithVowel("ubuntu"), true, "Exercise 49");
assert(startsAndEndsWithVowel("banana"), false, "Exercise 49");
assert(startsAndEndsWithVowel("mango"), false, "Exercise 49");
addToDone("Exercise 49 is correct.")


// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.
const first = arr => arr[0]; // es6 refactor

// function first(seq) {
//     return seq[0];
// }

assert(first("ubuntu"), "u", "Exercise 50");
assert(first([1, 2, 3]), 1, "Exercise 50");
assert(first(["JS", "is", "awesome"]), "JS", "Exercise 50");
addToDone("Exercise 50 is correct.")


// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.
const second = arr => arr[1]; // es6 refactor

// function second(seq) {
    // return seq[1];
// }
//
assert(second("ubuntu"), "b", "Exercise 51");
assert(second([1, 2, 3]), 2, "Exercise 51");
assert(second(["JS", "is", "awesome"]), "is", "Exercise 51");
addToDone("Exercise 51 is correct.")


// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.
const third = arr => arr[2]; // es6 refactor

// function third(seq) {
//     return seq[2];
// }

assert(third("ubuntu"), "u", "Exercise 52");
assert(third([1, 2, 3]), 3, "Exercise 52");
assert(third(["JS", "is", "awesome"]), "awesome", "Exercise 52");
addToDone("Exercise 52 is correct.")


// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.
const forth = arr => arr[3]; // es6 refactor

// function forth(seq) {
//     return seq[3];
// }

assert(forth("ubuntu"), "n", "Exercise 53");
assert(forth([1, 2, 3, 4]), 4, "Exercise 53");
assert(forth(["JS", "is", "awesome", "right?"]), "right?", "Exercise 53");
addToDone("Exercise 53 is correct.")


// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.
const last = arr => arr[arr.length -1]; // es6 refactor

// function last(seq) {
//     return seq[seq.length - 1];
// }

assert(last("ubuntu"), "u", "Exercise 54");
assert(last([1, 2, 3, 4]), 4, "Exercise 54");
assert(last(["JS", "is", "awesome"]), "awesome", "Exercise 54");
assert(last(["kiwi", "mango", "guava"]), "guava", "Exercise 54");
addToDone("Exercise 54 is correct.")


// Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.
const secondToLast = arr => arr[arr.length -2]; // es6 refactor

// function secondToLast(seq) {
//     return seq[seq.length - 2];
// }

assert(secondToLast("ubuntu"), "t", "Exercise 55");
assert(secondToLast([1, 2, 3, 4]), 3, "Exercise 55");
assert(secondToLast(["JS", "is", "awesome"]), "is", "Exercise 55");
assert(secondToLast(["kiwi", "mango", "guava"]), "mango", "Exercise 55");
addToDone("Exercise 55 is correct.")


// Exercise 56
// Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.
const thirdToLast = arr => arr[arr.length -3]; // es6 refactor

// function thirdToLast(seq) {
//     return seq[seq.length - 3];
// }

assert(thirdToLast("ubuntu"), "n", "Exercise 56");
assert(thirdToLast([1, 2, 3, 4]), 2, "Exercise 56");
assert(thirdToLast(["JS", "is", "awesome"]), "JS", "Exercise 56");
assert(thirdToLast(["strawberry", "kiwi", "mango", "guava"]), "kiwi", "Exercise 56");
addToDone("Exercise 56 is correct.")


// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array
const firstAndSecond = arr => [first(arr), second(arr)]; // es6 refactor

// function firstAndSecond(seq) {
//     return [first(seq), second(seq)];
// }

assert(firstAndSecond([1, 2, 3, 4]), [1, 2], "Exercise 57");
assert(firstAndSecond(["JS", "is", "awesome"]), ["JS", "is"], "Exercise 57");
assert(firstAndSecond(["strawberry", "kiwi", "mango", "guava"]), ["strawberry", "kiwi"], "Exercise 57");
addToDone("Exercise 57 is correct.")


// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array
const firstAndLast = arr => [first(arr), last(arr)]; // es6 refactor

// function firstAndLast(seq) {
//     return [first(seq), last(seq)];
// }

assert(firstAndLast([1, 2, 3, 4]), [1, 4], "Exercise 58");
assert(firstAndLast(["JS", "is", "awesome"]), ["JS", "awesome"], "Exercise 58");
assert(firstAndLast(["strawberry", "kiwi", "mango", "guava"]), ["strawberry", "guava"], "Exercise 58");
addToDone("Exercise 58 is correct.")

// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.
const firstToLast = arr => {    // es6 refactor
    let firstIndex = arr.shift();
    arr.push(firstIndex);
    return arr;
}

// function firstToLast(seq) {
//     var firstItem = seq.shift();
//     seq.push(firstItem);
//     return seq;
// }

assert(firstToLast([1, 2, 3, 4]), [2, 3, 4, 1], "Exercise 59");
assert(firstToLast(["JS", "is", "awesome"]), ["is", "awesome", "JS"], "Exercise 59");
assert(firstToLast(["strawberry", "kiwi", "mango", "guava"]), ["kiwi", "mango", "guava", "strawberry"], "Exercise 59");
addToDone("Exercise 59 is correct.")

// Exercise 60
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.
const sumAll = arr => arr.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0); // es6 refactor

// function sumAll(seq) {
//     return seq.reduce((a, b) => a + b, 0)
// }

assert(sumAll([1, 2, 3, 4]), 10, "Exercise 60");
assert(sumAll([3, 3, 3]), 9, "Exercise 60");
assert(sumAll([0, 5, 6]), 11, "Exercise 60");
addToDone("Exercise 60 is correct.")



//  Exercise 61
//  Write a function definition named mean that takes in sequence of numbers and returns the average value
const mean = arr => arr.reduce((accumulator, currentNumber) =>  accumulator + currentNumber / arr.length, 0);   // es6 refactor

// function mean(seq) {
//     return seq.reduce((a, b) => a + b) / seq.length;
// }

assert(mean([1, 2, 3, 4]), 2.5, "Exercise 61");
assert(mean([3, 3, 3]), 3, "Exercise 61");
assert(mean([1, 5, 6]), 4, "Exercise 61");
addToDone("Exercise 61 is correct.")



// Exercise 62
// Write a function definition named median that takes in sequence of numbers and returns the average value
const median = arr => arr.reduce((accumulator, currentNumber) => {  // es6 refactor
    let arrSort =  arr.sort();
    let mid = Math.floor(arr.length / 2); //2
    return arr.length % 2 !== 0 ? arrSort[mid] : (arrSort[mid - 1] + arrSort[mid]) / 2;
});

// function median(arr) {
//     const mid = Math.floor(arr.length / 2),
//         nums = [...arr].sort((a, b) => a - b);
//     return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
// }

assert(median([1, 2, 3, 4, 5]), 3.0, "Exercise 62");
assert(median([1, 2, 3]), 2.0, "Exercise 62");
assert(median([1, 5, 6]), 5.0, "Exercise 62");
assert(median([1, 2, 5, 6]), 3.5, "Exercise 62");
addToDone("Exercise 62 is correct.")


// Exercise 63
// Write a function definition named maxMinusMin that takes in an array of numbers and returns the difference of the maximum minus theminimum.
const maxMinusMin = arr => {    // es6 refactor
    let sortArr = arr.sort();
    return sortArr[arr.length -1] - sortArr[0];
}

// function maxMinusMin(arr) {
//     arr.sort()
//     return arr[arr.length -1] - arr[0];
// }

assert(maxMinusMin([1, 2, 2, 8, 3, 4]), 7, "Exercise 63");
assert(maxMinusMin([1, 1, 2, 3, 9]), 8, "Exercise 63");
assert(maxMinusMin([2, 2, 3, 3, 3, 7]), 5, "Exercise 63");
addToDone("Exercise 63 is correct.")


// Exercise 64
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together
const productOfAll = arr => arr.reduce((a, b) => a * b);    // es6 refactor


// function productOfAll(seq) {
//     var sum = 1;
//     for(var i = 0; i < seq.length; i += 1) {
//         sum = sum * seq[i];
//     }
//     return sum;
// }

assert(productOfAll([1, 2, 3]), 6, "Exercise 64");
assert(productOfAll([3, 4, 5]), 60, "Exercise 64");
assert(productOfAll([2, 2, 3, 0]), 0, "Exercise 64");
addToDone("Exercise 64 is correct.")


// Exercise 65
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.
const getHighestNumber = arr => {   // es6 refactor
    let sortArr = arr.sort();
    return sortArr[sortArr.length - 1];
}

// function getHighestNumber(seq) {
//     seq.sort();
//     return seq[seq.length - 1];
// }

assert(getHighestNumber([1, 2, 3]), 3, "Exercise 65");
assert(getHighestNumber([1, 5, 2, 3, 4]), 5, "Exercise 65");
assert(getHighestNumber([5, 1, 2, 4, 9]), 9, "Exercise 65");
addToDone("Exercise 65 is correct.")


// Exercise 66
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.
const getSmallestNumber = arr => {  // es6 refactor
    let sortArr =  arr.sort();
    return sortArr[0];
}

// function getSmallestNumber(seq) {
//     seq.sort();
//     return seq[0];
// }

assert(getSmallestNumber([1, 2, 3]), 1, "Exercise 66");
assert(getSmallestNumber([3, 5, 9, 8, 1]), 1, "Exercise 66");
assert(getSmallestNumber([8, 9, 4, 5, 7]), 4, "Exercise 66");
addToDone("Exercise 66 is correct.")


// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.
const onlyOddNumbers = arr => arr.filter(n => n % 2 !== 0); // es6 refactor

// function onlyOddNumbers(arr) {
//     var odds = [];
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isOdd(arr[i])) {
//             odds.push(arr[i]);
//         }
//     }
//     return odds;
// }

assert(onlyOddNumbers([1, 2, 3]), [1, 3], "Exercise 67");
assert(onlyOddNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-5, -3, -1, 1, 3, 5], "Exercise 67");
assert(onlyOddNumbers([-4, -3, 1]), [-3, 1], "Exercise 67");
addToDone("Exercise 67 is correct.")

// Exercise 68
// Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in an array.
const onlyEvenNumbers = arr => arr.filter(n => n % 2 === 0);    // es6 refactor

// function onlyEvenNumbers(arr) {
//     var evens = [];
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isEven(arr[i])) {
//             evens.push(arr[i]);
//         }
//     }
//     return evens;
// }

assert(onlyEvenNumbers([1, 2, 3]), [2], "Exercise 68");
assert(onlyEvenNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-4, -2, 2, 4], "Exercise 68");
assert(onlyEvenNumbers([-4, -3, 1]), [-4], "Exercise 68");
addToDone("Exercise 68 is correct.")


// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.
const onlyPositiveNumbers = arr => arr.filter(n => n > 0);  // es6 refactor

// function onlyPositiveNumbers(arr) {
//     var positives = [];
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isPositive(arr[i])) {
//             positives.push(arr[i]);
//         }
//     }
//     return positives;
// }

assert(onlyPositiveNumbers([1, 2, 3]), [1, 2, 3], "Exercise 69");
assert(onlyPositiveNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], "Exercise 69");
assert(onlyPositiveNumbers([-4, -3, 1]), [1], "Exercise 69");
addToDone("Exercise 69 is correct.")


// Exercise 70
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in an array.
const onlyNegativeNumbers = arr => arr.filter(n => n < 0);  // es6 refactor

// function onlyNegativeNumbers(arr) {
//     var negatives = [];
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isNegative(arr[i])) {
//             negatives.push(arr[i]);
//         }
//     }
//     return negatives;
// }

assert(onlyNegativeNumbers([1, 2, 3]), [], "Exercise 70");
assert(onlyNegativeNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-5, -4, -3, -2, -1], "Exercise 70");
assert(onlyNegativeNumbers([-4, -3, 1]), [-4, -3], "Exercise 70");
addToDone("Exercise 70 is correct.");


// Exercise 71
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence
const hasEvens = arr => {       // es6 refactor
    for (let i = 0; i < arr.length; i += 1) {
        if (isEven(arr[i])) {
            return true
        }
    }
    return false;
}

// function hasEvens(arr) {
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isEven(arr[i])) {
//             return true;
//         }
//     }
//     return false;
// }

assert(hasEvens([1, 2, 3]), true, "Exercise 71");
assert(hasEvens([2, 5, 6]), true, "Exercise 71");
assert(hasEvens([3, 3, 3]), false, "Exercise 71");
assert(hasEvens([]), false, "Exercise 71");
addToDone("Exercise 71 is correct.");


// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers
const countEvens = arr => {     // es6 refactor
    let count = 0;
    arr.forEach((e, i) => {
        if (isEven(arr[i])) {
            count++
        }
    })
    return count;
}

// function countEvens(arr) {
//     var count = 0
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isEven(arr[i])) {
//             count++
//         }
//     }
//     return count;
// }

assert(countEvens([1, 2, 3]), 1, "Exercise 72");
assert(countEvens([2, 5, 6]), 2, "Exercise 72");
assert(countEvens([3, 3, 3]), 0, "Exercise 72");
assert(countEvens([5, 6, 7, 8] ), 2, "Exercise 72");
addToDone("Exercise 72 is correct.")


// Exercise 73
// Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence
const hasOdds = arr => {        // es6 refactor
    for (let i = 0; i < arr.length; i += 1) {
        if (isOdd(arr[i])) {
            return true;
        }
    }
    return false;
}

// function hasOdds(arr) {
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isOdd(arr[i])) {
//             return true;
//         }
//     }
//     return false;
// }

assert(hasOdds([1, 2, 3]), true, "Exercise 73");
assert(hasOdds([2, 5, 6]), true, "Exercise 73");
assert(hasOdds([3, 3, 3]), true, "Exercise 73");
assert(hasOdds([2, 4, 6]), false, "Exercise 73");
addToDone("Exercise 73 is correct.")


// Exercise 74
// Write a function definition named countOdds that takes in sequence of numbers and returns a count of the any odd numbers in the sequence
const countOdds = arr => {      // es6 refactor
    let count = 0;
    arr.forEach((e, i) => {
        if (isOdd(arr[i])) {
            count++
        }
    })
    return count;
}

// function countOdds(arr) {
//     var count = 0
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isOdd(arr[i])) {
//             count++
//         }
//     }
//     return count;
// }

assert(countOdds([1, 2, 3]), 2, "Exercise 74");
assert(countOdds([2, 5, 6]), 1, "Exercise 74");
assert(countOdds([3, 3, 3]), 3, "Exercise 74");
assert(countOdds([2, 4, 6]), 0, "Exercise 74");
addToDone("Exercise 74 is correct.")


// Exercise 75
// Write a function definition named countNegatives that takes in sequence of numbers and returns a count of the number of negative numbers
const countNegatives = arr => {     // es6 syntax
    let count = 0;
    arr.forEach((e, i) => {
        if (isNegative(arr[i])) {
            count++
        }
    })
    return count;
}

// function countNegatives(arr) {
//     var count = 0;
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isNegative(arr[i])) {
//             count++
//         }
//     }
//     return count;
// }

assert(countNegatives([1, -2, 3]), 1, "Exercise 75");
assert(countNegatives([2, -5, -6]), 2, "Exercise 75");
assert(countNegatives([3, 3, 3]), 0, "Exercise 75");
addToDone("Exercise 75 is correct.")


// Exercise 76
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive numbers
const countPositives = arr => {     // es6 syntax
    let count = 0;
    arr.forEach((e, i) => {
        if (isPositive(arr[i])) {
            count++
        }
    })
    return count;
}

// function countPositives(arr) {
//     var count = 0;
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isPositive(arr[i])) {
//             count++
//         }
//     }
//     return count;
// }

assert(countPositives([1, -2, 3]), 2, "Exercise 76");
assert(countPositives([2, -5, -6]), 1, "Exercise 76");
assert(countPositives([3, 3, 3]), 3, "Exercise 76");
assert(countPositives([-2, -1, -5]), 0, "Exercise 76");
addToDone("Exercise 76 is correct.")


// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence
const onlyPositiveEvens = arr => arr.filter(n => n % 2 === 0 && n > 0);     // es6 syntax

// function onlyPositiveEvens(arr) {
//     var positivesAndEvens = [];
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isEven(arr[i]) && isPositive(arr[i])) {
//             positivesAndEvens.push(arr[i]);
//         }
//     }
//     return positivesAndEvens;
// }

assert(onlyPositiveEvens([1, -2, 3]), [], "Exercise 77");
assert(onlyPositiveEvens([2, -5, -6]), [2], "Exercise 77");
assert(onlyPositiveEvens([3, 3, 4, 6]), [4, 6], "Exercise 77");
assert(onlyPositiveEvens([2, 3, 4, -1, -5]), [2, 4], "Exercise 77");
addToDone("Exercise 77 is correct.")


// Exercise 78
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence
const onlyPositiveOdds = arr => arr.filter(n => n % 2 !== 0 && n > 0);      // es6 syntax

// function onlyPositiveOdds(arr) {
//     var positiveAndOdds = [];
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isPositive(arr[i]) && isOdd(arr[i])) {
//             positiveAndOdds.push(arr[i]);
//         }
//     }
//     return positiveAndOdds;
// }

assert(onlyPositiveOdds([1, -2, 3]), [1, 3], "Exercise 78");
assert(onlyPositiveOdds([2, -5, -6]), [], "Exercise 78");
assert(onlyPositiveOdds([3, 3, 4, 6]), [3, 3], "Exercise 78");
assert(onlyPositiveOdds([2, 3, 4, -1, -5]), [3], "Exercise 78");
addToDone("Exercise 78 is correct.")


// Exercise 79
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence
const onlyNegativeEvens = arr => arr.filter(n => n % 2 === 0 && n < 0);     // es6 syntax

// function onlyNegativeEvens(arr) {
//     var negativeAndEvens = [];
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isNegative(arr[i]) && isEven(arr[i])) {
//             negativeAndEvens.push(arr[i]);
//         }
//     }
//     return negativeAndEvens;
// }

assert(onlyNegativeEvens([1, -2, 3]), [-2], "Exercise 79");
assert(onlyNegativeEvens([2, -5, -6]), [-6], "Exercise 79");
assert(onlyNegativeEvens([3, 3, 4, 6]), [], "Exercise 79");
assert(onlyNegativeEvens([-2, 3, 4, -1, -4]), [-2, -4], "Exercise 79");
addToDone("Exercise 79 is correct.")


// Exercise 80
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence
const onlyNegativeOdds = arr => arr.filter(n => n % 2 !== 0 && n < 0);      // es6 syntax

// function onlyNegativeOdds(arr) {
//     var negativeAndOdds = [];
//     for(var i = 0; i < arr.length; i += 1) {
//         if(isNegative(arr[i]) && isOdd(arr[i])) {
//             negativeAndOdds.push(arr[i]);
//         }
//     }
//     return negativeAndOdds;
// }

assert(onlyNegativeOdds([1, -2, 3]), [], "Exercise 80");
assert(onlyNegativeOdds([2, -5, -6]), [-5], "Exercise 80");
assert(onlyNegativeOdds([3, 3, 4, 6]), [], "Exercise 80");
assert(onlyNegativeOdds([2, -3, 4, -1, -4]), [-3, -1], "Exercise 80");
addToDone("Exercise 80 is correct.")


// Exercise 81
// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.
const shortestString = arr => arr.reduce((a,b) => a.length <= b.length ? a : b);        // es6 syntax




// function shortestString(arr) {
//     var longString = "strings are cool";
//     for(var i = 0; i < arr.length; i += 1) {
//         if(arr[i].length < longString.length) {
//             longString = arr[i];
//         }
//     }
//     return longString;
// }

assert(shortestString(["kiwi", "mango", "strawberry"]), "kiwi", "Exercise 81");
assert(shortestString(["hello", "everybody"]), "hello", "Exercise 81");
assert(shortestString(["mary", "had", "a", "little", "lamb"]), "a", "Exercise 81");
addToDone("Exercise 81 is correct.")


// Exercise 82
// Write a function definition named longestString that takes in sequence of strings and returns the longest string in the array.
const longestString = arr => arr.reduce((a, b) => a.length >= b.length ? a : b);        // es6 syntax


// function longestString(arr) {
//     var shortString = 'hi';
//     for(var i = 0; i < arr.length; i += 1) {
//         if(arr[i].length > shortString.length) {
//             shortString = arr[i];
//         }
//     }
//     return shortString;
// }

assert(longestString(["kiwi", "mango", "strawberry"]), "strawberry", "Exercise 82");
assert(longestString(["hello", "everybody"]), "everybody", "Exercise 82");
assert(longestString(["mary", "had", "a", "little", "lamb"]), "little", "Exercise 82");
addToDone("Exercise 82 is correct.")


// Exercise 83
// Write a function definition named getUniqueValues that takes in an array and returns an with only the unique values from that array.
const getUniqueValues = arr => arr.filter((value, index, a) => a.indexOf(value) === index);


// function getUniqueValues(arr) {
//     var uniqueValues = [];
//     for(var i = 0; i < arr.length; i += 1) {
//         if(uniqueValues.includes(arr[i])) {
//             continue;
//         }
//         uniqueValues.push(arr[i]);
//     }
//     return uniqueValues;
// }

assert(getUniqueValues(["ant", "ant", "mosquito", "mosquito", "ladybug"]), ["ant", "mosquito", "ladybug"], "Exercise 83");
assert(getUniqueValues(["b", "a", "n", "a", "n", "a", "s"]), ["b", "a", "n", "s"], "Exercise 83");
assert(getUniqueValues(["mary", "had", "a", "little", "lamb", "little", "lamb", "little", "lamb"]), ["mary", "had", "a", "little", "lamb"], "Exercise 83");
addToDone("Exercise 83 is correct.")


// Exercise 84
// Write a function definition named elementsTimesTwo that takes in an array of numbers and returns an array with each value multiplied by 2.
const elementsTimesTwo = arr => arr.map((n) => n * 2);


// function elementsTimesTwo(arr) {
//     for(var i = 0; i < arr.length; i += 1) {
//         arr[i] *= 2;
//     }
//     return arr;
// }

assert(elementsTimesTwo([1, 2, 3]), [2, 4, 6], "Exercise 84")
assert(elementsTimesTwo([0, 0, 0]), [0, 0, 0], "Exercise 84")
assert(elementsTimesTwo([5, 10, 15]), [10, 20, 30], "Exercise 84")
addToDone("Exercise 84 is correct.")


// Exercise 85
// Write a function named flatten that takes in an array of arrays. Return the flattened array.
let flatten = arr => arr.flat();

assert(flatten([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6], "Exercise 85");
assert(flatten([[1, 2, 3], [1, 2, 3], [1, 2, 3]]), [1, 2, 3, 1, 2, 3, 1, 2, 3], "Exercise 85");
assert(flatten([["tomato", "mango", "kiwi"], ["eggplant", "broccoli"]]), ["tomato", "mango", "kiwi", "eggplant", "broccoli"], "Exercise 85");
addToDone("Exercise 85 is correct.")



// Exercise 86
// Write a function definition named addOneToArray that adds one to every number in an array
const addOneToArray = arr => arr.map((n) => n + 1);


// function addOneToArray(arr) {
//     for(var i = 0; i < arr.length; i += 1) {
//         arr[i] += 1;
//     }
//     return arr;
// }

assert(addOneToArray([1, 2, 3]), [2, 3, 4], "Exercise 86");
assert(addOneToArray([4, 4, 4]), [5, 5, 5], "Exercise 86");
assert(addOneToArray([9, 10, 11]), [10, 11, 12], "Exercise 86");
addToDone("Exercise 86 is correct.")


// Working with JS Objects

// The following objects
const tukeyPaper = {
    "title": "The Future of Data Analysis",
    "author": "John W. Tukey",
    "link": "https://projecteuclid.org/euclid.aoms/1177704711",
    "year_published": 1962
}

const thomasPaper = {
    "title": "A mathematical model of glutathione metabolism",
    "author": "Rachel Thomas",
    "link": "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
    "year_published": 2008
}


// Exercise 87
// Write a function named getPaperTitle that takes in a object and returns the title property
const getPaperTitle = obj => obj.title;

assert(getPaperTitle(tukeyPaper), "The Future of Data Analysis", "Exercise 87");
assert(getPaperTitle(thomasPaper), "A mathematical model of glutathione metabolism", "Exercise 87");
addToDone("Exercise 87 is correct.")


// Exercise 88
// Write a function named getYearPublished that takes in an objects and returns the value behind the "year_published" key.
const getYearPublished = obj => obj.year_published;

assert(getYearPublished(tukeyPaper), 1962, "Exercise 88");
assert(getYearPublished(thomasPaper), 2008, "Exercise 88");
addToDone("Exercise 88 is correct.")


// this code defines a JS object with information about a book.
const book = {
    "title": "Genetic Algorithms and Machine Learning for Programmers",
    "price": 36.99,
    "author": "Frances Buontempo"
}

// Exercise 89
// Write a function named getPrice that takes in a object and returns the price
const getPrice = obj => obj.price;

assert(getPrice(book), 36.99, "Exercise 89");
addToDone("Exercise 89 is complete.")



// Exercise 90
// Write a function named getBookAuthor that takes in a object (the above declared book variable) and returns the author's name
const getBookAuthor = obj => obj.author;

assert(getBookAuthor(book), "Frances Buontempo", "Exercise 90");
addToDone("Exercise 90 is complete.")


// The next exercises work with a arrays of objects.
// You'll see arrays of objects over and over again with data in a program.
// Here is our arrays of objects.
const books = [
    {
        "title": "Genetic Algorithms and Machine Learning for Programmers",
        "price": 36.99,
        "author": "Frances Buontempo"
    },
    {
        "title": "The Visual Display of Quantitative Information",
        "price": 38.00,
        "author": "Edward Tufte"
    },
    {
        "title": "Practical Object-Oriented Design",
        "author": "Sandi Metz",
        "price": 30.47
    },
    {
        "title": "Weapons of Math Destruction",
        "author": "Cathy O'Neil",
        "price": 17.44
    }
]


// Exercise 91
// Write a function named getNumberOfBooks that takes in a array of objects and returns the number of objects in that array.
const getNumberOfBooks = arr => arr.length;

assert(getNumberOfBooks(books), 4, "Exercise 91");
addToDone("Exercise 91 is complete.")



// Exercise 92
// Write a function named totalOfBookPrices that takes in a array of objects and returns the sum total of all the book prices added together
const totalOfBookPrices = arr => arr.reduce((total, book) => total + book.price, 0);


// function totalOfBookPrices(arr) {
//     var sumOfPrices = 0;
//     for(var i = 0; i < arr.length; i += 1) {
//         sumOfPrices += arr[i].price;
//     }
//     return sumOfPrices;
// }

assert(totalOfBookPrices(books), 122.9, "Exercise 92")
addToDone("Exercise 92 is complete.")


// Exercise 93
// Write a function named getAverageBookPrice that takes in a array of objects and returns the average book price.
const getAverageBookPrice = arr => arr.reduce((total, book) => total + book.price / arr.length, 0);


// function getAverageBookPrice(book) {
//     var avgBookPrice = 0;
//     books.forEach(function (book) {
//         avgBookPrice += book.price;
//     })
//     return avgBookPrice / book.length;
// }

assert(getAverageBookPrice(books), 30.725, "Exercise 93");
addToDone("Exercise 93 is complete.")


// Exercise 94
// Write a function called highestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the highest priced book.
// Hint: Much like sometimes start functions with a variable set to zero, you may want to create a object with the price set to zero to compare to each object's price in the array
const highestPriceBook = arr => {
    let obj = {
        title: 'harry potter',
        author: 'jk rowling',
        price: 0
    }
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].price > obj.price) {
            obj = arr[i];
        }
    }
    return obj;
}


// function highestPriceBook(arr) {
//     var obj = {
//         "title": "Patrick Starr",
//         "author": "Spongebob",
//         "price": "0.00"
//     }
//     for(var i = 0; i < arr.length; i += 1) {
//         if(arr[i].price > obj.price) {
//             obj = arr[i];
//         }
//     }
//     return obj;
// }

assert(highestPriceBook(books), {
    "title": "The Visual Display of Quantitative Information",
    "price": 38.00,
    "author": "Edward Tufte"
}, "Exercise 94");

addToDone("Exercise 94 is complete")



// Exercise 95
// Write a function called lowestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the lowest priced book.
// Hint: Much like sometimes start functions with a variable set to zero or float('inf'), you may want to create a object with the price set to float('inf') to compare to each object in the array
const lowestPriceBook = arr => {
    let obj = {
        title: 'harry potter',
        author: 'jk rowling',
        price: Infinity
    }
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].price < obj.price) {
            obj = arr[i];
        }
    }
    return obj;
}


// function lowestPriceBook(arr) {
//     var obj = {
//         title: "Sam Lansford road to Codeup",
//         author: "Sam Lansford",
//         price: 100.00
//     }
//     for(var i = 0; i < arr.length; i += 1) {
//         if(arr[i].price < obj.price) {
//             obj = arr[i];
//         }
//     }
//     return obj;
// }

assert(lowestPriceBook(books), {
    "title": "Weapons of Math Destruction",
    "author": "Cathy O'Neil",
    "price": 17.44
}, "Exercise 95");
addToDone("Exercise 95 is complete.")


const shoppingCart = {
    "tax": .08,
    "items": [
        {
            "title": "orange juice",
            "price": 3.99,
            "quantity": 1
        },
        {
            "title": "rice",
            "price": 1.99,
            "quantity": 3
        },
        {
            "title": "beans",
            "price": 0.99,
            "quantity": 3
        },
        {
            "title": "chili sauce",
            "price": 2.99,
            "quantity": 1
        },
        {
            "title": "chocolate",
            "price": 0.75,
            "quantity": 9
        }
    ]
}


// Exercise 96
// Write a function named getTaxRate that takes in the above shopping cart as input and returns the tax rate.
// Hint: How do you access a key's value on a object? The tax rate is one key of the entire shoppingCart object.
const getTaxRate = shoppingCart => shoppingCart.tax;

assert(getTaxRate(shoppingCart), .08, "Exercise 96");
addToDone("Exercise 96 is complete")



// Exercise 97
// Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart.
// We're not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.
const numberOfItemTypes = arr => {
    let uniqueValues = [];
    for (let i = 0; i < arr.items.length; i += 1) {
        if (uniqueValues.includes(arr.items[i].title)) {
            continue;
        }
        uniqueValues.push(arr.items[i].title);
    }
    return uniqueValues.length;
}


// function numberOfItemTypes(shoppingCart) {
//     var uniqueValues = [];
//     for(var i = 0; i < shoppingCart.items.length; i += 1) {
//         if(uniqueValues.includes(shoppingCart.items[i].title)) {
//             continue;
//         }
//         uniqueValues.push(shoppingCart.items[i].title);
//     }
//     return uniqueValues.length;
// }

assert(numberOfItemTypes(shoppingCart), 5, "Exercise 97");
addToDone("Exercise 97 is complete.")



// Exercise 98
// Write a function named totalNumberOfItems that takes in the shopping cart as input and returns the total number all item quantities.
// This should return the sum of all of the quantities from each item type
// const totalNumberOfItems = arr => arr.reduce((total, cart) => {
//     return total + cart.items.quantity
// }, 0);       *** throwing error of arr.reduce is not a function but will try and work it later ***


function totalNumberOfItems(shoppingCart) {
    var numOfQuantities = 0;
    for(var i = 0; i < shoppingCart.items.length; i += 1) {
        numOfQuantities += shoppingCart.items[i].quantity;
    }
    return numOfQuantities;
}

assert(totalNumberOfItems(shoppingCart), 17, "Exercise 98");
addToDone("Exercise 98 is complete.")



// Exercise 99
// Write a function named getAverageItemPrice that takes in the shopping cart as an input and returns the average of all the item prices.
// Hint - This should determine the total price divided by the number of types of items. This does not account for each item type's quantity.\
// const getAverageItemPrice = arr => arr.reduce((total, cart) => total + cart.price / arr.length, 0);


function getAverageItemPrice(obj) {
    var avgItemPrice = 0;
    for(var i = 0; i < obj.items.length; i += 1) {
        avgItemPrice += obj.items[i].price;
    }
    return avgItemPrice / obj.items.length;
}

assert(getAverageItemPrice(shoppingCart), 2.1420000000000003, "Exercise 99");
addToDone("Exercise 99 is complete.")



// Exercise 100
// Write a function named getAverageSpentPerItem that takes in the shopping cart and returns the average of summing each item's quantities times that item's price.
// Hint: You may need to set an initial total price and total total quantity to zero, then sum up and divide that total price by the total quantity
function getAverageSpentPerItem(obj) {
    var totalPrice = 0;
    var totalQuantity = 0;
    for(var i = 0; i < obj.items.length; i += 1) {
        totalPrice += obj.items[i].price * obj.items[i].quantity;
        totalQuantity += obj.items[i].quantity;
    }
    return totalPrice / totalQuantity;
}

assert(getAverageSpentPerItem(shoppingCart), 1.333529411764706, "Exercise 100");
addToDone("Exercise 100 is complete.")


// Exercise 101
// Write a function named mostSpentOnItem that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// Be sure to do this as programmatically as possible.
// Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// Hint: Consider creating a variable that is a object with the keys "price" and "quantity" both set to 0. You can then compare each item's price and quantity total to the one from "most"
function mostSpentOnItem(obj) {
    var newObj = {
        title: "Cody the duck",
        price: 0,
        quantity: 0
    }
    for(var i = 0; i < obj.items.length; i += 1) {
        if((obj.items[i].price * obj.items[i].quantity) > (newObj.price * newObj.quantity)) {
            newObj = obj.items[i];
        }
    }
    return newObj;
}

assert(mostSpentOnItem(shoppingCart), {
    "title": "chocolate",
    "price": 0.75,
    "quantity": 9
}, "Exercise 101");
addToDone("Exercise 101 is complete.")