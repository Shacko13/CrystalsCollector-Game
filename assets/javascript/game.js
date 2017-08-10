var computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCount = 0;
var loseCount = 0;
var restaurantChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var billyChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var champagneChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var crystalgayleChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalScore = 0;


function shuffleCrystalValues(){
	restaurantChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	billyChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	champagneChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	crystalgayleChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}


function gamePlay(){
	if(userTotalScore === computerChoice){
		winCount++;
		$("#wins-counter").text(winCount);
		$(".wins-losses").text("You win!");
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$("#random-number").text(computerChoice);
		userTotalScore = 0;
		$("#score-counter").text(userTotalScore);
		shuffleCrystalValues();
	} else if(userTotalScore > computerChoice){
		loseCount++;
		$("#losses-counter").html(loseCount);
		$(".wins-losses").text('You lose!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$("#random-number").text(computerChoice);
		userTotalScore = 0;
		$("#score-counter").text(userTotalScore);
		shuffleCrystalValues();
	}
}



$("#random-number").text(computerChoice);



$(".krystal-restaurant").on("click", function(){
	userTotalScore += restaurantChoice;
	$("#score-counter").text(userTotalScore);
	gamePlay();
});


$(".billy-crystal").on("click", function(){
	userTotalScore += billyChoice;
	$("#score-counter").text(userTotalScore);
	gamePlay();
});


$(".cristal-champagne").on("click", function(){
	userTotalScore += champagneChoice;
	$("#score-counter").text(userTotalScore);
	gamePlay();
});


$(".crystal-gayle").on("click", function(){
	userTotalScore += crystalgayleChoice;
	$("#score-counter").text(userTotalScore);
	gamePlay();
});
