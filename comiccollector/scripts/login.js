function createNewAccountID () {
	var uniqueNumber = Math.floor(Math.random() * 90000000) + 10000000;
	var data = "uniqueid=" + uniqueNumber;

	 $.ajax({
		data: data,
		type: "post",
		url: "../snippets/uniqueuseridsql.php",
		success: function(data){
			if (data === "true") {
				createAccountAjax(uniqueNumber);
			} else {
				createNewAccountID();		
			}

		}
	});
}

function createAccountAjax (newUserID) {
	var data = $("#form").serialize() + "&userID=" + newUserID;

	  $.ajax({
		data: data,
		type: "post",
		url: "../snippets/createaccountsql.php",
		success: function(data){
			//Display Account Created Messaging
		}
	});
}

$(document).ready(function() {

	$('.create-account').on('click', function() {
		
		var params = {
			firstname: $('.firstname').val(),
			username: $('.username').val(),
			password: $('.password').val(),
			email: $('.email').val()
		};

		//Sanitize Inputs

		var newUserID = createNewAccountID();
	});

});

