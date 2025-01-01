let str:any="hello"
console.log(str);
let len:number =(str as string).length
console.log(len);

let num:any=123;
let num2=<number>num;
console.log(typeof num2);