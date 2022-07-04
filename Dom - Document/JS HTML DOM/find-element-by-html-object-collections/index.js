
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

   Finding HTML Elements by HTML Object Collections
   const x = document.forms["frm1"];

   const x = document.forms["frm1"];
   let text = "";
   for (let i = 0; i < x.length; i++) {
   text += x.elements[i].value + "<br>";
   }
   document.getElementById("demo").innerHTML = text;

   https://www.w3schools.com/js/js_htmldom_elements.asp   
      document.anchors
      document.body
      document.documentElement
      document.embeds
      document.forms
      document.head
      document.images
      document.links
      document.scripts
      document.title
*/    


const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;

