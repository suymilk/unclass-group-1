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
		$(previousElem).addClass("unstuck");
		}, {offset: 40});
	// $(nextElem).waypoint(function() {
	// 	$(previousElem).waypoint("unsticky"); 
	// 	}, { offset: 50});
};

// make fixed element maintain before-fixed width
var stickyWidthFix = function() {
	var fixed = $(".col-md-6");
	var width = fixed.width();
	fixed.width(width);
}


$(document).ready(function () {

	var realheight = $("#sec1right");
	var height = realheight.height();
	var changeheight = $("#moving");
	changeheight.height(height);

	stickyWidthFix();

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

	makeSticky("#sec1left");

	makeUnsticky("#sec1left", "#clear1");

	makeSticky("#sec2left");

	makeUnsticky("#sec2left", "#clear2");

	makeSticky("#sec3left");

	makeUnsticky("#sec3left", "#clear3")

});




// use this for nav bar changes
// $(function() {
// 	$('.container').waypoint(function(direction) {
// 	  alert('Top of thing hit top of viewport.');
// 	});
// });