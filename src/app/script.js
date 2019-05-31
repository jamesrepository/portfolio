// Nav Scrolled Effect
// const header = document.querySelector('.header');

// window.addEventListener('scroll', toggleHeaderBg);

// function toggleHeaderBg() {
//     if(window.pageYOffset > 15) {
//         header.classList.add('header-bg');
//     } else {
//         header.classList.remove('header-bg');
//     }
// }


// Adjust Element base on window size
// hero-info
const headerInfo = document.querySelector('.hero-info');

document.addEventListener("DOMContentLoaded", getHeroHeight);
window.addEventListener('resize', getHeroHeight);

function getHeroHeight() {
    headerInfo.style.minHeight = `${window.innerHeight}px`;
    console.log(window.innerHeight);
}


// Background Hero
// const heroWrap = document.querySelector('.hero');
// const heroImg = document.querySelector('.hero-img img');
// const heroImgSrc = heroImg.getAttribute('src');

// heroWrap.style.background = `url(${heroImgSrc}) no-repeat center center`;