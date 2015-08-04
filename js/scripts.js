var myKitties = [ { title: "First Project", pic: "https://www.petfinder.com/wp-content/uploads/2012/09/Blog-Kitty-Cam-solo.jpg" },
{ title: "Second Project", pic: "http://www.animal-photography.com/thumbs/red_tabby_long_hair_kitten_~AP-0UJFTC-TH.jpg" }, 
{ title: "Third Project", pic: "http://www.animal-photography.com/thumbs/silver_tabby_kittens~AP-0JO6Y9-TH.jpg" }, 
{ title: "Fourth Project", pic: "http://www.animal-photography.com/thumbs/silver_tabby_kitten_looking_up~AP-0DLVMB-TH.jpg" }
];

$(document).ready(function() {
	alert("Document is ready!");

	for(var i=0; i<myKitties.length; ++i) {
		$("#" + i).css("background-image", "url(" + myKitties[i].pic + ")" );
	};

	$(".image").mouseenter( function() {
		console.log(this);
		$(this).html("<p class='info'><span class='proj-title'>Title:</span>" + myKitties[this.id].title + "</p>");
	}).mouseleave( function() {
		$("p.info").html("");
	});

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

