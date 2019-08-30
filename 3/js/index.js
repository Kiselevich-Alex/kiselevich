$(document).ready(function(){
	$("#News .btn_more").on("click","button", function (event) {
		if ( $('.row').hasClass('none') ){
		 $('.row').removeClass('none');
		 $('#News .btn_more').addClass('none');
		}
	});
});

$(document).ready(function(){
	$(".nav").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 300);
	});
});