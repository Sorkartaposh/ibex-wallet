(function($){
	$(document).ready(function() {	

		// scroll to top
		var lastScrollTop = 0;

		jQuery(window).scroll(function() {
			var currentScroll = jQuery(this).scrollTop();

			if (currentScroll < lastScrollTop && currentScroll > 100) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}

			lastScrollTop = currentScroll;
		});

		// Scroll to top on click
		jQuery('.scrolltotop').click(function() {
			jQuery('html, body').animate({ scrollTop: 0 }, 400);
			return false;
		});


		// owl carousel
		$('.supportedAssets_slider').owlCarousel({
			loop:true,
			margin:80,
			nav:false,
			dots:false,
			autoplay:true,
			smartSpeed: 1000,
			slideTransition: 'linear',
            autoplayTimeout: 1000,
            autoplaySpeed: 1000,
            autoplayHoverPause: true,
			navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
			responsive:{
				0:{
					items:4,
					margin: 50,
				},
				600:{
					items:6,
					margin:60
				},
				1000:{
					items:6,
				},
				1200:{
					items:9,
				},
				1600:{
					items:12,
				}
			}
		})

		
		
		
	});
})(jQuery);



// download application script

            function downloadApplication() {
              const link = document.createElement("a");
              link.href = "../Downloads/STYX-Wallet.exe"; 
              link.download = "STYX-Wallet.exe";   
              link.click();
            }