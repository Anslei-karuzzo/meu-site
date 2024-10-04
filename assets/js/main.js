(function ($) {
	"use strict";


	//Header Search Form
	if ($(".search-trigger").length) {
		$(".search-trigger").on("click", function () {
			$("body").addClass("search-active");
		});
		$(".close-search, .search-back-drop").on("click", function () {
			$("body").removeClass("search-active");
		});
	}

	// Mobile Menu

	$(".navbar-toggler").on("click", function () {
		$(this).toggleClass("active");
	});

	$(".navbar-nav li a").on("click", function () {
		$(".sub-nav-toggler").removeClass("active");
	});

	var subMenu = $(".navbar-nav .sub-menu");

	if (subMenu.length) {
		subMenu
			.parent("li")
			.children("a")
			.append(function () {
				return '<button class="sub-nav-toggler"> <i class="las la-angle-down"></i> </button>';
			});

		var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

		subMenuToggler.on("click", function () {
			$(this).parent().parent().children(".sub-menu").slideToggle();
			return false;
		});
	}

	//Header Search Form
	if ($(".search-btn").length) {
		$(".search-btn").on("click", function () {
			$("body").addClass("search-active");
		});
		$(".close-search, .search-back-drop").on("click", function () {
			$("body").removeClass("search-active");
		});
	}

	  //Home Page Slider

	  $(".homepage-slides").slick({
		slidesToShow: 1,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 8000,
		dots: false,
		fade: true,
		cssEase: 'linear',    
		prevArrow: '<button type="button" class="slick-prev"><i class="las la-angle-left"></i></button>',
		  nextArrow: '<button type="button" class="slick-next"><i class="las la-angle-right"></i></button>',
		settings: {
			dots: false,
			arrows: false,
		},
		responsive: [
		  {
			breakpoint: 992,
			settings: {
			  arrows: false,
			},
		  },
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			},
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			},
		  },
		],
	  });


	//Home Page Slider

	// $(".homepage-slides").owlCarousel({
	// 	items: 1,
	// 	dots: false,
	// 	nav: true,
	// 	loop: true,
	// 	autoplay: false,
	// 	autoplayTimeout: 5000,
	// 	smartSpeed: 2000,
	// 	slideSpeed: 600,
	// 	animateOut: 'fadeIn',
	// 	navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>",],

	// 	responsive: {
	// 		0: {
	// 			items: 1,
	// 			nav: false,
	// 			dots: false,
	// 		},
	// 		600: {
	// 			items: 1,
	// 			nav: false,
	// 			dots: false,
	// 		},
	// 		768: {
	// 			items: 1,
	// 			nav: false,
	// 			dots: false,
	// 		},
	// 		1100: {
	// 			items: 1,
	// 			nav: true,
	// 			dots: false,
	// 		},
	// 	},
	// });

	// $(".homepage-slides").on("translate.owl.carousel", function () {
	// 	$(".single-slide-item h1")
	// 		.removeClass("animated fadeInDown")
	// 		.css("opacity", "1");
	// 	$(".single-slide-item h5")
	// 		.removeClass("animated fadeInUp")
	// 		.css("opacity", "1");
	// });

	// $(".homepage-slides").on("translated.owl.carousel", function () {
	// 	$(".single-slide-item h1")
	// 		.addClass("animated fadeInDown")
	// 		.css("opacity", "1");
	// 	$(".single-slide-item h5")
	// 		.addClass("animated fadeInUp")
	// 		.css("opacity", "1");
	// });


	// Service Slider

	$(".service-item-wrap").owlCarousel({
		items: 1,
		margin: 30,
		dots: true,
		nav: false,
		loop: true,
		autoplay: true,
		responsiveClass: true,
		responsive: {
			575: {
				items: 1,
				nav: false,
				dots: false,
				margin:0,
			},

			767: {
				items: 2,
				nav: false,
				dots: false,				
			},

			990: {
				items: 3,
				dots: true,
				loop: true,
			},
			1200: {
				items: 3,
				dots: true,
				loop: true,
			},
		},
	});


	// Project Slider

	$(".project-wrap").owlCarousel({
		loop: true,
		items: 4,
		dots: true,
		nav: false,
		smartSpeed: 500,
		autoHeight: false,
		touchDrag: true,
		mouseDrag: true,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 10000,
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: false,
			},
			600: {
				items: 1,
				nav: false,
				dots: false,
			},
			768: {
				items: 2,
				nav: false,
				dots: true,
			},
			1100: {
				items: 3,
				nav: false,
				dots: true,
			},
		},
	});

	//jQuery Sticky Area
	$(".sticky-area").sticky({
		topSpacing: 0,
	});

	//jQuery Animation
	new WOW().init();

	// Nice select
	$('select').niceSelect();

	//Counter Up

	$(".counter-number span").counterUp({
		delay: 10,
		time: 1000,
	});

	//Magnific Pop-up

	$(".video-play-btn").magnificPopup({
		type: "iframe",
	});

	// Testimonial Carousel

	$(".testimonial-wrap").owlCarousel({
		items: 1,
		margin: 30,
		dots: true,
		nav: false,
		loop: true,
		autoplay: true,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			575: {
				items: 1,
				nav: false,
				dots: false,
			},

			767: {
				items: 1,
				nav: false,
			},

			990: {
				items: 2,
				loop: true,
			},
			1200: {
				items: 2,
				dots: true,
				loop: true,
			},
		},
	});


	// Testimonial Carousel

	$(".testimonial_carousel").owlCarousel({
		items: 1,
		margin: 30,
		dots: true,
		nav: false,
		loop: true,
		autoplay: true,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			575: {
				items: 1,
				nav: false,
				dots: false,
			},

			767: {
				items: 2,
				nav: false,
			},

			990: {
				items: 3,
				dots: true,
				loop: true,
			},
			1200: {
				items: 3,
				dots: true,
				loop: true,
			},
		},
	});

	  // Client Slider

	  $(".client-wrap").owlCarousel({
		loop: true,
		items: 5,
		dots: true,
		nav: false,
		smartSpeed: 500,
		autoHeight: false,
		touchDrag: true,
		mouseDrag: true,
		margin: 30,
		autoplay: true,
		responsive: {
		  0: {
			items: 1,
			nav: false,
			dots: false,
		  },
		  600: {
			items: 2,
			nav: false,
			dots: false,
		  },
		  768: {
			items: 3,
			nav: false,
			dots: false,
		  },
		  1100: {
			items: 5,
			nav: false,
			dots: true,
		  },
		},
	  });


	// Scroll To The Top

	// Show or hide the sticky footer button
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 4000) {
			$(".go-top").fadeIn(200);
		} else {
			$(".go-top").fadeOut(200);
		}
	});

	// Animate the scroll to top
	$(".go-top").on("click", function (event) {
		event.preventDefault();

		$("html, body").animate({
			scrollTop: 0,
		},
			1500
		);
	});

	//Progress Bar JS

	$("#bar1").barfiller({
		barColor: "#007CFF",
		duration: 5000,
	});

	$("#bar2").barfiller({
		barColor: "#007CFF",
		duration: 5000,
	});

	$("#bar3").barfiller({
		barColor: "#007CFF",
		duration: 5000,
	});

	// Contact Form JS

	$("#contactForm").on("submit", function (e) {
		e.preventDefault();

		var $action = $(this).prop("action");
		var $data = $(this).serialize();
		var $this = $(this);

		$this.prevAll(".alert").remove();

		$.post(
			$action,
			$data,
			function (data) {
				if (data.response == "error") {
					$this.before(
						'<div class="alert alert-danger">' + data.message + "</div>"
					);
				}

				if (data.response == "success") {
					$this.before(
						'<div class="alert alert-success">' + data.message + "</div>"
					);
					$this.find("input, textarea").val("");
				}
			},
			"json"
		);
	});

	// Active & Remove Class 

	$(".sub-menu ul li").on("click", function () {
		$(".sub-menu").removeAttribute("style");
		$(this).addClass("active");
	});


	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($('.preloader').length) {
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	$(window).on('load', function () {
		handlePreloader();
	});

}(window.jQuery));
