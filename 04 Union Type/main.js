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


//agar hama function ma union type istamal karni ha to lazmi return lagana paraga or return use nahi karna charaha to union type ki jaga void ka key word lagada nahi to sub sa VIP kam type define hi na karo
function MainUser(username: string, age: number): (string | number) {
  console.log(`hello ${username} with age ${age}`);
  return `hello ${username} with age ${age}`
}
MainUser("abdullah", 20);


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
