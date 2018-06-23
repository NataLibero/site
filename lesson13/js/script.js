$(document).ready(function () {	
	
	$('.main_btna, .main_btn, .main_nav ul li:eq(1)').click(function(){			
		$('.modal').stop().animate({height: 'show', opacity: 'show'}, 1000 );	
	});

	$('.close').click(function(){		
		$('.modal').animate({height: 'hide', opacity: 'hide'}, 1000 );

	});

// Ajax

$('form').submit(function() {
	$.ajax({
		type: "POST",
		url: "server.php",
		data: $(this).serialize()
	}).done(function(){
		$(".thanks").fadeIn();
		$(this).find("input").val('');
		$('form').trigger('reset');
	});
	return false;
});

$('.back').click(function(){
	$('.thanks').fadeOut();
	$('.modal').fadeOut();
});

$(document).mouseup(function(e) {
	var elem = $('.thanks');	
 	if(e.target != elem[0] && elem.has(e.target).length === 0) {
		$('.thanks').fadeOut();		
	}
})



	/*$('.main_btna, .main_btn, .main_nav ul li:eq(1)').click(function(){			
		$('.modal').slideDown(1000);
		$('.overlay').fadeTo(1000, 1);	
		return false;
	});

	$('.close').click(function(){		
		$('.modal').slideUp(1000);
		$('.overlay').fadeOut(1000);	
		return false;

	});*/

})