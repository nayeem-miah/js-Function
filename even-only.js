/**
 * created function that will return only the even number
 * return the sum of numbers
 * 
 */
function evenNumberOnly(numbers){
    let evens=[];
    for(const number of numbers){
        if(number%2===0){
            
            console.log(number);
            evens.push(number);
        }  
    }
    return evens;
}
const nums=[12,23,45,67,66,88];
// const evens= evenNumberOnly(nums);
// console.log('even numbers are ',evens);

function sumOfEvenNumbers(numes){
    
    let total=0;
    for(const number of numes){
        if(number%2===0){
            console.log(number)
            total=total+number;
        }

    }
    return total;

}
const numes=[12,55,78,9];
const isSum=sumOfEvenNumbers(nums);
console.log("is sum is =",isSum);

