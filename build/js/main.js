$(document).ready(function() {
	function sliders() {
		$(document).ready(function(){
			$(".owl-carousel").owlCarousel({
				items: 1,
				loop:true
			});
		});
	}

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

	function modal(content, btn){
        $(document).on('click', btn, function(){
            event.preventDefault();

        	var template = $(content).html();

        	$('body').append("<div class='modal__overlay'></div>");
            $('body').css("overflow", "hidden");
			$('.modal__overlay').append(template);

			$(document).on('click', '.modal__close', function(){
                event.preventDefault();

				$('.modal__overlay').remove();
				$('.modal').remove();
                $('body').css("overflow", "auto");
			});
        });

        $(document).on('click', '.btn-modal', function(){
            event.preventDefault();

        	$('.modal__form').addClass('modal__access');
            setTimeout(function(){
                $('.modal__overlay').remove();
                $('.modal').remove();
                $('body').css("overflow", "auto");
            }, 1000);
		});
	}

    modal('#modalOrderTemplate', '.btn__order');
    modal('#modalFormTemplate', '.btn__consultation');
    modal('#modalProgrammTemplate', '.course-item__btn');
    modal('#modalServiceTemplate', '.btn__service');
	modal('#modalAccessTemplate', '.btn__access');



	function scroll(){
		var linkNav = document.querySelectorAll('[href^="#"]'),
			V = 0;
		for (var i = 0; i < linkNav.length; i++) {
			linkNav[i].addEventListener('click', function(e) {
				e.preventDefault();
				var w = window.pageYOffset,
					hash = this.href.replace(/[^#]*(.*)/, '$1');
					t = document.querySelector(hash).getBoundingClientRect().top,
					start = null;
				requestAnimationFrame(step);
				function step(time) {
					if (start === null) start = time;
					var progress = time - start,
						r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
					window.scrollTo(0,r);
					if (r != w + t) {
						requestAnimationFrame(step)
					} else {
						location.hash = hash  
					}
				}
			}, false);
		}
	}

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

	$(document).on('click','input[name=form-checker]',function(){
		event.preventDefault();
	});

	$(document).on('submit','form',function(){
		event.preventDefault();

		let error = false;
		
		$(this).find('input.required').each(function() {
			if ($(this).val().length <= 0) {
				error = true;
				$(this).parent('.form__block').addClass('form__block-error');
			}
		});
		
		let $email = $(this).find('input[name=form-email]');
		let $phone = $(this).find('input[name=form-tel]');
		let phone  = $phone.val().replace(/\D/g, "");
		
		if (phone.length < 8) {
			error = true;
			$phone.parent('.form__block').addClass('form__block-error');
		}		
		
		if (!/.+@.+\..+/i.test($email.val())) {
			error = true;
			$email.parent('.form__block').addClass('form__block-error');
		}

		if ($(this).find("input[name=checker]").is(":checked")) {
			error = true;
		}
		
		if (!error) {
			let data = {
				phone : $(this).find('input[name=form-tel]').val(),
				email : $(this).find('input[name=form-email]').val(),
				name  : $(this).find('input[name=form-name]').val(),
				text  : $(this).find('textarea').val(),
				form  : $(this).prev().html(),
			};
		}
	});

	$(document).on('focus','input.required',function(){
		$(this).parent('.form__block').removeClass('form__block-error');
	});

	sliders();
	burger();
	scroll();
	gallary();

});