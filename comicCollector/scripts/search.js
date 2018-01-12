var resultLimit = 24,
	currentOrder = "",
	currentFormat = "",
	currentOffset = 0,
	currentPage = 1,
	totalPages,
	currentSearchTerm = "",
	currentSearchCharacter = "",
	currentCharacterList = "";


function setAdvancedSearchOptions(optionName, optionValue) {
	switch(optionName) {
		case "limit":
			resultLimit = optionValue;
			break;
		case "format":
			currentFormat = optionValue;
			break;
		case "sort":
			currentOrder = optionValue;
			break;
		default:
			return;
	}
}

function getCharacterIDList() {
	var apiUrl = marvelApi.buildCharacterListApiUrl(currentSearchCharacter);

	$.get(apiUrl, function(data) {
		createCharacterIdList(data);
		getResultsByCharacter();
	});
}

function getResults() {
	if (currentSearchCharacter.length) {
		$(".results").html(""); //empty results section
		$(".spinner").removeClass("hide"); //add spinner
		getCharacterIDList(currentSearchCharacter);
	} else {
		getResultsByTitle(currentSearchTerm);
	}
}

function getResultsByTitle() {
	$(".results").html(""); //empty results section
	$(".spinner").removeClass("hide"); //add spinner

	var apiUrl = marvelApi.buildSearchApiUrl(currentSearchTerm, resultLimit, currentOffset, currentOrder, currentFormat, currentCharacterList);
	$.get(apiUrl, function(data) {
		processResults(data);
	});
}

function getResultsByCharacter() {
	var apiUrl = marvelApi.buildSearchApiUrl(currentSearchTerm, resultLimit, currentOffset, currentOrder, currentFormat, currentCharacterList);
	$.get(apiUrl, function(data) {
		processResults(data);
	});
}

function reloadResults() {
	$(".results").html(""); //empty results section
	$(".spinner").removeClass("hide"); //add spinner
	var apiUrl = marvelApi.buildSearchApiUrl(currentSearchTerm, resultLimit, currentOffset);
	$.get(apiUrl, function(data) {
		processResults(data);
	});
}

function createCharacterIdList(data) {
	var characterList = "",
		resultsList = data.data.results;

	$(resultsList).each(function(result) {
		var resultData = $(this)[0];
		characterList = characterList + resultData.id + ",";
	});

	currentCharacterList = characterList;
} 

function processResults(data) {
	var totalResults = data.data.total,
		resultsList = data.data.results;

	totalPages = Math.ceil(totalResults/resultLimit);

	$(".spinner").addClass("hide"); //remove spinner
	$(resultsList).each(function(result) {
		var resultData = $(this);
		if (resultData[0].images[0] !== undefined && resultData[0].images[0].path !== undefined) {
			var resultImage = resultData[0].images[0].path + "." + resultData[0].images[0].extension;
		} else {
			//no image available
			var resultImage = "http://bwconner.com/comiccollector/images/noimage.png";
		}

		var resultTitle = resultData[0].title,
			resultId = resultData[0].id;

		var markup = buildResultMarkup(resultTitle, resultImage, resultSeries, resultIssueNumber, resultDescription, featuredCharacters, resultCreators, resultId);


		$(".results").append(markup);
	});

	if (totalPages > 1) {
		$(".pagination").removeClass("hide");
	}
}

function buildResultMarkup(resultTitle, resultImage, resultId) {
		var data = { 
			image: resultImage,
			title: resultTitle,
			comicId: resultId
		};

		var template = $("#result-template").html();
		var html = Mustache.render(template, data);

		return html;
}

function gotoPage(newPage) {
	currentOffset = newPage * resultLimit;
	reloadResults();
}

$(document).ready(function() {

	//Advanced Options
	$(".advanced-search-options-show").on("click", function() {
		$(".advanced-search-options-wrapper").addClass("show");
	});

	$(".advanced-search-option select").on("change", function() {
		setAdvancedSearchOptions($(this).attr("name"), $(this).val());
	});

	//Pagination events
	$(".page-selector").on("click", function() {
		gotoPage($(this).attr("data-page"));
	});

	$(".prev").on("click", function() {
		currentPage = currentPage - 1;

		if (currentPage === 1) {
			//Do Nothing, this button should be hidden
		} else {
			gotoPage(currentPage - 1);
		}

	});

	$(".next").on("click", function() {
		currentPage = currentPage + 1;

		if (currentPage === totalPages) {
			//Do Nothing, this button should be hidden
		} else {
			gotoPage(currentPage + 1);
		}

	});

	//Initiate search events
	$(document).keypress(
		function(e) {
		if(e.keyCode == 13) {
			$(".search").click();
		}
	});

	$(".search").on("click", function() {
		//Reset global search terms
		currentSearchTerm = $(".search-by-title").val();
		currentSearchCharacter = $(".search-by-character").val();
		getResults();
	});

});

