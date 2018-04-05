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
            hamburgerItem = document.querySelectorAll('.hamburger-menu__link'),
            hamburgerMenu = document.querySelector('.hamburger-menu');


    hamburgerBtn.addEventListener('click', function(){
        hamburgerBtn.classList.toggle('hamburger--active');
        hamburgerMenu.classList.toggle('hamburger-menu--active');
        document.body.classList.add('body-hidden');
    });

    hamburgerMenu.addEventListener('click', function(event){
        var target = event.target;

        for(var i = 0; i < hamburgerItem.length; i++){
            if(target == hamburgerItem[i]){
                hamburgerBtn.classList.remove('hamburger--active');
                hamburgerMenu.classList.remove('hamburger-menu--active');
                document.body.classList.remove('body-hidden');
                scroll();
            }
        }

    });


    // document.body.addEventListener('click', function(event){
    //     var target = event.target;
    //
    //     if(target = hamburgerBtn){
    //         console.log(target);
    //         hamburgerBtn.classList.toggle('hamburger--active');
    //         hamburgerMenu.classList.toggle('hamburger-menu--active');
    //         document.body.classList.add('body-hidden');
    //     }
    //
    //     for(var i = 0; i < hamburgerItem.length; i++){
    //         if(target = hamburgerItem[i]){
    //             console.log(target);
    //             document.body.classList.remove('body-hidden');
    //             scroll();
    //         }
    //     }
    // });




    // hamburgerBtn.addEventListener('click', function(){
    //     this.classList.toggle('hamburger--active');
    //     hamburgerMenu.classList.toggle('hamburger-menu--active');
    //
    //     if(hamburgerMenu.classList.contains('hamburger-menu--active')){
    //         document.body.style.overflow = 'hidden';
    //         document.body.style.position = 'fixed';
    //     } else {
    //         document.body.style.overflow = '';
    //         document.body.style.position = '';
    //     }
    // });
}
burger();

function modal(content, btn){

    const orderBtn = document.querySelectorAll(btn);

    function openOverlay(content){
        const overlayElement = document.createElement('div');
        overlayElement.classList.add('modal__overlay');

        const template = document.querySelector(content);
        overlayElement.innerHTML = template.innerHTML;

        const closeElement = overlayElement.querySelector('.modal__close');

        closeElement.addEventListener('click', function() {
            document.body.removeChild(overlayElement);
            document.body.style.overflow = '';
            // document.body.style.position = '';
        });

        return overlayElement;
    }

    const overlay = openOverlay(content);

    for(var i = 0; i < orderBtn.length; i++ ){
        orderBtn[i].addEventListener('click',function() {
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';
            // document.body.style.position = 'fixed';
        });
    }
}
modal('#modalProgrammTemplate', '.course-item__btn');
modal('#modalFormTemplate', '.btn__consultation');
modal('#modalOrderTemplate', '.btn__order');

function scroll(){
    var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
        V = 0;
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
            e.preventDefault(); //отменяем стандартное поведение
            var w = window.pageYOffset,  // производим прокрутка прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
                t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
                window.scrollTo(0,r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash  // URL с хэшем
                }
            }
        }, false);
    }
}

scroll();

function gallary(){
    const   list        = document.querySelectorAll('.work__list'),
            item        = document.querySelectorAll('.work__item'),
            imagesList  = document.querySelectorAll('.work__icon'),
            mainImage   = document.querySelector('.work__img');

    for(var i = 0; i < imagesList.length; i++){
        imagesList[i].addEventListener('click', function(e){
            const   src = this.getAttribute('src'),
                    imgItem = this.parentNode;

            // imgItem.classList.add('active');

            mainImage.setAttribute('src', src);
        });

    }
}

gallary();