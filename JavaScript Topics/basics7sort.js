
// Sort method is for sorting String literals
var names=["Amar","Akbar","Ram","Raj","Dom"]
names.sort()
console.log(names)

// var num=[12,25,45,65,32,11,21,77]
// console.log(num.sort())
//we cant sort numbers directly
var num1=[112,25,45,65,32,9,222,77]
console.log(num1.sort())

//Buble sort in recursive manner ascending order
// num1.sort(function(a,b){
//     return a-b
// })
//Single line code
console.log(num1.sort((a,b)=>a-b))

//Buble sort in recursive manner ascending order
console.log(num1.sort((a,b)=>b-a))

//print names in reverse descending order
console.log(names.reverse())
