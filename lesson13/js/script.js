$(document).ready(function () {

	$('.main_btna, .main_btn, .main_nav ul li:eq(1)').click(function(){			
		$('.modal').slideDown(1000);
		$('.overlay').fadeTo(1000, 1);	
		return false;
	});

	$('.close').click(function(){		
		$('.modal').slideUp(1000);
		$('.overlay').fadeOut(1000);	
		return false;

	});
	
})