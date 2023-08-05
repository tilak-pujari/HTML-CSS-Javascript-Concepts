/*  Arrays

*/

let a=Array(6)
console.log(a)//6
let b=new Array(20,54,45,78,42)
//let b=new Array(4,8,7,9)  //redeclaration not allowed in let
console.log(b)//(5) [20, 54, 45, 78, 42]


var subjects=["Python"]
var subjects=["HTML","CSS","JavaScript","Java"]
console.log(subjects)//(4) ['HTML', 'CSS', 'JavaScript', 'Java']

//To get individual element from an Array
console.log(subjects[2])//JavaScript

//To get the length of an Array
console.log(subjects.length)//4

//To reassign value to existing array
subjects[3]="Python"
console.log(subjects)//(4) ['HTML', 'CSS', 'JavaScript', 'Python']

//To Add value at the end of an Array
subjects.push("Django")
console.log(subjects)//(5) ['HTML', 'CSS', 'JavaScript', 'Python','Django']

//To remove value from end of an Array
subjects.pop()//(4) ['HTML', 'CSS', 'JavaScript', 'Python']

//To Add value at the start of an Array
subjects.unshift("Web Design")
console.log(subjects)//(5) ['Web Design','HTML', 'CSS', 'JavaScript', 'Python']
