$(document).ready(function(){
	new WOW().init();
	$(".first_screen").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 300);
	});
	$(".nav_header").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 700);
	});
	$(".mob_nav").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 700);

		if($('.mob_nav').css('display') == "none"){
			$('.mob_nav').css('display','block');
		}
		else{
			$('.mob_nav').css('display','none');
		}

	});

	$(".mob_header").on("click","button", function (event) {
		event.preventDefault();

		if($('.mob_nav').css('display') == "none"){
			$('.mob_nav').css('display','block');
		}
		else{
			$('.mob_nav').css('display','none');
		}
	});
});