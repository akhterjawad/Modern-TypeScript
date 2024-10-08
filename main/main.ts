console.log('hello TypeScript.');

// TypeScript is a superset of JavaScript that adds optional static typing and other features to improve the development experience and maintainability of large JavaScript applications.

// npm install -g typescript  is command sa ya hota ha ka  TS  globally download hojati ha || is command ko cmd ma run karta ha || download hui ha ka nahi iska lia hum cmd ma  tsc --version  run karta ha to pata chalta ha ka  TS  aap ka pc ma ha ya nahi
// tsc filename.ts  is command sa JS ki file banjati ha
// tsc filename.ts -w  is command sa TS live server ki tarha JS ma kam karti ha
// node filename.js  is command sa TS terminal pa run hogi


// TS Compiler   p
// Type Annotations
// Type Inference
// Type Aliases
// Union Types
// Interfaces
// Type Aliases vs Interface
// Generics
// Enums
// Tuples
// Type Guards



//Tuples TypeScript mein ek ordered collection hoti hai jo fixed number of elements ko different types ke saath store kar sakti hai.

//Guards TypeScript mein conditions define karne ka tareeqa hota hai jo runtime par type checking aur type narrowing ko enable karte hain.



//-----Type Annotations-----//

// Type annotations TypeScript mein variable ya function ke type ko specify karne ka tareeqa hota hai.

// Type Annotations ya hota ha ka jub aap TS ma variable banay to hath ka hath variable ki value ki type bhi batay

// let usernameMain: string = 'abdullah';
// // username = true //not allowed
// console.log(usernameMain);

// let age:number = 20;
// age = 21  // allowed
// // console.log(age);

// let isLoggedIn:boolean = true
// console.log(isLoggedIn);

// // is tarika sa hum string ki array ki data type bata ta ha ,is array ma numbar ya boolean nahi dal sakta 
// let user:string[] = ['abdullah']

// jub aap function ko data type data hoto ka function return kia karraha ha to waha pa void || any ka ilawa sub data type return zaroor karti ha nahi to error ata ha 

function form(message: string): string {
  console.log(message);
  return message;  // Yahan pe message ko return karna hoga
}
form(`jawad`);


function vip(message: string): number {
  console.log(message);
  return message.length;  // Yahan pe hum message ki length return kar rahe hain, jo ek number hai
}
vip(`jawad`);



// // type any

// // type any ma ya hota ha ka data type ki jagha any ka key word lagadata ha is sa ya hota ha ka hum variable ki value ma jo likhta ha ,Number ,boolean ,string automatically type get karlata ha ,variable ki value 


// let username: any = 'abdullah'
// username = 20 // allowed

function processValue(value: any): any {
  return value;
}

let myVar: any;
myVar = 42;
myVar = "hello";
myVar = [1, 2, 3];


// function sum(num1: number, num2: number):number {
//   return num1 + num2;
// }
// console.log(sum(20, 30));

// function greetUser(username: string, age: number){
//   console.log(`hello ${username} with age ${age}`);
// }

// greetUser("abdullah", 20);

//-----Type Inference-----//

// Type inference TypeScript mein automatically variable ya function ke type ko guess karne ka process hota hai.

// Type Inference ma ya hota ha ka agar hum variable ki data type define na kara Type Annotations ki tarha to koi error nahi ata

// let username = 'abdullah'
// username = 20

// let num = 20
// num = 'age'

// let fruits = ['mango' , 20]

//-----Type Aliases-----//

// Type aliases TypeScript mein kisi existing type ko ek naya naam dene ka tareeqa hota hai.

// Type Aliases ma ya hota ha ka hum data type ka variable alag sa banalata ha type ka keyword sa instead of hum variable ka ander hi data type define kara

// type Abd = string

// let user:Abd = 'abdullah'


//-----Union Type-----//

// Union types TypeScript mein ek variable ko multiple types assign karne ka tareeqa hota hai.

// type User = string | number;
// let username: User = 1;
// type Fruits = (string | number | boolean)[]
// let fruits:Fruits = ['mango' , 'orange' , 20 , true]

// 1 hoti ha union data type jisma aap multi data type define karsakta ha jaisa array ma alag alag properties hoti ha unka lia bana sakta ha

type Fruits = (string | boolean | number)[]// in types ko agay picha karna sa farak nahi parta

let fruits: Fruits = ['abdullah', 20, true]

// agar array ki data type string ho or hum array ma number push ,add kara to error ata ha  data type ki waja sa
fruits.push(9)
fruits[0] = 'jawad'
fruits[0] = 4

// main[0] pa isilia error araha ha Q ka data type Type Inference ki waja sa string hogay ha
let main = ['jawad'];
// main[0] = true;// not allow
// main.push(4);// not allow

// Union type aapko ek variable ya function parameter ko multiple types assign karne ki ijaazat deta hai. Iska matlab hai ke aap ek hi variable ko alag-alag types ki values assign kar sakte hain.

//agar hama function ma union type, type Annotations istamal karni ha to lazmi return lagana paraga or return use nahi karna charaha hoto  void ka key word lagada nahi to sub sa VIP kam type define hi na karo


function MainUser(username: string, age: number): (string | number) {
  console.log(`hello ${username} with age ${age}`);
  return `hello ${username} with age ${age}`
}
MainUser("abdullah", 20);

// void ka use zyada tar function ke return type ke liye hota hai. Jab function void return type rakhta hai, iska matlab hai ke woh function kuch bhi return nahi karta.

function logMessage(message: string): any {
  console.log(message);
  // Yahan koi return value nahi hai
}



//object ma hamara pas ya hota ha ka jub hum object ki koi property ko use kara or wo property object ka ander exist nahi karti to error show hota ha jaisa nicha log ma araha ha.

// TypeScript strictly types objects, aur aap ne jo object banaya hai us mein `user` property originally define nahi hui thi. Jab aap object.user = '65' likhte hain, TypeScript ko yeh samajh nahi aata ke `user` property ka type kya hona chahiye, kyun ke object ke structure mein `user` property define hi nahi hai. Is wajah se TypeScript error dega.

const object = {
  username: "abc",
  email: "abc@gmail.com",
  age: 20,
  isLoggedIn: true,
};

object.username = 'kamran'
// object.username =5// datatype ki waja sa error araha ha Q ka username ki data type string ha number nahi
// object.user = '65'
// console.log(object.user);// not allow


// agar hum kuch bhi object ki data type ma likhta ha or agar wo object ma define na ho to error ata ha or agar object ka ander koi chez likhi ho or data type ma likhi na ha to bhi error atta ha.agar hum data type ka ander property ka sath   ?   yala sign lagada to error nahi ata.

// const person: {
//   name: string;
//   age: number;
//   isStudent: boolean,
//   address: {
//     city: string;
//     country: string
//   }
// } = {
//   name: 'DEEPANSHU_NAG',
//   age: 27,
//   isStudent: true,
//   address: {
//     city: "Pune",
//     country: 'India'
//   }
// }


const person2: {
  name: string;
  age: number;
  isStudent?: boolean,
  address: {
    city: string;
    country: string
  }
} = {
  name: 'DEEPANSHU_NAG',
  age: 27,
  // isStudent?: true,
  address: {
    city: "Pune",
    country: 'India'
  }
}


// agar hum data type define kara ha  (type) ka key word sa to  oska bad phir nicha usma kuch or add kara to error ata ha isi lia hum INTERFASE ka key word use karta ha


// type User = {
//   username: string;
//   email: string;
//   age: number;
//   isLoggedIn: boolean;
//   lastName?: string;
// };

// const UserMain: User = {
//   username: "abc",
//   email: "abc@gmail.com",
//   age: 20,
//   isLoggedIn: true,
// };

// UserMain.lastName = "khan";

// console.log(user);


//-----Interfaces-----//

// Interfaces TypeScript mein ek structure define karne ka tareeqa hota hai jo objects ke shape aur properties ko specify karta hai.

// Interfaces commonly object ka lia use hota ha or ya   key word type  ki tarha kam karta ha bs is ma = ka sign nahi ata

interface Employee {
  empliyee: string;
  employeeId: number;
  employeeSallary: number;
  isLoggedIn: boolean
}

let employeeData: Employee = {
  empliyee: 'jawad khan',
  employeeId: 12,
  employeeSallary: 100000,
  isLoggedIn: true
}
console.log(employeeData);


//-----Interfaces vs Type Aliases-----//

// Type aliases aur interfaces dono TypeScript mein types define karte hain, magar type aliases complex types ya unions ke liye zyada flexible hain, jabke interfaces objects ki structure ko define karne ke liye behtareen hain.

// agar hum data type define kara ha  (type) ka keyword sa to  oska bad phir nicha usma kuch or add kara to error ata ha isi lia hum INTERFASE ka key word use karta ha

// type User = {
//     username: string;
//     age: number;
// }

// type User = {     //wrong syntax
//     lastname: string
// }

// interface User {
//   username: string;
//   age: number;
// }

// interface User {
//   lastname: string;
// }

// const user: User = {
//   username: "abc",
//   age: 20,
//   lastname: "khan",
// };

// interface Fruit {
//   fruitName: string;
//   price: number;
//   state: string;
// }


// extends sirf interface ka sath lagta ha. extends sa ya hota ha ka aap kisi bhi nam ka object structure ma kisi bhi nam ka object structure ko add kara saktaha 


interface Hawaijaat {
  name: string;
  price: number;
}

interface Mobile extends Hawaijaat {
  brand: string;
  model: string;
}

const myMobile: Mobile = {
  name: "Smartphone",
  price: 50000,
  brand: "Samsung",
  model: "Galaxy S21"
};

console.log(myMobile);



//-----Generics-----//

// 1. Generics:

// Type generics TypeScript mein flexible aur reusable code likhne ka tareeqa hota hai jo different types ke saath kaam kar sakta hai.

// Generics ka matlab hai ke aap ek type ko dynamic banate hain taake ek function ya class har tarah ke data ke sath kaam kar sake, lekin type-safety bhi maintain rahe. Generics specific types ke sath kaam karne ke liye design kiye gaye hain, lekin wo run-time pe decide hote hain.


function hAdd<T>(a: T, b: T): T {
  return a;
}

console.log(hAdd<number>(5, 10)); // number types ke sath
console.log(hAdd<string>("Hello", "World")); // string types ke sath

// 2. Union Type:
// Union types ka matlab hota hai ke ek variable ya function multiple types ko support kar sakta hai. Aap define karte hain ke koi value do ya zyada types me se ek ho sakti hai.

function hPrint(value: string | number): void {
  console.log(value);
}

hPrint(123); // number type
hPrint("Hello"); // string type


// 3. Any:
// any type use karne ka matlab hai ke aap TypeScript ko bata rahe hain ke is variable ka type check nahi kiya jayega. Is se aap kisi bhi type ki value assign kar sakte hain, lekin type-safety kaafi kam ho jati hai.


let hData: any;
hData = 123; // number type
hData = "Hello"; // string type
hData = true; // boolean type


// Generics: Type ko dynamic banata hai lekin specific type ke sath kaam karta hai. Type-safety ko barqarar rakhta hai.

// Union Type: Ek variable ya function multiple specific types ko accept karta hai, lekin sirf un types ko jo defined hain.

// any: Har tarah ki type ko allow karta hai, lekin type-safety ko compromise karta hai.


//-----Enums-----//

// Enums TypeScript mein ek set of named values ko define karne ka tareeqa hota hai jo kisi specific data type ke liye constant values ko represent karta hai.

// Enums TypeScript mein ek special data type hai jo ek group ya set of related constants ko define karne ke liye use hota hai. Iska maksad code ko zyada readable aur manageable banana hota hai. Hum enums tab use karte hain jab humein kisi cheez ke predefined aur fixed options ko represent karna ho, jaise days of the week, months, colors, etc.

enum CardinalDirections {
  North,
  East,
  South,
  West,
}
let currentDirection = CardinalDirections.North;
console.log(currentDirection);

// enum User {
//   admin = "admin",
//   user = "user",
// }

// console.log(User.admin);

// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400,
// }

// StatusCodes.NotFound;

enum TrafficLight {
  Red = "RED",
  Yellow = "YELLOW",
  Green = "GREEN",
}
// Is example mein TrafficLight enum ko use karke hum traffic signal ke colors define kar rahe hain. Jab kabhi hume kisi traffic light ka color check karna ho, hum enum ko use karenge:

let currentLight: TrafficLight = TrafficLight.Red;

// Faida Enum ka:
// Enums ka sabse bada faida yeh hota hai ke hume magic numbers ya strings ko baar baar use nahi karna padta. Har enum value apne meaning ko clearly represent karti hai, aur agar value galat use karna chahein to TypeScript compile-time pe error throw karega, jo hume bugs se bachata hai.

// Enums se code zyada readable, maintainable, aur less error-prone ho jata hai.

//-----Tuples-----//

// Tuples TypeScript mein ek ordered collection hoti hai jo fixed number of elements ko different types ke saath store kar sakti hai.

