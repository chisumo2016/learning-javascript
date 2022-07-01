
/* 
   Object Destcructuring  Assigment
   desttructure the nested property  
   example: 
       const country = user.address.country;
       const doorNumber = user.address.fullAddress.doorNumber;
   const { name : variable, age : variable }   = user;

   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   
*/



const getUser = () => {
   return  {
      //object
      name : 'John',
      surname : 'Budy',
      gender:  'Male',

      address: {
         country : 'United State',
         city: 'Texas',
         fullAddress:{
            doorNumber : 22,
            street : 'La street'
         }
      },
      age : 20
   }

};


//create a variable user ,and invoking the function
const user = getUser();

/*
 console.log( "Object Destcructuring Old Way");
const  name = user.name;
const age  =  user.age;
const country = user.address.country;
const doorNumber = user.address.fullAddress.doorNumber;*/

console.log( "Object Destcructuring");
const { name :theName , age : theAge , address: {country : theCountry} }   =  user;
const { address :{ fullAddress: {doorNumber : number}} }   =  user;

console.log(theName);
console.log(theAge);
//console.log(country);
console.log(theCountry);
console.log(number);