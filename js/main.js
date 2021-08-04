jQuery(document).ready(function(){
    
    $('#videolink').magnificPopup({
 	type:'inline',
 	midClick:true
 });

	});
/*owl-carousel script*/

$(function(){
	$("#team-members").owlCarousel({
		items:2,
		autoplay:true,
		smartSpeed:700,
		loop:true,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			480: {
				items:2
			}
		}
	});
});
 /* owlCarousel for testimonial
       -------------------------------------------------------*/
	   $('.testimonial .owl-carousel').owlCarousel({

        loop: true,
        items: 1,
        mouseDrag: true,
        autoplay: true,
        autoplaySpeed: 1500,

    });
	$('.brand').owlCarousel({
		loop: true,
		items:5,
		nav: false,
		autoplay:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:2
			},
			1000:{
				items:5
			}
		}
	});
/*end of owl carousel*/
//Responsive Tabs
$(function(){
	$("#services-tabs").responsiveTabs({
		animate:'slide'
	});
});
  // init Isotope
  var $grid = $('.port-cover').isotope({
    // options
    });
    // filter items on button click
    $('.port-btns').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    $('.port-btns').on( 'click', 'li', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });



