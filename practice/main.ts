// tsc filename.ts  is command sa JS ki file banjati ha
// node filename.js  is command sa TS terminal pa run hogi
// tsc filename.ts -w  is command sa TS live server ki tarha JS ma kam karti ha

let num1: number = 4
let num2: number = 9
console.log(num1 + num2);

// error blow
// function sum(value1: number, value2: number): void {
//     return value1 + value2
// }
// console.log(sum(8, 5));

function add(value1: number, value2: number): void {

    console.log(value1 + value2)
}
add(8, 5);