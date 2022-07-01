
// Object - collection of grouped variables , property:values
//Grab individual property to a person
//Object insside object
//Everything with javascript evolve objects


var person = {
    name : "Maria Jone",
    age  : 39,
    hasDriverLicence : true,
    dateOfBirth: "30/06/2022",
 
    addresss:{
         firstLine : "123",
         postcode : "SE1",
         Country  : "England"
 
    }
 };
 
 
 console.log(JSON.stringify(person));
 
 console.log(person.name);
 console.log(person.age);
 console.log(person.hasDriverLicence);
 console.log(JSON.stringify(person.addresss));
 
 
 console.log(Object.values(person));