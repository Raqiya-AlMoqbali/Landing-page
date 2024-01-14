 /**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Define Global Variables
 * 
*/
// Navigation Global Variable
const navBarList = document.getElementById("navbar__list");
// Section Global Variable
const sections = Array.from(document.querySelectorAll("section"));
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// dynamically create a navigation menu based on the sections of the page.
function ListItems(){
  // Looping over all sections 
  for (sec of sections){
    // Create list items 
    listItem = document.createElement("li");
    // Add text for list items
    listItem.innerHTML = `<li><a href = "#${sec.id}" data-nav="${sec.id}" class ="menu__link">${sec.dataset.nav}</a></li>`;
    // append list items to the navBarList
    navBarList.appendChild(listItem);
  }
}
// Call ListItems function to build the sction list 
ListItems();

// Add class 'active' to section when near top of viewport
//GetBoundingClientRect
window.onscroll = function() {
  document.querySelectorAll("section").forEach(function(active){
    if (
      active.getBoundingClientRect().top >= -398 &&
      active.getBoundingClientRect().top <= 148 
      ) {
        // add the active class
         active.classList.add("your-active-class");
        active.style.cssText="background-color:green";
         } else {
           // remove the active class
         active.classList.remove("your-active-class");
         active.style.cssText="background-color:linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";
  }
  });
};

// When clicking an item from the navigation menu the link should scroll to the appropriate section 

navBarList.addEventListener("click", (toSection) => {
  toSection.preventDefault();
  if (toSection.target.dataset.nav){
    document.getElementById(`${toSection.target.dataset.nav}`.scrollIntoView({ behaviour: "smooth"});
    
  }
});
 
