let num=[2,3,4,5,6];
const newArr=num.filter((val)=>{
    return val%2==0;         //filter is to create a new array from the array based on condition ,new array creates fro  the values who satisfy the given condition
}
)
console.log(newArr);