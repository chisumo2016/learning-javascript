
/* 
  HANDLING ERRORS WITH ASYNC AWAIT
       try {

  }catch(error){
    
  }
  
*/


console.log("============ HANDLING ERRORS ASYNC AWAIT============")

const getRandomUsers = async (n) =>{

  try {
    const fetchRandomUsers = await fetch(`https://randomuser.me/api/?results=${n}`);
    const data = await fetchRandomUsers.json();
  
        data.results.forEach(user => {
          //destucture
          const {gender, email} = user;
          console.log(`${gender} - ${email} `);
        
      });
  
    return data;
  }catch(error){
     console.log(error)
  }
  
};

getRandomUsers(50);
