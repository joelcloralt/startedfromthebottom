jQuery(function($){
	
	$(document).ready(function(){
		$('html, body').animate({ scrollTop: document.body.scrollHeight }, 1);		
		$(".here-container").height($(document).height());
		$(".bottom-container").height($(document).height());

		$("#continue").click(function(){
			$('html, body').animate({scrollTop:0}, 700);
		});
	});

});