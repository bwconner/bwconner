function retriveUserData (userID) {
	var data = "userID=" + userID;
	console.log(data);
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
	var userData = userData.split("&");
	var username = userData[0].split("=")[1];
	var firstname = userData[1].split("=")[1];
	var character = userData[2].split("=")[1];
	var description = userData[3].split("=")[1];
	var imageSrc = userData[4].split("=")[1];

	buildProfileMarkup(username, firstname, character, description, imageSrc);
}

function buildProfileMarkup (username, firstname, character, description, imageSrc) {
	$(".username").html(username);
	$(".first-name").html(firstname);
	$(".favorite-character").html(character);
	$(".user-description").html(description);
	$(".profile-image").attr("src", imageSrc);
}

$(document).ready(function() {
	//if my account page
	$(document).on('login-verified', function(){
		if ($("body").hasClass("my-account")) {
			var userID = $("body").attr("data-userid");
			retriveUserData(userID);
		}
	});

	//if user profile
	if ($("body").hasClass("user-profile")) {
		var pageUrl = window.location.href;
		var profileID = pageUrl.split("profileId=");
		retriveUserData(profileID[1]);
	}

});