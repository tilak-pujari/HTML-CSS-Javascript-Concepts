
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