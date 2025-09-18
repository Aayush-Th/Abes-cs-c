
function func(){
var a = 20;
let b = 30;
const pi = 3.14;
console.log("block Scope:");
console.log("value of a global scope:", a)
console.log("value of a global scope:", b)
console.log("value of a global scope:", pi)
}

func();
console.log("outside Scope:");
console.log("value of a global scope:", a)
console.log("value of a global scope:", b)
console.log("value of a global scope:", pi)
