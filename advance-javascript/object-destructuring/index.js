
/* 
   Object Destcructuring 
   desttructure the nested property  
   example: 
       const country = user.address.country;
       const doorNumber = user.address.fullAddress.doorNumber;
   const { name , age }   = user;
   
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
const { name , age , address: {country : theCountry} }   =  user;
const { address :{ fullAddress: {doorNumber : number}} }   =  user;

console.log(name);
console.log(age);
//console.log(country);
console.log(theCountry);
console.log(number);