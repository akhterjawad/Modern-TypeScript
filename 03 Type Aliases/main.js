//-----Type Aliases-----//
// Array of numbers using a type alias
var numbers = [1, 2, 3, 4, 5];
// Function to square a number using an arrow function with a type alias
var square = function (num) { return num * num; };
// Mapping: square each number
var squaredNumbers = numbers.map(function (num) { return square(num); });
console.log("Squared Numbers:", squaredNumbers);
// Filtering: get numbers greater than 2
var filteredNumbers = numbers.filter(function (num) { return num > 2; });
console.log("Filtered Numbers:", filteredNumbers);
// Reducing: sum of all numbers
var sumOfNumbers = numbers.reduce(function (acc, num) { return acc + num; }, 0);
console.log("Sum of Numbers:", sumOfNumbers);
// Array of objects using a type alias
var people = [
    { name: "Alice", age: 25, isStudent: true },
    { name: "Bob", age: 30, isStudent: false },
    { name: "Charlie", age: 22, isStudent: true },
];
// Filtering: get only students using a type alias
var students = people.filter(function (person) { return person.isStudent; });
// Looping through students
students.forEach(function (student) {
    console.log("".concat(student.name, " is a student."));
});
// Mapping: create an array of student names
var studentNames = students.map(function (student) { return student.name; });
console.log("Student Names:", studentNames);
// Reducing: get total age of students
var totalStudentAge = students.reduce(function (acc, student) { return acc + student.age; }, 0);
console.log("Total Age of Students:", totalStudentAge);
// Type Aliases ma ya hota ha ka hum data type ka variable alag sa banalata ha type ka keyword sa instead of hum variable ka ander hi data type define kara
// type Abd = string
// let user:Abd = 'abdullah'
