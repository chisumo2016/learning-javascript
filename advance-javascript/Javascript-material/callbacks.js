
/* 
   Callbacks : is the function passed to another function ,executed inside another function
*/


console.log( "Callbacks")

function callbackExample(name , callback){
    console.log(callback(name));

}

var callback  = function(name){
    return "Hello" + name ;
}
callbackExample(" Abel John " , callback);