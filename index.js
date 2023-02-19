const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

/*Cuando se hace click en el toogle, se agrega o quita la clase
nav-menu_visible y hace que se muestre u oculte el menu desplegable*/
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

/*Selecciona todos los links con # y le agrega evento click
de manera que cuando haga click en el enlace, borre la clase 
nav-menu_visible y el menu desplegable se oculte*/
const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"');
console.log(menuLinks);

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function () {
    navMenu.classList.remove("nav-menu_visible");
  })
})