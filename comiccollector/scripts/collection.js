function retrieveComicCollection () {
	var pageUrl = window.location.href,
		userID = pageUrl.split("userid=");

	$.ajax({
		data: "userID=" + userID[1],
		type: "post",
		url: "../phpscripts/retrievecollectionsql.php",
		success: function(data){
			var obj = $.parseJSON(data)
			buildComicMarkup(obj);
		}
	});
}

function buildComicMarkup(data) {

	console.log(data);
	console.log(data.length);

	for (i = 0; i < data.length; i++) {
		console.log(data[i].comicTitle);
	}

	//var data = { 
	//	image: resultImage,
	//	title: resultTitle,
	//	comicId: resultId
	//};

	//var template = $("#result-template").html(),
	//	html = Mustache.render(template, data);

	//return html;
}


$(document).ready(function() {
	retrieveComicCollection();
});
