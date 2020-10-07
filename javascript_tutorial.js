// Comments:
// Comments are ignored by JavaScript, involve using two '//'
console.log("hello"); // we can have in-line comments
/* This
is a 
multiline
comment - use "/*"
*/



// Variables
// Setting variables - three ways
// var has a global scope but can be changed
var myName = "Jose";
// let has a local scope and can be changed
let lastName = "Martinez";
// const has a global scope and cannot be changed
const middleName = "Alonso";
// Assigning/initializing a variable - variable capitalization matters!!
let a;
let A;
// Assigning a value to "a"
a = 7;
// Declaring and initializing a variable - combine both steps
let b = 2;
// console.log() function lets us see outputs in the console
console.log(a);
console.log(A);



// Working with Numbers
// Performing arithmetic operations on numbers - pretty straight forward
let sum = 10+10;
let difference = 20-10;
let product = 5*10;
let quotient = 66*33;
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);

// Incrementing and decrementing numbers
myVar = 87;
myVar ++;
console.log(myVar);
myVar --;
console.log(myVar);

// Creating floats - anything with decimal value will be a float
let ourDecimal = 5.7;
// Working with floats lets us use the remainder function - modulus equivalent
let remainder;
remainder = 11%3;
console.log(remainder);

// Compound assignment with augmented addition - shortens a = a+12 below:
a = 10;
a += 12;
console.log(a);
// Compound assignment with augmented subtraction - shortens a= a-9 below:
a -= 5;
console.log(a);
// Compound assignment with augmented multiplication - shortens a= a*2 below:
a *= 2;
console.log(a);
// Compound assignment with augmented division - shortens a= a/2 below:
a /= 2;
console.log(a);



// String variables
// Example of string variables AKA string literals:
let firstName = "John";
let otherLastName = "Smith";

// Escaping literal quotes in string - must use the forward slash before special character
let myStr = "I am a \"double quoted\" string inside double quotes";
console.log(myStr);
// Can also use single or double quotes for same result:
myStr = 'I am a "double quoted" string inside quotes';
console.log(myStr);

/* 
Special Escape Code Outputs
\' single quotes
\" double quotes
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\ from feed
*/
// Examples:
myStr = "First line \n\t\\Second line\nThird line";
console.log(myStr);

// Concatenating strings
// We can use the "+" operator with strings
// Example:
let ourStr = "I come first. " + "I come second.";
console.log(ourStr);
// Can also use the "+=" operator:
ourStr += " I come third.";
console.log(ourStr);
// Concatenating strings with variables:
myName = "Oso";
let nameDeclare = "My name is " + myName;
console.log(nameDeclare);
// Appending variables to strings
let anAdjective = "awesome";
ourStr = "Lifting weights is ";
ourStr += anAdjective;
console.log(ourStr);

// Finding the length of a string using the "length" property:
let firstNameLength = 0;
firstName = "Jeffrey";
firstNameLength = firstName.length;
console.log(firstNameLength);

// Indexing strings using "[]":
let firstLetter = "";
firstName = "Johnny";
firstLetter = firstName[0];
console.log(firstLetter);
// Strings are immutable - cannot change individual parts only the entire string
// Finding the last letter of a string using length property
let lastLetter = firstName[firstName.length -1];
console.log(lastLetter);



// Arrays
// Storing multiple values with arrays
let myArray = ["John", 23];
console.log(myArray);
// Nested Arrays - multi-dimensional arrays
myArray = [["The universe", 42], ["everything", 101010]];
console.log(myArray);
// Accessing Arrays with Indexes
myArray = [50,60,70];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
// Modifying arrays with indexes
myArray = [1,2,3,4,5];
myArray[0] = 0;
console.log(myArray);
// Accessing multi-dimensional arrays with indexes
myArray = [[1,2,3], [4,5,6], [[7,8,9], 13, 14]];
console.log(myArray[0][0]);
console.log(myArray[2][0][1]);
console.log(myArray[2][1]);
// We can append data to an array with the "push" function 
myArray = [["John", 23], ["Cat", 2]];
myArray.push(["Rick", 12]);
console.log(myArray);
// Removing the last from an array with the "pop" function
popFunction = myArray.pop();
console.log(popFunction);
console.log(myArray);
// Removing the first element in an array with the "shift" function 
shiftFunction = myArray.shift();
console.log(shiftFunction);
console.log(myArray);
// Adding an element to the begging of an array with the "unshift" function
myArray = ["Homer", "J.", "Simpson"];
myArray.unshift("Mr.");
console.log(myArray);



// Functions
// Example:
function myFunction() {
    console.log("Hello, world!");
}
// Calling the function
myFunction();

// Giving functions Parameters
function myFuncWithArgs (a,b) {
    console.log(a-b);
}
myFuncWithArgs(55,5);

/* Variables declared within a function have a local scope trying to call that value outside the function will not return the same value instead the output returns the value of the variable as was assigned outside the function */
function myLocalScope() {
    let myVar = 5;
    console.log(myVar);
}
myLocalScope();
console.log(myVar);

// Returning a value from a function using the return function
function minusSeven(num) {
    return num -7;
}
console.log(minusSeven(10));

// Assignment with a returned number
let changedNum = 0;
function change(num) {
    return (num + 5) / 3;
}
changedNum = change(10);
console.log(changedNum);



// Boolean Values
// Using conditional logic with "if" statements
function myTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true."
    }
    return "No, it's false."
}
console.log(myTrueOrFalse(true));
console.log(myTrueOrFalse(false));

// Comparison with equality operator
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(12));
// Comparison with the strict equality operator
// Difference in "==" and "===" is that "===" does not attempt to convert data types to the same type
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict("7"));
console.log(testStrict(7));

// Comparison using the inequality operator
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(98));
console.log(testNotEqual(99));
// Comparison using the strict inequality operator
function testStrictNotEqual(val) {
    if (val !== 10) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));
console.log(testStrictNotEqual(17));

// Comparison with the logical and operator - "&&"
function testLogicalAnd(val) {
    if (val <= 50) {
        if (val >= 25) {
            return "Yes";
        }
    }

    return "No";
}
console.log(testLogicalAnd(30));
// shortening the function with and:
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    return "No";
}
console.log(testLogicalAnd(30));

// Comparison using the or operator - "||"
function testLogicalOr(val) {
    if (val <10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(15));
console.log(testLogicalOr(25));

// Else Statements
function testElse(val) {
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }

    return result;
}
console.log(testElse(6));

// Else if statements - used for testing multiple conditions
// Order is VERY IMPORTANT
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(4));
console.log(testElseIf(11));
console.log(testElseIf(6));



// Switch statements
// Switch statements the value and can have multiple case statements for different values
function caseInSwitch(val) {
    let answer = "";
    switch(val) {
        case 1: 
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
    }
    return answer;
}
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));

// Setting default values to switch statements
function switchOfStuff(val) {
    let answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "case";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(switchOfStuff(2));

// Multiple identical options in switch statements
function sequentialSizes(val) {
    let answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(1));



// Returning boolean values from functions
function isLess(a,b) {
    return a < b;
}
console.log(isLess(2,5));



// Building JavaScript objects
// Example:
let myDog = {
    "name": "Coco",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
    "color eyes": "brown",
    1: "Curr"
};
// Accessing object properties with dot notation - explicit
let nameValue = myDog.name;
console.log(nameValue);
// Accessing object properties with bracket notation - required if name has a space or accessing variables
let dogEyes = myDog["color eyes"];
let breed = 1;
let dogBreed = myDog[breed];
console.log(dogEyes);
console.log(dogBreed);
// Updating object properties
myDog.name = "Oso";
console.log(myDog.name);
// Adding a new property to an object
myDog["Owner Name"] = "Bob";
console.log(myDog["Owner Name"]);
// Deleting a property from an object
delete myDog["Owner Name"];
console.log(myDog);

// Using objects for lookups
function phoneticLookup(val) {
    let result = "";
    let lookupVar = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago"
    };
    result = lookupVar[val];
    return result;
}
console.log(phoneticLookup("alpha"));

// Manipulating complex objects
let myMusic = [
    {
        "artist": "50 Cent",
        "title": "Many Men",
        "rating": 5,
        "formats": [
            "CD",
            "LP"
        ],
        "Apple Music": true 
    },
    {
        "artist": "Lil Wayne",
        "title": "Lollipop",
        "rating": 4,
        "formats": [
            "CD",
            "LP"
        ],
        "Apple Music": true 
    }
];
// Accessing nested objects
let lollipopRating = myMusic[1]["rating"];
console.log(lollipopRating);


// Loops
// Iterating with "While" Loops
myArray = [];
let i = 0; // Must create an iterator
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

// Iterating with "For" loops
myArray = [];
for (let i = 0; i < 5; i++) {
    myArray.push(i);
}
console.log(myArray);

// Counting backwards with a "for" loop
myArray = [];
for (let i = 10; i > 0; i -= 2) {
    myArray.push(i);
}
console.log(myArray);

// Iterating through the contents of an array with a "for" loop
myArray = [9,10,11,12];
let myTotal = 0;
for (let i = 0; i < myArray.length; i++) {
    myTotal += myArray[i];
}
console.log(myTotal);

// Nesting "For" loops
function multiplyAll(arr) {
    let product = 1;
    for (let i= 0; i < arr.length; i++) {
        for (let j= 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
product = multiplyAll([[1,2], [3,4], [5,6,7]]);
console.log(product);

// Iterate with "Do...while" loops
// Do while loops will always run at least once before checking condition to keep running
myArray = [];
i = 10;
do {
    myArray.push(i);
    i++;
} while (i < 5)
console.log(i, myArray);


 
// Generating random fractions
// Using the math.random() funciton generates a decimal between 0 and 1
function randomFraction() {
    return Math.random();
}
//console.log(randomFraction());

// Generating a random whole number
let randomNum0and19 = Math.floor(Math.random() * 20);
//console.log(randomNum0and19);

// Generating random whole numbers within a range
function randomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
//console.log(randomRange(4,6)); 

// Using the parseInt function - takes a string and returns an integer
function convertToInt(str) {
    return parseInt(str);
}
console.log(convertToInt("56"));


// Using the Conditional (Ternary) Operator
// Basically a one line if...else expression
// Syntax: condition ? statement if true: statement if false;
function checkEqual(a, b) {
    return a === b ? true : false;
}
console.log(checkEqual(1,2));

// Using multiple conditional (ternary) operators
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(-4));

 

// Using arrow functions to write anonymous functions
const magic = () => new Date();
// Writing arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2,3,],[4,5,6]));

// Write higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// Write higher order arrow functions - adding a default value for argument
const increment = (number, value=1) => number + value;
console.log(increment(4,9));
console.log(increment(4));

// Use the rest operator "..." with function parameters - lets you add variable # of args
const sumFunct = (...args) => args.reduce((a,b) => a + b, 0);
console.log(sumFunct(4,6,8,8));
