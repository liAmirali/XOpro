var width = window.innerWidth;
var height = window.innerHeight;
$('#wrapper').css({
	'width': width + "px",
	'height': height + "px"
});
setInterval(function(){
	width = window.innerWidth;
	height = window.innerHeight;
	$('#wrapper').css({
		'width': width + "px",
		'height': height + "px"
	});
}, 100);