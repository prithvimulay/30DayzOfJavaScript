// main.js
console.log("Script is running")
import { add, subtract } from './mathUtils.js';
import { capitalize } from './stringUtils.js';
import multiply from './mathUtils.js';

console.log("Addition:", add(10, 5)); // Output: 15
console.log("Subtraction:", subtract(10, 5)); // Output: 5
console.log("Capitalized String:", capitalize("hello world")); // Output: Hello world


console.log("Multiplication:", multiply(10, 5)); // Output: 50