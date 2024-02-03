/**
 * Objective : write a function to give me the sum of all numbers in an array:
 * 
 * step 1:declare a function
 * step 2:call check whether the function is called properly
 * step 3: set a parameter(s)
 * step 4: pass the parameter(s), check whether is passed in proper format
 * step 5: do the function tasks(step by steps)
 */
function sumOfNumbers(numbers){
    let sum =0;
    for(const number of numbers){
        console.log(number);
        sum =sum+number; 
    }
    return sum;
    // console.log(number);

}
const nums=[12,34,556,67];
const sum=sumOfNumbers(nums);
console.log('sum of numbers is ',sum);

