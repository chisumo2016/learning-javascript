
/* 
  PROMISES AND FETCH API
  eexample : https://randomuser.me/

*/

console.log("PROMISES AND FETCH API");

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