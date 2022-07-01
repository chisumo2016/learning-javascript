
/* 
 Switch Statements
    Allow to execute a block of code ,if the condition is met/true

    If you havee alot of else if  condition ,think about switch
*/


var bool = false ;

if(bool){
   console.log("Bool variale true");
}else{
    console.log("Bool variale false");
}


person = { name: "Hamis", age: 18}

switch(person.age){
    case 17:
        console.log(person.name + "is about to be an adult");
        break;
    case 18 :
        console.log(person.name + " is an adult");
        break;
    default:
        console.log("We dont kno");

}



person = { name: "Anna", age: 19}

switch(true){
    case (person.age == 17):
        console.log(person.name + "is about to be an adult");
        break;
    case (person.age >= 18):
        console.log(person.name + " is an adult");
        break;
    default:
        console.log(person.name + " is not  an adult");

}



switch (new Date().getDay){
    case 5:
       console.log("Thursday")
    break;

    default:

        console.log("I dont Know")

}

