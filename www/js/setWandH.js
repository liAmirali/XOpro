const width = window.innerWidth;
const height = window.innerHeight;
$("#debugLog1").text(height);
$('#wrapper').css({
	'width': width + "px",
	'height': height + "px"
});
setTimeout( function() {
	const height_ = window.innerHeight;
	$("#debugLog2").text(height_);
	console.log("height_ is : " + height_);
	$('#wrapper').css({
		'height': height + (height_ - height) + "px"
	});
}, 2000);