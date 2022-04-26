const menuBtn = document.querySelector('.menu__logo');
const menuBars = document.querySelector('.menu__logo i');
const navLinks = document.querySelectorAll('.special');
const downArrows = document.querySelectorAll('.nav__link i');
const detailsWrappers = document.querySelectorAll('.details__wrapper');

console.log(downArrows);


menuBtn.addEventListener('click', () => {
    menuBars.classList.toggle('fa-times');
});

var navButton = function(manual) {
   downArrows.forEach((arrow) => {
       arrow.classList.remove('fa-chevron-up');
   })
   detailsWrappers.forEach((detail) => {
       detail.classList.remove('show');
   })
   
   downArrows[manual].classList.add('fa-chevron-up')
   detailsWrappers[manual].classList.add('show');
}

navLinks.forEach((link, i) => {
    link.addEventListener('click', () => {
        navButton(i);
    })
})

// navLink.addEventListener('click', () => {
//     downArrow.classList.toggle('fa-chevron-up');
//     if(downArrow.classList.contains('fa-chevron-up')) {
//         detailsWrapper.classList.add('show');
//     }else {
//         detailsWrapper.classList.remove('show');
//     }
// })