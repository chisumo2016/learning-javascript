
/* 
     JavaScript Form Validation

    If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted:

 function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

The function can be called when the form is submitted:
*/    

function validateForm() {
     let x = document.forms["myForm"]["fname"].value;
     if (x == "") {
       alert("Name must be filled out");
       return false;
     }
   }

//   Validate Numeric Input
console.log("Validate Numeric Input");
function myFunction() {
     // Get the value of the input field with id="numb"
     let x = document.getElementById("numb").value;
     // If x is Not a Number or less than one or greater than 10
     let text;
     if (isNaN(x) || x < 1 || x > 10) {
       text = "Input not valid";
     } else {
       text = "Input OK";
     }
     document.getElementById("demo").innerHTML = text;
   }
  