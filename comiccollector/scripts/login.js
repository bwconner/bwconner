function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}


function postCreateAccount (params) {
    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "../snippets/testpost.php");
console.log(params);
    for(var key in params) {

        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            console.log(key);
            console.log(params[key]);
            alert("check");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

function ajaxTest () {
	var data = $("#form").serialize();
	console.log(data);
	  $.ajax({
	         data: data,
	         type: "post",
	         url: "../snippets/testpost.php",
	         success: function(data){
	              alert("Data Save: " + data);
	         }
	});
}

$(document).ready(function() {

	$('.create-account').on('click', function() {
		alert("hey");
		var params = {
			firstname: $('.firstname').val(),
			username: $('.username').val(),
			password: $('.password').val(),
			email: $('.email').val()
		};

		ajaxTest(params);
	});

});

