//Scope of var let const keyword

//var is global level/functional level
//let is global level/block level

var greet="Morning var"
if(1==1){
   var  greet="Noon var"
}
console.log(greet)

//here greet is declared but not used outside function
function hello(a,b){
   greet="in function var"
    return a+b
}
hello(2,3)
console.log(greet)


let greeting="Morning let"
greeting="Evening let"
if(1==1){
   let greeting="Noon let"
}
function hello(){
  let  greeting="in function let"
}
console.log(greeting)

const greets="Morning Const"
//we cant reinitialize const values
// greets="Evening const"
// if(true){
//   const  greets="Noon Const"
// }

console.log(greets)