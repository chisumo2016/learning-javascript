
/* 
  GENERATORS
    * is the fuction can be paused
    * It help to write our code in async fasshion
 
  Syntax 
      function * namee(){
         const variable = yield value
      }

      function * numberGen(){
         const numOne = yield 1;
         const numOne = yield 2;
         const numOne = yield 3
      }
    * use it
    const gen = numbersGen();

     * Get value
    gen.next();
    gen.next().value
    gen.next().done  bolean

    

*/

console.log("GENERATORS");

const genNumbers = function* (){
   yield 1;
   yield "hello";
   yield true;
   yield { name: 'Alex'};

   return "Iam donee";
}

const numberGen = genNumbers();

console.log(numberGen.next().value);
console.log(numberGen.next().value);
console.log(numberGen.next().value);
console.log(JSON.stringify(numberGen.next().value));
console.log(numberGen.next().value);
