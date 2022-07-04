
/* 
     DOM Events
      HTML DOM allows JavaScript to react to HTML events:

    Reacting to Events :
        can be executed when an event occurs, like when a user clicks on an HTML element.
        To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:
           Syntax : onclick=JavaScript

    Examples of HTML events: 
        When a user clicks the mouse 
        When a web page has loaded
        When an image has been loaded
        When the mouse moves over an element
        When an input field is changed
        When an HTML form is submitted
        When a user strokes a key

  In this example, a function is called from the event handler:
        onclick="changeText(this)"  
        
 HTML Event Attributes 
   To assign events to HTML elements you can use event attributes.
      <button onclick="displayDate()">Try it</button>  
      
 Assign Events Using the HTML DOM  
    The HTML DOM allows you to assign events to HTML elements using JavaScript:
     document.getElementById("myBtn").onclick = displayDate;  
     
     
  The onload and onunload Events
    The onload and onunload events:
           it get  triggered when the user enters or leaves the page.
           can be used to deal with cookies.
    
   onload : 
       event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.
   
       Syntax: 
           <body onload="checkCookies()">

The onchange Event
   is often used in combination with validation of input fields.
      onchange="upperCase()"

 The onmouseover and onmouseout Events    
      events can be used to trigger a function when the user mouses over, or out of, an HTML element:
    
The onmousedown, onmouseup and onclick Events
  The onmousedown, onmouseup, and onclick events are all parts of a mouse-click. 
     First when a mouse-button is clicked, the onmousedown event is triggered, then, 
      when the mouse-button is released, the onmouseup event is triggered, finally,
        when the mouse-click is completed, the onclick event is triggered.


*/        
 function changeText(id){
  id.innerHTML = "Ooops!";
 }


 console.log("Assign Events Using the HTML DOM");
 document.getElementById("myBtn").onclick = displayDate;


 function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

