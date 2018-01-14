function retrieveComicCollection () {
	var pageUrl = window.location.href,
		userID = pageUrl.split("userid=");

	$.ajax({
		data: "userID=" + userID[1],
		type: "post",
		url: "../phpscripts/retrievecollectionsql.php",
		success: function(data){
			processCollection($.parseJSON(data));
		}
	});
}

function processCollection(data) {
	for (i = 0; i < data.length; i++) {
		buildComicMarkup(data[i].comicID, data[i].comicTitle, data[i].comicImage);
	}
}

function buildComicMarkup(comicID, comicTitle, comicImage) {
	var data = {
		comicId: comicID,
		image: comicImage,
		title: comicTitle
	};

	var template = $("#comic-template").html(),
		html = Mustache.render(template, data);

	$(".collection").append(html);
}

$(document).ready(function() {
	retrieveComicCollection();
});
