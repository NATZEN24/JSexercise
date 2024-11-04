//VERY EASY level

//Task 1

// Write a function that takes the base and height of a triangle and return its area.
// Notes
// The area of a triangle is: (base * height) / 2

const triArea = (base, height) => {
   return (base * height) / 2;
}

console.log(triArea(3, 2)); // ➞ 3
console.log(triArea(7, 4)); // ➞ 14
console.log(triArea(10, 10)); // ➞ 50

//Task 2

// Write a function that returns the string "something" joined with a space " " and the given argument a.
// Notes
// Assume an input is given.

const string = "something"; 
function giveMeSomething (string, a) {
    return string + (" ") + a;
}

console.log(giveMeSomething(string,"is better than nothing"));// ➞ "something is better than nothing"
console.log(giveMeSomething(string,"Bob Jane"))// ➞ "something Bob Jane"
console.log(giveMeSomething(string,"something"))// ➞ "something something"

//Task 3

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
// Notes
// Don't forget to return the result.

function lessThanOrEqualToZero (num) {
return num <= 0 ? true:false; 
}

console.log(lessThanOrEqualToZero(5))// ➞ false
console.log(lessThanOrEqualToZero(0))// ➞ true
console.log(lessThanOrEqualToZero(-2))// ➞ true

//Task 4

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!

const squared = function(a){
return a*a;
}

console.log(squared(5))// ➞ 25
console.log(squared(9))// ➞ 81
console.log(squared(100))// ➞ 10000

//Task 5

// Create a function that takes the age in years and returns the age in days.
// Notes
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.

const calcAge = (age) =>{
    return age*365;
}

console.log(calcAge(65))// ➞ 23725
console.log(calcAge(0))// ➞ 0
console.log(calcAge(20))// ➞ 7300

//Task 6

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// Notes
// All test arrays will have at least one element and are valid.

const minMax = function(array){
    const min = Math.min(...array);
    const max = Math.max(...array);
    return[min, max];
}

console.log(minMax([1, 2, 3, 4, 5]))// ➞ [1, 5]
console.log(minMax([2334454, 5]))// ➞ [5, 2334454]
console.log(minMax([1]))// ➞ [1, 1]

//Task 7

// Create a function that takes length and width and finds the perimeter of a rectangle.
// Notes
// Don't forget to return the result.
const findPerimeter = (length,width)=>{
    return (length+width)*2;
}

console.log(findPerimeter(6, 7))// ➞ 26
console.log(findPerimeter(20, 10))// ➞ 60
console.log(findPerimeter(2, 9))// ➞ 22

//Task 8
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// Notes
// The tests only use positive and negative integers.
// Don't forget to return the result.

function remainder (num1, num2){
    return num1%num2;
}

console.log(remainder(1, 3))// ➞ 1
console.log(remainder(3, 4))// ➞ 3
console.log(remainder(-9, 45))// ➞ -9
console.log(remainder(5, 5))// ➞ 0

//Task 9

// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
// Notes
// You can expect only positive integers for vote counts.

const getVoteCount = ({upvotes,downvotes}) => {
    return upvotes- downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }))// ➞ 13
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }))// ➞ -31
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }))// ➞ 0



//Task 10

// Write a function to reverse an array.
// reverse([]) ➞ []
// Notes
// Don't forget to return the result.

const reverse = function(array){
    return array.reverse();
}

console.log(reverse([1, 2, 3, 4]))// ➞ [4, 3, 2, 1]
console.log(reverse([9, 9, 2, 3, 4]))// ➞ [4, 3, 2, 9, 9]

//Task 11

// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!
// Notes
// Make sure to read every line carefully.

function incrementItems(array){
    for (i=0; i<array.length; i++){
        array[i] += 1;
    }
    return array;
}

console.log(incrementItems([0, 1, 2, 3]))// ➞ [1, 2, 3, 4]
console.log(incrementItems([2, 4, 6, 8]))// ➞ [3, 5, 7, 9]
console.log(incrementItems([-1, -2, -3, -4]))// ➞ [0, -1, -2, -3]

//MEDIUM level
//Task 12

// Create a function which returns the number of true values there are in an array.
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

const countTrue = (array)=>{
    return array.filter(value=>value === true).length;
}

console.log(countTrue([true, false, false, true, false]))// ➞ 2
console.log(countTrue([false, false, false, false]))// ➞ 0
console.log(countTrue([]))// ➞ 0

//Task 13

// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".
//     Notes
// ! , ? . are always separated from the last word.
// Nemo will always look like Nemo, and not NeMo or other capital variations.
// Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
// If there are multiple Nemo's in the sentence, only return the first one.

function findNemo (string){
const array = string.split(" ");
const nemo = array.indexOf("Nemo");

if (nemo !== -1){
return `I found Nemo at ${nemo + 1}!`;
}else{
    return `I can't find Nemo :(`
}
}

console.log(findNemo("I am finding Nemo !"))// ➞ "I found Nemo at 4!"
console.log(findNemo("Nemo is me"))// ➞ "I found Nemo at 1!"
console.log(findNemo("I Nemo am"))// ➞ "I found Nemo at 2!"


