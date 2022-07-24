const navToggle = document.getElementById("nav-toggle");
const navTop = document.getElementById("nav-top");

navToggle.addEventListener("click", function () {
  navTop.classList.toggle("nav-top-open");
});
