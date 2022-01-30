// this is a self-invoking anonymous function
// it is also called a module (my variation of the module pattern)
// it encapsulates all of your custom code and makes it private

(() => {
 // make associations (select) with elements in the HTML markup using CSS
 let theHeading = document.querySelector(".main-heading"),
    theIcons = document.querySelectorAll(".icon");

    // debugger; // this is like a breakpoint / pause point in the code
    // script your behaviour with functions
 function logElement () {
    //  the "this" keyword refers to the thing that invokes the function
    // so the "thing" that you click on, mouse over, interact with on the page
     console.log("clicked on an element:", this.id);
 }

 // add event handling here (user "triggers")
 // assign the event you want to listen for, and the function that should
 theHeading.addEventListener("click", logElement);
//  one to many relationship (selecting a group of elements) - you have to process this collection and work with each element sequentially
 theIcons.forEach(icon => icon.addEventListener("click", logElement))
}) ();