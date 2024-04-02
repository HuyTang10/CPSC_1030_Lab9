const canvas = document.getElementById("hangman");
const ctx = canvas.getContext("2d");

// Get the input sent from input.js
const urlParams = new URLSearchParams(window.location.search);
const base64String = urlParams.get("selectedWord");
const selectedWord = decodeData(base64String).toLowerCase();
const attemptsDisplay = document.getElementById("attempts"); 
var guessedLetters = [];
var wrongAttempts = 0;
let timerInterval;

// Decode the Base64 string into the original word
function decodeData(base64String) {
    return atob(base64String);
}

// Start the timer
function startTimer() {
    let timerDisplay = document.getElementById("timer");

    let seconds = 1;
    let minutes, secondsDisplay;

    timerInterval = setInterval(function () {
      minutes = parseInt(seconds / 60);
      secondsDisplay = seconds % 60;

      let minutesDisplay = minutes < 10 ? "0" + minutes : minutes;
      secondsDisplay = secondsDisplay < 10 ? "0" + secondsDisplay : secondsDisplay;

      timerDisplay.textContent = minutesDisplay + ":" + secondsDisplay;

      seconds++;
    }, 1000);
}

// Stop the timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Draw the scaffold
function drawScaffold() {
    ctx.beginPath();
    ctx.moveTo(10, 380);
    ctx.lineTo(220, 380);
    ctx.moveTo(50, 380);
    ctx.lineTo(50, 20);
    ctx.lineTo(150, 20);
    ctx.moveTo(50, 70);
    ctx.lineTo(100, 20);
    ctx.stroke();
}

// Display blank spaces representing the word to guess
function displayWord() {
    let wordHtml = "";
    for (let letter of selectedWord) {
        if (guessedLetters.includes(letter)) {
            wordHtml += letter + "";
        }
        else if (letter === " ") {
            wordHtml += "&nbsp;";
        }
        else {
            wordHtml += "_ ";
        }
    }
    document.getElementById("wordDisplay").innerHTML = wordHtml;
}

// The letters to choose from, click to select
function displayLetters() {
    let lettersHtml = "";
    for (let i = 97; i <= 122; i++) {
        let letter = String.fromCharCode(i);
        // If the letter is already selected before, then make it unable to be selected again
        if (!guessedLetters.includes(letter)) {
            lettersHtml += `<span class="letter" onclick="checkLetter('${letter}')">${letter}</span>`;
        }
        else {
            lettersHtml += `<span class="guessed letter">${letter}</span>`;
        }
    }
    document.getElementById("alphabet").innerHTML = lettersHtml;
}

// Check if selected letter is in the word, if not then the option made will be considered a wrong attempt
function checkLetter(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!selectedWord.includes(letter)) {
            wrongAttempts++;
            attemptsDisplay.innerHTML = parseInt(attemptsDisplay.innerHTML) - 1; // Display attempts left for second player
        }
        drawHangman(); // This is called from hangman.js
        displayWord();
        displayLetters();
        checkGameStatus();
    }
}

// Check if the game is over
function checkGameStatus() {
    // Player can only have total 6 attempts to make
    if (wrongAttempts === 6) {
        stopTimer();
        displayMessage("Game Over! The word was: " + selectedWord);
        document.getElementById("alphabet").innerHTML = "";
    } else if (!document.getElementById("wordDisplay").innerHTML.includes("_")) {
        stopTimer();
        displayMessage("Congratulations! You won!");
        document.getElementById("alphabet").innerHTML = "";
    }
}

// Display the output message
function displayMessage(message) {
    document.getElementById("message").innerHTML = message;
}

// Load the game
window.onload = function() {
    startTimer();
    drawScaffold();
    displayWord();
    displayLetters();
};
