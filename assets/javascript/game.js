// Counters:

var win=0;
var loss=0;
var totalWin;
var counter;

// The player will be shown a random number at the start of the game.

var targetNumber = Math.floor(Math.random() * 120); 
$("#randomNumber").html(targetNumber); 

// Randomly generated numbers for the crystal images. 

var crystal1= Math.floor(Math.random() * 12); 
var crystal2= Math.floor(Math.random() * 12); 
var crystal3= Math.floor(Math.random() * 12); 
var crystal4= Math.floor(Math.random() * 12); 

var crystalArray= [crystal1, crystal2, crystal3, crystal4]; 


// There will be four crystals displayed as buttons on the page. Each crsytal will be assigned a number for 1 to 12. 

for (var i=0; i < crystalArray.length; i++) {

	var crysImage = $("<img>"); 
	crysImage.addClass("crystal-image");
	crysImage.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
	crysImage.attr("data-crystalvalue", crystalArray[i]);
	$("#crystalImages").append(crysImage);

}



// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
	$(".crystal-image").on("click", function() {

		var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    	counter += crystalValue;

    	$("#currentScore").append(counter); 

    	alert("New score: " + counter);
		if (counter === targetNumber) {
		  alert("You win!");
		}
		else if (counter >= targetNumber) {
		  alert("You lose!!");
		}
	});


// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

