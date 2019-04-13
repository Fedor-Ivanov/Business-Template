$(document).ready(function() {
	//Плавный скрол
	$('[href^="#anchor"]').click(function() {
		event.preventDefault();
		var id = $(this).attr('href');
		var docTop = mediaQuery('max', 767) ? $(id).offset().top - $('.header').outerHeight() : $(id).offset().top;
		$('body, html').animate({scrollTop: docTop}, 800);
	});

	//Открытие меню
	$('.nav-button').click(function() {
		$('.nav').toggleClass('nav_active');
		$('.nav-list').toggleClass('nav-list_active');
		$('.nav-button_active').toggleClass('fa-bars, fa-times');
	});

	//Переход к блоку по нажатию по ссылке
	$('.nav-list__link').click(function() {
		$('.nav').removeClass('nav_active');
		$('.nav-list').removeClass('nav-list_active');
		$('.nav-button_active').toggleClass('fa-bars, fa-times');
	});
}); 

$('.reviews-grid').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false,
	dots: true,
	responsive: [
		{
			breakpoint: 1111,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, 
		{
			breakpoint: 641,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


function mediaQuery(direction, width) {
	return window.matchMedia('(max-width: 800px)').matches;
}