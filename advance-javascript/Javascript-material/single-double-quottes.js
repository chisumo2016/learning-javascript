
/* 
   Singles vs Double Quotes and Semi Column
   Code Consistent 
   ESLINT
*/

/** Comparison Operators */

console.log("Single vs  Double Quotes")

console.log("With type coercion")

console.log(typeof 0 + '' + typeof false)
console.log(0 == false)

console.log(typeof "0" + '' + typeof false)
console.log(0 == false)

console.log(typeof 1 + '' + typeof "1")
console.log(1 == "1")



console.log("Without type coercion")

console.log(typeof 0 + '' + typeof false)
console.log(0 === false)

console.log(typeof "0" + '' + typeof false)
console.log(0 === false)

console.log(typeof 1 + '' + typeof "1")
console.log(1 === "1")


// NB: != !== it advised to use ==== 