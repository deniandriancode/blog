"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    const year = document.querySelector("#year");
    year.textContent = new String(new Date().getFullYear());
});

const gotoTop = document.querySelector("#goto-top");

window.addEventListener("scroll", (event) => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        gotoTop.style.display = "block";
      } else {
        gotoTop.style.display = "none";
      }
});

gotoTop.addEventListener("click", (event) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
