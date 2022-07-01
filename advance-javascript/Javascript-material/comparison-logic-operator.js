
/* 
 Comparison and Logic Operators
   variable and Values
        ==   > 
        <    != 
        <=   >=
        && (true == true)
        ||  (true == false) one condtion as to be true
        !   (evaluate if T/F)

*/

/** Comparison Operators */

console.log("Comparison Operators");
console.log(10 ==  10);
console.log(10  <  10);
console.log(10  <= 10);
console.log(10  >  10);
console.log(10  >= 10);
console.log(10  != 10);


/** Logic Operators  */

console.log("Logic Operators");
console.log(10 ==  10 && 20 == 20 && 100 == 100);
console.log(10 ==  10 && 20 != 20);


console.log(10 || 10 && 30);
console.log(10  ==  10 && 20 != 20);

console.log(20  ==  30 || 20 == 20);


console.log(!(10  ==  10 ));
console.log(!(10  ==  20 ));

if(!(10  ==  20 )){
    console.log("if statement was executed");
}