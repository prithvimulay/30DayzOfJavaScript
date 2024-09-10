// Day 13: Async/Await

//-- Activity 1: Converting Promises to Async/Await

// Task 1: Convert a Promise-based function to async/await
// *** - Promises are a way to handle asynchronous operations, but async/await can make the code more readable and easier to follow.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Fetched Data";
            resolve(data);
        }, 1000);
    });
}

// Async/await version
async function fetchDataAsync() {
    try {
        const data = await fetchData(); // Await the Promise to resolve
        console.log("Data:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchDataAsync();

//-- Activity 2: Handling Multiple Promises with Async/Await

// Task 2: Adding two promises
// *** - Async/await makes it simple to work with multiple promises in parallel, improving code readability and simplicity.

async function addTwoPromisesAsync(promise1, promise2) {
    try {
        const [result1, result2] = await Promise.all([promise1, promise2]);
        return result1 + result2;
    } catch (error) {
        console.error("Error:", error);
    }
}

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);

addTwoPromisesAsync(p1, p2).then(sum => console.log("Sum:", sum));

//-- Activity 3: Comparing Promises with Async/Await

// Task 3: Compare Promises vs. Async/Await
// *** - See how async/await simplifies asynchronous code, making it more readable compared to traditional Promise chaining.

function comparePromisesVsAsync() {
    console.log("Using Promises:");
    fetchData().then(data => console.log("Data:", data)).catch(error => console.error("Error:", error));

    console.log("\nUsing async/await:");
    fetchDataAsync();
}

comparePromisesVsAsync();
