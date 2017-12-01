function getComicInfo(comicId) {
	var apiUrl = marvelApi.buildComicApiUrl(comicId);
	$.get(apiUrl, function( data ) {
		processComicInfo(data);
	});
}

function processComicInfo(data) {
	console.log(data);

	$(resultsList).each(function(result) {
		var resultData = $(this);
		if (resultData[0].images[0] !== undefined && resultData[0].images[0].path !== undefined) {
			var resultImage = resultData[0].images[0].path + "." + resultData[0].images[0].extension;
		} else {
			//no image available
			var resultImage = "http://bwconner.com/comiccollector/images/noimage.png";
		}

		var resultTitle = resultData[0].title;
		var resultSeries = resultData[0].series.name;
		var resultIssueNumber = resultData[0].issueNumber;
		var resultDescription = resultData[0].description;
		var resultId = resultData[0].id;
	
		var featuredCharacters = [];
		var resultCreators = "";

		$(resultData[0].characters.items).each(function(index) {
			featuredCharacters[index] = $(this)[0].name;
		});

		$(resultData[0].creators.items).each(function(index) {
			resultCreators = resultCreators + "<div class='creator'>" + $(this)[0].name + " - " + $(this)[0].role + "</div>";
		});

		var markup = buildResultMarkup(resultTitle, resultImage, resultSeries, resultIssueNumber, resultDescription, featuredCharacters, resultCreators, resultId);


		$(".results").append(markup);
	});

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
			if (resultDescription.length > 100) {
				resultDescription = resultDescription.substring(0, 100) + "...";
			}

			//markup = markup + "<div class='result-description'>" + resultDescription + "</div>";
		}

		if(featuredCharacters !== null && featuredCharacters.length > 0) {
			if (featuredCharacters.length > 100) {
				featuredCharacters = featuredCharacters.substring(0, 100) + "...";
			}

			//markup = markup + "<div class='result-characters'> Featured Characters: " + featuredCharacters + "</div>";
		}

		var  viewFullInfoLink = "<a href='/comiccollector/pages/viewcomicinfo?&comicId=" + resultId + "'>View Full Information</a>";

		markup = markup + viewFullInfoLink + "</div></div>";
		

		return markup;
}

$(document).ready(function() {

});

