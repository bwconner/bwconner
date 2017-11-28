//var bwslider = {}
function numberOfSlidesToDisplay() {
	//get number of slides to display data attr
	//divide 100 by that data attr
	//add that css width to slide elements
	//use this number to determine number of slides to add active classes to
	//add first slider and last slide classes
	console.log($(".bwslider").length);
	var activeSlideNumber = $(".bwslider").attr("data-slides-to-show");
}

function nextSlideClick() {
	//on next click slide
}

function prevSlideClick() {
	//on prev click slide
}

function forwardScroll() {
	//on right hover scroll forward
}

function backwardsScroll() {
	//on left hover scroll back
}

function bwsliderInit() {
	numberOfSlidesToDisplay();
}

$('document').ready(bwsliderInit());