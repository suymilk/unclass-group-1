$(function() {
	$("#bubble2").delay(1000).fadeIn("slow");
});

$(function() {
	$(".byline").delay(2000).fadeIn("slow");
});

$(function() {
	$("#button").delay(2000).fadeIn("slow");
});

$('.thing').waypoint(function(direction) {
  alert('Top of thing hit top of viewport.');
});