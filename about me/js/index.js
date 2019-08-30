$(document).ready(function(){
	$(".header").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 500);
		if($('.mob_nav').css('display') == "none"){
			$('.mob_nav').css('display','block');
		}
		else{
			$('.mob_nav').css('display','none');
		}
	});
	$(".btn_down").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 500);
	});
	$(".btn_up").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 500);
	});
	$("#works").on("click","a", function (event) {
		event.preventDefault();
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

	
})