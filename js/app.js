
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
  sections.forEach(function(section) {
    const rect = section.getBoundingClientRect();
    if (rect.top >= -400 && rect.top <= 150) {
      // Add the active class
      section.classList.add("your-active-class");
      section.style.backgroundColor = "green";
    } else {
      // Remove the active class
      section.classList.remove("your-active-class");
      section.style.backgroundColor = "transparent";
    }
  });

  // Highlight active section in the Navbar
  const activeSectionId = sections.find(section => section.classList.contains("your-active-class")).id;
  const navLinks = document.querySelectorAll(".menu__link");
  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.nav === activeSectionId);
  });
};

// When clicking an item from the navigation menu, the link should scroll to the appropriate section
navBarList.addEventListener("click", function(event) {
  event.preventDefault();
  const targetId = event.target.dataset.nav;
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
});
