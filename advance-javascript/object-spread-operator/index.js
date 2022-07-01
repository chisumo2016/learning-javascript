
/* 
   OBJECTS & SPREAD OPERATOR
     eg react (one component to another component via props) and js app
     Combine two object in One
*/

console.log( "OBJECTS & SPREAD OPERATOR");


const address = {
    city : 'LA',
    country : 'USA',
    postcode: 'LA55'
};


const name = {
    firstName: 'John',
    lastName: 'Doe'
};

/*console.log( " OBJECTS & SPREAD OPERATOR - LONG WAY");
const person1 = {
    city:Address.city,
    country: country.country
}*/


console.log( " OBJECTS & SPREAD OPERATOR");

const person = { ...address, ...name};
console.log(JSON.stringify(person, null , 2) );












