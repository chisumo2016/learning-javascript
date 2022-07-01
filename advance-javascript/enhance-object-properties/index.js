
/* 
   Enhance Object Properties
*/

console.log( "Enhance Object Properties");

const pricePropName = "PRICE"

const calculator =(name , price )=> {
   return {
      //property
      //name : name
      name,

         //Bad way
      add : function(n1, n2){
         return n1 + n2 ;
      },
      //Nice way es6
      addNice(n1, n2){
         return n1 + n2 ;
      },

      [pricePropName.toLowerCase()] : price
   }
}

const calc = calculator('casio', 19.99)

console.log(calc.name);
console.log(calc.add(10,12));
console.log(calc.addNice(10,12));
console.log(calc.price);


