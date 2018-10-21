$(document).ready(function () {
	var tvshows = ["Gilmore Girls", "The Office", "How I Met Your Mother", "Sex and the City", "Gossip Girl", "Vampire Diaries", "Keeping Up with the Kardashians", "Two Broke Girls"];

    // Add buttons for original tv shows array
	function renderButtons() {
		$("#tvshow-buttons").empty();
		for (i = 0; i < tvshows.length; i++) {
			$("#tvshow-buttons").append("<button class='btn btn-success' data-tvshow='" + tvshows[i] + "'>" + tvshows[i] + "</button>");
    var a = $("<button>");
    // Adding a class of tvshow-btn to our button
    a.addClass("tvshow-btn");
    // Adding a data-attribute
    a.attr("data-name", tvshows[i]);
    // Providing the initial button text
    a.text(tvshows[i]);
    // Adding the button to the buttons-view div
    $("#tvshows-buttons").append(a);
  }
}
	renderButtons();
	// Adding a button for tvshows added, and pushing them onto the screen.
	$("#add-tvshow").on("click", function () {
		event.preventDefault();
		var tvshow = $("#tvshow-input").val().trim();
		tvshows.push(tvshow);
		renderButtons();
		return;
    });


	// Getting gifs from giphy api using key, we are able to add to our html
	$("button").on("click", function () {
		var tvshow = $(this).attr("data-tvshow");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
			tvshow + "&api_key=9xAij2fFU7XqpU1YbbTmxscrGP33Ml8o&limit=10"
//We use the "GET" method to query the data from the giphy api, and we document the response, as well as results such as 'rating.'
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function (response) {
			var results = response.data;
			$("#tvshows").empty();
//Making a fo loop that goes through results produced from giphy app, and puts each within a div, and then paragraph (for rating).
			for (var i = 0; i < results.length; i++) {
				var tvshowDiv = $("<div>");
				var p = $("<p>").text("Rating: " + results[i].rating);
				var tvshowImg = $("<img width=300 height=150>");
//Adding attributes to gif images, and appending them to the browser/screen. 
				tvshowImg.attr("src", results[i].images.original_still.url);
				tvshowImg.attr("data-still", results[i].images.original_still.url);
				tvshowImg.attr("data-animate", results[i].images.original.url);
				tvshowImg.attr("data-state", "still");
				tvshowImg.attr("class", "gif");
				tvshowDiv.append(p);
				tvshowDiv.append(tvshowImg);
				$("#tvshows").append(tvshowDiv);
			}
		});
	});
//We define our variables, and use an if statement to define when gifs should animate and when they should be still.
	function gifState(){
		var state = $(this).attr("data-state");
		var animateImage = $(this).attr("data-animate");
		var stillImage = $(this).attr("data-still");
//Defining if functions for state animate and still. Similar to Pausing Gifs exercise.
		if (state == "still") {
			$(this).attr("src", animateImage);
			$(this).attr("data-state", "animate");
		}

		else if (state == "animate") {
			$(this).attr("src", stillImage);
			$(this).attr("data-state", "still");
		}
	}
    $(document).on("click", ".gif", gifState);
});
