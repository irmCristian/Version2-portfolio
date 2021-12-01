'use strict'
                // HAMBURGER MENU
const navbar = document.querySelector('.navbar_ul');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.navLinks');

hamburger.addEventListener('click', mobileMenu);
function mobileMenu(){
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
}
navLinks.forEach(navLinks => navLinks.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
}
             // HAMBURGER MENU TILL HERE
const dissapearNav = document.querySelector('.navbar');;
// HIDE NAVIGATION MENU ON SCROLL
let lastScrollTop;
window.addEventListener('scroll',function(){
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
dissapearNav.style.top='-100px';
}
else{
dissapearNav.style.top='0';
}
lastScrollTop = scrollTop;
});

             // DARK MODE
const toggle = document.querySelector('.darkmode_toggle');
toggle.addEventListener('click', dark)
function dark(){
    toggle.classList.toggle('active')
 
    document.querySelector('.Container').classList.toggle('active')
    document.querySelector('.navbar').classList.toggle('active')
    document.querySelector('.max_width').classList.toggle('active')
    
    
}
            // DARK MODE TILL HERE

// var x = document.getElementsByTagName("span");

// var i;
// for (i = 0; i < x.length; i++) {
//   x[i].style.color = "red";
// }


