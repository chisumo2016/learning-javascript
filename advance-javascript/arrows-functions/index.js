
/* 
   ARROW FUNCTIONS
   drop the wordunction() to  ()=>{}
*/

console.log( "Arrow Functions");

const hallo = () =>{
    const es6 = 'EES6';
    return `Hello ${es6}`;

};

/*const powers = [1,2,3,4,5] .map(function(number, index){
    return Math.pow(number, index);
});*/

const powers = [1,2,3,4,5] .map((number, index) => Math.pow(number, index));


/*const add = function(n1,n2){
    return n1+n2;
};*/

const add = (n1,n2) =>{
    return n1+n2;
};

const addAnother = (n1,n2) =>n1+n2;




const milesToKm = (miles) =>{
    return miles * 1.60934
};


console.log("---OUTPUT--------")
console.log(hallo());
console.log(powers);
console.log(add(100,100));
console.log(milesToKm(100));



