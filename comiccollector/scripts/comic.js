function addComicToCollection(comicId) {
	var $currentComic = $(".comic-" + comicId),
		data = "userID=" + $("body").attr("data-userid") + "&comicId=" + comicId + "&comicTitle=" + $currentComic.attr("data-title") + "&comicCharacter=" + $currentComic.attr("data-character") + "&comicDate=" + $currentComic.attr("data-date") + "&comicImage=" + $currentComic.attr("data-image");

	$.ajax({
		data: data,
		type: "post",
		url: "../phpscripts/addcomictocollectionsql.php",
		success: function(data){

		}
	});
}

function addComicToWishlist(comicId) {
	var $currentComic = $(".comic-" + comicId),
		data = "userID=" + $("body").attr("data-userid") + "&comicId=" + comicId + "&comicTitle=" + $currentComic.attr("data-title") + "&comicCharacter=" + $currentComic.attr("data-character") + "&comicDate=" + $currentComic.attr("data-date") + "&comicImage=" + $currentComic.attr("data-image");
console.log(data);
	$.ajax({
		data: data,
		type: "post",
		url: "../phpscripts/addcomictowishlistsql.php",
		success: function(data){

		}
	});
}

$(document).ready(function() {
	$("body").on("click", ".comic__add-to-collection", function() {
		addComicToCollection($(this).attr("data-comicid"));
	});

	$("body").on("click", ".comic__add-to-wishlist", function() {
		addComicToCollection($(this).attr("data-comicid"));
	});
});
