"use strict";
AOS.init();


const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const animation1 = document.querySelector(".menu__line--top");
const animation2 = document.querySelector(".menu__line--bottom");
const logo = document.querySelector(".logo");
const main = document.querySelector("main");
const home = document.querySelector(".section--home");

menu.addEventListener("click", mobileMenu);

function mobileMenu() {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    animation1.classList.toggle("active");
    animation2.classList.toggle("active");
    logo.classList.toggle("active");
    main.classList.toggle("active");
    home.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    menu.classList.remove("active");
    nav.classList.remove("active");
    animation1.classList.remove("active");
    animation2.classList.remove("active");
    logo.classList.remove("active");
    main.classList.remove("active");
    home.classList.remove("active");
}


let activeTheme = localStorage.getItem("theme");
if (activeTheme !== null){
    setTheme(activeTheme);
}

let themeTrigger = document.querySelector('.theme-switch input[type="checkbox"]');
if(themeTrigger){
    themeTrigger.addEventListener("click", toggleTheme);
}

function setTheme(theme){
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

function toggleTheme(){
    let theme = document.body.getAttribute("data-theme");
    if(theme == "dark"){
        setTheme("light");
    }else{
        setTheme("dark");
    }
}


let answerDate = document.querySelector(".Date");
            let today = new Date();
            let annee = today.getFullYear();
            answerDate.innerHTML = annee;

