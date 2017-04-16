
// Global counter

	var counter=0;

// The player will be shown a random number at the start of the game.
	var targetNumber = Math.floor((Math.random() * 102 ) + 19); 
	$("#randomNumber").html(targetNumber); 


// Randomly generated numbers for the crystal images. 

	var crystal1= Math.floor((Math.random() * 12 ) + 1);
	var crystal2= Math.floor((Math.random() * 12 ) + 1);
	var crystal3= Math.floor((Math.random() * 12 ) + 1);
	var crystal4= Math.floor((Math.random() * 12 ) + 1);
	var crystalArray= [crystal1, crystal2, crystal3, crystal4];


// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

	function reset () {
		counter=0; 
		$("#currentScore").html(counter); 
		targetNumber = Math.floor((Math.random() * 102 ) + 19);
		$("#randomNumber").html(targetNumber);  
		crystal1= Math.floor((Math.random() * 12 ) + 1);
		crystal2= Math.floor((Math.random() * 12 ) + 1);
		crystal3= Math.floor((Math.random() * 12 ) + 1);
		crystal4= Math.floor((Math.random() * 12 ) + 1);
		crystalArray= [crystal1, crystal2, crystal3, crystal4]; 
	}; 



// There will be four crystals displayed as buttons on the page. Each crystal will be assigned a number for 1 to 12. 


	var images=["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"];


	for (var i=0; i < images.length; i++) {



		var crysImage = $("<img>"); 
		crysImage.addClass("crystal-image");
		crysImage.attr("src", images[i]);
		crysImage.attr("style", "height:200px","width:200px", "margin:25px")
		crysImage.attr("data-crystalvalue", crystalArray[i]);
		$("#crystalImages").append(crysImage);

	}



// Your game will hide this amount until the player clicks a crystal. When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

	var win=0;
	var loss=0;

	$(".crystal-image").on("click", function() {

		var crystalValue = ($(this).attr("data-crystalvalue"));
	    crystalValue = parseInt(crystalValue);
		counter += crystalValue; 
		$("#currentScore").html(counter); 

		// The player wins if their total score matches the random number from the beginning of the game.

		if (counter===targetNumber) {
			win++; 
			$("#totalWin").html("Wins: "+ win); 

			alert("YOU WIN!")

			reset();

		// The player loses if their score goes above the random number.
		} else if (counter > targetNumber) {
				loss++; 
				$("#totalLoss").html("Losses: "+ loss); 
				alert("YOU LOSE!")
				reset(); 
		} 
	}); 
		






