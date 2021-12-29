//By Margaret Guzman... Enjoy!

/*
call DOM objects after the documents is loaded, or else it will set null for all the variables.
*/
window.onload = initialize();

function initialize() {
  one = document.getElementById("one");
  two = document.getElementById("two");
  three = document.getElementById("three");
  four = document.getElementById("four");
  msg = document.getElementById("msg");
  seq = [];
  selection = [];
  i = 0;
  round = 1;
  score = 0;
  scoreboard = document.getElementById("score");
  beginButton = document.getElementById("begin");
	addEventListeners();
}

//this function collects the user's response
function addEventListeners() {
	one.addEventListener("click", function(){
		lightOne();
		selection.push(1);
		console.log("1 selected");
		console.log("Selection: " + selection.join(" "));
		checkSelection();
	});
	two.addEventListener("click", function(){
		lightTwo();
		selection.push(2);
		console.log("2 selected");
		console.log("Selection: " + selection.join(" "));
		checkSelection();
	});
	three.addEventListener("click", function(){
		lightThree();
		selection.push(3);
		console.log("3 selected");
		console.log("Selection: " + selection.join(" "));
		checkSelection();
	});
	four.addEventListener("click", function(){
		lightFour();
		selection.push(4)
		console.log("4 selected");
		console.log("Selection: " + selection.join(" "));
		checkSelection();
	});
}

//these functions light up the quadrants

function lightOne() {
	one.style.backgroundColor = "pink";
	setTimeout(function(){one.style.backgroundColor = "red"}, 500);
}

function lightTwo() {
	two.style.backgroundColor = "lightBlue";
	setTimeout(function(){two.style.backgroundColor = "blue"}, 500);
}

function lightThree() {
	three.style.backgroundColor = "lightGreen";
	setTimeout(function(){three.style.backgroundColor = "green"}, 500);
}

function lightFour() {
	four.style.backgroundColor = "lightYellow";
	setTimeout(function(){four.style.backgroundColor = "yellow"}, 500);
}

//this function checks each item in the seq array and lights up the corresponding quadrant

function checkNum() {
	switch (seq[i]) {
		case 1:
			lightOne();
			break;
		case 2:
			lightTwo();
			break;
		case 3:
			lightThree();
			break;
		case 4:
			lightFour();
			break;
		}
}

//this function iterates through the items in the seq array and waits 1 second between each
function relay() {
	t = setInterval(function() {
			checkNum();
			i++;
			if(i == seq.length) {
				clearInterval(t);
				i = 0;
				msg.innerHTML = "Repeat the pattern.";
			}
		}, 1000);
}



/*
this function checks the user's selection length after each quadrant is clicked, then if the length is long enough it checks each item in the selection for accuracy.
*/
function checkSelection() {
	console.log("Checking selection");
	var numCorrect = 0;
	if (selection.length == seq.length) {
		console.log("Long enough!");
		for (var s = 0; s < seq.length; s++) {
			if (seq[s] != selection[s]) {
				console.log("A number is wrong.");
				msg.style.color = "red";
				msg.innerHTML = "Wrong! Game over!";
				beginButton.innerHTML = "Restart";
				beginButton.disabled = false;
			} else {
				console.log("Correct!");
				numCorrect++;
				if (numCorrect == seq.length) {
					msg.style.color = "green";
					msg.innerHTML = "Correct!";
					console.log("Round " + round + " complete.")
					score++;
					scoreboard.innerHTML = score;
					setTimeout(newRound, 1500);
				}
			}
		}
	} else {
		console.log("Select another.");
	}
}

//defines the sequence of the round
function defineSeq() {
	for (let k = 0; k <= round + 1; k++)
		seq.push(Math.floor(Math.random() * 4) + 1) 
	//console.log("Round " + round + " sequence: " + seq.join(" "));
}

//this function begins the game
function begin() {
	beginButton.disabled = true;
	msg.style.color = "black";
	msg.innerHTML = "Watch carefully...";
	seq = [];
	selection = [];
	round = 1;
	score = 0;
	scoreboard.innerHTML = score;
	defineSeq();
	relay();
}

//This function is called by checkSelection when the selection is correct.
function newRound() {
	round++;
	numCorrect = 0;
	msg.style.color = "white";
	msg.innerHTML = "Round " + round;
	setTimeout(function(){msg.innerHTML = "Watch carefully..."}, 1000);
	seq = [];
	selection = [];
	defineSeq();
	relay();
}