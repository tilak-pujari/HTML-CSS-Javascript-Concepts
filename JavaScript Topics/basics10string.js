//String manipulation methods in javascript

let day="sunday "
//to get length of string
console.log(day.length)

//to get character from string
console.log(day[2])

//to get substring 
let sliceDay=day.slice(0,3)
console.log(sliceDay)

//splits string at given character
let splitDay=day.split("n")
console.log(splitDay[0])
console.log(splitDay[1])

//remove leading and trailing whitespaces
let trimmedDay=day.trim()
console.log(trimmedDay)

let number1="55"
let number2='25'

//use parseInt to convert String into integers
let add=parseInt(number1)+parseInt(number2)
console.log(add)
//it works now but ideally use parseInt
let sub=number1-number2
console.log(sub)

//convert object to string
console.log(sub.toString())

//cancatenate two strings
let newString=day+"is first day"
console.log(newString)

//to search substring present in string
//it will give index of first matching element
console.log(newString.indexOf('day'))
//to start at any point we can give position at indexOf method
console.log(newString.indexOf('day',6))

//write a program to check in 'sunday is first day' how many times 'day' occured
let value=newString.indexOf('day')
count=0
while(value!=-1)
{
    count++
    value=newString.indexOf('day',value+1)
}
console.log('day occured '+count)