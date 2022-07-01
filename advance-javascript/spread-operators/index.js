
/* 
   Spread Operators : Arrows conc multiple array 
   [...arrayOne, ...arrayTwo]
   (..., .....)
*/

console.log( "Spread Operators Arrows");

const arrayOne  =  ['Ben' , 'John' , 'Hamisa'] ;
const arrayTwo =   [ 'Khan', 'Jully', 'San'] ;

const concatArray = [...arrayOne, ...arrayTwo]

concatArray.forEach(function(n){
    console.log(n)
});

const name1 = 'Maria';
const nameToArray = [...name1];
nameToArray.forEach(function(letter){
    console.log(letter)
});


//This bad code
const addNumbers = function(n1, n2, n3){
    return n1 + n2 + n3 ;
}
const numbers = [1,5 ,9];
const addition = addNumbers(numbers[0], numbers[1],  numbers[2]);
console.log(addition)


//This Good code
const addNumbers1 = function(n1, n2, n3){
    return n1 + n2 + n3 ;
}
const numbers1 = [1,5 ,10];
const addition1 = addNumbers1(...numbers1)
console.log(addition)















