let a1:number[]=[1,2,3,4];
let a2:number[]=[5,6,7,8];
a1.shift();
console.log("shift",a1);
a1.unshift();
console.log("unshift",a1);
a1.push(30);
console.log("push",a1);
a1.pop();
console.log("pop",a1);
console.log("length",a1.length);
a1.splice(2);
console.log("splice",a1);
a1.lastIndexOf(3);
console.log("last index of 2:",a1);
a1.concat(a2);
console.log("array cancat:",a1)