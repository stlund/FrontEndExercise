// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

//give me the object of .nav-toggle and .links
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

//listen for click and toggle the manu |||
navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
