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
};

var popPill = function(wayPoint, navPoint) {
	$(wayPoint).waypoint(function(direction) {
		if (direction == "down") {
			$(navPoint).attr("src", "pics/poppedpill.png");
		}
		else {
			$(navPoint).attr("src", "pics/pinkpill.png");
		};
	});
};

var navbarScroll = function(clickImg, scrollToHere) {
	$(clickImg).on("click", function() {
		$.scrollTo(scrollToHere, 600, {
			offset: 10
		});
	});
};

$(document).ready(function () {

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

	popPill("#introVid", "#introVidPt");
	popPill("#container1", "#sec1");
	popPill("#container2", "#sec2");
	popPill("#container3", "#sec3");
	popPill("#container4", "#sec4");

	navbarScroll("#secIntro", "#introContainer");
	navbarScroll("#introVidPt", "#introVid");
	navbarScroll("#sec1", "#container1");
	navbarScroll("#sec2", "#container2");
	navbarScroll("#sec3", "#container3");
	navbarScroll("#sec4", "#container4");

	makeSticky("#sec1left");
	makeUnsticky("#sec1left", "#clear1");
	makeSticky("#sec2left");
	makeUnsticky("#sec2left", "#clear2");
	makeSticky("#sec3left");
	makeUnsticky("#sec3left", "#clear3")

});



// $(function() {
// 	$('#intro').waypoint(function(direction) {
// 	  $(".navbar").css("display", "block");
// 	});
// });