
$(document).ready(function() {
	alert("Document is ready!");
	$(".message-box").css("background-color", "yellow");
	$("#button").on("click", function(){
	// now we're going to work in here
	console.log("clicked");
	return false;

	var comment = $(".comment-box").val();
	console.log(comment)
	$("#visible-comment").html(comment);


}); // here we close the doc ready. no more code below here */

});	

