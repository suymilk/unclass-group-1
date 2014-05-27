// have elements of landing page fade in slowly
var fadeInSlow = function(thing) {
	$(thing).delay(2000).fadeIn("slow");
};

// make element sticky on scroll down by position: fixed
var makeSticky = function(thing) {
	$(thing).waypoint("sticky", {
		offset: 10
	});
};

// make previous element unsticky on scroll down, make next element sticky
var makeUnsticky = function(previousElem, nextElem) {
	$(nextElem).waypoint(function() {
		$(previousElem).waypoint("unsticky"); 
		}, { offset: 50});
		// $(previousElem).css("margin-top", "90%");
};

$(document).ready(function () {

	// fade in speech bubble first
	$(function() {
		$("#bubble2").delay(1000).fadeIn("slow");
	});

	// then the rest of the elements
	fadeInSlow("#byline");
	fadeInSlow("#teaser");
	fadeInSlow("#button");

	// scroll to intro page on button click
	$(function () {
		$("button").on("click", function() {
			$.scrollTo(".container", 800);
		});
	});	

	makeSticky("#sec1");

	makeUnsticky("#sec1", "#clear1");

	makeSticky("#sec2");

	makeUnsticky("#sec2", "#clear2");

	makeSticky("#sec3");

});




// use this for nav bar changes
// $(function() {
// 	$('.container').waypoint(function(direction) {
// 	  alert('Top of thing hit top of viewport.');
// 	});
// });