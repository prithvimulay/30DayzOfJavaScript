// OPERATORS in JS

//Activity 1: Arithmetic Operations

//Task 1: Add two numbers and log the result to the console.

let a = 5;
let b = 3;
let sum = a+b;
console.log("Sum:", sum); // o/p: Sum: 8

//Task 2: Subtract two numbers

let c = 10;
let d = 4;
let diff = d-c;
console.log("Difference:", diff); // o/p: Difference: -6

//Task 3: Multiply two numbers
let e = 10;
let f = 4;
let mul = e * f;
console.log("Product:", mul); // o/p: Product: 40

//Task 4: Divide two numbers
let g = 3;
let h = 2;
let div = g / h;
console.log("Division:", div); // o/p: Division: 40

//Task 5: Remainder of two numbers
let i = 15;
let j = 4;
let rem = i % j;
console.log("Remainder:", rem); // Output: Remainder: 3


//Activity 2: Assignment Operators

//Task 6 & 7: Use the += (& -=) operator to add (& subtract) a number to a variable and log the result to the console.

let k = 10;
let l = 60;
k += 5;
l -= 15
console.log("New value of k:", k); // Output: New value of k: 15
console.log("New value of l:", l); // Output: New value of l: 45


//Activity 3: Comparison Operators

//Task 8: Write a program to compare two numbers using == and log the result to the console.
let m = 5;
let n = '5';  //5 ko '' quotes se nikala toh bhi code runs the same ?? Why??
console.log("Is m equal to n?", m == n); // Output: Is m equal to n? true

//Task 9:
console.log("Is m strictly equal to n?", m === n); // Output: Is m strictly equal to n? false

//Task 10: GT and LT operation
let o = 8;
let p = 6;
console.log("Is o less than p?", o < p); // Output: Is o less than p? false
console.log("Is o greater than p?", o > p); // Output: Is o greater than p? true


//Activity 4: Logical Operators

//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let q = 10;
let r = 15;
console.log("Are both conditions true?", q > 5 && r < 20); // Output: Are both conditions true? true

//Task 12: '||'
console.log("Is at least one condition true?", q > 15 || r < 20); // Output: Is at least one condition true? true

//Task 13: '!'
console.log("Is the condition false?", !(q < 5)); // Output: Is the condition false? true


//Activity 5: Ternary Operator

//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let s = -3;
let result = s >= 0 ? "Positive" : "Negative";
console.log("The number is:", result); // Output: The number is: Negative


    //1. Arithmetic Operations Script

let num1 = 12;
let num2 = 8;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Remainder:", num1 % num2);

    
    //2. Comparison and Logical Operators Script

let num3 = 15;
let num4 = 20;

console.log("Is num3 equal to num4?", num3 == num4);
console.log("Is num3 strictly equal to num4?", num3 === num4);
console.log("Is num3 less than num4?", num3 < num4);
console.log("Is num3 greater than num4?", num3 > num4);

console.log("Are both conditions true?", num3 < 30 && num4 > 10);
console.log("Is at least one condition true?", num3 > 30 || num4 > 10);
console.log("Is the condition false?", !(num3 > 30));


    //3. Ternary Operator Script

let num5 = -7;
let ternaryResult = num5 >= 0 ? "Positive" : "Negative";
console.log("The number is:", ternaryResult);
