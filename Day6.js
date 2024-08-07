// ARRAYS
//_________________________________________________________________________________________________________________
//-- Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console
let numbers = [1,42,3,74,65];
console.log(numbers);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log("1st element :" ,numbers[0]);
console.log("last element :" ,numbers[numbers.length - 1]);

//_________________________________________________________________________________________________________________
//-- Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log("after push:", numbers)

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log("After pop:", numbers);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log("After shift:", numbers);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(0);
console.log("After unshift:", numbers);

//__________________________________________________________________________________________________________________
//-- Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

//__________________________________________________________________________________________________________________
//-- Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
numbers.forEach(num => console.log(num));

//__________________________________________________________________________________________________________________
//-- Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:", matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
console.log("Element at (1, 2):", matrix[1][2]); // Accesses the element at row 1, column 2 (5)

// PRACTICE SET 

// 1. Array Manipulation Script
let arr = [1, 2, 3];
arr.push(4);
console.log("After push:", arr);
arr.pop();
console.log("After pop:", arr);
arr.shift();
console.log("After shift:", arr);
arr.unshift(0);
console.log("After unshift:", arr);

// 2. Array Transformation Script
let nums = [1, 2, 3, 4, 5];
let doubled = nums.map(num => num * 2);
console.log("Doubled:", doubled);
let evens = nums.filter(num => num % 2 === 0);
console.log("Evens:", evens);
let total = nums.reduce((acc, num) => acc + num, 0);
console.log("Total:", total);

// 3. Array Iteration Script
let arr2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
arr2.forEach(num => console.log(num));

// 4. Two-dimensional Array Script
let matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:", matrix2);
console.log("Element at (2, 1):", matrix2[2][1]); // Accesses the element at row 2, column 1 (8)

