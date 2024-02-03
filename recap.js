function add(price1,price2){
    let total=price1+price2;
    return total;
}
const newAdd= add(500,6);
console.log(newAdd);

// same way ->
function num(a,b){
    return a+b; // direct or variable same 
     
}
const num2=num(500,11);
console.log(num2);
console.log(newAdd,'and',num2);


// simple calculator
function calculator(num1,num2){
    const sum = num1+num2;
    const diff=num1-num2;
    const multiply=sum*diff;
    const result=multiply/2;
    return result;
}
const result=calculator(10,5);
console.log(result);

