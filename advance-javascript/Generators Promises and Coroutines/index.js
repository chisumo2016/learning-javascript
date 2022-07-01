import { coroutine as co } from 'bluebird';
/* 
  generators and promise  es6
  Too use generators with promises 
      * install bluebird - web
      * install co -  backend - node
      *  coroutine is responsible for promise
      * catch error in promise
      * fetch return promise
   function* numbersGen(){
      const response = yield promise;
   }

   coroutine(function* numbersGen(){

      const response = yield promise;
       const response = yield promise;
        const response = yield promise;
   })
*/




console.log("Generators & Promises");


/*const getRandomUsers = n =>{
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

getRandomUsers(110);*/

const getRandomUsers = co(function* (n){
   const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`);
   const data = yield fetchRandomUsers.json();
   return data;
});

//console.log(getRandomUsers(10));

//promise 
getRandomUsers(10).then(randomUsers => {
   getRandomUsers.results.forEach(user => {
      //destucture
      const {gender, email} = user;
      console.log(`${gender} - ${email} `);
     
   });
}).catch(error =>{
   console.log()
});