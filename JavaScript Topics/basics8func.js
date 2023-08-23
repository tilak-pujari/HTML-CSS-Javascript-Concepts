var num=[10,21,152,35,45,13]
console.log(num)

//block of code
function add(a,b){
    return a+b
}
let sum=add(2,3)
console.log(sum)

//Anonymous function --> function with no names and with expression

let sumOfTwo=function(a,b){
    return a+b
}
//short form
let sumOfNums=(a,b)=>a+b
//wrong way to use
//console.log(sumOfNums)
console.log(sumOfNums(5,8))
console.log(sumOfTwo(5,8))git