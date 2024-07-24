// Day 5 : FUNCTIONS

//-- Activity 1: Function declaration

// Task 1: Check if a number is even or odd 
// *** - Double equals (==) will try to convert the values to the same data type and then try to compare them. But triple equals (===) strictly compares the value and the datatype.

function isEvenOrOdd(num){
    if (num % 2 === 0) {
        console.log(num,'is even');
    } else {
        console.log(num, "is odd");
    }
}

isEvenOrOdd(4);
isEvenOrOdd(19);
isEvenOrOdd(21);


// Task 2: Calculate the square of a number

function square(number){
    return number * number;
}

console.log(square(21));
console.log(square(91));


//-- Activity 2: Function Expression

// Task 3: Find the maximum of two numbers

const FindMax = function(a,b){
    if(a>b){
        console.log(a, 'is greater than',b);
    } else {
        console.log(b,"is greater than",a);
    }
};

FindMax(13,56);
FindMax(3,1);

// Task 4: Concatenate two strings

const ConcatenateStrings = function(str1, str2) {
    return str1 + str2;
};

console.log(ConcatenateStrings("Hello,", "world!"));


//-- Activity 3: Arrow Functions

// Task 5: Calculate the sum of two numbers

const sum = (a, b) => a+b;

console.log(sum(3, 4));

// Task 6: Check if a string contains a specific character

const containsChar = (str, char) => str.includes(char); 

console.log(containsChar("hello world","o"));  // Output: true
console.log(containsChar("hello earth","z"));  // Output: false


//-- Activity 4: Function Parameters and Default Values

// Task 7: Return the product of two numbers with a default value for the second parameter

function multiply(a, b = 6) {
    return a * b;
  }
  
  // Example usage
  console.log(multiply(5));    // Output: 5 (5 * 1)
  console.log(multiply(5, 7)); // Output: 15 (5 * 3)
  
//  Task 8: Return a greeting message with a default value for the age

function greet(name, age = 30) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
  }
  
  // Example usage
  console.log(greet("Alice"));          // Output: Hello, my name is Alice and I am 30 years old.
  console.log(greet("Bob", 25));        // Output: Hello, my name is Bob and I am 25 years old.
  

//-- Activity 5: Higher-Order Functions

// Task 9: Call a function multiple times

function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
      fn();
    }
  }
  
  // Example usage
  repeatFunction(() => console.log("Hello"), 3);
  // Output:
  // Hello
  // Hello
  // Hello
  
// Task 10: Apply two functions in sequence

function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
  }
  
  // Example usage
  const double = x => x * 2;
  const increment = x => x + 1;
  
  console.log(applyFunctions(double, increment, 5));  // Output: 11 (5 * 2 + 1)
  