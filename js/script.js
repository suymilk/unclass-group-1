// have elements of landing page fade in slowly
var fadeInSlow = function(thing) {
	$(thing).delay(2000).fadeIn("slow");
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
			$(document.body).trigger("sticky_kit:recalc")

		}
		else {
			$(navPoint).attr("src", "pics/pinkpill.png");
			$(document.body).trigger("sticky_kit:recalc")
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

var autoPlay = function(wayPoint, video, pausePoint) {

	var myVideo = document.getElementById(video)

	$(wayPoint).waypoint(function() {
		myVideo.play();
	}, {
		triggerOnce: true
	});

	$(pausePoint).waypoint(function() {
		myVideo.pause();
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

	// make sure navbar stays on top of page except for landing
	$(function() {
		$(introContainer).waypoint(function(direction) {
			if (direction == "down") {
				$(".navbar").css("z-index", "100");
			} else {
				$(".navbar").css("z-index", "-1");
			}

		})
	});

	popPill("#container1", "#sec1");
	popPill("#container2", "#sec2");
	popPill("#container3", "#sec3");
	popPill("#container4", "#sec4");
	popPill("#container5", "#sec5");
	popPill("#container6", "#closingVidPt");

	navbarScroll("#secIntro", "#introContainer");
	navbarScroll("#sec1", "#container1");
	navbarScroll("#sec2", "#container2");
	navbarScroll("#sec3", "#container3");
	navbarScroll("#sec4", "#container4");
	navbarScroll("#sec5", "#container5");
	navbarScroll("#closingVidPt", "#container6");

	autoPlay("#introVid", "coupleintro", "#container1");
	autoPlay("#container1", "awomansissue", "#container2");
	autoPlay("#container2", "unequalinfo1", "#bottomvideo");
	autoPlay("#bottomvideo", "unequalinfo2", "#container3");
	autoPlay("#container3", "pfpcfc", "#container4");
	autoPlay("#container4", "powerpill", "#container5");
	autoPlay("#container5", "malebc", "#container6");
	autoPlay("#container6", "closing", "#clear6");

	$(function() {

		var myVideo = document.getElementById("closing")

		$(closingVid).waypoint(function() {
			myVideo.play();
		}, {
			triggerOnce: true
		});
	});
});