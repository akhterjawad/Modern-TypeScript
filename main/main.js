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
var usernameMain = 'abdullah';
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
var username = 'abdullah';
username = 20; // allowed
var fruits = ['abdullah', 20, true];
//object ma hamara pas ya hota ha ka jub hum object ki koi property ko use kara or wo property object ka ander exist nahi karti to error show hota ha jaisa nicha log ma araha ha
var object = {
    username: "abc",
    email: "abc@gmail.com",
    age: 20,
    isLoggedIn: true,
};
var employeeData = {
    empliyee: 'jawad khan',
    employeeId: 12,
    employeeSallary: 100000,
    isLoggedIn: true
};
console.log(employeeData);
// for (const key in employeeData) {
//     console.log(employeeData[key]);
// }
// let array = [12,23,4,54,6,57,8,10];
// array.map(item => {
//     console.log(item);
