// Day 9: Error Handling & Debugging

// Task 1: Introduction to try, catch, finally, and throw
function parseJSON(jsonString) {
    try {
        // Attempt to parse the JSON string
        let parsedData = JSON.parse(jsonString);
        console.log("Parsed Data:", parsedData);
        return parsedData;
    } catch (error) {
        // Handle any errors that occur during parsing
        console.error("Error Parsing JSON:", error.message);
        throw new Error("Invalid JSON format provided.");
    } finally {
        // This block always runs, even if an error occurred
        console.log("JSON parsing attempt completed.");
    }
}

// Task 2: Function to handle errors gracefully using try-catch
function getUserData(jsonString) {
    try {
        let userData = parseJSON(jsonString);
        console.log("User Data:", userData);
        return userData;
    } catch (error) {
        console.warn("An error occurred while getting user data:", error.message);
        return { error: "Failed to retrieve user data" };
    }
}

// Task 3: Debugging using console.log and breakpoints
function processUserData(jsonString) {
    // Use console.log to debug the code
    console.log("Processing User Data...");
    
    let userData = getUserData(jsonString);

    // Set a breakpoint here in the browser's Developer Tools to inspect 'userData'
    if (userData.error) {
        console.error("User data could not be processed due to an error.");
    } else {
        console.log("User data processed successfully:", userData);
    }

    return userData;
}

// Example Usage
const validJSON = '{"name": "Alice", "age": 30}';
const invalidJSON = '{"name": "Alice", "age": 30'; // Missing closing bracket

// Attempt to process valid JSON
processUserData(validJSON);

// Attempt to process invalid JSON
processUserData(invalidJSON);
