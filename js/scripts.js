
$(document).ready(function() {
	alert("Document is ready!");
	$(".message-box").css("background-color", "yellow");
	$("#button").on("click", function(){
	// now we're going to work in here
	// all the rest of our code still goes up here
	console.log("clicked");
	var comment = $(".comment-box").val();
	console.log(comment)
	$("#visible-comment").html(comment);
	//all your code goes in here
	return false;

});
});	// here we close the doc ready. no more code below here */

