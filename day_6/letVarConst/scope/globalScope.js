var a = 20;
let b = 30;
const pi = 3.14;
// console.log("gobalScope:");
// console.log("value of a global scope:", a)
// console.log("value of a global scope:", b)
// console.log("value of a global scope:", pi)

function callValue(a,b,pi){
console.log("gobalScope:");
console.log("value of a global scope:", a)
console.log("value of a global scope:", b)
console.log("value of a global scope:", pi)
}
callValue(a,b,pi);