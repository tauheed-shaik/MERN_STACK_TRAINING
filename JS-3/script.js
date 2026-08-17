// console.log("Looping and Functions page");
// let a=1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);

// for (let i=1;i<=100;i++){
//     console.log(i);
// }

// let obj={
//     name:"boy",
//     roll:30,
//     branch:"cse"
// }
// for (const i in obj) {    
//     const element = obj[i];
    
//     console.log(i);
//     console.log(obj[i]);
// }

// for (const i of "hello") {
//     console.log(i);
// }
// let i=1;
// while (i<50){
//     console.log("hi");
//     i++;
// }
let a=10;
let b=20;
let max;
max=(a>b)?a:b;
console.log(max);
function nice(name){
console.log("Hey " +name+ " you are nice1");
console.log("Hey "  +name+  " you are nice2");
console.log("Hey "  +name+  " you are nice3");
console.log("Hey " +name+  " you are nice4");
}
nice("sam");
function sum(a,b){
    console.log(a+b);
}
total=sum(10,20)
console.log(total)
function sum2(a,b,c){
    console.log(a+b+c);
}
sum2(1,2,3)

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}
