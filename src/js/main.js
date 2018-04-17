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
        if(hamburgerBtn.classList.contains('hamburger--active')){
            document.body.classList.add('body-hidden');
        } else {
            document.body.classList.remove('body-hidden');
        }
    });

    hamburgerMenu.addEventListener('click', function(event){
        var target = event.target;

        for(var i = 0; i < hamburgerItem.length; i++){
            if(target == hamburgerItem[i]){
                hamburgerBtn.classList.remove('hamburger--active');
                hamburgerMenu.classList.remove('hamburger-menu--active');
                document.body.classList.remove('body-hidden');
                scroll(hamburgerItem[i]);
            }
        }

    });
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
        });

        const btnAll = overlayElement.querySelectorAll('.btn-modal');
        for( let i = 0; i < btnAll.length; i++ ){
           btnAll[i].addEventListener('click', function() {
               const modalForm = overlayElement.querySelector('.modal__form');
               modalForm.classList.add('modal__access');
               setTimeout(function(){
                   document.body.removeChild(overlayElement);
                   document.body.style.overflow = '';
               }, 1000);

           });
        }

        return overlayElement;
    }

    const overlay = openOverlay(content);

    for( var i = 0; i < orderBtn.length; i++ ){
        orderBtn[i].addEventListener('click',function() {
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';
        });
    }
}
modal('#modalProgrammTemplate', '.course-item__btn');
modal('#modalFormTemplate', '.btn__consultation');
modal('#modalOrderTemplate', '.btn__order');
modal('#modalAccess', '.btn__access');

// function accessModal() {
//     var btnAll = document.querySelectorAll('.btn-modal');
//     for( let i = 0; i < btnAll.length; i++  ){
//         btnAll[i].addEventListener('click', function() {
//             console.log('aaa');
//         });
//     }
// }
// accessModal();


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
    const   slideItem   = document.querySelectorAll('.work__slide');

    for(var i = 0; i < slideItem.length; i++){
        const   item        = slideItem[i].querySelectorAll('.work__item'),
                workIcon    = slideItem[i].querySelectorAll('.work__icon'),
                mainImage   = slideItem[i].querySelector('.work__img');

        for(var j = 0; j < item.length; j++){

            for(var z = 0; z < workIcon.length; z++){

                workIcon[z].addEventListener('click', function(e){
                    const   src     = this.getAttribute('src');

                    for(let i = 0; i < item.length; i++){
                        item[i].classList.remove('active');
                    }
                    this.parentNode.classList.add('active');
                    mainImage.setAttribute('src', src);
                });
            }
        }
    }
}

gallary();