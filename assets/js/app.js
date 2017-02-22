$(document).foundation();
$(document).ready(function(){

	//Main Navigation Toggle
	$('#primary-nav').on('click', '.nav-trigger', function(e){
		e.preventDefault();
		$('#primary-nav').toggleClass('nav-open');
	});

	// Clients Owl Carousel
	$(".client-carousel").owlCarousel({

		items:4,
		loop: true,
		nav: false,
		dots: true,
		autoPlay: true,
		navText:[
			'',
			''
		],
		smartSpeed: 600,
		responsive : {
			320 : {
				items : 1
			},
			768 : {
				items : 2
			},
			1024 : {
				items : 4
			}
		},

	});

	// Isotop click function
	$('.project-grid').isotope({
		itemSelector: '.project-item',
		layoutMode: 'fitRows'
	});

	$('.project-nav ul li a').click(function(){

		$('.project-nav ul li a').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');

		$('.project-grid').isotope({
			filter: selector
		});
		return false;

	});

});