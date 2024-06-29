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

let usernameMain: string = 'abdullah';
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


let username: any = 'abdullah'
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


//-----Union Type-----//
// type User = string | number;
// let username: User = 1;
// type Fruits = (string | number | boolean)[]
// let fruits:Fruits = ['mango' , 'orange' , 20 , true]

// 1 hoti ha union data type jisma aap multi data type define karsakta ha jaisa array ma alag alag properties hoti ha unka lia bana sakta ha

type Fruits = (string | boolean | number)[]// in types ko agay picha karna sa farak nahi parta

let fruits: Fruits = ['abdullah', 20, true]

// agar array ki data type string ho or hum array ma number push ,add kara to reeor ata ha  data type ki waja sa
fruits.push(9)
fruits[0] = 'jawad'
fruits[0] = 4

// main[0] pa isilia error araha ha Q ka data type Type Inference ki waja sa string hogay ha
let main = ['jawad'];
// main[0] = true;// not allow
// main.push(4);// not allow


//object ma hamara pas ya hota ha ka jub hum object ki koi property ko use kara or wo property object ka ander exist nahi karti to error show hota ha jaisa nicha log ma araha ha.

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
//   // // isStudent: boolean,
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
  // // isStudent: true,
  address: {
    city: "Pune",
    country: 'India'
  }
}


// agar hum data type define kara ha  (type) ka key word sa to  oska bad phir nicha usma kuch or add kara to error ata ha isi lia hum INTERFASE ka key word use karta ha


type User = {
  username: string;
  email: string;
  age: number;
  isLoggedIn: boolean;
  lastName?: string;
};

const UserMain: User = {
  username: "abc",
  email: "abc@gmail.com",
  age: 20,
  isLoggedIn: true,
};

UserMain.lastName = "khan";

// console.log(user);


//-----Interfaces-----//

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

// agar hum data type define kara ha  (type) ka key word sa to  oska bad phir nicha usma kuch or add kara to error ata ha isi lia hum INTERFASE ka key word use karta ha

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

// interface Mango extends Fruit {
//   type: string;
// }

// let fruit: Fruit = {
//   fruitName: "cherry",
//   price: 1000,
//   state: "KPK",
// };

// let mango: Mango = {
//   fruitName: "mango",
//   price: 3000,
//   state: "sindh",
//   type: "sindhri",
// };

// type Fruit = {
//   fruitName: string;
//   price: number;
//   state: string;
// };

// type Mango = Fruit & {
//   type: string;
// };

// let fruit: Fruit = {
//   fruitName: "cherry",
//   price: 1000,
//   state: "KPK",
// };

// let mango: Mango = {
//   fruitName: "mango",
//   price: 3000,
//   state: "sindh",
//   type: "sindhri",
// };

//-----Enums-----//

// enum CardinalDirections {
//   North,
//   East,
//   South,
//   West,
// }
// let currentDirection = CardinalDirections.North;
// console.log(currentDirection);

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

//-----Generics-----//

// function identity<T>(arg: T): T {
//   return arg;
// }

// console.log(identity('abd'));

// function identity(arg: any): any {
//   return [arg];
// }

// console.log(identity("abd"));