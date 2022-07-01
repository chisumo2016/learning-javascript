
/* 
  PROMISE .ALL : Must be fufllied otherwise will encounter some errors

*/

console.log("Promise.ALL");

const namesPromise = new Promise((resolve, reject) =>{
setTimeout(() =>{

   resolve(['David', 'Ben', 'Mick','WaliYuko'])

}, 3000);


setTimeout(() =>{

   reject("not data back from the server, there was error")

},5000);

});



const surnamePromise = new Promise((resolve, reject) =>{
   setTimeout(() =>{
   
      resolve(['anna', 'Janes', 'Jack','Wali'])
   
   }, 3000);
   
   
   setTimeout(() =>{
   
      reject("not data back from the server, there was error")
   
   },5000);
   
   });

//How to use 
Promise.all([namesPromise, surnamePromise]).then(data =>{
   const [ names , surnames] = data ;

   for(let i = 0; i < names.length; i++){
      const name     = names[i];
      const surname  = surnames[i];
      
      console.log(`${name} ${surname}`);
   }
   console.log(data);
}).catch(error => {
   console.log(error);
});

