function isOdd(a){
   if (a%2 == 0){
    return "value is even";
   }else{
     return "value is odd";
   }
}

console.log(isOdd(2));

function isOddUsingternary(a){
    return a%2 != 0 ? "value is odd": "value is even"
}
console.log(isOddUsingternary(3))

let funAsExpression = function isOdd(a)
{
    return a % 2 != 0 ? "value is odd": "value is even"
}

console.log(funAsExpression(2))

// arrow function
const arrowFun = (a) => {
    return a % 2 != 0 ? "value is odd" : "value is even";

}
console.log("output from arrowFun(4):",arrowFun(4));