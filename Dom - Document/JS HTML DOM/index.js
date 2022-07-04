
/* 
     HTML DOM Document ?
      DOM document object is the owner of all other objects in your web page.

    HTML DOM Document Object
        Document object -  represents your web page.
        If you want to access any element in an HTML page, you always start with accessing the document object.

    Finding HTML Elements  
       Methods : 
           document.getElementById(id)
           document.getElementsByTagName(name) 
           document.getElementsByClassName(name)

   Changing HTML Elements 
        propert:
           element.innerHTML =  new html content
           element.attribute = new value
           element.style.property = new style
           element.setAttribute(attribute, value)
  
   Adding and Deleting Elements 
        method:
          document.createElement(element) 
          document.removeChild(element) 
          document.appendChild(element)
          document.replaceChild(new, old)
          document.write(text) 
          
   Adding Events Handlers
        method:
        
           document.getElementById(id).onclick = function(){code}

  Finding HTML Objects 
      defined 11 HTML objects, object collections, and properties. These are still valid in HTML5.        
        https://www.w3schools.com/js/js_htmldom_document.asp
                 
*/    


document.getElementById("demo").innerHTML = "Hello World!";


