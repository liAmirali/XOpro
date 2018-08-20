const width = window.innerWidth;
const height = window.innerHeight;
console.log("height is : " + height);
$('#wrapper').css({
	'width': width + "px",
	'height': height + "px"
});
setTimeout( function() {
	const height_ = window.innerHeight;
	console.log("height_ is : " + height_);
	$('#wrapper').css({
		'height': height + (height_ - height) + "px"
	});
}, 2000);