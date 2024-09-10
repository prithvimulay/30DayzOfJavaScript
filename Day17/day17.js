// Day 17: EVENT HANDLING

//-- Activity 1: Handling Events

// Task 1: Handle a click event on a button
// ** Click events can trigger actions when a user interacts with an element.

document.getElementById("clickButton").addEventListener("click", function() {
    alert("Button was clicked!");
});

// Task 2: Handle mouseover event on an image
// ** Mouseover events can be used to create hover effects or tooltips.

document.getElementById("hoverImage").addEventListener("mouseover", function() {
    this.style.border = "5px solid red";
});

document.getElementById("hoverImage").addEventListener("mouseout", function() {
    this.style.border = "none";
});

//-- Activity 2: Event Delegation

// Task 3: Use event delegation to handle clicks on list items
// ** Event delegation helps manage events efficiently, especially for dynamically added elements.

document.getElementById("listContainer").addEventListener("click", function(event) {
    if(event.target && event.target.nodeName === "LI") {
        alert("List item " + event.target.innerText + " was clicked.");
    }
});
