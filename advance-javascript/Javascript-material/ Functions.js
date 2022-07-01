
/* 
 Functions- Set of instructions allows u to perform a task,calculate a value
 It's core value
 pass the argument (num1 , num2)
 pass the parameter
 May return value or not (Number , String , Boolean 
 Build Inn Javascript Methods : 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
  https://underscorejs.org/
*/

var  addition = 2 + 3 ;


function addNumbers(num1 , num2){
  
    console.log(num1 + num2) ;
}

/** Output */
addNumbers(10 , 30);

//return 
function addNumbers(num1 , num2){
  
    var result = num1 + num2 ;

    return result;
     
}

/** Output */
var result = addNumbers(10 , 30);

console.log(result);




//Built In functions 
var person = { name: "Ana", age : 30} ;
console.log(Object.keys(person));
console.log(Object.values(person));


console.log("James Bond" . toLowerCase());
console.log("James Bond" . toUpperCase());
console.log("James Bond" . endsWith("Bond"));
console.log("James Bond" . endsWith("James"));



