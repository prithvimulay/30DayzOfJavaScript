// Day 7: Objects
//_________________________________________________________________________________________________________________
//-- Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log("Title:", book.title);
console.log("Author:", book.author);

//_________________________________________________________________________________________________________________
//-- Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getSummary = function() {
    return `${this.title} by ${this.author}`;
};
console.log(book.getSummary());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(newYear) {
    this.year = newYear;
};
book.updateYear(1999);
console.log(book);

//_________________________________________________________________________________________________________________
//-- Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "City Library",
    books: [
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "Moby Dick", author: "Herman Melville", year: 1851 }
    ]
};
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Library Name:", library.name);
library.books.forEach(book => {
    console.log("Book Title:", book.title);
});

//_________________________________________________________________________________________________________________
//-- Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
// Adding a method to the book object using the `this` keyword
book.getTitleAndYear = function() {
    return `${this.title} (${this.year})`;
};

// Logging the result of calling the method
console.log(book.getTitleAndYear());

//_________________________________________________________________________________________________________________
//-- Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object
// Iterating over the properties of the book object using `for...in`
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

//Task 9: Use Object.keys and Object.values methods
// Logging all keys of the book object
console.log("Keys:", Object.keys(book));

// Logging all values of the book object
console.log("Values:", Object.values(book));

//_________________________________________________________________________________________________________________
// PRACTICE SET

// 1. Book Object Script
const myBook = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    getSummary() {
        return `${this.title} by ${this.author}`;
    },
    updateYear(newYear) {
        this.year = newYear;
    }
};
console.log("My Book Summary:", myBook.getSummary());
myBook.updateYear(1951);
console.log("Updated My Book:", myBook);

// 2. Library Object Script
const myLibrary = {
    name: "Central Library",
    books: [
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
    ]
};
console.log("My Library:", myLibrary);
myLibrary.books.forEach(book => console.log("Book:", book.title));

// 3. Object Iteration Script
for (let key in myBook) {
    console.log(`${key}: ${myBook[key]}`);
}
console.log("Keys:", Object.keys(myBook));
console.log("Values:", Object.values(myBook));

// 4. Nested Library Script
const nestedLibrary = {
    name: "Downtown Library",
    books: [
        { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
        { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 }
    ]
};
console.log("Nested Library:", nestedLibrary);
nestedLibrary.books.forEach(book => console.log(`${book.title} by ${book.author}`));