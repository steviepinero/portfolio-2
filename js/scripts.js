
$(document).ready(function() {
	alert("Document is ready!");
	$(".message-box").css("background-color", "yellow");
});
	$("#button").on("click", function(){
	// now we're going to work in here
	console.log("clicked");
	return false;
	});
	$(".comment-box").on("keyup", function() { ...
		console.log("keyup happened"); //here we make sure we're catching the keyup

		// in here is where the rest of our code for this lesson will go
	});
	var comment = $(".comment-box").val();
	console.log(comment)
	$("#visible-comment").html(comment);


	// all the rest of our code still goes up here
	//all your code goes in here
	return false;

}); // here we close the doc ready. no more code below here */

});	

