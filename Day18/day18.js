// Day 18: FORMS & FORM VALIDATION

//-- Activity 1: Real-time Validation

// Task 1: Validate the input fields in real-time
// ** Real-time validation provides immediate feedback to users as they type.

const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorDisplay = document.getElementById("errorDisplay");

username.addEventListener("input", function() {
    validateUsername();
});

email.addEventListener("input", function() {
    validateEmail();
});

password.addEventListener("input", function() {
    validatePassword();
});

//-- Activity 2: Submit Validation

// Task 2: Prevent form submission if validation fails
// ** Preventing form submission on error ensures that users provide correct data.

form.addEventListener("submit", function(event) {
    let valid = true;
    if (!validateUsername()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validatePassword()) valid = false;

    if (!valid) {
        event.preventDefault();
        errorDisplay.innerText = "Please correct the errors before submitting.";
    }
});

function validateUsername() {
    const usernameValue = username.value.trim();
    if (usernameValue === "" || usernameValue.length < 3) {
        setError(username, "Username must be at least 3 characters long.");
        return false;
    } else {
        clearError(username);
        return true;
    }
}

function validateEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        setError(email, "Please enter a valid email address.");
        return false;
    } else {
        clearError(email);
        return true;
    }
}

function validatePassword() {
    const passwordValue = password.value.trim();
    if (passwordValue.length < 6) {
        setError(password, "Password must be at least 6 characters long.");
        return false;
    } else {
        clearError(password);
        return true;
    }
}

function setError(element, message) {
    const formControl = element.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
}

function clearError(element) {
    const formControl = element.parentElement;
    formControl.className = "form-control success";
}
