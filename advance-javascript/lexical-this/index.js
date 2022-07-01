
/* 
   LEXICAL THIS
*/

console.log( "Lexical this");


const person = {
   name : 'Ben',
   cars : ['Ferrari' , 'Bmw'],
   toString : function(){
        //console.log(`${this.name} has ${this.cars}`);
        //Loop
        this.cars.forEach(car => {
            console.log(`${this.name} has ${car}`);
        })
   }
};

person.toString();
