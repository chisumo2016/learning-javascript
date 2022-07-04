
/* 
     HTML DOM Elements
        How to find and access HTML elements in an HTML page

     Finding HTML Elements
        In JavaScript, you want to manipulate HTML elements.  
        First :  find the elements first
            Several ways to find html element 
                elements by id
                elements by tag name
                elements by class name
                elements by CSS selectors
                elements by HTML object collections

    Finding HTML Element by Id 
      const element =  document.getElementById("intro");           
*/    


const element =  document.getElementById("intro");

document.getElementById("deemo").innerHTML = "The text from the intro paragraph is: " + element.innerHTML;


