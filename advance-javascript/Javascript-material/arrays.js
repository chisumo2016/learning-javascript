
// Arrays - allows to store multiple values inside
//pass object , number undefined
//Are store in positions [0] [1]
// Size of array by using .length
//Loop through an array (Block by element )

var names =  ["Alex", "Mary","Sam"];

console.log(names[2]);

//size of array
console.log(names.length);

//loop : 1
for(var n of names){
    console.log(n);
}

//loop : 2    Index:Values
names.forEach(function(n, index){
    console.log(index + " - " + n);
})


