let menu = document.querySelector(".fa-bars");
let navLinks = document.querySelector(".navlinks");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
