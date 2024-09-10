// Day 15 : Regular Expressions (RegEx)

//-- Activity 1: Introduction to Regular Expressions and Syntax

// Task 1: Validate Email Addresses
// This regular expression checks if the email format is correct.
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid-email@"));  // false

//-- Activity 2: Writing Functions Using RegEx

// Task 2: Validate Phone Numbers
// This regular expression checks for valid US phone numbers.
function validatePhoneNumber(phoneNumber) {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(phoneNumber);
}

console.log(validatePhoneNumber("123-456-7890")); // true
console.log(validatePhoneNumber("123.456.7890")); // true
console.log(validatePhoneNumber("1234567890"));   // true
console.log(validatePhoneNumber("123-45-6789"));  // false

// Task 3: Validate Passwords
// This regular expression checks for a password with at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

console.log(validatePassword("Password123!")); // true
console.log(validatePassword("pass"));         // false

//-- Activity 3: Working with RegEx Methods

// Task 4: Using the 'test' method
// The 'test' method checks if a pattern exists in a string.
function hasSpecialCharacter(str) {
    const regex = /[@$!%*?&]/;
    return regex.test(str);
}

console.log(hasSpecialCharacter("Hello!"));  // true
console.log(hasSpecialCharacter("Hello"));   // false

// Task 5: Using the 'match' method
// The 'match' method returns an array of all matches in a string.
function extractNumbers(str) {
    const regex = /\d+/g;
    return str.match(regex);
}

console.log(extractNumbers("There are 123 apples and 456 oranges.")); // ["123", "456"]

// Task 6: Using the 'replace' method
// The 'replace' method replaces occurrences of a pattern with a new substring.
function censorBadWords(str) {
    const regex = /badword/gi;
    return str.replace(regex, "****");
}

console.log(censorBadWords("This is a badword! BADWORD is not allowed.")); // "This is a ****! **** is not allowed."
