$(document).ready(function(){
	$("#News .btn_more").on("click","button", function (event) {
		if ( $('.row').hasClass('none') ){
			$('.row').removeClass('none');
			$('#News .btn_more').addClass('none');
		}
	});
	$(".nav").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

		top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 300);
	});
	$(".mob_nav").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

		top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 300);

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