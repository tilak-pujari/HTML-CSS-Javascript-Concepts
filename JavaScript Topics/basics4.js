/*          For Loop
we use for loops where we know how many times the loop should execute
Syntax: for(intialization;condition;updation){
                code
}       */

//Print the numbers which are multiple of 2 and 5 from 1-20
let a=20;
for(let i=1;i<=a;i++){
    if(i%2==0 && i%5==0){
        console.log(i)
    }
}
console.log("--------------------------")
//Print the numbers which are multiple of 2 or 5 from 1-20
for(let i=1;i<=a;i++){
    if(i%2==0 || i%5==0){
        console.log(i)
    }
}
console.log("--------------------------")
//print only first 5 numbers from this list and  which are multiple of 2 or 5 from 1-20
let count=0;
for(let i=1;i<=a;i++){
    if(i%2==0 || i%5==0){
        count++
        console.log(i)
    }
    if(count==5){
        break
    }
}

/*
Concepts used here:
assignment operator
logical and operator
if condition
nested if statements
for loop
break statement
*/
