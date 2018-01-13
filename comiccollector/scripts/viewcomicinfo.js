function getComicInfo(comicId) {
	var apiUrl = marvelApi.buildComicApiUrl(comicId);
	$.get(apiUrl, function( data ) {
		processComicInfo(data);
	});
}

function processComicInfo(data) {
	var resultData = data.data.results[0];

	if (resultData.images[0] !== undefined && resultData.images[0].path !== undefined) {
		var resultImage = resultData.images[0].path + "." + resultData.images[0].extension;
	} else {
		//no image available
		var resultImage = "http://bwconner.com/comiccollector/images/noimage.png";
	}

	var resultTitle = resultData.title,
		resultSeries = resultData.series.name,
		resultIssueNumber = resultData.issueNumber,
		resultDescription = resultData.description,
		resultId = resultData.id;

	var featuredCharacters = [],
		resultCreatorList = "";

	$(resultData.characters.items).each(function(index) {
		featuredCharacters[index] = $(this)[0].name;
	});

	$(resultData.creators.items).each(function(index) {
		resultCreatorList = resultCreatorList + $(this)[0].name + " - " + $(this)[0].role + ", ";
	});

	var markup = buildComicMarkup(resultTitle, resultImage, resultSeries, resultIssueNumber, resultDescription, featuredCharacters, resultCreatorList, resultId);

	$(".site-body-wrapper").append(markup);
}

function buildComicMarkup(resultTitle, resultImage, resultSeries, resultIssueNumber, resultDescription, featuredCharacters, resultCreatorList, resultId) {

		var data = { 
			image: resultImage,
			title: resultTitle,
			comicId: resultId,
			creators: resultCreatorList,
			characters: featuredCharacters,
			description: resultDescription
		};

		var template = $("#comic-template").html(),
			html = Mustache.render(template, data);

		return html;
}

$(document).ready(function() {
	var pageUrl = window.location.href;
	var comicId = pageUrl.split("comicId=");

	getComicInfo(comicId[1]);
});

