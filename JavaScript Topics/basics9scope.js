//Scope of var let const keyword

//var is global level/functional level
//let is global level/block level

var greet="Morning"
if(true){
    greet="Noon"
}

console.log(greet)

function hello(){
    greet="in function"
}
console.log(greet)


let greeting="Afternoon"
greeting="Evening"
if(true){
    greeting="Noon"
}
console.log(greeting)

const greets="Morning Const"
greets="Evening const"
if(true){
    greets="Noon Const"
}

function hello(){
    greet="in function"
}