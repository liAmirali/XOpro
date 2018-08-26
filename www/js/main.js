var temp;
var temp1;
var temp2;


// nav >>>

$('#page-31 , #page-32').show();

var navH = $('.nav').height();
$('.nav .iconNavHolder').css('width', navH + "px");

$('#page-31 , #page-32').hide();

// nav <<<





// page-info >>>

setTimeout(function(){
	$('#page-info').show()
}, 20);

setTimeout(function(){
	temp = $('#page-info .contactDeveloper .infoPart-nav > div:first-child').width();
	$('#page-info .contactDeveloper .infoPart-nav > div:last-child').css({
		'width': (temp + 70) + "px" // +70 reason: +10 because of right padding of h3 holder div
								    //             +60 because of beauty
	});

	// temp = $('#page-info .rateUs .infoPart-nav > div:first-child').width();
	// $('#page-info .rateUs .infoPart-nav > div:last-child').css({
	// 	'width': (temp + 70) + "px" // +70 reason: +10 because of right padding of h3 holder div
	// 							    //             +60 because of beauty
	// });

	temp = $('#page-info .infoPart-details .eachDetail .contactIcon').height();
	$('#page-info .contactDeveloper .infoPart-details .eachDetail .contactIcon').css({
		'width': temp + "px"
	});
	$('#page-info .infoPart-details .eachDetail .contactTxt').css({
		'width': (width - temp) + "px"
	});
}, 25);



setTimeout(function(){
	$('#page-info').hide()
}, 30);



$('#page-info .nav .backIconDiv .iconNavHolder').click(function(){
	$('#page-info').removeClass('slideInDown');
	$('#page-info').addClass('slideOutUp');

	$('#page-info .infoPart-nav .navUnderline').removeClass('showInfoNavUnderline');
	$('#page-info .infoPart-nav .navUnderline').addClass('hideInfoNavUnderline');

	$('#page-info .infoPart-nav h3').removeClass('slideInRight');
	$('#page-info .infoPart-nav h3').addClass('slideOutRight');

	setTimeout(function(){
		$('#page-info').hide();
	}, 1000);

	setTimeout(function(){
		$('#page-info .infoPart-nav h3').hide();
	}, 600);
});


// page-info <<<










// page-1 >>>

setTimeout( function() {
	$('#page-1').addClass('fadeOut');
}, 3000);
setTimeout( function() {
	$('#page-1').hide();
}, 3500);

setTimeout( function() {
	$('#page-2 .playerImgDiv img').addClass('mySlideInDown');
	$('#page-2 #playerOrPlayers div').addClass('showPlayerorPlayersLineAnim');
}, 3100);

// page-1 <<<













// page-2 >>>


$('#page-2 .nav .infoIconDiv .iconNavHolder').click(function(){
	$('#page-info').show();
	$('#page-info').removeClass('slideOutUp');
	$('#page-info').addClass('slideInDown');
	setTimeout(function(){
		$('#page-info .infoPart-nav .navUnderline').removeClass('hideInfoNavUnderline');
		$('#page-info .infoPart-nav .navUnderline').addClass('showInfoNavUnderline');
	}, 500);
	setTimeout(function(){
		$('#page-info .infoPart-nav h3').show();
		$('#page-info .infoPart-nav h3').removeClass('slideOutRight');
		$('#page-info .infoPart-nav h3').addClass('slideInRight');
	}, 600);
});


var playMode = 0;

$('#page-2 #onePlayer').click(function() {
	playMode = 1;

	$('#page-31').show();

	$('#page-2 #twoPlayer').addClass('slideOutLeft');
	$('#page-2 #playerOrPlayers div').addClass('hidePlayerorPlayersLineAnim');

	setTimeout(function(){
		$('#page-2 #twoPlayer').hide()
		$('#page-2 #playerOrPlayers').hide()
	}, 500);

	setTimeout(function(){
		$('#page-2 #onePlayer').css({
			'height':'90%',
			'transition':'0.5s'
		});
	}, 300);

	setTimeout(function(){
		$('#page-2').removeClass('slideInUp');
		$('#page-2').addClass('slideOutDown');
	}, 2000)

	setTimeout(function(){
		$('#page-2').hide();
	}, 3000);

	$('#page-31 #enterNameDiv #txtEnterName p').removeClass('mySlideInUp');
	$('#page-31 #enterNameDiv #inputEnterName input').removeClass('mySlideInUp');
	$('#page-31 #enterNameDiv #nextBtnEnterName').removeClass('zoomIn');

	setTimeout(function(){
		$('#page-31 #enterNameDiv #txtEnterName p').addClass('mySlideInUp');
		$('#page-31 #enterNameDiv #inputEnterName input').addClass('mySlideInUp');
		$('#page-31 #enterNameDiv #nextBtnEnterName').addClass('zoomIn');
	}, 2150);
});


var isPage32AnimationRunned = 0; //Line 122 and 270
$('#page-2 #twoPlayer').click(function() {
	playMode = 2;

	$('#page-32').show();

	$('#page-2 #onePlayer').addClass('slideOutRight');
	$('#page-2 #playerOrPlayers div').addClass('hidePlayerorPlayersLineAnim');

	setTimeout(function(){
		$('#page-2 #onePlayer').hide()
		$('#page-2 #playerOrPlayers').hide()
	}, 500);

	setTimeout(function(){
		$('#page-2 #twoPlayer').css({
			'height':'90%',
			'transition':'0.5s'
		});
	}, 300);

	setTimeout(function(){
		$('#page-2').addClass('slideOutDown');
	}, 2000)
	setTimeout(function(){
		$('#page-2').hide();
	}, 3000);

	if (isPage32AnimationRunned === 0){
		// Another if on line 270
		setTimeout(function(){
			$('#page-32 #enterNameDiv #playerOneEnterName p').addClass('mySlideInUp');
			$('#page-32 #enterNameDiv #playerOneEnterName input').addClass('mySlideInUp');
			$('#page-32 #enterNameDiv #nextBtnEnterName').addClass('zoomIn');
		}, 2150);
		isPage32AnimationRunned = 1;
	}
});

// page-2 <<<













// page-31 >>>

$('#page-31 .nav .backIconDiv .iconNavHolder').click(function(){
	$('#page-2').show();
	$('#page-2').removeClass('slideOutDown');
	$('#page-2').addClass('slideInUp');

	setTimeout(function(){
		playMode = 0;

		$('#page-31').hide();
	}, 1000);

	setTimeout(function(){
		$('#page-2 #twoPlayer').show();
		$('#page-2 #twoPlayer').removeClass('slideOutLeft');
		$('#page-2 #twoPlayer').addClass('slideInLeft');

		$('#page-2 #playerOrPlayers').show();
		$('#page-2 #playerOrPlayers div').removeClass('hidePlayerorPlayersLineAnim');
		$('#page-2 #playerOrPlayers div').addClass('showPlayerorPlayersLineAnim');
	}, 2000);

	setTimeout(function(){
		$('#page-2 #onePlayer').css({
			'height':'40%',
			'transition':'0.5s'
		});
	}, 1500);
});

$('#page-31 .nav .homeIconDiv .iconNavHolder').click(function(){
	$('#page-2').show();
	$('#page-2').removeClass('slideOutDown');
	$('#page-2').addClass('slideInUp');

	setTimeout(function(){
		playMode = 0;

		$('#page-31').hide();
	}, 1000);

	$('#page-2 #twoPlayer').show()
	$('#page-2 #twoPlayer').removeClass('slideOutLeft');
	$('#page-2 #twoPlayer').addClass('slideInLeft');

	$('#page-2 #playerOrPlayers').show()
	$('#page-2 #playerOrPlayers div').removeClass('hidePlayerorPlayersLineAnim');
	$('#page-2 #playerOrPlayers div').addClass('showPlayerorPlayersLineAnim');

	$('#page-2 #onePlayer').css({
		'height':'40%',
		'transition':'0.5s'
	});
});

$('#page-31 #nextBtnEnterName button').click(function(){
	var IplayerOneName = $('#page-31 #inputEnterName input').val();
	$('.IplayerOneNameP').text(IplayerOneName);

	if(IplayerOneName === ""){
		$('#page-31 #enterNameDiv input').css('border-bottom-color','#f03434');
		setTimeout(function(){
			$('#page-31 #enterNameDiv input').css('border-bottom-color','white');
		}, 4000);
	}
	else{
		$('#page-31 #enterNameDiv input').css('border-bottom-color','white');

		$('#page-41').show();

	 	$('#page-31').removeClass('slideInUp');
	 	$('#page-31').addClass('slideOutDown');

		setTimeout(function(){
			$('#page-31').hide();
		}, 1000)
		setTimeout(function(){
			$('#page-31').removeClass('slideOutDown');
		}, 2000)

		$('#page-31 #enterNameDiv p , #page-31 #enterNameDiv input').removeClass('mySlideInUp');
	}

});

// page-31 <<<










// page-32 >>>

var nameInput = 1;

$('#page-32 .nav .backIconDiv .iconNavHolder').click(function(){
	if(nameInput === 1){
		$('#page-2').show();
		$('#page-2').removeClass('slideOutDown');
		$('#page-2').addClass('slideInUp');

		setTimeout(function(){
			playMode = 0;

			$('#page-32').hide();
		}, 1000);

		setTimeout(function(){
			$('#page-2 #onePlayer').show();
			$('#page-2 #onePlayer').removeClass('slideOutRight');
			$('#page-2 #onePlayer').addClass('slideInRight');

			$('#page-2 #playerOrPlayers').show();
			$('#page-2 #playerOrPlayers div').removeClass('hidePlayerorPlayersLineAnim');
			$('#page-2 #playerOrPlayers div').addClass('showPlayerorPlayersLineAnim');
		}, 2000);

		setTimeout(function(){
			$('#page-2 #twoPlayer').css({
				'height':'40%',
				'transition':'0.5s'
			});
		}, 1500);

		nameInput = 1;
	}
	else{
		if(isPage32AnimationRunned === 1){
			// Another If On line 122
			$('#page-32 #enterNameDiv #playerOneEnterName p').removeClass('mySlideInUp');
			$('#page-32 #enterNameDiv #playerOneEnterName input').removeClass('mySlideInUp');
			$('#page-32 #enterNameDiv #nextBtnEnterName').removeClass('zoomIn');
			isPage32AnimationRunned = 0
		}

		$('#page-32 #enterNameDiv #playerOneEnterName').removeClass('slideOutLeft slideInLeft');
		$('#page-32 #enterNameDiv #playerTwoEnterName').removeClass('slideOutRight slideInRight');
		$('#page-32 #enterNameDiv #playerOneEnterName').addClass('slideInLeft');
		$('#page-32 #enterNameDiv #playerTwoEnterName').addClass('slideOutRight');

		setTimeout(function(){
			$('#page-32 #enterNameDiv #playerOneEnterName').show();
			$('#page-32 #enterNameDiv #playerTwoEnterName').hide();
		}, 200)

		nameInput = 1;
	}
});

$('#page-32 .nav .homeIconDiv .iconNavHolder').click(function(){
	$('#page-2').show();
	$('#page-2').removeClass('slideOutDown');
	$('#page-2').addClass('slideInUp');

	if(nameInput === 2){
		setTimeout(function(){
			$('#page-32 #enterNameDiv #playerOneEnterName').removeClass('slideOutLeft slideInLeft');
			$('#page-32 #enterNameDiv #playerTwoEnterName').removeClass('slideOutRight slideInRight');

			setTimeout(function(){
				$('#page-32 #enterNameDiv #playerOneEnterName').show();
				$('#page-32 #enterNameDiv #playerTwoEnterName').hide();
			}, 200)

			nameInput = 1;
		}, 1000);
	}

	setTimeout(function(){
		playMode = 0;

		$('#page-32').hide();
	}, 1000);

	$('#page-2 #onePlayer').show()
	$('#page-2 #playerOrPlayers').show()

	$('#page-2 #onePlayer').removeClass('slideOutRight');
	$('#page-2 #onePlayer').addClass('slideInRight');

	$('#page-2 #playerOrPlayers div').removeClass('hidePlayerorPlayersLineAnim');
	$('#page-2 #playerOrPlayers div').addClass('showPlayerorPlayersLineAnim');
	$('#page-2 #twoPlayer').css({
		'height':'40%',
		'transition':'0.5s'
	});
});

$('#page-32 #nextBtnEnterName button').click(function(){
	if(nameInput === 1){
		var IIplayerOneName = $('#page-32 #playerOneEnterName input').val();
		$('.IIplayerOneNameP').text(IIplayerOneName);

		if(IIplayerOneName === ""){
			$('#page-32 #enterNameDiv #playerOneEnterName input').css('border-bottom-color','#f03434');
		}
		else{
			$('#page-32 #enterNameDiv #playerOneEnterName input').css('border-bottom-color','white');

			$('#page-32 #enterNameDiv #playerOneEnterName').removeClass('slideOutLeft slideInLeft');
			$('#page-32 #enterNameDiv #playerTwoEnterName').removeClass('slideOutRight slideInRight');
			$('#page-32 #enterNameDiv #playerOneEnterName').addClass('slideOutLeft');
			$('#page-32 #enterNameDiv #playerTwoEnterName').addClass('slideInRight');

			setTimeout(function(){
				$('#page-32 #enterNameDiv #playerOneEnterName').hide();
				$('#page-32 #enterNameDiv #playerTwoEnterName').show();
			}, 350)

			nameInput = 2;
		}
	}
	else{
		var IIplayerTwoName = $('#page-32 #playerTwoEnterName input').val();
		$('.IIplayerTwoNameP').text(IIplayerTwoName);

		if(IIplayerTwoName === ""){
			$('#page-32 #enterNameDiv #playerTwoEnterName input').css('border-bottom-color','#f03434');
		}
		else{
			$('#page-32 #enterNameDiv #playerTwoEnterName input').css('border-bottom-color','white');

			$('#page-42').show();

			$('#page-32 #enterNameDiv #playerTwoEnterName').removeClass('slideInRight');

			$('#page-32').addClass('slideOutDown');
			setTimeout(function(){
				$('#page-32').hide();
			}, 1000)
			setTimeout(function(){
				$('#page-32').removeClass('slideOutDown');
			}, 2000)
		}
	}
});

// page-32 <<<











// page-41 >>>

$('#page-41 .nav .backIconDiv .iconNavHolder').click(function(){
	$('#page-31').show();
	$('#page-31').removeClass('slideOutDown');
	$('#page-31').addClass('slideInUp');

	$('#page-41').removeClass('slideInDown');

	setTimeout(function(){
		$('#page-41').hide();
	}, 1000);

	$('#page-31 #enterNameDiv #playerOneEnterName p').removeClass('mySlideInUp');
	$('#page-31 #enterNameDiv #playerOneEnterName input').removeClass('mySlideInUp');
	setTimeout(function(){
		$('#page-31 #enterNameDiv p').addClass('mySlideInUp');
		$('#page-31 #enterNameDiv input').addClass('mySlideInUp');
	}, 300);
});

$('#page-41 .nav .homeIconDiv .iconNavHolder').click(function(){
	$('#page-2').show();
	$('#page-2').removeClass('slideOutDown');
	$('#page-2').addClass('slideInUp');

	// $('#page-31').removeClass('slideOutDown');

	setTimeout(function() {
		playMode = 0;

		$('#page-41').hide();
	}, 1000);

	$('#playerOrPlayers div').removeClass('hidePlayerorPlayersLineAnim');
	$('#playerOrPlayers').show();
	$('#playerOrPlayers div').addClass('showPlayerorPlayersLineAnim');

	$('#page-2 #twoPlayer').removeClass('slideOutLeft');
	$('#page-2 #twoPlayer').show()
	$('#page-2 #twoPlayer').addClass('slideInLeft');

	$('#page-2 #onePlayer').css({
		'height':'40%',
		'transition':'0.5s'
	});
});

$('#page-41 .readyBtnDiv button').click(function(){
	$('#page-51').show();

	$('#page-41').removeClass('slideInDown');
	$('#page-41').addClass('slideOutUp');
	setTimeout(function(){
		$('#page-41').hide();
	}, 1000);
});

// page-41 <<<


// page-42 >>>

$('#page-42 .nav .backIconDiv .iconNavHolder').click(function(){
	// nameInput = 1;

	$('#page-32').show();
	$('#page-32').removeClass('slideOutDown');
	$('#page-32').addClass('slideInUp');

	setTimeout(function(){
		$('#page-42').hide();
	}, 1000);
});

$('#page-42 .nav .homeIconDiv .iconNavHolder').click(function() {

	$('#page-2').show();
	$('#page-2').removeClass('slideOutDown');
	$('#page-2').addClass('slideInUp');

	if(nameInput === 2){
		setTimeout(function(){
			$('#page-32 #enterNameDiv #playerOneEnterName').removeClass('slideOutLeft slideInLeft');
			$('#page-32 #enterNameDiv #playerTwoEnterName').removeClass('slideOutRight slideInRight');

			setTimeout(function(){
				$('#page-32 #enterNameDiv #playerOneEnterName').show();
				$('#page-32 #enterNameDiv #playerTwoEnterName').hide();
			}, 200)

			nameInput = 1;
		}, 1000);
	}

	setTimeout(function() {
		playMode = 0;

		$('#page-42').hide();
	}, 1000);

	$('#playerOrPlayers div').removeClass('hidePlayerorPlayersLineAnim');
	$('#playerOrPlayers').show();
	$('#playerOrPlayers div').addClass('showPlayerorPlayersLineAnim');

	$('#page-2 #onePlayer').removeClass('slideOutRight');
	$('#page-2 #onePlayer').show();;
	$('#page-2 #onePlayer').addClass('slideInRight');;

	$('#page-2 #twoPlayer').css({
		'height':'40%',
		'transition':'0.5s'
	});
});

$('#page-42 .readyBtnDiv button').click(function(){
	$('#page-52').show();

	$('#page-42').removeClass('slideInDown');
	$('#page-42').addClass('slideOutUp');
	setTimeout(function(){
		$('#page-42').hide();
	}, 1000);
});

// page-42 <<<












// page-51 >>>

// This code will work for #page-52 too
$('#page-51 , #page-52').show();

var XorOHeight = $('.resultDiv  .XorO').height();
$('#page-51 #I-gamePlay .XorO , #page-52 #II-gamePlay .XorO').css({
	'width': XorOHeight + "px"
});

temp1 = $('.resultDiv .XorO').width();
temp2 = $('.resultDiv .conditionPart').width();
temp = width - (temp1 + temp2) - 5; // -5 is because of the right-margin of .conditionParts
$('#page-51 #I-gamePlay .playerNamePart , #page-52 #II-gamePlay .playerNamePart').css({
	'width': temp + 'px'
});

var mainGameTableW = $('.mainGameTable').width();
$('.mainGameTable').css(
	'height' , mainGameTableW + 'px'
);

$('#page-51 , #page-52').hide();
// end of the same code for page-52

$('#page-51 .nav .backIconDiv .iconNavHolder').click(function(){
	$('#page-41').show();
	$('#page-41').removeClass('slideOutUp');
	$('#page-41').addClass('slideInDown');

	setTimeout(function(){
		$('#page-51').hide();
	}, 1000);
});

$('#page-51 .nav .homeIconDiv .iconNavHolder').click(function(){
	$('#page-2').show();
	$('#page-2').removeClass('slideOutDown');
	$('#page-2').addClass('slideInUp');

	setTimeout(function() {
		playMode = 0;

		$('#page-51').hide();
	}, 1000);

	$('#page-41').removeClass('slideOutUp');

	$('#playerOrPlayers div').removeClass('hidePlayerorPlayersLineAnim');
	$('#playerOrPlayers').show();
	$('#playerOrPlayers div').addClass('showPlayerorPlayersLineAnim');

	$('#page-2 #twoPlayer').removeClass('slideOutLeft');
	$('#page-2 #twoPlayer').show()
	$('#page-2 #twoPlayer').addClass('slideInLeft');

	$('#page-2 #onePlayer').css({
		'height':'40%',
		'transition':'0.5s'
	});
});

// page-51 <<<







// page-52 >>>

// There are some code in page-51 section that works for page-52 too
$('#page-52 .nav .backIconDiv .iconNavHolder').click(function(){
	$('#page-42').show();
	$('#page-42').removeClass('slideOutUp');
	$('#page-42').addClass('slideInDown');

	setTimeout(function(){
		$('#page-52').hide();
	}, 1000);
});

$('#page-52 .nav .homeIconDiv .iconNavHolder').click(function(){
	$('#page-2').show();
	$('#page-2').removeClass('slideOutDown');
	$('#page-2').addClass('slideInUp');

	setTimeout(function() {
		playMode = 0;

		$('#page-52').hide();
	}, 1000);

	$('#page-42').removeClass('slideOutUp');

	$('#playerOrPlayers div').removeClass('hidePlayerorPlayersLineAnim');
	$('#playerOrPlayers').show();
	$('#playerOrPlayers div').addClass('showPlayerorPlayersLineAnim');

	$('#page-2 #onePlayer').removeClass('slideOutRight');
	$('#page-2 #onePlayer').show()
	$('#page-2 #onePlayer').addClass('slideInRight');

	$('#page-2 #twoPlayer').css({
		'height':'40%',
		'transition':'0.5s'
	});
});

// page-52 <<<
