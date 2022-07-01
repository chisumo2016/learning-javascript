
/* 
  FROM GENERATORS TO ASYNC AWAIT
  Understand the generators and other staff
  Previouss we have to depend on bluebird

    inside the method body
         * we can yield promises using wait
         *  return promise
         * 
   If you press async before function ,you can await 
   await does as yield
   return ends of promise

   NOTE: We don't need to use  co any more from plugin
        We don't need to use   *   instead we use async
        We don't need to use   yield  instead we use await
        Take forEch()
*/


console.log("Async Await");

async function logName(name){
  console.log(name);

  // 1: we can yield promises using await
    const transformName = new Promise(function(resolve, reject){
         setTimeout(() =>{
            resolve(name.toUpperCase())
         }, 1000)
    });

    const result = await transformName;

    console.log(result);

  //2: return promise
  return result;
}

logName("antonia").then(res =>{
   console.log("result from async function = " + res);
});

console.log("=========================")


/*const getRandomUsers = co(function* (n){
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
});*/

console.log("============ASYNC AWAIT============")

const getRandomUsers = async (n) =>{
  const fetchRandomUsers = await fetch(`https://randomuser.me/api/?results=${n}`);
  const data = await fetchRandomUsers.json();

      data.results.forEach(user => {
        //destucture
        const {gender, email} = user;
        console.log(`${gender} - ${email} `);
      
    });

  return data;
};

getRandomUsers(50);
