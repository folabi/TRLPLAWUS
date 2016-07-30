$(document).ready(function() {
	"use strict";
/*
|----------------------------------------------------------------------------
| Pre-Loader
|----------------------------------------------------------------------------
*/

	// makes sure the whole site is loaded
	$(window).load(function() {
		// will first fade out the loading animation
		$("#spinner").fadeOut();
		//then background color will fade out slowly
		$("#SitePreloader").delay(200).fadeOut("slow");
	});

		
/*
|----------------------------------------------------------------------------
| Navigation
|----------------------------------------------------------------------------
*/	

	if ( matchMedia( 'only screen and (min-width: 480px)' ).matches ) {
	   $(document).on('scroll', function() {
		  var scrollPos = $(this).scrollTop();

		  if( scrollPos > 10 ) {
			 $('.navbar-fixed-top').removeClass('navbar-home');
		  } else {
			 $('.navbar-fixed-top').addClass('navbar-home');
		  }
	   });
	}
		
	$('.navbar-nav').onePageNav({
		currentClass: 'active',
		scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
		scrollSpeed: 1000
	});

/*
|----------------------------------------------------------------------------
| Slider
|----------------------------------------------------------------------------
*/	
	$('.bxslider').bxSlider({
		mode: 'fade', 
		auto: true,
		controls: true ,
		pause: 10000    
	});
	

/*
|----------------------------------------------------------------------------
| Search
|----------------------------------------------------------------------------
*/			
	new UISearch( document.getElementById( 'sb-search' ) );
/*
|----------------------------------------------------------------------------
| Owl Carousel
|----------------------------------------------------------------------------
*/
	$("#owl-demo").owlCarousel({

		autoPlay: 3000, //Set AutoPlay to 3 seconds

		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [979,1],
		itemsTablet: [700,1],
		itemsMobile : [479,1]    
	});
	
	$("#owl-demo1").owlCarousel({

		autoPlay: 3000, //Set AutoPlay to 3 seconds

		items : 5,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
		itemsMobile : [479,1]

	});
	
	$("#owl-last").owlCarousel({

		autoPlay: 3000, //Set AutoPlay to 3 seconds

		items : 5,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
		itemsMobile : [479,1]

	});
/*
|----------------------------------------------------------------------------
| Accordion (Key Factors)
|----------------------------------------------------------------------------
*/	
	var $active = $('#accordion .panel-collapse.in').prev().addClass('active');
	$active.find('a').append('<span class="fa icon_minus_alt2 pull-left"></span>');
	$('#accordion .panel-heading').not($active).find('a').prepend('<span class="fa icon_plus_alt2 pull-left"></span>');
	$('#accordion').on('show.bs.collapse', function (e)
	{
		$('#accordion .panel-heading.active').removeClass('active').find('.fa').toggleClass('icon_plus_alt2 icon_minus_alt2');
		$(e.target).prev().addClass('active').find('.fa').toggleClass('icon_plus_alt2 icon_minus_alt2');
	});
	$('#accordion').on('hide.bs.collapse', function (e)
	{
		$(e.target).prev().removeClass('active').find('.fa').removeClass('icon_minus_alt2').addClass('icon_plus_alt2');
	});

/*
|----------------------------------------------------------------------------
| AJAX CONTACT FORM
|----------------------------------------------------------------------------
*/
// Function for email address validation
function isValidEmail(emailAddress) {

var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    return pattern.test(emailAddress);

};


$("#contact-form").on('submit', function(e) {
    e.preventDefault();
    var data = {
        name: $("#name").val(),
        email: $("#email").val(),
        subject: $("#subject").val(),
        message: $("#message").val()
    };

    if ( isValidEmail(data['email']) && (data['message'].length > 1) && (data['name'].length > 1) ) {
        $.ajax({
            type: "POST",
            url: "sendmail.php",
            data: data,
            success: function() {
                $('#contact-form .input-success').delay(500).fadeIn(1000);
                $('#contact-form .input-error').fadeOut(500);
            }
        });
    } else {
        $('#contact-form .input-error').delay(500).fadeIn(1000);
        $('#contact-form .input-success').fadeOut(500);
    }

    return false;
});  

});