function main(){
	//Probably don't need this
}

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

function imageSliderSetup() {
	var firstImage = $(".bwslider-slide-content").first().attr("src"),
		clickedElementDesc = $(".bwslider-slide-content").first().attr("data-desc");

	$(".bwslider-slide-content").each(function() {
		$(this).css("background-image", "url(" + $(this).children().attr("src") + ")");
	});

	$("#image-spot-div").css("background-image", "url(" + firstImage + ")");
	$(".image-description p").text(clickedElementDesc);
}

function imageSliderClickHandler() {
	$('.bwslider-slide-content').on('click', function() {
		var clickedElementSrc = $(this).attr("src"),
			clickedElementDesc = $(this).attr("data-desc");
		$("#image-spot-div").css("background-image", "url(" + clickedElementSrc + ")");
		$(".image-description p").text(clickedElementDesc);
	});
}

function videoClickHandler() {
	$(".video-thumbnail").on('click', function() {
		var clickedElementSrc = "." + $(this).attr("data-video"),
			videoActive = $(clickedElementSrc).hasClass("active");

		if(!videoActive){
			$(".active").toggle("blind");
			$(".active").removeClass("active");
			$(clickedElementSrc).addClass("active");
			$(clickedElementSrc).toggle("blind");
		} else {
			$(".active").toggle("blind");
			$(".active").removeClass("active");
		}
	});

	$(".close-video").on('click', function() {
		$(".active").toggle("blind");
		$(".active").removeClass("active");	
	});
}


function animateClouds() {
	$(".cloud").animate({left: "+=3000"}, 75000);
	//remove old clouds
}

function appendCloudMarkup(imageNumber, verticalCloudPosition, cloudSpeed) {
	var cloudImage = "bwconner/images/clouds/" + imageNumber + ".png";
	var cloudMarkup = "<img class='cloud' style=" + verticalCloudPosition + " src=" + cloudImage + "></img>";

	$(".clouds").append(cloudMarkup);
}


function generateCloud() {
	//Set up position of each cloud
	var cloudNumber = Math.round(Math.random() * 11) + 1,
		randomSpeed = (Math.round(Math.random() * 4) + 3) * 1000,
		windowHeight = $(window).height(),
		verticalCloudPosition =  Math.round(Math.random() * (windowHeight/2));

		appendCloudMarkup(cloudNumber, verticalCloudPosition, randomSpeed);

}


function cloudsInit () {
	//determine how many clouds. up to five clouds
	var clouds = Math.round(Math.random() * 6) + 1,
		i = 2;

	while (i < clouds) {
		i++;
		generateCloud();
	}

	animateClouds();

	//bring in new clouds as the others leave the screen
	setTimeout(function(){
		//$(".cloud").css("margin-left", "-1000px");
		cloudsInit();
	}, 15000);

}

function rotateBackground() {
	var imageNumber = Math.round(Math.random() * 23) + 1,
		randomTimeout = (Math.round(Math.random() * 4) + 3) * 1000,
		backgroundImage = "images/backgroundLibrary/bg" + imageNumber + ".jpg";
	$(".site-body").css("background-image", "url(" + backgroundImage + ")");
	setTimeout(function(){
		rotateBackground();
	}, randomTimeout);
}

$(document).ready(function() {
	main();
	miniNavSetup();
	videoClickHandler();

	if($(".clouds").length > 0){
		cloudsInit();
	}

	//setup smooth div scroll if needed
	if($(".bwslider").length > 0) {
		//sliderInit();
		imageSliderSetup();
		imageSliderClickHandler();	
	}
});

//var x = $(".bwslider").length;
//alert(x);