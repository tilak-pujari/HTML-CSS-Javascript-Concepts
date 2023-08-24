//String manipulation methods

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