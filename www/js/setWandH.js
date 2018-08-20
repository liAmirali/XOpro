const width = window.innerWidth;
const height = window.innerHeight;
setTimeout( function() {
	const height_ = window.innerHeight;
}, 2000);
$('#wrapper').css({
	'width': width + "px",
	'height': height + (height_ - height) + "px"
});