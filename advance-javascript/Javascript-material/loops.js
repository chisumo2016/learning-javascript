
/* 
 Loops : 
    variables and arrays 
    types : for , whil;ee
*/


//Traditional way

for(var i = 0 ; i < 10 ; i++){
    console.log(i);

}


var person = [
    {name : "alex", age   :  30},
    {name : "maria", age   : 22}
]



for(var i = 0 ; i <= person.length ; i++){
    console.log(person[i].name);
    console.log(person[i].age);
    console.log("---------------------------------");

}

var  number = 0
while(number < 5 ){
   console.log(number);
   number  += 1 ;
   //number = number + 1
}



var i = 0

do{
    i++;
    console.log(i)
}while(i < 5)




