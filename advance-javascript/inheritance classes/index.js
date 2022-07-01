
/* 
   Inheritance 
      common class
      extends  propeties and methods to anothe class

      we use "extends" class A extends B
     we use "super()" super(name, age) is used to assigned  this.name = name; this.age  = age;
*/

console.log('Inheritance')

class Animal {
    
   constructor(name , age){
      /* properties*/
      console.log(`${name}  is an animal was created - constructor from super class`);
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






