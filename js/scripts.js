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


	var rows = $(".my-row");
	console.log(rows);
	//Makes every even row of the table pink and odd row white
	for(var i=0; i<rows.length; ++i) {
		if(i % 2 === 0) {
			$(rows[i]).css("background-color", "pink");
		} else{
			$(rows[i]).css("background-color", "white");
		};
	};


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

