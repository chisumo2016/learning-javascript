
/* 
    Function Default Parameters

    (values , value = 0)   can be a number or object

    react and redex appl
   
*/


const calculatePay = (yearSalary , bonus = {
   teamBonus : 0 , 
   employeeBonus: 0
}) => {
   return yearSalary + bonus .teamBonus + bonus.employeeBonus
};

console.log("Function Default Parameters");

//console.log(calculatePay(2000000));


onsole.log(calculatePay(2000000, { teamBonus: 10000, employeeBonus: 6000}));

