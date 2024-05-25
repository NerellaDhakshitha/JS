let n=prompt("Enter size:");
let arr=[];
for(let i=0;i<n;i++)
    {
        arr[i]=i+1;
    }
    console.log(arr);
const sum=arr.reduce((prev,Curr)=>
{
    return prev+Curr;
})
console.log("sum=",sum);

const factorial=arr.reduce((prev,Curr)=>{
    return prev*Curr;
}
)
console.log("Factorial=",factorial);