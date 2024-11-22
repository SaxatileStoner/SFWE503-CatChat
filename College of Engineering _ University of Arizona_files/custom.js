// JavaScript Document
new UISearch( document.getElementById( 'sb-search' ) );

    jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });
	
	
	$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});

    // You can also use "$(window).load(function() {"
    $(function () {
      // Slideshow 4
      $("#slider4").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });

    });
	
			$(function () {
		if ( $('html').hasClass('csstransforms3d') ) {
			$('.artGroup').removeClass('slide').addClass('flip');
			$('.artGroup.flip').on('mouseenter',
				function () {
					$(this).find('.artwork').addClass('theFlip');
				});
			$('.artGroup.flip').on('mouseleave',
				function () {
					$(this).find('.artwork').removeClass('theFlip');
				});
		} else {
			$('.artGroup').on('mouseenter',
				function () {
					$(this).find('.detail').stop().animate({bottom:0}, 500, 'easeOutCubic');
				});
			$('.artGroup').on('mouseleave',
				function () {
					$(this).find('.detail').stop().animate({bottom: ($(this).height() + -1) }, 500, 'easeOutCubic');
				});
		}
	});