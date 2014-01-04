//javascript
$(document).ready(function(){
	$(".note").draggable({containment: 'parent',
	start: function(e, ui) {
		$(this).css({"border-style": "solid", "border-width" : "2px", "border-color" : "#0096cd"}); //this is where we can put in the CSS that will correspond to a moving post-it (e.g. have the pin floating above the div, rather than tacking it to the board)
	},
	stop: function(e, ui) {
		$(this).css("border-style", "none"); //this sets the CSS back to normal
	},
	});
	$(".note").resizable({maxHeight: 400, maxWidth: 400, minHeight: 150, minWidth: 150, containment: "parent" });
	
	
	//This is just to give us an idea of what wecan accomplish. Unfortunatley this plug in allows you to edit the DOM, so clicking the note element in the browser will display the DOMS code. Eventually we need to use PHP
	//to make this work properly. 
	$('.note').editable({
    touch : true, // Whether or not to support touch (default true)
    lineBreaks : true, // Whether or not to convert \n to <br /> (default true)
    toggleFontSize : true, // Whether or not it should be possible to change font size (defualt true)
    closeOnEnter : false, // Whether or not pressing the enter key should close the editor (default false)
    event : 'click', // The event that triggers the editor
    callback : function( data ) {
        // Callback that will be called once the editor looses focus
        if( data.content ) {
            // Content has changed...
        }
        if( data.fontSize ) {
            // the font size is changed
        }
 
        // data.$el gives you a reference to the element that was edited
        data.$el.effect('blink');
    }
});
	
});