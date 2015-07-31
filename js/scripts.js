$(document).ready(function() {

	alert("Document is ready!");
	$(".comment-box").on("keyup", function() {
		console.log("keyup happened");
		var charCount = $(".comment-box").val().length;
		console.log(charCount);
		$("#char-count").html(charCount);
		if(charCount > 50) {
			$("#char-count").css("color", "red");
		} else{
			$("#char-count").css("color", "black");
		};
	});

	$(".message-box").css("background-color", "yellow");
	$("#button").on("click", function(){
	// now we're going to work in here
		console.log("clicked");

		var comment = $(".comment-box").val();
		console.log(comment)
		$("#visible-comment").html(comment);
		return false;
	}); // here we close the doc ready. no more code below here */

});	

