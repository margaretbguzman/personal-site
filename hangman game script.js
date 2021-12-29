window.onload = initialize();

function initialize() {
	var guessBox = document.getElementById("guess");
	var startButton = document.getElementById("start");
    var wordContainer = document.getElementById("wordContainer");
    var possibleWords = ["improve", "baton", "arctic", "strawberry", "shell", "paper", "glossy", "sandstone", "feline", "kindness", "trapdoor", "taste", "under", "table", "chair", "treat", "rodent", "water", "nasty", "sensible", "train", "hungry", "beard", "yonder", "difficult", "wheat", "apple", "realize", "happen", "mortar", "title", "scratch", "ghastly", "splendid", "garish", "reading", "trash", "terrific", "honey", "syrup", "stand", "striped", "solid", "realty", "wishbone", "wisdom", "elephant", "aardvark", "canine", "absolute", "entertain", "cavern", "dollar", "century"]
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