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
	$(".profile__username").html(username);
	$(".profile__first-name").html(firstname);
	$(".profile__favorite-character").html(character);
	$(".profile__user-description").html(description);
	$(".profile__profile-image").attr("src", imageSrc);
}

function displayEditProfile () {
	$(".profile__information input.hide").removeClass("hide");
	$(".profile__information .submit-edit.hide").removeClass("hide");
	$(".edit-profile").addClass("hide");

	//Add in existing text placeholders if they are filled in already
	$(".profile__first-name-field").val($(".profile__firstname").text());
	$(".profile__favorite-character-field").val($(".profile__favorite-character").text());
	$(".profile__user-description-field").val($(".profile__user-description").text());

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
		data = "username=" + $(".profile__username").text() + "&userID=" + $("body").attr("data-userid") + "&firstname=" + $(".profile__first-name-field").val() + "&favoriteCharacter=" + $(".profile__favorite-character-field").val() + "&profileText=" + $(".profile__user-description-field").val();

	$.ajax({
		data: data,
		type: "post",
		url: "../phpscripts/updateaccountsql.php",
		success: function(data){
			$(".profile__first-name").html($(".profile__first-name-field").val());
			$(".profile__favorite-character").html($(".profile__favorite-character-field").val());
			$(".profile__user-description").html($(".profile__user-description-field").val());

			$(".profile__information input").addClass("hide");
			$(".profile__information .submit-edit").addClass("hide");
			$(".edit-profile").removeClass("hide");
			$(".profile__information .edit-success").removeClass("hide");
		}
	});
}

$(document).ready(function() {
	//if viewing my account page
	$(document).on('login-verified', function(){
		if ($("body").hasClass("my-account")) {
			var userID = $("body").attr("data-userid");
			retriveUserData(userID);

			$(".profile__collection-link").attr("href", "/comiccollector/pages/collection?userid=" + userID);
			$(".profile__wishlist-link").attr("href", "/comiccollector/pages/wishlist?userid=" + userID);
		}
	});

	//if viewing another user profile
	if ($("body").hasClass("user-profile")) {
		var pageUrl = window.location.href,
			profileID = pageUrl.split("profileId=");

		retriveUserData(profileID[1]);

		$(".profile__collection-link").attr("href", "/comiccollector/pages/collection?userid=" + profileID[1]);
		$(".profile__wishlist-link").attr("href", "/comiccollector/pages/wishlist?userid=" + profileID[1]);
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