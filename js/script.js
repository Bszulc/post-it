//javascript
$(document).ready(function(){
	$(".note").draggable({containment: "document",
	start: function(e, ui) {
		$(this).css({"border-style": "solid", "border-width" : "2px", "border-color" : "#0096cd"}); //this is where we can put in the CSS that will correspond to a moving post-it (e.g. have the pin floating above the div, rather than tacking it to the board)
	},
	stop: function(e, ui) {
		$(this).css("border-style", "none"); //this sets the CSS back to normal
	},
	});
	$(".note").resizable({maxHeight: 400, maxWidth: 400, minHeight: 150, minWidth: 150, containment: "document" });
});