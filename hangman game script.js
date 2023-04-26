window.onload = initialize();

function initialize() {
	guessBox = document.getElementById("guess");
	startButton = document.getElementById("start");
	wordContainer = document.getElementById("wordContainer");
	possibleWords = ["improve", "baton", "arctic", "banana", "aardvark", "cancel", "bread", "untie", "terrific", "accident", "ample", "country", "apple", "evening", "ocean", "fantastic", "creep", "chilly", "drastic", "teardrop", "enchant", "morning", "trampoline", "wagged", "trust", "train", "enemy", "shape", "fresh", "absolute", "fireplace", "dream", "entertain"];
	wrongGuesses = 0;
	man = document.getElementById("man");
	msg = document.getElementById("msg");
	chars = [];
	sendGuess = document.getElementById("sendGuess");
    guessedLetters = [];
	sendGuess.disabled = true;
	startButton.disabled = false;
	strikes = 0;
	console.log("initialized!");
}

function start() {
	console.log("starting game");
	if (wordContainer.hasChildNodes()) {
		console.log("Erasing word container");
		wordContainer.innerHTML = "";
	} else {
		console.log("No child nodes found.");
	}
	msg.innerText = "";
	sendGuess.disabled = false;
	startButton.disabled = true;
	correctLetters = 0;
	strikes = 0;
	man.setAttribute("src", "images/hangman-0.png");
	wordIndex = Math.floor(Math.random() * possibleWords.length);
	word = possibleWords[wordIndex];
	chars = word.split('');
	for (t=0; t<chars.length; t++) {
		letterBox = document.createElement("P");
		wordContainer.appendChild(letterBox);
		letterBox.innerText = chars[t];
		letterBox.setAttribute("id", "letterBox" + t);
		letterBox.style.backgroundColor = "white";
		letterBox.style.userSelect = "none";
	}
}

function guess() {
	gues = guessBox.value;
	gues = gues.toLowerCase();
	if (gues.length == 1) {
		letterMatches = 0;
		guessBox.value = "";
		console.log("User guessed: " + gues);
        guessedLetters.push(gues);
        console.log(guessedLetters)
        
		for (i=0; i<chars.length; i++) {
			if (gues == chars[i]) {
				letterMatches++;
				document.getElementById("letterBox" + i).style.color = "black";
			} 
		}
		msg.innerText = "Letter is in word " + letterMatches + " times!";
		correctLetters += letterMatches;
		if (letterMatches == 0) {
			strikes++;
			console.log("Strikes: " + strikes);
			msg.innerText = "Letter not in word!";
		}
		man.setAttribute("src", "images/hangman-" + strikes + ".png");
		if (strikes >= 7) {
			msg.innerText = "Say the wrong words, you be hangman... Game Over! The word was: " + word;
			sendGuess.disabled = true;
			startButton.disabled = false;
			startButton.innerHTML = "Restart";
		}
		if (correctLetters == chars.length) {
			msg.innerText = "Word complete! You won!"
			sendGuess.disabled = true;
			startButton.disabled = false;
			startButton.innerHTML = "Restart";
		}
	} else {
		alert("Guess must be a single letter.");
		gues = "";
		guessBox.value = "";
	}
}