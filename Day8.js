// ES6+ Features
//_________________________________________________________________________________________________________________
//-- Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "John";
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `This is a multi-line string.
It spans multiple lines.
It makes formatting easier!`;
console.log(multiLineString);

//_________________________________________________________________________________________________________________
//-- Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log("First element:", first);
console.log("Second element:", second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = { title: "The Alchemist", author: "Paulo Coelho", year: 1988 };
const { title, author } = book;
console.log("Title:", title);
console.log("Author:", author);

//_________________________________________________________________________________________________________________
//-- Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5, 6];
console.log("New array with spread operator:", newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of numbers:", sumAll(1, 2, 3, 4, 5));

//_________________________________________________________________________________________________________________
//-- Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log("Product with default parameter:", multiply(5));       // Output: 5 (5 * 1)
console.log("Product with both parameters:", multiply(5, 2));     // Output: 10 (5 * 2)

//_________________________________________________________________________________________________________________
//-- Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const person = {
    name,
    age,
    greet() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
};
console.log("Enhanced object literal:", person);
console.log(person.greet());

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const key1 = "name";
const key2 = "age";
const user = {
    [key1]: "Alice",
    [key2]: 30
};
console.log("Object with computed property names:", user);

//_________________________________________________________________________________________________________________
// PRACTICE SET

// 1. Template Literals Script
const personName = "Emma";
const personAge = 22;
const message = `Hi! I'm ${personName}, and I'm ${personAge} years old.`;
console.log("Template literal message:", message);
const multiLineMsg = `This is a multi-line
message using template
literals.`;
console.log("Multi-line message:", multiLineMsg);

// 2. Destructuring Script
const arr = [5, 10, 15];
const [firstNum, secondNum] = arr;
console.log("First number:", firstNum);
console.log("Second number:", secondNum);

const bookInfo = { title: "1984", author: "George Orwell" };
const { title: bookTitle, author: bookAuthor } = bookInfo;
console.log("Book Title:", bookTitle);
console.log("Book Author:", bookAuthor);

// 3. Spread and Rest Operators Script
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log("Combined array:", combinedArray);

function sumNumbers(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}
console.log("Sum with rest operator:", sumNumbers(5, 10, 15));

// 4. Default Parameters Script
function divide(a, b = 2) {
    return a / b;
}
console.log("Division with default parameter:", divide(10));  // Output: 5 (10 / 2)
console.log("Division with both parameters:", divide(10, 5)); // Output: 2 (10 / 5)

// 5. Enhanced Object Literals Script
const car = {
    make: "Toyota",
    model: "Camry",
    start() {
        return `${this.make} ${this.model} is starting...`;
    }
};
console.log("Car object:", car);
console.log(car.start());

const fruit = "apple";
const quantity = 10;
const fruitBasket = {
    [fruit]: quantity
};
console.log("Fruit Basket with computed property:", fruitBasket);
