$(window).scroll(function() {
	var windscroll = $(window).scrollTop();
	if (windscroll >= 100) {
		$('section').each(function(i) {
	// The number at the end of the next line is how pany pixels you from the top you want it to activate.
			if ($(this).position().top <= windscroll + 50) {
				$('.navbar li.active').removeClass('active');
				$('.navbar li').eq(i).addClass('active');
			}
		});

	} else {
		$('.navbar li.active').removeClass('active');
		$('.navbar li:first').addClass('active');
	}

}).scroll();

function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	const close_burger = document.querySelectorAll('#close_burger')
	burger.addEventListener('click', () => {
	  if (!menu.classList.contains('nav_active')) {
		menu.classList.add('nav_active')
		burger.classList.add('active-burger')
		body.classList.add('locked')
	  } else {
		menu.classList.remove('nav_active')
		burger.classList.remove('active-burger')
		body.classList.remove('locked')
	  }
	})

	for(elem of close_burger){
		elem.addEventListener('click', ()=>{
			menu.classList.remove('nav_active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		})
	}

	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
	  if (window.innerWidth > 991.98) {
		menu.classList.remove('active')
		burger.classList.remove('active-burger')
		body.classList.remove('locked')
	  }
	})
  }
  burgerMenu()
