
/* 
 If Statements
    Allow to execute a block of code ,if the condition is met/true

    If you havee alot of else if  condition ,think about switch
*/


var bool = false ;

if(bool){
   console.log("Bool variale true");
}else{
    console.log("Bool variale false");
}


person = { name: "Hamis", age: 16}

if(person . age >= 18 ){
    console.log(person.name + " is an adult");

 }else if(person.age == 17){
     console.log(person.name + "is about to be an adult");

 }else{
    console.log(person.name + " is not an adult");
 }