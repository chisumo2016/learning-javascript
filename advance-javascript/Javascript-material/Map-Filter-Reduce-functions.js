
/* 
   Map | Filter | Reduce functions
   map -  arrays(transformation on array), retur anything
   n - represet the  index of an arrays  n * 2 , 
   Filter - filter the values of my arrays, return boolean
   Reduce  - reduce the number inside of array into one
        [1 ,2 ,3 , 4, 5]
        accumulator  1
        current      1

*/


console.log(" Map | Filter | Reduce functions")

var map = [1 ,2 ,3 , 4, 5].map(function(n){
        return  n * 2 ;
});

console.log("[].map");
console.log(map);


console.log("[].filter");

var filter = [1 ,2 ,3 , 4, 5 ,10 ,10 ,100].filter(function(n){
    return  n % 2  == 0;
});

console.log(filter);


console.log("[].reduce");

var reduce = [1 ,2 ,3 , 4, 5] . reduce(function(accumulator , current){
   return accumulator + current

});

console.log(reduce);
