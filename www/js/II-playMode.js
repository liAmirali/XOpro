temp = Math.floor(Math.random() * 2);
if(temp == 0){
	turn_II = 1;
	setConditionLine();
}
else{
	turn_II = 2;
	setConditionLine();
}
var isPlaying_II = 0; // 0 = not playing , 1 = playing
var table_II = [0,0,0,0,0,0,0,0,0]; // 0 = khali , 1 = X , 2 = O
var filled_II = [0,0,0,0,0,0,0,0,0]; // 0 = khali , 1 = por
var winner_II = 'unknown';

// X and O icon are already defined in "XO pro-I-PlayMode.js" , line 7 & 8

const cell0_II = $('#II-gamePlay #0-cell');
const cell1_II = $('#II-gamePlay #1-cell');
const cell2_II = $('#II-gamePlay #2-cell');
const cell3_II = $('#II-gamePlay #3-cell');
const cell4_II = $('#II-gamePlay #4-cell');
const cell5_II = $('#II-gamePlay #5-cell');
const cell6_II = $('#II-gamePlay #6-cell');
const cell7_II = $('#II-gamePlay #7-cell');
const cell8_II = $('#II-gamePlay #8-cell');

doTurn(0, cell0_II);
doTurn(1, cell1_II);
doTurn(2, cell2_II);
doTurn(3, cell3_II);
doTurn(4, cell4_II);
doTurn(5, cell5_II);
doTurn(6, cell6_II);
doTurn(7, cell7_II);
doTurn(8, cell8_II);

function doTurn(num028, cellId){
	$(cellId).click(function() {
		if(table_II[num028] == 0 && filled_II[num028] == 0){
			if(turn_II == 1){ // "X"
				isPlaying_II = 1;

				filled_II[num028] = 1;
				table_II[num028] = 1;
				console.log("table_II : " + table_II);
				cellId.html(x);

				checkWinX_II();
				checkDraw_II();

				if(isPlaying_II == 1){
					turn_II = 2;
					setConditionLine();
				}
			}
			else{ // turn_II is 2 "O"
				isPlaying_II = 1;

				filled_II[num028] = 1;
				table_II[num028] = 2;
				console.log("table_II : " + table_II);
				cellId.html(o);

				checkWinO_II();	
				checkDraw_II();

				if(isPlaying_II == 1){
					turn_II = 1;
					setConditionLine();
				}
			}
		}
	});
}

function checkWinX_II() {
	if (table_II[0] == 1 && table_II[1] == 1 && table_II[2] == 1 ||
		table_II[3] == 1 && table_II[4] == 1 && table_II[5] == 1 ||
		table_II[6] == 1 && table_II[7] == 1 && table_II[8] == 1 ||
		table_II[0] == 1 && table_II[3] == 1 && table_II[6] == 1 ||
		table_II[1] == 1 && table_II[4] == 1 && table_II[7] == 1 ||
		table_II[2] == 1 && table_II[5] == 1 && table_II[8] == 1 ||
		table_II[0] == 1 && table_II[4] == 1 && table_II[8] == 1 ||
		table_II[2] == 1 && table_II[4] == 1 && table_II[6] == 1 )
	{	
		for (var i = 0; i < 9; i++) {
			filled_II[i] = 1
		}
		isPlaying_II = 0;
		winner_II = 'x';
		setConditionLine();
		return true;
	}
	else{
		return false;
	}
}

function checkWinO_II() {
	if (table_II[0] == 2 && table_II[1] == 2 && table_II[2] == 2 ||
		table_II[3] == 2 && table_II[4] == 2 && table_II[5] == 2 ||
		table_II[6] == 2 && table_II[7] == 2 && table_II[8] == 2 ||
		table_II[0] == 2 && table_II[3] == 2 && table_II[6] == 2 ||
		table_II[1] == 2 && table_II[4] == 2 && table_II[7] == 2 ||
		table_II[2] == 2 && table_II[5] == 2 && table_II[8] == 2 ||
		table_II[0] == 2 && table_II[4] == 2 && table_II[8] == 2 ||
		table_II[2] == 2 && table_II[4] == 2 && table_II[6] == 2 )
	{
		for (var i = 0; i < 9; i++) {
			filled_II[i] = 1
		}
		isPlaying_II = 0;
		winner_II = 'o';
		setConditionLine();
		return true;
	}
	else{	
		return false;
	}
}

function checkDraw_II() {
	draw = true;
	for (i = 0 ; i < 9 ; i++) {
		if (table_II[i] == 0) {
			draw = false;
			break;
		}
	}
	if (draw == true){
		console.log("Draw!");
		isPlaying_II = 0;
		winner_II = 'draw';
		setConditionLine();
	}
}

function setConditionLine(){
	if(isPlaying_II == 0){ // The game is FINISHED
		if(winner_II == 'x'){
			console.log('winner x called')
			$('#II-gamePlay #realPlayerTwoPart .conditionPart').show();
			$('#II-gamePlay #realPlayerOnePart .conditionPart').css({
				'background-color':'#00B16A' //green
			});
			$('#II-gamePlay #realPlayerTwoPart .conditionPart').css({
				'background-color':'#D91E18' //red
			});
			$('#II-gamePlay #realPlayerOnePart .XorO p').css({
				'color':'#00B16A' //green
			});
			$('#II-gamePlay #realPlayerTwoPart .XorO p').css({
				'color':'#D91E18' //red
			});

			turn_II = 1; // X will start the next game
		} 
		else if(winner_II == 'o'){
			console.log('winner o called')
			$('#II-gamePlay #realPlayerOnePart .conditionPart').show();
			$('#II-gamePlay #realPlayerTwoPart .conditionPart').css({
				'background-color':'#00B16A' //green
			});
			$('#II-gamePlay #realPlayerOnePart .conditionPart').css({
				'background-color':'#D91E18' //red
			});
			$('#II-gamePlay #realPlayerTwoPart .XorO p').css({
				'color':'#00B16A' //green
			});
			$('#II-gamePlay #realPlayerOnePart .XorO p').css({
				'color':'#D91E18' //red
			});

			turn_II = 2; // O will start the next game
		} 
		else{ // is DRAW
			console.log('draw called')
			$('#II-gamePlay #realPlayerOnePart .conditionPart, #II-gamePlay #realPlayerTwoPart .conditionPart').show();
			$('#II-gamePlay #realPlayerOnePart .conditionPart, #II-gamePlay #realPlayerTwoPart .conditionPart').css({
				'background-color':'#ffffff' //white
			});


			// Next starter will be selected in RANDOM
			temp = Math.floor(Math.random() * 2);
			if(temp == 0){
				turn_II = 1;
			}
			else{ // temp is 1
				turn_II = 2;
			}
		}
	}
	else{ // still the game is PLAYED
		if(turn_II == 1){ // (X)
			$('#II-gamePlay #realPlayerOnePart .conditionPart').show();
			$('#II-gamePlay #realPlayerTwoPart .conditionPart').hide();
		}
		else{ // turn is 2 (O)
			$('#II-gamePlay #realPlayerOnePart .conditionPart').hide();
			$('#II-gamePlay #realPlayerTwoPart .conditionPart').show();
		}
	}
}

//It'll be called when Back icon or Home icon or Reset icon is clicked
function reset_II(){
	for(var i=0; i < 9; i++){
		table_II[i] = 0;
		filled_II[i] = 0;
	}
	cell0_II.html("");
	cell1_II.html("");
	cell2_II.html("");
	cell3_II.html("");
	cell4_II.html("");
	cell5_II.html("");
	cell6_II.html("");
	cell7_II.html("");
	cell8_II.html("");

	if(isPlaying_II == 0){
		if(winner_II == 'x'){
			$('#II-gamePlay #realPlayerOnePart .conditionPart, #II-gamePlay #realPlayerTwoPart .conditionPart').css({
				'background-color':'#ffffff' //white
			});
			$('#II-gamePlay #realPlayerOnePart .XorO p').css({
				'color':'#ffffff' //white
			});
			$('#II-gamePlay #realPlayerTwoPart .XorO p').css({
				'color':'#ffffff' //white
			});
			$('#II-gamePlay #realPlayerTwoPart .conditionPart').hide();
		}
		else if(winner_II == 'o'){
			$('#II-gamePlay #realPlayerOnePart .conditionPart, #II-gamePlay #realPlayerTwoPart .conditionPart').css({
				'background-color':'#ffffff' //white
			});
			$('#II-gamePlay #realPlayerOnePart .XorO p').css({
				'color':'#ffffff' //white
			});
			$('#II-gamePlay #realPlayerTwoPart .XorO p').css({
				'color':'#ffffff' //white
			});
			$('#II-gamePlay #realPlayerOnePart .conditionPart').hide();
		}
		else{ // if game was DRAW
			// Next starter will be selected in RANDOM
			temp = Math.floor(Math.random() * 2);
			if(temp == 0){
				turn_II = 1;
				$('#II-gamePlay #realPlayerTwoPart .conditionPart').hide();
			}
			else{ // temp is 1
				turn_II = 2;
				$('#II-gamePlay #realPlayerOnePart .conditionPart').hide();
			}
		}
	}
	else{
		if(turn_II == 1){ // X turn
			turn_II == 2; // Make it O turn
		}
		else{ // O turn
			turn_II == 1; // Make it X turn
		}
	}
}