const copyrightEL = document.querySelector("#copyright__date");
// copyright date setup
copyrightEL.textContent = new Date().getFullYear();
// setup nav
const navbar = document.querySelector("#navbar");
const navBtn = document.querySelector("#navigation__btn");
// const navBtn = document.querySelector("#nav__btn");
// const navClose = document.querySelector("#nav__close");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.toggle("nav__open");
});
// // close nav
// navClose.addEventListener("click", () => {
//   navbar.classList.remove("show__nav");
// });
