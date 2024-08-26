//-----Union Type-----//

// Define a union type that can be either a string or number
type User = string | number;
let username: User = 1;

// Define a union type for an array that can hold strings, numbers, or booleans
type Fruits = (string | number | boolean)[];
let fruits: Fruits = ['mango', 'orange', 20, true]

// 1 hoti ha union data type jisma aap multi data type define karsakta ha jaisa array ma alag alag properties hoti ha unka lia bana sakta ha

type Fruits = (string | boolean | number)[] // in types ko agay picha karna sa farak nahi parta

let fruits: Fruits = ['abdullah', 20, true]

// The line below works fine as 9 is a number and is a part of the Fruits union type
fruits.push(9)

// The line below works fine as 'jawad' is a string and is a part of the Fruits union type
fruits[0] = 'jawad'

// The line below works fine as 4 is a number and is a part of the Fruits union type
fruits[0] = 4

// Since the elements of main are all strings, TypeScript infers the type of main as a string array
let main = ['jawad'];

// The line below is commented out because true is a boolean, but main is inferred to be a string array
// main[0] = true; // not allowed

// The line below is commented out because 4 is a number, but main is inferred to be a string array
// main.push(4); // not allowed

// Use a union type in the return value of a function
function MainUser(username: string, age: number): (string | number) {
  console.log(`hello ${username} with age ${age}`);
  return `hello ${username} with age ${age}`;
}
MainUser("abdullah", 20);

// Object with various properties
const object = {
  username: "abc",
  email: "abc@gmail.com",
  age: 20,
  isLoggedIn: true,
};

// Updating the username property is fine as it is a string
object.username = 'kamran'

// The line below is commented out because 5 is a number, but object.username is a string
// object.username = 5 // datatype ki waja sa error araha ha Q ka username ki data type string ha number nahi

// The line below is commented out because user is not a defined property in the object
// object.user = '65' // property does not exist

// The line below is commented out because user is not a defined property in the object
// console.log(object.user); // property does not exist

// Defining a new object with optional properties using the '?' operator
const person2: {
  name: string;
  age: number;
  isStudent?: boolean,
  address: {
    city: string;
    country: string;
  }
} = {
  name: 'DEEPANSHU_NAG',
  age: 27,
  // isStudent is optional and can be omitted
  address: {
    city: "Pune",
    country: 'India',
  }
};

// Using a type alias for user objects
type User = {
  username: string;
  email: string;
  age: number;
  isLoggedIn: boolean;
  lastName?: string; // Optional property
};

const UserMain: User = {
  username: "abc",
  email: "abc@gmail.com",
  age: 20,
  isLoggedIn: true,
};

UserMain.lastName = "khan";

//-----Interfaces-----//

// Interfaces are commonly used for objects and function similar to types but more extensible
interface Employee {
  empliyee: string;
  employeeId: number;
  employeeSallary: number;
  isLoggedIn: boolean;
}

// Correct spelling for the property name 'employee'
let employeeData: Employee = {
  empliyee: 'jawad khan',
  employeeId: 12,
  employeeSallary: 100000,
  isLoggedIn: true,
}
console.log(employeeData);
