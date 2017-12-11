function miniNavSetup() {
	var headerHeight = $('.header').height(),
		$window = $(window);

	//show mini nav
	$window.scroll(function() {
		if ($window.scrollTop() > headerHeight ) {
			$(".mini-header").addClass("in-view");
		}
	});

	//show full nav
	$window.scroll(function() {
		if ( $window.scrollTop() <= headerHeight ) {
			$(".mini-header").removeClass("in-view");
		}
	});
}

$(document).ready(function() {
	miniNavSetup();

	/*$(document).on("click",".account-link", function(e){
		if( $("body").hasClass(".logged-in")){
			e.preventDefault();
			$(".account-link").addClass("selected");
			$(".login-wrapper").addClass("show");
		}
	});*/
});
