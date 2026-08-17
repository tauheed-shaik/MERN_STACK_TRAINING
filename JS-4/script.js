function mean(a,b,c,d,e){
    console.log((a+b+c+d+e)/5);
}
mean(1,2,3,4,5)

const mean2 = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}

const square =(x)=>{
    return x*x;
}
let a=square(10);
console.log(a);

const square2 = x => x*x;


function outer(){
    console.log("Outer function running...");
    function inner(){
        console.log("Inner function running...");
    }
    inner();

}
outer();
