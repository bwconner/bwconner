var resultLimit = 25;
var currentFormat = "";
var currentOffset = 0;
var currentPage = 1;
var totalPages;
var currentSearch;

function getResults(searchTerm) {
	$(".results").html(""); //empty results section
	$(".spinner").removeClass("hide"); //add spinner
	currentSearch = searchTerm;
	var apiUrl = marvelApi.buildSearchApiUrl(searchTerm, resultLimit, currentOffset);
	$.get(apiUrl, function( data ) {
		processResults(data);
	});
}

function reloadResults() {
	$(".results").html(""); //empty results section
	$(".spinner").removeClass("hide"); //add spinner
	var apiUrl = marvelApi.buildSearchApiUrl(currentSearch, resultLimit, currentOffset);
	$.get(apiUrl, function( data ) {
		processResults(data);
	});
}

function processResults(data) {
	var totalResults = data.data.total;
	var resultsList = data.data.results;
	totalPages = Math.ceil(totalResults/resultLimit);

	console.log(totalResults);
	console.log(resultsList);
	//console.log(totalPages);
	//outputResults(resultsList);

	$(".spinner").addClass("hide"); //remove spinner
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

function gotoPage(newPage) {
	currentOffset = newPage * resultLimit;
	reloadResults();
}

$(document).ready(function() {

	$('.search-limit-option').on('click', function() {
		resultLimit = $(this).attr("data-limit");
		console.log(resultLimit);
	});

	$('.advanced-search-options-show').on('click', function() {
		$(".advanced-search-options-wrapper").toggleClass("show");
	});

	$('.page-selector').on('click', function() {
		gotoPage($(this).attr("data-page"));
	});

	$('.prev').on('click', function() {
		currentPage = currentPage - 1;

		if (currentPage === 1) {
			//Do Nothing, this button should be hidden
		} else {
			gotoPage(currentPage - 1);
		}

	});

	$('.next').on('click', function() {
		currentPage = currentPage + 1;

		if (currentPage === totalPages) {
			//Do Nothing, this button should be hidden
		} else {
			gotoPage(currentPage + 1);
		}

	});

	$('.search').on('click', function() {
		//resultLimit = $("select.search-limit:first").text();
		//currentFormat = $("select.format:first").text();
		getResults($('.search-text').val());
	});

});

