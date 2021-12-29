window.onload = initialize();

function initialize() {
	var guessBox = document.getElementById("guess");
	var startButton = document.getElementById("start");
    var wordContainer = document.getElementById("wordContainer");
    var possibleWords = ["improve", "baton", "arctic"]
    var word;
    var wordIndex;
    var wrongGuesses;
    var man = document.getElementById("man");
    document.write("initialized!");
}

function start() {
    var wordIndex = Math.floor(Math.random() * possibleWords.length) + 1;
    var word = possibleWords[wordIndex];
    wordContainer.innerHTML = word;
}

function guess() {
    guess = guessBox.value;
    wordContainer.innerHTML = guess;
}