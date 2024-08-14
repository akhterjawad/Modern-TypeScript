//-----Type Annotations-----//
// TypeScript Example with Type Annotations
// Function to square a number using an arrow function
var square = function (num) { return num * num; };
// Array of numbers
var numbers = [1, 2, 3, 4, 5];
// Mapping: square each number
var squaredNumbers = numbers.map(function (num) { return square(num); });
// Filtering: get numbers greater than 2
var filteredNumbers = numbers.filter(function (num) { return num > 2; });
// Reducing: sum of all numbers
var sumOfNumbers = numbers.reduce(function (acc, num) { return acc + num; }, 0);
// Array of objects
var people = [
    { name: "Alice", age: 25, isStudent: true },
    { name: "Bob", age: 30, isStudent: false },
    { name: "Charlie", age: 22, isStudent: true },
];
// Filtering: get only students
var students = people.filter(function (person) { return person.isStudent; });
// Looping through students
students.forEach(function (student) {
    console.log("".concat(student.name, " is a student."));
});
// Mapping: create array of student names
var studentNames = students.map(function (student) { return student.name; });
// Reducing: get total age of students
var totalStudentAge = students.reduce(function (acc, student) { return acc + student.age; }, 0);
// Output results
console.log("Squared Numbers:", squaredNumbers);
console.log("Filtered Numbers:", filteredNumbers);
console.log("Sum of Numbers:", sumOfNumbers);
console.log("Student Names:", studentNames);
console.log("Total Age of Students:", totalStudentAge);
// Type Annotations ya hota ha ka jub aap TS ma variable banay to hath ka hath variable ki value ki type bhi batay
var usernameMain = 'abdullah';
// username = true //not allowed
console.log(usernameMain);
var age = 20;
age = 21; // allowed
// console.log(age);
var isLoggedIn = true;
console.log(isLoggedIn);
// is tarika sa hum string ki array ki data type bata ta ha ,is array ma numbar ya boolean nahi dal sakta 
var user = ['abdullah'];
// type any
// type any ma ya hota ha ka data type ki jagha any ka key word lagadata ha is sa ya hota ha ka hum variable ki value ma jo likhta ha ,Number ,boolean ,string automatically type get karlata ha ,variable ki value 
var username = 'abdullah';
username = 20; // allowed
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(20, 30));
function greetUser(username, age) {
    console.log("hello ".concat(username, " with age ").concat(age));
}
greetUser("abdullah", 20);
