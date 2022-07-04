
/* 
    HTML DOM EventListener
    method: addEventListener() method

    Add an event listener that fires when a user clicks a button
    makes it easier to control how the event reacts to bubbling.
    attaches an event handler to the specified element
    attaches an event handler to an element without overwriting existing event handlers.
   can add many event handlers to one element.
   can easily remove an event listener by using the removeEventListener() method.
   add many event handlers of the same type to one element, i.e two "click" events.
   can add event listeners to any DOM object not only HTML elements. i.e the window object.
         Syntax :
               element.addEventListener(event, function, useCapture);
 Synntax :
      .addEventListener("click", displayDate);

  Add an Event Handler to an Element
      element.addEventListener("click", function(){ alert("Hello World!"); });
  
  
Add an Event Handler to the window Object
   method allows you to add event listeners on any HTML DOM object 
         HTML elements,
         the HTML document
         the window object
         bjects that support events, like the xmlHttpRequest object.

     Syntax:
         window.addEventListener("resize", function(){
         document.getElementById("demo").innerHTML = sometext;
         });   
         
         

Passing Parameters
      When passing parameter values, use an "anonymous function" that calls the specified function with the parameters:

      Syntax:
          element.addEventListener("click", function(){ myFunction(p1, p2); });

The removeEventListener() method
    
     method removes event handlers that have been attached with the addEventListener() method:

   Syntax:  
      removeEventListener()
*/        
 
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
   document.getElementById("demo").innerHTML = Date();
 }



 document.getElementById("myBtn1").addEventListener("click", function() {
   alert("Hello World!");
 });



 window.addEventListener("resize", function(){
   document.getElementById("demo").innerHTML = Math.random();
 });



 let p1 = 5;
 let p2 = 7;

 document.getElementById("myBtn").addEventListener("click", function() {
   myFunction(p1, p2);
 });

 function myFunction(a, b) {
   document.getElementById("demo").innerHTML = a * b;
 }