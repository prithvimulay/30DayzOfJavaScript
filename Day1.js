// VARIABLES AND DATATYPES 
//Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var numberVar = 23;
console.log(numberVar);

var numberA = 99;
console.log(numberA);

var ank = 1;
console.log(ank);


//Task 2: Declare a variable using let, assign it a string.
let stringVar = "Hello, world!";
console.log(stringVar);            //Output: Hello, world!

let msg = "This is Prithvi!";
console.log(msg);               // Output: This is Prithvi!


//Task 3: Declare a variable using const, assign it a boolean value.
const booleanConst = true;
console.log(booleanConst); // Output: true


//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let numType = 3;
let stringType = "favorite num";
let boolType = true;
let objectType = {name:"Prashant", age:49};
let arrType = [1,2,3,4,5];

console.log(numType, "is",typeof numType,"dataType"); // OP: number
console.log(stringType, typeof stringType); // OP: string
console.log(boolType, typeof boolType); // OP: boolean
console.log(objectType, typeof objectType); // OP: object
console.log(arrType, typeof arrType); // OP: object (arrays are technically objects in JS)


//Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console

// let variable
let changeableVar = "Initial";
console.log(changeableVar); // Output: Initial
changeableVar = "Changed";
console.log(changeableVar); // Output: Changed

// const variable
const constantVar = "Initial";
console.log(constantVar); // Output: Initial
// constantVar = "Changed"; // Uncommenting this line will cause an error
