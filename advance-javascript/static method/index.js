
/* 
   Static Method : allow to creeate properties or method belongs to this class
      not to each individual
      no object is needed
      Good when you dotwant top create new instance oof that class
*/

console.log('Static Method')

class Animal {
    
   constructor(name , age){
      /* properties*/
      console.log(`${name}  is an animal was created - constructor from super class`);
      this.name = name;
      this.age  = age;

   }

  /* Static Method */

  static iAmAstaticMethod(){
   console.log("I am a static method inside of an Animal class")
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


class Dog extends Animal{
   constructor(name, age, breed){
         super(name, age)
        this.breed = breed;
   }

   logBreed(){
      console.log(`${this.name} is a ${this.breed}  `);
   }

   logAgeFromDog(){
      super.logAge();

   }
}


class Cat extends Animal{
   constructor(name, age){
         super(name, age)
        
   }


   logAgeFromCat(){
      super.logAge();

   }
}




Animal .iAmAstaticMethod();


//Instantiated
console.log("=============DOG===============");

const mike = new Dog("Mike", 2 ,"Bulldog");
mike.logBreed();
mike.logAgeFromDog()


//Instantiated
console.log("============CAT================");
const josh = new Cat("josh", 2 );
josh.logAgeFromCat()
josh.eat();
josh.sleep()
josh.logAge();
josh.wakeUp();






