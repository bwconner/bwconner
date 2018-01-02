function addComicToCollection(comicId) {
	alert(comicId);
	var	data = "&userID=" + $("body").attr("data-userid") + "&comicId=" + comicId;

	$.ajax({
		data: data,
		type: "post",
		url: "../phpscripts/addcomictocollection.php",
		success: function(data){
			$(".first-name").html($(".firstname-field").val());
			$(".favorite-character").html($(".favorite-character-field").val());
			$(".user-description").html($(".user-description-field").val());

			$(".profile-information input").addClass("hide");
			$(".profile-information .submit-edit").addClass("hide");
			$(".edit-profile").removeClass("hide");
			$(".profile-information .edit-success").removeClass("hide");
		}
	});
}
$(document).ready(function() {
	$("body").on("click", ".add-to-collection", function() {
		addComicToCollection($(this).attr("data-comicid"));
	});
});
