// *Declaring the controllers variables:
var testerController;



// *When the DOM gets loaded:
document.addEventListener('DOMContentLoaded', () => {
   // *Initializing the controllers:
   testerController = new TesterController();
});



/**
 * Retrieves a element from the DOM (shorthand for the Web native querySelector)
 * @param  {string} selector The CSS-like selector
 * @return {Element}         The DOM element
 * @author Guilherme Reginaldo Ruella
 */
function $(selector){
   // *Returning the element:
   return document.querySelector(selector);
}
