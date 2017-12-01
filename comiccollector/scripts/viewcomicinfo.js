function getComicInfo(comicId) {
	var apiUrl = marvelApi.buildComicApiUrl(comicId);
	$.get(apiUrl, function( data ) {
		processComicInfo(data);
	});
}

function processComicInfo(data) {
	console.log(data);
	var resultData = data.data.results[0];
	console.log(resultData);
	if (resultData.images[0] !== undefined && resultData.images[0].path !== undefined) {
		var resultImage = resultData.images[0].path + "." + resultData.images[0].extension;
	} else {
		//no image available
		var resultImage = "http://bwconner.com/comiccollector/images/noimage.png";
	}

	var resultTitle = resultData.title;
	var resultSeries = resultData.series.name;
	var resultIssueNumber = resultData.issueNumber;
	var resultDescription = resultData.description;
	var resultId = resultData.id;

	var featuredCharacters = [];
	var resultCreators = "";

	$(resultData.characters.items).each(function(index) {
		featuredCharacters[index] = $(this)[0].name;
	});

	$(resultData.creators.items).each(function(index) {
		resultCreators = resultCreators + "<div class='creator'>" + $(this)[0].name + " - " + $(this)[0].role + "</div>";
	});

	var markup = buildResultMarkup(resultTitle, resultImage, resultSeries, resultIssueNumber, resultDescription, featuredCharacters, resultCreators, resultId);


	$(".site-body-wrapper").append(markup);

	if (totalPages > 1) {
		$(".pagination").removeClass("hide");
	}
}

function outputResults(resultsList) {
	$(resultsList).each(function(result) {
		var resultData = $(this);
		var resultImage = resultData[0].images[0].path + "." + resultData[0].images[0].extension;
		var resultTitle = resultData[0].title;
		var markup = buildResultMarkup(resultTitle, resultImage);


		$(".results").append(markup);
	});

}

function buildResultMarkup(resultTitle, resultImage, resultSeries, resultIssueNumber, resultDescription, featuredCharacters, resultCreators, resultId) {
		var markup = "<div class='search-result'>" +
		"<img class='result-img' src='" + resultImage + "'/>" +
		"<div class='result-information'>" +
		"<div class='result-title'>" + resultTitle + "</div>";

		//sanitize data function
		if(resultCreators !== null && resultCreators.length > 0) {
			markup = markup + "<div class='result-creators'> Creators: " + resultCreators + "</div>";
		}
		
		if(resultDescription !== null && resultDescription.length > 0) {
			markup = markup + "<div class='result-description'>" + resultDescription + "</div>";
		}

		if(featuredCharacters !== null && featuredCharacters.length > 0) {
			markup = markup + "<div class='result-characters'> Featured Characters: " + featuredCharacters + "</div>";
		}

		markup = markup + "</div></div>";
		

		return markup;
}

$(document).ready(function() {
	var pageUrl = window.location.href;
	var comicId = pageUrl.split("comicId=");
	console.log(comicId[1]);
	getComicInfo(comicId[1]);
});

