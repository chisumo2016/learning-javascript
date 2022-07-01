
/* 
  MORE GENERATORS
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

console.log("MORE GENERATORS");

const genNumbers = function* (numbers){
   //loop
   for(var i = 0; i < numbers.length; i++){
      yield numbers[i];
   }
}

//use it 
const getNumbersGen = genNumbers([1,2,3,4,5]);

const interval = setInterval(() =>{
   const next = getNumbersGen.next();
   if(next.done){
      console.log("This generators is done");
      clearInterval(interval)
   }else{
      const number = next.value;
      console.log(number);
   }

},1000)