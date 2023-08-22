
var marks=[25,35,44,50,27,36,48]
subArray=marks.slice(2,6)
console.log(subArray)

//to display array elements
console.log("array elements")
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i])
}
//to get sum of array
console.log("sum of an array elements")
var sum=0
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i]
}
console.log(sum)

//reduce ,filter ,map
let total=marks.reduce((sum,mark)=>sum+mark,0)
//          array.reduce((accumalator,individual)=>function,initial value of accumalator)
console.log(total)

//create a new array to store even numbers from array
var parent_array=[16,22,57,88,45,25,28]
var evenNums=[]
for(let i=0;i<parent_array.length;i++){
    if(parent_array[i]%2==0){
        evenNums.push(parent_array[i])
    }
}
//filter
console.log(evenNums)
//we can perform the same filtering with filter function
let filterEvenNums=parent_array.filter(num=>num%2==0)
console.log(filterEvenNums)

//map -->in case we want to perform operations and update the values back
let multiplyArray=filterEvenNums.map(num=>num*10)
console.log(multiplyArray)

//create new array from aaray get evenNums and mutliply it by 10 and add them to get total sum
let totalValue=multiplyArray.reduce((sum,value)=>sum+value,0)
console.log(totalValue)

//we can reduce the line of code by chaining them together
//create new array from aaray get evenNums and mutliply it by 10 and add them to get total sum in single line
var nums=[16,22,57,88,45,25,28]
let totalValueChain=nums.filter(nums=>nums%2==0).map(num=>num*10).reduce((sum,num)=>sum+num,0)
console.log(totalValueChain)