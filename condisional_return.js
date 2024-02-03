
// even or odd number cheak it
function isEven(number){
    if(number%2===0){
        // console.log(' this number is even');
        return true;
    }
    else{
        return false;
    }
}
// console.log(isEven(5));
// console.log(isEven(6));


// same way try it shortcut ------>
function isOdd(number){
    if(number%2===1){
        return true;
    }
    return false;
}
console.log(' this number is =',isOdd(7));
console.log('This number is =',isOdd(8));
