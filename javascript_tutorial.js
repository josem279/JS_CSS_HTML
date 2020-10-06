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
var a;
var A;
// Assigning a value to "a"
a = 7;
// Declaring and initializing a variable - combine both steps
var b = 2;
// console.log() function lets us see outputs in the console
console.log(a);
console.log(A);



// Working with Numbers
// Performing arithmetic operations on numbers - pretty straight forward
var sum = 10+10;
var difference = 20-10;
var product = 5*10;
var quotient = 66*33;
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
var ourDecimal = 5.7;
// Working with floats lets us use the remainder function - modulus equivalent
var remainder;
remainder = 11%3;
console.log(remainder);

// Compound assignment with augmented addition - shortens a = a+12 below:
var a = 10;
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
var firstName = "John";
var otherLastName = "Smith";

// Escaping literal quotes in string - must use the forward slash before special character
var myStr = "I am a \"double quoted\" string inside double quotes";
console.log(myStr);
// Can also use single or double quotes for same result:
var myStr = 'I am a "double quoted" string inside quotes';
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
var myStr = "First line \n\t\\Second line\nThird line";
console.log(myStr);

// Concatenating strings
// We can use the "+" operator with strings
// Example:
var ourStr = "I come first. " + "I come second.";
console.log(ourStr);
// Can also use the "+=" operator:
ourStr += " I come third.";
console.log(ourStr);
// Concatenating strings with variables:
var myName = "Oso";
var nameDeclare = "My name is " + myName;
console.log(nameDeclare);
// Appending variables to strings
var anAdjective = "awesome";
var ourStr = "Lifting weights is ";
ourStr += anAdjective;
console.log(ourStr);

// Finding the length of a string using the "length" property:
var firstNameLength = 0;
var firstName = "Jeffrey";
firstNameLength = firstName.length;
console.log(firstNameLength);

// Indexing strings using "[]":
var firstLetter = "";
var firstName = "Johnny";
firstLetter = firstName[0];
console.log(firstLetter);
// Strings are immutable - cannot change individual parts only the entire string
// Finding the last letter of a string using length property
var lastLetter = firstName[firstName.length -1];
console.log(lastLetter);



// Arrays
// Storing multiple values with arrays
var myArray = ["John", 23];
console.log(myArray);
// Nested Arrays - multi-dimensional arrays
var myArray = [["The universe", 42], ["everything", 101010]];
console.log(myArray);
// Accessing Arrays with Indexes
var myArray = [50,60,70];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
// Modifying arrays with indexes
var myArray = [1,2,3,4,5];
myArray[0] = 0;
console.log(myArray);
// Accessing multi-dimensional arrays with indexes
var myArray = [[1,2,3], [4,5,6], [[7,8,9], 13, 14]];
console.log(myArray[0][0]);
console.log(myArray[2][0][1]);
console.log(myArray[2][1]);
// We can append data to an array with the "push" function 
var myArray = [["John", 23], ["Cat", 2]];
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
var myArray = ["Homer", "J.", "Simpson"];
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
    var myVar = 5;
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
var changedNum = 0;
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
    var result = "";

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
    var answer = "";
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
    var answer = "";
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
    var answer = "";
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
var myDog = {
    "name": "Coco",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
    "color eyes": "brown",
    1: "Curr"
};
// Accessing object properties with dot notation - explicit
var nameValue = myDog.name;
console.log(nameValue);
// Accessing object properties with bracket notation - required if name has a space or accessing variables
var dogEyes = myDog["color eyes"];
var breed = 1;
var dogBreed = myDog[breed];
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
    var result = "";
    var lookupVar = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago"
    };
    result = lookupVar[val];
    return result;
}
console.log(phoneticLookup("alpha"));

// Manipulating complex objects
var myMusic = [
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
var lollipopRating = myMusic[1]["rating"];
console.log(lollipopRating);