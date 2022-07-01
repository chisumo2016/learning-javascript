
/* 
  GENERATORS KEYNOTE
    * is the fuction can be paused
    * It help to write our code in async fasshion
 
  Syntax 
      function * namee(){
         const variable = yield value
      }

      function * numberGen(){
         const numOne = yield 1;
         const numOne = yield 2;
         const numOne = yield 3
      }
    * use it
    const gen = numbersGen();

     * Get value
    gen.next();
    gen.next().value
    gen.next().done  bolean

    

*/

console.log("GENERATORS KEYNOTE");

const getRandomUsers = n =>{
   const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);

   fetchRandomUsers.then(data =>{
      data.json().then(getRandomUsers =>{

            console.log(JSON.stringify(getRandomUsers.results.length));

            //loop
            getRandomUsers.results.forEach(user => {
               //destucture
               const {gender, email} = user;
               console.log(`${gender} - ${email} `);
              
            });
      })
      //console.log(data.json());
   })
   //console.log(fetchRandomUsers);
}

getRandomUsers(110);