console.log("Hello World")

//This is Single line Comment
/*
This
is a
Multi line Comment
*/

/*Javascript is loosely typed language.
we dont need to specify type for each variable 
eg a=10
Here JavaScript will automatically knows it's type number
*/

var a = 10
console.log(a)

//from ES6 onwords Javascript has two additional types let and const ,we still use var keyword
let b = 204
const c = 50
console.log(b)
console.log(c)
console.log(a + b + c + " Hello")//if number comes first they are added
console.log("Hello" + a + b + c)//if String comes first they will concatenate
//We can add element of different types and cancatenate
var s = "Hello"

//To see type of variable we have method
console.log(typeof (s))
console.log(typeof (a))
console.log(typeof (c))