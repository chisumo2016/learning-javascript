
/* 
 Break and Continue Keywords withni loops
    Break : Out of loops before it continue
    Continue: 
*/

var number = 0 ;

while(number < 5){
    console.log(number);

    if(number == 2 ){
        break;
    }
    number ++;
}



var number = 0 ;

while(number < 5){
    number ++;
    
    
    if(number  <  5 ){
        continue;
    }

    console.log(number);
    
}
