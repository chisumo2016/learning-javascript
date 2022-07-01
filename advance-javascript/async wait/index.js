
/* 
  ASYNC AWAIT
  Understand the generators and other staff
  Previouss we have to depend on bluebird

    inside the method body
         * we can yield promises using wait
         *  return promise
         * 
   If you press async before function ,you can await 
   await does as yield
   return ends of promise
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
})

