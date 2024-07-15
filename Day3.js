//Day 3 : Control Structures

//-- Activity 1: If-Else Statements

// Task 1: Check if a number is positive, negative, or zero

function checknumber(num){
    if (num > 0) {
        console.log("the number is positive.");
    } else if (num < 0) { 
        console.log("the number is negative.");
    } else {
        console.log("The number is zero.");
    }
}
// test the function
checknumber(5);
checknumber(-7);
checknumber(0);


// Task 2: Check if a person is eligible to vote
function checkVotingElig(age){
    if (age >= 18){
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.")
    }
}

// Test the function
checkVotingElig(20);
checkVotingElig(12);

//-- Activity 2: Nested If Else Statements

//Task 3: Find the largest of three numbers using nested if-else

function findLargest(a, b, c){
    if (a>=b){
        if (a>=c){
            console.log(a + " is largest #from if-if state");
        }else {
            console.log(c + " is largest #from if-else state");
        }
    } else {
        if (b>=c) {
            console.log(b + " is largest #from else-if state");
        }else {
            console.log(c + " is largest #from else-else state");
        }
    } 
}

// Test the function
findLargest(50, 20, 30);
findLargest(70, 50, 90);
findLargest(10, 70, 30);
findLargest(10, 20, 30);


//-- Activity 3: Switch Case

// Task 4: Determine the day of the week based on a number
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number.");
    }
}

// Test the function
getDayOfWeek(1);
getDayOfWeek(5);
getDayOfWeek(8);

// Task 5: Assign a grade based on a score
function assignGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
    console.log("The grade is " + grade);
}

// Test the function
assignGrade(95);
assignGrade(85);
assignGrade(75);
assignGrade(65);
assignGrade(55);


//-- Activity 4: Conditional (Ternary) Operator

// Task 6: Check if a number is even or odd
function checkEvenOrOdd(num) {
    let result = (num % 2 === 0) ? "even" : "odd";
    console.log("The number is " + result);
}

// Test the function
checkEvenOrOdd(4);
checkEvenOrOdd(7);


//-- Activity 5: Combining Conditions
// Task 7: Check if a year is a leap year

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

// Test the function
checkLeapYear(2020);
checkLeapYear(1900);
checkLeapYear(2000);



