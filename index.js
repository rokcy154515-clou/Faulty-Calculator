// create a faulty calculator using js
// this calculator does following:
// +  ---->-
// *  ---->+
// -  ---->/
// /  ---->**
// it performs wrong operation 10% of the time
let random=Math.random();
console.log(random)
let a=prompt("Enter the First No")
let c=prompt("Enter the operation")
let b=prompt("Enter the second No")
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}