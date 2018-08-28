var turn_I = 1; // 1 = X , 2 = O
var isPlaying_I = 0; // 0 = not playing , 1 = playing
var table_I = [0,0,0,0,0,0,0,0,0]; // 0 = khali , 1 = X , 2 = O
var filled_I = [0,0,0,0,0,0,0,0,0]; // 0 = khali , 1 = por
var winner_I = 'unknown';

const x = '<img src="img/x.png" class="xoIcon">';
const o = '<img src="img/o.png" class="xoIcon">';

const cell0_I = $('#I-gamePlay #0-cell');
const cell1_I = $('#I-gamePlay #1-cell');
const cell2_I = $('#I-gamePlay #2-cell');
const cell3_I = $('#I-gamePlay #3-cell');
const cell4_I = $('#I-gamePlay #4-cell');
const cell5_I = $('#I-gamePlay #5-cell');
const cell6_I = $('#I-gamePlay #6-cell');
const cell7_I = $('#I-gamePlay #7-cell');
const cell8_I = $('#I-gamePlay #8-cell');

doTurnX(0, cell0_I);
doTurnX(1, cell1_I);
doTurnX(2, cell2_I);
doTurnX(3, cell3_I);
doTurnX(4, cell4_I);
doTurnX(5, cell5_I);
doTurnX(6, cell6_I);
doTurnX(7, cell7_I);
doTurnX(8, cell8_I);

function doTurnX(num028, cellId){
	$(cellId).click(function() {
		if(turn_I == 1 && table_I[num028] == 0 && filled_I[num028] == 0){
			isPlaying_I = 1;

			cellId.html(x);
			table_I[num028] = 1;
			filled_I[num028] = 1;

			checkDraw_I();
			checkWinX_I();

			if(isPlaying_I == 1){
				turn_I = 2;
				attO();
			}
		}
	});
}

function attO() {
	isPlaying_I = 1;
	if(table_I[0] == 2 && table_I[1] == 2 && filled_I[2] == 0){
			cell2_I.html(o);
			table_I[2] = 2;
			filled_I[2] = 1;
			checkWinO_I("horTop showWinnerLine100");
	}
	else if(table_I[1] == 2 && table_I[2] == 2 && filled_I[0] == 0){
			cell0_I.html(o);
			table_I[0] = 2;
			filled_I[0] = 1;
			checkWinO_I("horTop showWinnerLine100");
	}
	else if(table_I[0] == 2 && table_I[2] == 2 && filled_I[1] == 0){
			cell1_I.html(o);
			table_I[1] = 2;
			filled_I[1] = 1;
			checkWinO_I("horTop showWinnerLine100");
	}
	else if(table_I[3] == 2 && table_I[4] == 2 && filled_I[5] == 0){
			cell5_I.html(o);
			table_I[5] = 2;
			filled_I[5] = 1;
			checkWinO_I("horMiddle showWinnerLine100");
	}
	else if(table_I[4] == 2 && table_I[5] == 2 && filled_I[3] == 0){
			cell3_I.html(o);
			table_I[3] = 2;
			filled_I[3] =1
			checkWinO_I("horMiddle showWinnerLine100");
	}
	else if(table_I[3] == 2 && table_I[5] == 2 && filled_I[4] == 0){
			cell4_I.html(o);
			table_I[4] = 2;
			filled_I[4] = 1;
			checkWinO_I("horMiddle showWinnerLine100");
	}
	else if(table_I[6] == 2 && table_I[7] == 2 && filled_I[8] == 0){
			cell8_I.html(o);
			table_I[8] = 2;
			filled_I[8] = 1;
			checkWinO_I("horBottom showWinnerLine100");
	}
	else if(table_I[7] == 2 && table_I[8] == 2 && filled_I[6] == 0){
			cell6_I.html(o);
			table_I[6] = 2;
			filled_I[6] = 1;
			checkWinO_I("horBottom showWinnerLine100");
	}
	else if(table_I[6] == 2 && table_I[8] == 2 && filled_I[7] == 0){
			cell7_I.html(o);
			table_I[7] = 2;
			filled_I[7] = 1;
			checkWinO_I("horBottom showWinnerLine100");
	}
	else if(table_I[0] == 2 && table_I[3] == 2 && filled_I[6] == 0){
			cell6_I.html(o);
			table_I[6] = 2;
			filled_I[6] = 1;
			checkWinO_I("verLeft showWinnerLine100");
	}
	else if(table_I[3] == 2 && table_I[6] == 2 && filled_I[0] == 0){
			cell0_I.html(o);
			table_I[0] = 2;
			filled_I[0] = 1;
			checkWinO_I("verLeft showWinnerLine100");
	}
	else if(table_I[0] == 2 && table_I[6] == 2 && filled_I[3] == 0){
			cell3_I.html(o);
			table_I[3] = 2;
			filled_I[3] = 1;
			checkWinO_I("verLeft showWinnerLine100");
	}
	else if(table_I[1] == 2 && table_I[4] == 2 && filled_I[7] == 0){
			cell7_I.html(o);
			table_I[7] = 2;
			filled_I[7] = 1;
			checkWinO_I("verMiddle showWinnerLine100");
	}
	else if(table_I[4] == 2 && table_I[7] == 2 && filled_I[1] == 0){
			cell1_I.html(o);
			table_I[1] = 2;
			filled_I[1] = 2;
			checkWinO_I("verMiddle showWinnerLine100");
	}
	else if(table_I[1] == 2 && table_I[7] == 2 && filled_I[4] == 0){
			cell4_I.html(o);
			table_I[4] = 2;
			filled_I[4] = 1;
			checkWinO_I("verMiddle showWinnerLine100");
	}
	else if(table_I[2] == 2 && table_I[5] == 2 && filled_I[8] == 0){
			cell8_I.html(o);
			table_I[8] = 2;
			filled_I[8] = 1;
			checkWinO_I("verRight showWinnerLine100");
	}
	else if(table_I[5] == 2 && table_I[8] == 2 && filled_I[2] == 0){
			cell2_I.html(o);
			table_I[2] = 2;
			filled_I[2] = 1;
			checkWinO_I("verRight showWinnerLine100");
	}
	else if(table_I[2] == 2 && table_I[8] == 2 && filled_I[5] == 0){
			cell5_I.html(o);
			table_I[5] = 2;
			filled_I[5] = 2;
			checkWinO_I("verRight showWinnerLine100");
	}
	else if(table_I[0] == 2 && table_I[4] == 2 && filled_I[8] == 0){
			cell8_I.html(o);
			table_I[8] = 2;
			filled_I[8] = 1;
			checkWinO_I("diaLeftTop showWinnerLine120");
	}
	else if(table_I[4] == 2 && table_I[8] == 2 && filled_I[0] == 0){
			cell0_I.html(o);
			table_I[0] = 2;
			filled_I[0] = 1;
			checkWinO_I("diaLeftTop showWinnerLine120");
	}
	else if(table_I[0] == 2 && table_I[8] == 2 && filled_I[4] == 0){
			cell4_I.html(o);
			table_I[4] = 2;
			filled_I[4] = 1;
			checkWinO_I("diaLeftTop showWinnerLine120");
	}
	else if(table_I[2] == 2 && table_I[4] == 2 && filled_I[6] == 0){
			cell6_I.html(o);
			table_I[6] = 2;
			filled_I[6] = 1;
			checkWinO_I("diaRightTop showWinnerLine120");
	}
	else if(table_I[4] == 2 && table_I[6] == 2 && filled_I[2] == 0){
			cell2_I.html(o);
			table_I[2] = 2;
			filled_I[2] = 1;
			checkWinO_I("diaRightTop showWinnerLine120");
	}
	else if(table_I[2] == 2 && table_I[6] == 2 && filled_I[4] == 0){
			cell4_I.html(o);
			table_I[4] = 2;
			filled_I[4] = 1
			checkWinO_I("diaRightTop showWinnerLine120");
	}
	else{
		defO();
	}
}

function defO(){
	isPlaying_I = 1;
	if(table_I[0] == 1 && table_I[1] == 1 && filled_I[2] == 0){
			cell2_I.html(o);
			table_I[2] = 2;
			filled_I[2] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[1] == 1 && table_I[2] == 1 && filled_I[0] == 0){
			cell0_I.html(o);
			table_I[0] = 2;
			filled_I[0] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[0] == 1 && table_I[2] == 1 && filled_I[1] == 0){
			cell1_I.html(o);
			table_I[1] = 2;
			filled_I[1] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[3] == 1 && table_I[4] == 1 && filled_I[5] == 0){
			cell5_I.html(o);
			table_I[5] = 2;
			filled_I[5] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[4] == 1 && table_I[5] == 1 && filled_I[3] == 0){
			cell3_I.html(o);
			table_I[3] = 2;
			filled_I[3] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[3] == 1 && table_I[5] == 1 && filled_I[4] == 0){
			cell4_I.html(o);
			table_I[4] = 2;
			filled_I[4] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[6] == 1 && table_I[7] == 1 && filled_I[8] == 0){
			cell8_I.html(o);
			table_I[8] = 2;
			filled_I[8] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[7] == 1 && table_I[8] == 1 && filled_I[6] == 0){
			cell6_I.html(o);
			table_I[6] = 2;
			filled_I[6] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[6] == 1 && table_I[8] == 1 && filled_I[7] == 0){
			cell7_I.html(o);
			table_I[7] = 2;
			filled_I[7] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[0] == 1 && table_I[3] == 1 && filled_I[6] == 0){
			cell6_I.html(o);
			table_I[6] = 2;
			filled_I[6] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[3] == 1 && table_I[6] == 1 && filled_I[0] == 0){
			cell0_I.html(o);
			table_I[0] = 2;
			filled_I[0] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[0] == 1 && table_I[6] == 1 && filled_I[3] == 0){
			cell3_I.html(o);
			table_I[3] = 2;
			filled_I[3] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[1] == 1 && table_I[4] == 1 && filled_I[7] == 0){
			cell7_I.html(o);
			table_I[7] = 2;
			filled_I[7] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[4] == 1 && table_I[7] == 1 && filled_I[1] == 0){
			cell1_I.html(o);
			table_I[1] = 2;
			filled_I[1] = 1;
			turn_I = 1;
			checkDraw_I();
	}
	else if(table_I[1] == 1 && table_I[7] == 1 && filled_I[4] == 0){
			cell4_I.html(o);
			table_I[4] = 2;
			filled_I[4] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[2] == 1 && table_I[5] == 1 && filled_I[8] == 0){
			cell8_I.html(o);
			table_I[8] = 2;
			filled_I[8] = 2;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[5] == 1 && table_I[8] == 1 && filled_I[2] == 0){
			cell2_I.html(o);
			table_I[2] = 2;
			filled_I[2] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[2] == 1 && table_I[8] == 1 && filled_I[5] == 0){
			cell5_I.html(o);
			table_I[5] = 2;
			filled_I[5] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[0] == 1 && table_I[4] == 1 && filled_I[8] == 0){
			cell8_I.html(o);
			table_I[8] = 2;
			filled_I[8] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[4] == 1 && table_I[8] == 1 && filled_I[0] == 0){
			cell0_I.html(o);
			table_I[0] = 2;
			filled_I[0] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[0] == 1 && table_I[8] == 1 && filled_I[4] == 0){
			cell4_I.html(o);
			table_I[4] = 2;
			filled_I[4] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[2] == 1 && table_I[4] == 1 && filled_I[6] == 0){
			cell6_I.html(o);
			table_I[6] = 2;
			filled_I[6] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[4] == 1 && table_I[6] == 1 && filled_I[2] == 0){
			cell2_I.html(o);
			table_I[2] = 2;
			filled_I[2] = 1;
			checkDraw_I();
			turn_I = 1;
	}
	else if(table_I[2] == 1 && table_I[6] == 1 && filled_I[4] == 0){
			cell4_I.html(o);
			table_I[4] = 2;
			filled_I[4] = 1
			checkDraw_I();
			turn_I = 1;
	}
	else{
		generateRndmCell();
	}
}

function generateRndmCell() {
	if(isPlaying_I == 1){
		randomEmptyCell();
		function randomEmptyCell(){
			var randomNum = Math.floor(Math.random() * 9);
			if(filled_I[randomNum] == 0){
				doTurnRndmO(randomNum);
				return randomNum;
			}
			else{
				if(checkDraw_I() == true){
					isPlaying_I = 0;
					$('#I-gamePlay .conditionPart').show();
					$('#I-gamePlay #realPlayerPart .conditionPart').css({
						'background-color': '#ffffff'
					});
					$('#I-gamePlay #computerPart .conditionPart').css({
						'background-color': '#ffffff'
					});
					$('#I-gamePlay #realPlayerPart .XorO p').css({
						'color': '#ffffff'
					});
					$('#I-gamePlay #computerPart .XorO p').css({
						'color': '#ffffff'
					});
				}
				else{
					randomEmptyCell();
				}
			}
		}
		function doTurnRndmO(randomNum){
			$(`#I-gamePlay #${randomNum}-cell`).html(o);
			table_I[randomNum] = 2;
			filled_I[randomNum] = 1;
			checkDraw_I();
			turn_I = 1;
		}
	}
}

function checkDraw_I(){
	var draw = true;
	for (i = 0 ; i < 9 ; i++) {
		if (filled_I[i] == 0) {
			draw = false;
			break;
			return false;
		}
	}
	if (draw == true){
		isPlaying_I = 0;

		$('#I-gamePlay .conditionPart').show();
		$('#I-gamePlay #realPlayerPart .conditionPart').css({
			'background-color': '#ffffff'
		});
		$('#I-gamePlay #computerPart .conditionPart').css({
			'background-color': '#ffffff'
		});
		$('#I-gamePlay #realPlayerPart .XorO p').css({
			'color': '#ffffff'
		});
		$('#I-gamePlay #computerPart .XorO p').css({
			'color': '#ffffff'
		});
		return true;
	}
}

function checkWinX_I(a){
	if(table_I[0] == 1 && table_I[1] == 1 && table_I[2] == 1){ // horTop
		xWins_I("horTop showWinnerLine100");
	}
	else if(table_I[3] == 1 && table_I[4] == 1 && table_I[5] == 1){ // horMiddle
		xWins_I("horMiddle showWinnerLine100");
	}
	else if(table_I[6] == 1 && table_I[7] == 1 && table_I[8] == 1){ // horBottom
		xWins_I("horBottom showWinnerLine100");
	}
	else if(table_I[0] == 1 && table_I[3] == 1 && table_I[6] == 1){ // verLeft
		xWins_I("verLeft showWinnerLine100");
	}
	else if(table_I[1] == 1 && table_I[4] == 1 && table_I[7] == 1){ // verMiddle
		xWins_I("verMiddle showWinnerLine100");
	}
	else if(table_I[2] == 1 && table_I[5] == 1 && table_I[8] == 1){ // verRight
		xWins_I("verRight showWinnerLine100");
	}
	else if(table_I[0] == 1 && table_I[4] == 1 && table_I[8] == 1){ // diaLeftTop
		xWins_I("diaLeftTop showWinnerLine120");
	}
	else if(table_I[2] == 1 && table_I[4] == 1 && table_I[6] == 1){ // diaRightTop
		xWins_I("diaRightTop showWinnerLine120");
	}
}

function xWins_I(a){
	$("#I-gamePlay .winnerLine").show();
	$("#I-gamePlay .winnerLine").addClass(a);

	$('#I-gamePlay .conditionPart').show();
	$('#I-gamePlay #realPlayerPart .conditionPart').css({
		'background-color': '#00B16A' //green
	});
	$('#I-gamePlay #computerPart .conditionPart').css({
		'background-color': '#D91E18' //red
	});
	$('#I-gamePlay #realPlayerPart .XorO p').css({
		'color': '#00B16A' //green
	});
	$('#I-gamePlay #computerPart .XorO p').css({
		'color': '#D91E18' //red
	});

	for (var i = 0; i < 9; i++) {
		filled_I[i] = 1;
	}
	isPlaying_I = 0;
	winner_I = 'x';
}

function checkWinO_I(a){
	if (table_I[0] == 2 && table_I[1] == 2 && table_I[2] == 2 ||
		table_I[3] == 2 && table_I[4] == 2 && table_I[5] == 2 ||
		table_I[6] == 2 && table_I[7] == 2 && table_I[8] == 2 ||
		table_I[0] == 2 && table_I[3] == 2 && table_I[6] == 2 ||
		table_I[1] == 2 && table_I[4] == 2 && table_I[7] == 2 ||
		table_I[2] == 2 && table_I[5] == 2 && table_I[8] == 2 ||
		table_I[0] == 2 && table_I[4] == 2 && table_I[8] == 2 ||
		table_I[2] == 2 && table_I[4] == 2 && table_I[6] == 2 )
	{
		$("#I-gamePlay .winnerLine").show();
		$("#I-gamePlay .winnerLine").addClass(a);

		$('#I-gamePlay .conditionPart').show();
		$('#I-gamePlay #realPlayerPart .conditionPart').css({
			'background-color': '#D91E18' //red
		});
		$('#I-gamePlay #computerPart .conditionPart').css({
			'background-color': '#00B16A' //green
		});
		$('#I-gamePlay #computerPart .XorO p').css({
			'color': '#00B16A' //green
		});
		$('#I-gamePlay #realPlayerPart .XorO p').css({
			'color': '#D91E18' //red
		});

		for (var i = 0; i < 9; i++) {
			filled_I[i] = 1;
		}
		isPlaying_I = 0;
		winner_I = 'o';
		return true;
	}
	else{
		return false;
	}
}

//It'll be called when Back icon or Home icon or Reset icon is clicked
function reset_I(){
	for(var i=0; i < 9; i++){
		table_I[i] = 0;
		filled_I[i] = 0;
	}
	cell0_I.html("");
	cell1_I.html("");
	cell2_I.html("");
	cell3_I.html("");
	cell4_I.html("");
	cell5_I.html("");
	cell6_I.html("");
	cell7_I.html("");
	cell8_I.html("");

	if(isPlaying_I == 0 && winner_I == 'x'){
		turn_I = 1;
	}
	else if(isPlaying_I == 0 && winner_I == 'o'){
		turn_I = 2;
		attO();
	}
	else{
		temp = Math.floor(Math.random() * 2);
		if(temp == 0){
			turn_I = 1;
		}
		else{
			turn_I = 2;
			defO();
		}
	}

	$('#I-gamePlay .conditionPart').hide();
	$('#I-gamePlay #computerPart .XorO p, #I-gamePlay #realPlayerPart .XorO p').css({
		'color': '#ffffff'
	});

	$('#I-gamePlay .winnerLine').removeClass('horTop horMiddle horBottom verLeft verMiddle verRight diaLeftTop diaRightTop showWinnerLine100 showWinnerLine120');
	$('#I-gamePlay .winnerLine').hide();
}