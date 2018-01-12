function miniNavSetup() {
	var headerHeight = $('.header').height(),
		$window = $(window);

	//show/hide mini nav
	$window.scroll(function() {
		if ($window.scrollTop() > headerHeight ) {
			$(".header--mini").addClass("in-view");
		} else if ($window.scrollTop() <= headerHeight ) {
			$(".header--mini").removeClass("in-view");
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
