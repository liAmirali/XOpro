const width = window.innerWidth
const height = window.innerHeight
$('#wrapper').css({
	'width': width + "px",
	'height': height + "px"
});

setInterval(function(){
	// const width = window.innerWidth
	// const height = window.innerHeight
	// $('#wrapper').css({
	// 	'width': width + "px",
	// 	'height': height + "px"
	// });


	if(width < height){
		$('#page-51 .nav , #page-52 .nav').show();
		$('#page-51 , #page-52').removeClass('lightBg');

		$('.rotatePhone').hide();
		$('#I-gamePlay , #II-gamePlay').show();
	}
	else{
		$('#page-51 .nav , #page-52 .nav').hide();
		$('#page-51 , #page-51').addClass('lightBg');

		$('.rotatePhone').show();
		$('#I-gamePlay , #II-gamePlay').hide();
	}
}, 100);