//-----Type Inference-----//


// TypeScript Example with Type Inference

// Function to square a number using an arrow function
const square = (num: number) => num * num;

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Mapping: square each number
const squaredNumbers = numbers.map((num) => square(num));

// Filtering: get numbers greater than 2
const filteredNumbers = numbers.filter((num) => num > 2);

// Reducing: sum of all numbers
const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);

// Object with inferred types
const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

// Array of objects
const people = [
  { name: "Alice", age: 25, isStudent: true },
  { name: "Bob", age: 30, isStudent: false },
  { name: "Charlie", age: 22, isStudent: true },
];

// Filtering: get only students
const students = people.filter((person) => person.isStudent);

// Looping through students
students.forEach((student) => {
  console.log(`${student.name} is a student.`);
});

// Mapping: create array of student names
const studentNames = students.map((student) => student.name);

// Reducing: get total age of students
const totalStudentAge = students.reduce((acc, student) => acc + student.age, 0);

// Output results
console.log("Squared Numbers:", squaredNumbers);
console.log("Filtered Numbers:", filteredNumbers);
console.log("Sum of Numbers:", sumOfNumbers);
console.log("Student Names:", studentNames);
console.log("Total Age of Students:", totalStudentAge);





// Type Inference ma ya hota ha ka agar hum variable ki data type define na kara Type Annotations ki tarha to koi error nahi ata

// let username = 'abdullah'
// username = 20

// let num = 20
// num = 'age'

// let fruits = ['mango' , 20]