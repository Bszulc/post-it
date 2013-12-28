//javascript
$(document).ready(function(){
	$(".note").draggable({containment: "document",
	start: function(e, ui) {
		$(this).css("background-color", "red"); //this is where we can put in the CSS that will correspond to a moving post-it (e.g. have the pin floating above the div, rather than tacking it to the board)
	},
	stop: function(e, ui) {
		$(this).css("background-color", "white"); //this sets the CSS back to normal
	},
	});
	$(".note").resizable({maxHeight: 400, maxWidth: 400, minHeight: 150, minWidth: 150, containment: "document" });
});