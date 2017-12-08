function retriveUserData (userID) {
	var data = "userID=" + userID;
	console.log(data);
	$.ajax({
		data: data,
		type: "post",
		url: "../phpscripts/getprofiledatasql.php",
		success: function(data){
			console.log(data);
		}
	});
}

$(document).ready(function() {
	$(document).on('login-verified', function(){
		if ($("body").hasClass("my-account")) {
			var userID = $("body").attr("data-userid");
			retriveUserData(userID);
		}
	});
});