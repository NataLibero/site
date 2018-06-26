 window.addEventListener('DOMContentLoaded', function(){

 	(function() { 
 		Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
 		Galleria.configure({
 			transition: 'fade',
 			imageCrop: true,
 			height: 650,
 			width: 900,
 			autoplay: 2000,
 			lightbox: true
 		});
 		Galleria.run('.galleria');
 	}());

 	(function($) {
 		$(function() {

 			$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
 				$(this)
 				.addClass('active').siblings().removeClass('active')
 				.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
 			});

 		});
 	})(jQuery);

// modal window

 $('.btn').on('click',function(){
    $('.popup').css({
      'transform':'translateY(0)',
      'z-index':'999'
    });
    
    $('body').addClass('overlay');
    
    /*$('.popup h1').animate({
      left:'0'
    }, 100);*/
    
    $(this).css({
      'z-index':'-1'
    });
    
    $('.popup > .close').on('click',function(){
      $(this).parent().css({
      'transform':'translateY(-300%)'
     });
     
      $('body').removeClass('overlay');
      $(this).parent().siblings('.btn').css({
        'z-index':'1'
      });
    });
  });

 // accordion

 (function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

 });