function addComicToCollection(comicId) {
	var $currentComic = $(".comic-" + comicId),
		data = "userID=" + $("body").attr("data-userid") + "&comicId=" + comicId;//+ "&comicTitle=" + $currentComic.attr("data-title") + "&comicCharacter=" + $currentComic.attr("data-character") + "&comicDate=" + $currentComic.attr("data-date") + "&comicImage=" + $currentComic.attr("data-image");

	$.ajax({
		data: data,
		type: "post",
		url: "../phpscripts/addcomictocollection.php",
		success: function(data){

		}
	});
}
$(document).ready(function() {
	$("body").on("click", ".add-to-collection", function() {
		addComicToCollection($(this).attr("data-comicid"));
	});
});
