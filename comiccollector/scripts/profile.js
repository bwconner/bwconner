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

function displayEditProfile () {
	$(".profile-information .hide").removeClass("hide");
	$(".edit-profile").addClass("hide");
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
		var pageUrl = window.location.href;
		var profileID = pageUrl.split("profileId=");
		retriveUserData(profileID[1]);
	}

	$(".edit-profile").on("click", function() {
		//verify userId is same as one in cookie and not someone medling with the DOM
		//if (userID === parseUserCookie("ccuid")) {
			displayEditProfile();
		//}
	});

});