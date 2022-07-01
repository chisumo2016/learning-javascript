
/* 
   CLASSES IN A NUTSHELL ES6
   class are blueprints
      * properties
      * Behaviours/functions
      * constructor - get invoked when tyou create a class,
                    Only invoked once


      example " Animal , Human , Shoe  Ball,"
*/

console.log('CLASSES')

class Animal {
    
   constructor(name , age){
      /* properties*/
      console.log(`${name}  is an animal was created`);
      this.name = name;
      this.age  = age;

   }

 /* Behaviours*/
   eat(){
      console.log(`${this.name} is eating`);
   }

   sleep(){
      console.log(`${this.name} is sleeping`);
   }

   wakeUp(){
      console.log(`${this.name} is waking up`);
      
   }

   logAge(){
      console.log(`${this.name} is is ${this.age} year old `);
   }
}

//Instantiated

const bobby = new Animal("Boby",2);
bobby.eat();
bobby.sleep();
bobby.wakeUp();
bobby.logAge();

console.log("============================");

const macho = new Animal("Boby", 3);
macho.eat();
macho.sleep();
macho.wakeUp();
bobby.logAge();
