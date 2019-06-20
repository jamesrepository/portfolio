import "../scss/main.scss";

// Nav Scrolled Effect
const header = document.querySelector('.header');

window.addEventListener('scroll', toggleHeaderBg);

function toggleHeaderBg() {
    if(window.pageYOffset > 15) {
        header.classList.add('header-bg');
    } else {
        header.classList.remove('header-bg');
    }
}

// Mobile nav toggle
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBox = document.querySelector('.mobile-menu-box');
const body = document.body;
mobileMenu.addEventListener('click', function() {
    toggle(mobileMenuBox);
    toggle(mobileMenu);
    toggle(body);
});


// Toggle element visibility
const toggle = function (elem) {
	elem.classList.toggle('is-visible');
};

window.addEventListener('resize', getHeroHeight);
document.addEventListener("DOMContentLoaded", getHeroHeight);

function getHeroHeight() {
    // Check if screen size is bigger
    const windowSize = window.innerWidth;
    // hero-info
    const headerInfo = document.querySelector('.hero-info');
    
    if(windowSize > 767) {
        // Adjust Element base on window size
        headerInfo.style.height = `${window.innerHeight}px`;
    } else {
        headerInfo.style.height = `auto`;
    }
}



import ScrollReveal from 'scrollreveal'
const slideUpHead = {
    easing: 'ease',
    distance: '20%',
    interval: 500,
    duration: 1000
};

const slideUpWorks = {
    viewFactor: 0.5,
    easing: 'ease-in-out',
    distance: '20%',
    origin: 'bottom',
    interval: 600,
    duration: 1000
};

const slideRight = {
    easing: 'ease-in-out',
    distance: '20%',
    origin: 'right',
    opacity: 0.8,
    interval: 2000,
    duration: 600
};

const slideLeft = {
    viewFactor: 0.5,
    easing: 'ease-in-out',
    distance: '20%',
    origin: 'left',
    opacity: 0.8,
    interval: 2000,
    duration: 600
}

var headingArr = [
    document.querySelector('.hero-title'),
    document.querySelector('.hero-subtitle'),
    document.querySelector('.hero-descrip'),
    document.querySelector('.btn'),
];

ScrollReveal().reveal(headingArr, slideUpHead)
ScrollReveal().reveal('.hero-img', slideRight)
ScrollReveal().reveal('.works-box', slideUpWorks)
ScrollReveal().reveal('.services .img-fluid', slideLeft)
ScrollReveal().reveal('.card-methodology', slideUpWorks)
ScrollReveal().reveal('.list', slideUpWorks)