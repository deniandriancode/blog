"use strict";

function sel(query) {
    return document.querySelector(query);
}

function sels(query) {
    return document.querySelectorAll(query);
}

function handleToggleTheme() {
    const body = document.body;
    const navbar = sel("nav");
    const icons = sels(".toggleTheme i");
    const theme = localStorage.getItem("theme");

    if (theme === "light") {
        localStorage.setItem("theme", "dark");
        arrayReplaceAll(icons, "bi-sun", "bi-moon");
    } else {
        localStorage.setItem("theme", "light");
        arrayReplaceAll(icons, "bi-moon", "bi-sun");
    }

    body.classList.toggle("dark");
    navbar.classList.toggle("navbar-dark");
}

function arrayReplaceAll(icons, prev, cur) {
    for (let i = 0; i < icons.length; ++i)
        icons[i].classList.replace(prev, cur);
}

const body = document.body;
const navbar = sel("nav");
const toggleTheme = sels(".toggleTheme");
const icons = sels(".toggleTheme i");

if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
}

if (localStorage.getItem("theme") === "light") {
    body.classList.remove("dark");
    navbar.classList.remove("navbar-dark");
    arrayReplaceAll(icons, "bi-moon", "bi-sun");
} else {
    body.classList.add("dark");
    navbar.classList.add("navbar-dark");
    arrayReplaceAll(icons, "bi-sun", "bi-moon");
}

for (let i = 0; i < toggleTheme.length; ++i)
    toggleTheme[i].addEventListener("click", handleToggleTheme);

