// Day 10: Closures & Lexical Scoping in JavaScript

// Example 1: Basic Closure
function outerFunction() {
    let outerVariable = "I'm from the outer function!";
    
    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable due to closure
    }
    
    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Logs: "I'm from the outer function!"


// Example 2: Private Variables using Closures
function counter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        }
    };
}

const myCounter = counter();
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.decrement()); // 1


// Example 3: Lexical Scoping with Closures
function makeMultiplier(x) {
    return function(y) {
        return x * y;
    };
}

const double = makeMultiplier(2);
console.log(double(5)); // 10

const triple = makeMultiplier(3);
console.log(triple(5)); // 15


// Example 4: Lexical Scoping Basics
function outer() {
    const outerVar = 'Outer';

    function inner() {
        const innerVar = 'Inner';
        console.log(outerVar); // Can access outerVar
        console.log(innerVar); // Can access innerVar
    }

    inner();
}

outer();


// Example 5: Lexical Scoping in Action
let globalVar = 'Global';

function outerFunc() {
    let outerVar = 'Outer';

    function innerFunc() {
        let innerVar = 'Inner';
        console.log(globalVar); // 'Global'
        console.log(outerVar); // 'Outer'
        console.log(innerVar); // 'Inner'
    }

    innerFunc();
}

outerFunc();


// Example 6: Lexical Scoping with Closures and Callbacks
function delayedMessage(msg) {
    setTimeout(function() {
        console.log(msg);
    }, 1000);
}

delayedMessage('Hello, World!');

