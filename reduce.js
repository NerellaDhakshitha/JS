let arr=[1,2,3,4];
const sum=arr.reduce((res,Curr)=>{
    return res+Curr;
});
console.log(sum);

const great=arr.reduce((prev,Curr)=>
{
    return prev>Curr?prev:Curr;
}
)
console.log(great);