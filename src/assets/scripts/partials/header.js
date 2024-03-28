import { SetSize } from "../base/functions";

const header = document.getElementById("header");
const headerHeight = SetSize(header, "header", true);



const hamburger = document.getElementsByClassName("hamburger--spin")[0]
const mobileNavs = document.getElementsByClassName("nav--mobile")[0]
const mobileUl = document.getElementsByClassName("dropdown-mobile")[0]


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active")
  mobileNavs.classList.toggle("is-active")
})

mobileUl.addEventListener("click", () => {
  mobileUl.classList.toggle("is-active")
})

