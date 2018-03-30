$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop:true,
        nav:true
    });
});

const   hamburgerBtn = document.querySelector('.hamburger'),
        hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerBtn.addEventListener('click', function(){
    this.classList.toggle('hamburger--active');
    if(hamburgerMenu.classList.contains('hamburger-menu--active')){
        document.body.style.overflow = '';
    } else {
        document.body.style.overflow = 'hidden';
    }
    hamburgerMenu.classList.toggle('hamburger-menu--active');
});