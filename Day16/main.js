// Day 16 : JavaScript DOM Manipulation

//-- Activity 1: Introduction to the Document Object Model (DOM)
// The DOM represents the structure of an HTML document as a tree of nodes.

// Task 1: Selecting and Manipulating DOM Elements

// Select an element by ID and change its content
function changeHeadingText() {
    const heading = document.getElementById('main-heading');
    heading.textContent = "Welcome to DOM Manipulation!";
}

// Select elements by class and change their background color
function highlightItems() {
    const items = document.getElementsByClassName('list-item');
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "yellow";
    }
}

// Select an element using querySelector and change its font size
function enlargeTitle() {
    const title = document.querySelector('.title');
    title.style.fontSize = "2em";
}

// Task 2: Add, Remove, and Modify HTML Elements and Attributes Dynamically

// Add a new list item to an unordered list
function addListItem() {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = "New List Item";
    ul.appendChild(li);
}

// Remove the first list item
function removeFirstItem() {
    const firstItem = document.querySelector('ul li:first-child');
    if (firstItem) {
        firstItem.remove();
    }
}

// Modify the attributes of an image element
function updateImage() {
    const img = document.querySelector('img');
    img.setAttribute('src', 'https://via.placeholder.com/150');
    img.setAttribute('alt', 'Placeholder Image');
}
