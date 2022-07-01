     [x] Separate of Concern
     [x] Javascript Node
      [x] Variables
            Cannot be a reserved keyboard
            Should be meaningfull
            Cannot start with a number
            Cannot contain a space of hyphen (-)
                    let firstName
            Are case-sensitive 
                   let FirstName   
                   let firstName = 'Moshi';
                   let  lastName = 'Budd'
      [x] Constants
            const interestRate = 0.3; 
      [x]  Primitive Types 
                Primitives /Values Types
                    String
                    Number
                    Boolean
                    Undefined
                    null 
                    let name = 'Moshi';  
                        let age  = 30 ;
                        let isApprove = true/false;
                        let firstName = undefined;
                        let lastName   = null;
                Reference Types
                    Object
                    Array
                    Function 

       [x]  Dynamic  Typing
                Static (Statically-type) 
                    string name = 'John';
                Dynamic (Dynamically-typed) 
                    let name = 'John';  

               Check in the console ->type of  

        [x]  Object  
               1 : Dot Notation  
                   let person = {
    
                        name: 'Mashi',
                        age :  30,
                    };

                    person.name = 'Johnn';
                    console.log(person.name);                   

                2: Bracket Notation    
                   et person = {
    
                        name: 'Mashi',
                        age :  30,
                    };

                    person['name'] = 'Mary'
                    console.log(person.name);

          [x]  Arrays   
                let selectedColors = ['red', 'blue'];
                    selectedColors[2] = 'green';

                    console.log(selectedColors.length);  

          [x]  Functions
                Have multiple parameters
                As inputs  
                    name = Parameter
                    'John'= Argument 

                function greet(name){
                    console.log('Hallo' + name);
                }

                greet('John');  

                function greet(name){
                    console.log('Hallo' + name);
                }

                greet('John');  

        [x]  Types of Functions  
             Performing a task  

                function greet(name){
                    console.log('Hallo' + name);
                }

                greet('John'); 


             Calculate a value 
             function square(number){
                return  number * number ;
                }

                let  number = square(2);
                console.log(number);    

         [x]  CONDITIONAL STATEMENT  
                if ... else
                switch ...case  
                if(condition){
                    statement
                }

                else if (annotherCondition){
                    statement
                }

                else if (yetanotherCondition){
                    statement
                }else{
                    statement 
                }    