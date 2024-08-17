// Day 11: Asynchronous JavaScript (Callbacks)

// Task 1: Introduction to Asynchronous Programming
console.log("Task 1: Start of the script");

setTimeout(() => {
    console.log("Task 1: Asynchronous operation using setTimeout");
}, 2000);

console.log("Task 1: End of the script");

// Task 2: Simulating a Network Request with setTimeout and a Callback
function simulateNetworkRequest(url, callback) {
    console.log(`Requesting data from ${url}...`);
    
    // Simulate a delay with setTimeout (e.g., fetching data from a server)
    setTimeout(() => {
        const responseData = { data: "Here is your data!" };
        callback(responseData); // Handle the response with the provided callback
    }, 3000);
}

function handleResponse(response) {
    console.log("Received response:", response.data);
}

simulateNetworkRequest("https://example.com/api", handleResponse);

// Task 3: Understanding Callback Hell and Its Drawbacks
function fetchData(callback1, callback2, callback3) {
    setTimeout(() => {
        console.log("Fetching data...");
        callback1(() => {
            setTimeout(() => {
                console.log("Processing data...");
                callback2(() => {
                    setTimeout(() => {
                        console.log("Finalizing data...");
                        callback3();
                    }, 1000);
                });
            }, 1000);
        });
    }, 1000);
}

fetchData(
    function(callback) {
        console.log("Step 1 complete");
        callback();
    },
    function(callback) {
        console.log("Step 2 complete");
        callback();
    },
    function() {
        console.log("Step 3 complete - All done!");
    }
);
