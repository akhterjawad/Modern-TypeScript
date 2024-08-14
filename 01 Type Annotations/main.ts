//-----Type Annotations-----//

// TypeScript Example with Type Annotations

// Function to square a number using an arrow function
const square = (num: number): number => num * num;

// Array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Mapping: square each number
const squaredNumbers: number[] = numbers.map((num: number): number => square(num));

// Filtering: get numbers greater than 2
const filteredNumbers: number[] = numbers.filter((num: number): boolean => num > 2);

// Reducing: sum of all numbers
const sumOfNumbers: number = numbers.reduce((acc: number, num: number): number => acc + num, 0);

// Object with type annotations
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

// Array of objects
const people: Person[] = [
  { name: "Alice", age: 25, isStudent: true },
  { name: "Bob", age: 30, isStudent: false },
  { name: "Charlie", age: 22, isStudent: true },
];

// Filtering: get only students
const students: Person[] = people.filter((person: Person): boolean => person.isStudent);

// Looping through students
students.forEach((student: Person): void => {
  console.log(`${student.name} is a student.`);
});

// Mapping: create array of student names
const studentNames: string[] = students.map((student: Person): string => student.name);

// Reducing: get total age of students
const totalStudentAge: number = students.reduce((acc: number, student: Person): number => acc + student.age, 0);

// Output results
console.log("Squared Numbers:", squaredNumbers);
console.log("Filtered Numbers:", filteredNumbers);
console.log("Sum of Numbers:", sumOfNumbers);
console.log("Student Names:", studentNames);
console.log("Total Age of Students:", totalStudentAge);





// Type Annotations ya hota ha ka jub aap TS ma variable banay to hath ka hath variable ki value ki type bhi batay

let usernameMain: string = 'abdullah';
// username = true //not allowed
console.log(usernameMain);

let age:number = 20;
age = 21  // allowed
// console.log(age);

let isLoggedIn:boolean = true
console.log(isLoggedIn);

// is tarika sa hum string ki array ki data type bata ta ha ,is array ma numbar ya boolean nahi dal sakta 
let user:string[] = ['abdullah']

// type any

// type any ma ya hota ha ka data type ki jagha any ka key word lagadata ha is sa ya hota ha ka hum variable ki value ma jo likhta ha ,Number ,boolean ,string automatically type get karlata ha ,variable ki value 


let username: any = 'abdullah'
username = 20 // allowed

function sum(num1: number, num2: number):number {
  return num1 + num2;
}
console.log(sum(20, 30));

function greetUser(username: string, age: number){
  console.log(`hello ${username} with age ${age}`);
}

greetUser("abdullah", 20);
