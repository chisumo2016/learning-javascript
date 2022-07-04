
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

    Finding HTML Element by tag
    const element = document.getElementsByTagName("p");             
*/    


const element = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 
        'The text in first paragraph (index 0) is: ' + element[0].innerHTML;


