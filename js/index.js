const header = document.getElementById("header");
const navToggle = document.getElementById("nav-toggle");
const navTop = document.getElementById("nav-top");
const navLinks = document.querySelectorAll(".nav-top__item");

navToggle.addEventListener("click", function () {
  header.classList.toggle("nav-top-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    header.classList.remove("nav-top-open");
  });
});
