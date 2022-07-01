
/* 
   PROMISES KEYNOTE
   The promise object is used for asynchronous computations.

   Represents a value which may be available NOW , or in the FUTURE  or NEVER

   ben ---->http Request ------> Server (OK , Error, database)
                        <-------------------
   Types of promises state
      * Pending   : initial state , not fulfilled oor rejected
      * Fulfilled : meaning that the operation completed
      * Rejected  : meaning that the operation  failed
      * 
   Use Promise: create a promise object
            fullfilled  use .then()
            rejected   use  .catch()
  
   CREATING PROMISES

*/

console.log("Promises");

const promise = new Promise((resolve, reject) =>{
setTimeout(() =>{

   resolve("data back fromm the server")

}, 3000);


setTimeout(() =>{

   reject("not data back from the server, there was error")

},2000);

});

//How to use 
promise.then(response =>{
   console.log(response);
}).catch(error =>{
   console.log(error);
});


