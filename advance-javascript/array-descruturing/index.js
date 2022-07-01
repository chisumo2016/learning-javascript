
/* 
   Array Descruturing ; Pulls values fromm an arrays
   const [variables] = object;
   restOfName this variable is an array
   
*/

console.log( "Array Descruturing");

const names = ['Annna', 'Bojo','Danu','Mart','You'];

//Old wat
/*const  anna    =     names[0];
const  bojo    =     names[1];
const  danu    =     names[2]*/

const [anna,bojo,danu, ...restOfName] = names;

console.log(`${anna} ${bojo} ${danu}`);
console.log(restOfName.length);