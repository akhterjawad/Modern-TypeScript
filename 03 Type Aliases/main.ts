//-----Type Aliases-----//

// TypeScript Example with Type Aliases

// Type alias for a number array
type NumberArray = number[];

// Array of numbers using a type alias
const numbers: NumberArray = [1, 2, 3, 4, 5];

// Type alias for an arrow function that squares a number
type SquareFunction = (num: number) => number;

// Function to square a number using an arrow function with a type alias
const square: SquareFunction = (num) => num * num;

// Mapping: square each number
const squaredNumbers: NumberArray = numbers.map((num) => square(num));
console.log("Squared Numbers:", squaredNumbers);

// Filtering: get numbers greater than 2
const filteredNumbers: NumberArray = numbers.filter((num) => num > 2);
console.log("Filtered Numbers:", filteredNumbers);

// Reducing: sum of all numbers
const sumOfNumbers: number = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sumOfNumbers);


// Type alias for a person object
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

// Type alias for an array of Person objects
type PeopleArray = Person[];

// Array of objects using a type alias
const people: PeopleArray = [
  { name: "Alice", age: 25, isStudent: true },
  { name: "Bob", age: 30, isStudent: false },
  { name: "Charlie", age: 22, isStudent: true },
];

// Filtering: get only students using a type alias
const students: PeopleArray = people.filter((person) => person.isStudent);

// Looping through students
students.forEach((student) => {
  console.log(`${student.name} is a student.`);
});

// Mapping: create an array of student names
const studentNames: string[] = students.map((student) => student.name);
console.log("Student Names:", studentNames);


// Reducing: get total age of students
const totalStudentAge: number = students.reduce((acc, student) => acc + student.age, 0);
console.log("Total Age of Students:", totalStudentAge);




// Type Aliases ma ya hota ha ka hum data type ka variable alag sa banalata ha type ka keyword sa instead of hum variable ka ander hi data type define kara

// type Abd = string

// let user:Abd = 'abdullah'