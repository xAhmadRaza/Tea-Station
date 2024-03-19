const copyrightEL = document.querySelector("#copyright__date");
// copyright date setup
copyrightEL.textContent = new Date().getFullYear();
// setup nav
const navBtn = document.querySelector(".nav__btn");
const navbar = document.querySelector("#navbar");
const navClose = document.querySelector("#nav__close");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("show__nav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("show__nav");
});
