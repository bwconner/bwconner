var resultLimit = 25;
var currentFormat = "";
var currentOffset = 0;
var currentPage = 1;
var currentSearch;

function getResults(searchTerm) {
	$(".results").html(""); //empty results section
	currentSearch = searchTerm;
	var apiUrl = marvelApi.buildApiUrl(searchTerm, resultLimit, currentOffset);
	$.get(apiUrl, function( data ) {
		processResults(data);
	});
}

function reloadResults() {
	$(".results").html(""); //empty results section
	var apiUrl = marvelApi.buildApiUrl(searchTerm, resultLimit, currentOffset);
	$.get(apiUrl, function( data ) {
		processResults(data);
	});
}

function processResults(data) {
	var totalResults = data.data.total;
	var resultsList = data.data.results;
	var totalPages = Math.ceil(totalResults/resultLimit);

	console.log(totalResults);
	console.log(resultsList);
	//console.log(totalPages);
	//outputResults(resultsList);

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
	
		var featuredCharacters = [];
		var resultCreators = [];

		$(resultData[0].characters.items).each(function(index) {
			featuredCharacters[index] = $(this)[0].name;
		});

		$(resultData[0].creators.items).each(function(index) {
			resultCreators[index] = $(this)[0].name + " - " + $(this)[0].role;
		});

		var markup = buildResultMarkup(resultTitle, resultImage, resultSeries, resultIssueNumber, resultDescription, featuredCharacters, resultCreators);


		$(".results").append(markup);
	});
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

function buildResultMarkup(resultTitle, resultImage, resultSeries, resultIssueNumber, resultDescription, featuredCharacters, resultCreators) {
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

function gotoPage(newPage) {
	currentOffset = newPage * resultLimit
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
		gotoPage(currentPage - 1);
	});

	$('.next').on('click', function() {
		gotoPage(currentPage + 1);
	});

	$('.search').on('click', function() {
		//resultLimit = $("select.search-limit:first").text();
		//currentFormat = $("select.format:first").text();
		getResults($('.search-text').val());
	});

});

