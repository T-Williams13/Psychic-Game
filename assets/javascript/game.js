console.log("test")

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


// computer chooses a random letter 
var computerChoices = ["q", "x", "e", "j", "t", "g", "d", "k", "h", "s"];

var computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Computer Selection: " + computerSelection);
// player types in a letter and it is stored
document.onkeyup = function (event) {
    var userGuess = event.key

    console.log("User Guess " + userGuess);

    // evaluate if the letter matches or doesn't. If it matches, the win increases and the guesses left and guesses so far reset
    if (userGuess === computerSelection) {
        console.log("Winner!");
        wins++;
        console.log("Wins: " + wins);
        resetGame()
    } else {
        console.log("NOPE");
        guessesLeft--;
        guessesSoFar.push(userGuess);
    }

    // if it doesn't match, guesses left decreases by 1 until it gets to 0, at which point the loss increases by 1 and the guesses left and guesses so far reset.


    if (guessesLeft === 0) {
        losses++;
        resetGame();
    }
    document.getElementById("win-count").innerHTML = wins;
    document.getElementById("losses-count").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("guesses-so-far").innerHTML = guessesSoFar;
}

function resetGame() {
    console.log("Game Reset");
    guessesLeft = 9;
    guessesSoFar = [];
    computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("New Selection: " + computerSelection);
}

// Break up it into three pieces!
// 1. Set up your global variables
// 2. Set up your reuseable functions
// 3. Set up your event handlers
//    a. Start with your if/else and update values
//    b. Take new values and insert/append/etc. to the DOM