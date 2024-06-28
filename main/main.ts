console.log('hello TypeScript.');


// tsc filename.ts  is command sa JS ki file banjati ha
// node filename.js  is command sa TS terminal pa run hogi
// tsc filename.ts -w  is command sa TS live server ki tarha JS ma kam karti ha


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

//-----Type Annotations-----//

// Type Annotations ya hota ha ka jub aap TS ma variable banay to hath ka hath variable ki value ki type bhi batay

let usernameMain:string = 'abdullah';
// username = true //not allowed
// console.log(usernameMain);

// let age:number = 20;
// age = 21  // allowed
// console.log(age);

// let isLoggedIn:boolean = true
// console.log(isLoggedIn);

// is tarika sa hum string ki array ki data type bata ta ha ,is array ma numbar ya boolean nahi dal sakta 
// let user:string[] = ['abdullah']

// type any

// type any ma ya hota ha ka data type ki jagha any ka key word lagadata ha is sa ya hota ha ka hum variable ki value ma jo likhta ha ,Number ,boolean ,string automatically type get karlata ha ,variable ki value 


let username:any = 'abdullah'
username = 20 // allowed

// function sum(num1: number, num2: number):number {
//   return num1 + num2;
// }
// console.log(sum(20, 30));

// function greetUser(username: string, age: number){
//   console.log(`hello ${username} with age ${age}`);
// }

// greetUser("abdullah", 20);

//-----Type Inference-----//

// Type Inference ma ya hota ha ka agar hum variable ki data type define na kara Type Annotations ki tarha to koi error nahi ata

// let username = 'abdullah'
// username = 20

// let num = 20
// num = 'age'

// let fruits = ['mango' , 20]

//-----Type Aliases-----//

// Type Aliases ma ya hota ha ka hum data type ka variable alag sa banalata ha type ka keyword sa instead of hum variable ka ander hi data type define kara

// type Abd = string

// let user:Abd = 'abdullah'

// 1 hoti ha union data type jisma aap multi data type define karsakta ha jaisa array ma alag alag properties hoti ha unka lia bana sakta ha

type Fruits = (string | number| boolean)[]

let fruits:Fruits = ['abdullah' , 20 , true]

//object ma hamara pas ya hota ha ka jub hum object ki koi property ko use kara or wo property object ka ander exist nahi karti to error show hota ha jaisa nicha log ma araha ha

const object = {
  username: "abc",
  email: "abc@gmail.com",
  age: 20,
  isLoggedIn: true,
};

// console.log(object.user);// not allow


// type User = {
//     username: string;
//     email: string;
//     age: number;
//     isLoggedIn: boolean;
// }

// type User = {
//   username: string;
//   email: string;
//   age: number;
//   isLoggedIn: boolean;
//   lastName?: string;
// };

// const user: User = {
//   username: "abc",
//   email: "abc@gmail.com",
//   age: 20,
//   isLoggedIn: true,
// };

// user.lastName = "khan";

// console.log(user);

// ===== INTERFASE ====

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

// for (const key in employeeData) {
//     console.log(employeeData[key]);
// }


// let array = [12,23,4,54,6,57,8,10];

// array.map(item => {
//     console.log(item);
