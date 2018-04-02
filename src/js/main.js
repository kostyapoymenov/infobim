$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop:true
    });
});

function burger(){
    const   hamburgerBtn = document.querySelector('.hamburger'),
            hamburgerMenu = document.querySelector('.hamburger-menu');

    hamburgerBtn.addEventListener('click', function(){
        this.classList.toggle('hamburger--active');
        hamburgerMenu.classList.toggle('hamburger-menu--active');

        if(hamburgerMenu.classList.contains('hamburger-menu--active')){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}
burger();
