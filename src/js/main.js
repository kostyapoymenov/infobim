function Sliders() {
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop:true
        });
    });
}
Sliders();

function burger(){
    const   hamburgerBtn = document.querySelector('.hamburger'),
            hamburgerMenu = document.querySelector('.hamburger-menu');

    hamburgerBtn.addEventListener('click', function(){
        this.classList.toggle('hamburger--active');
        hamburgerMenu.classList.toggle('hamburger-menu--active');

        if(hamburgerMenu.classList.contains('hamburger-menu--active')){
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = '';
        }
    });
}
burger();

function modal(){

    const orderBtn = document.querySelectorAll('.btn__order');

    function openOverlay(){
        const overlayElement = document.createElement('div');
        overlayElement.classList.add('modal__overlay');

        const template = document.querySelector('#overlayTemplate');
        overlayElement.innerHTML = template.innerHTML;

        const closeElement = overlayElement.querySelector('.modal__close');

        closeElement.addEventListener('click', function() {
            document.body.removeChild(overlayElement);
            document.body.style.overflow = '';
            // document.body.style.position = '';
        });

        return overlayElement;
    }

    const overlay = openOverlay();

    for(var i = 0; i < orderBtn.length; i++ ){
        orderBtn[i].addEventListener('click',function() {
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';
            // document.body.style.position = 'fixed';
        });
    }


}
modal();