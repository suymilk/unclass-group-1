$(document).ready(function () {
	$(function() {
		$("#bubble2").delay(1000).fadeIn("slow");
	});

	$(function() {
		$("#byline").delay(2000).fadeIn("slow");
	});

	$(function() {
		$("#teaser").delay(2000).fadeIn("slow");
	});

	$(function() {
		$("#button").delay(2000).fadeIn("slow");
	});

	$(function () {
		$("button").on("click", function() {
			$.scrollTo(".container", 800);
		});
	});	

	$("#sec1").waypoint("sticky", {
		offset: 50
	});

	$("#subhead2").waypoint(function() {
		$("#sec1").waypoint("unsticky")
	});

	$("#sec2").waypoint("sticky", {
		offset: 50
	});

	$("#subhead3").waypoint(function() {
		$("#sec2").waypoint("unsticky")
	});

	$("#sec3").waypoint("sticky", {
		offset: 50
	});

});




// use this for nav bar changes
// $(function() {
// 	$('.container').waypoint(function(direction) {
// 	  alert('Top of thing hit top of viewport.');
// 	});
// });