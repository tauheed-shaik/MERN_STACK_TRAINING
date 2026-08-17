// for(let i=0;i<=5;i++){
//     console.log("*".repeat(i));
// }


arr=[1,2,3,4,5]
let arr2= arr.map(function (i){
    return i**2;
})

let arr3=arr.filter(function(i){
    return i%2===0;
})

let sum=arr.reduce(function(a,c){
    return a+c;
},1);

let sum2=(a,b)=>{
    return a+b;
}
console.log(arr.reduce(sum2))