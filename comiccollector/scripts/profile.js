function retriveUserData (userID) {

	//verify userId is same as one in cookie and not someone medling with the DOM
	//if (userID !== parseUserCookie("ccuid")) {
	//	return; //don't retrieve data 
	//}

	var data = "userID=" + userID;

	$.ajax({
		data: data,
		type: "post",
		url: "../phpscripts/getprofiledatasql.php",
		success: function(data){
			parseUserData(data);
		}
	});
}

function parseUserData (userData) {
	var userData = userData.split("&"),
		username = userData[0].split("=")[1],
		firstname = userData[1].split("=")[1],
		character = userData[2].split("=")[1],
		description = userData[3].split("=")[1],
		imageSrc = userData[4].split("=")[1];

	buildProfileMarkup(username, firstname, character, description, imageSrc);
}

function buildProfileMarkup (username, firstname, character, description, imageSrc) {
	$(".username").html(username);
	$(".first-name").html(firstname);
	$(".favorite-character").html(character);
	$(".user-description").html(description);
	$(".profile-image").attr("src", imageSrc);
}

function displayEditProfile () {
	$(".profile-information .hide").removeClass("hide");
	$(".edit-profile").addClass("hide");
}

//Check if a logged in cookie exists
function checkForAccountCookie (event) {
	event.preventDefault();

	if (document.cookie.length > 0) {
		var cookieName = "ccuid";
		cookieStart = document.cookie.indexOf(cookieName + "=");
		if (cookieStart != -1) {
			cookieStart = cookieStart + cookieName.length + 1;
			cookieEnd = document.cookie.indexOf(";", cookieStart);
			if (cookieEnd == -1) {
				cookieEnd = document.cookie.length;
			}
			var cookieValue = unescape(document.cookie.substring(cookieStart, cookieEnd));
			verifyAccountCookie(cookieValue);
		}
	}
}

//Verify logged in cookie data against DB before allowing an edit
function verifyAccountCookie (cookieValue) {
	$.ajax({
		data: cookieValue,
		type: "post",
		url: "../phpscripts/verifyloginsql.php",
		success: function(data){
			if (data == "true") {
				displayEditProfile(cookieValue);
			} else {
				console.log("login verified");
			}
		}
	});
}

function updateAccount (newUserID) {
	var userCookieID = createNewToken(),
		data = "username=" + $(".username").text() + "&userID=" + $("body").attr("data-userid") + "&firstname=" + $(".firstname-field").val() + "&favoriteCharacter=" + $(".favorite-character-field").val() + "&profileText=" + $(".user-description-field").val();

	console.log(data);

	$.ajax({
		data: data,
		type: "post",
		url: "../phpscripts/updateaccountsql.php",
		success: function(data){
			alert("hey");
		}
	});
}



$(document).ready(function() {
	//if viewing my account page
	$(document).on('login-verified', function(){
		if ($("body").hasClass("my-account")) {
			var userID = $("body").attr("data-userid");
			retriveUserData(userID);
		}
	});

	//if viewing another user profile
	if ($("body").hasClass("user-profile")) {
		var pageUrl = window.location.href,
			profileID = pageUrl.split("profileId=");
		retriveUserData(profileID[1]);
	}

	$(".edit-profile").on("click", function() {
		//verify userId is same as one in cookie and not someone medling with the DOM
		//if (userID === parseUserCookie("ccuid")) {
			checkForAccountCookie(event);
		//}
	});

	$(".submit-edit").on("click", function() {
		updateAccount();
	});

});