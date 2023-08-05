
//Loops and Conditional statements

const isOn=true

/*
if condition looks for true value if it is true it will go inside if block
 otherwise else block willbe executed.
 */

if(isOn){
    console.log("The AC is ON")
}
else{
    console.log("The AC is OFF")
}
//here the const value did not change
if(!isOn){
    console.log("The AC 2 is ON")
}
else{
    console.log(isOn)
    console.log("The AC 2 is OFF")
}

let a=5;
while(a<10){
    a++
    console.log("while loop "+a)
}

do{
    console.log("inside do while loop")
    a--
}while(a>10);
console.log(a)