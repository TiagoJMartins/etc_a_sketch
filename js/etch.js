$(document).ready(function(){

	$("<div/>", {
		"id": "wrapper"
	}).appendTo($("body"));

	var $wrapper = $("#wrapper");
	var $button = $("#reset");

	for (var i = 0; i < 16; i++) {
		var row = "<div>";

		for (j = 0; j < 16; j++) {
			row += '<div class="cell"></div>';
		}

		row += "</div>";

		$wrapper.append(row);
	}


	$(".cell").mouseenter(function() {

		$(this).css("background-color", "black");

	});


});

function genGrid(){

	$("#wrapper").remove();
	$("<div/>", {
		"id": "wrapper"
	}).appendTo($("body"));
	var rows = prompt("Insert the number of rows (2 - 28)");

	for (var i = 0; i < rows; i++) {
		var row = "<div>";

		for (j = 0; j < rows; j++) {
			row += '<div class="cell"></div>';
		}

		row += "</div>";

		$("#wrapper").append(row);
	}

	$(".cell").mouseenter(function() {

		$(this).css("background-color", "black");

	});

};