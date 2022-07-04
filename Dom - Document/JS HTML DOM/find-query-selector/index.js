
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

    Finding HTML Elements by CSS Selectors
   const x = document.querySelectorAll("p.intro");
*/    


const x = document.querySelectorAll("p.intro");

document.getElementById("demo").innerHTML = 
        'The first paragraph (index 0) with class="intro" is:  ' + x[0].innerHTML;


