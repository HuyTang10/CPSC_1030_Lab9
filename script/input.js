var error_box = document.getElementById("error-box");

// Handle the input when user pressed Enter right on the input field
function handleKeyPress(event) {
    if (event.key === "Enter") {
        handleInputWord();
    }
}

// Handle the input when user clicked on the Next button
function handleNextButtonClick() {
    handleInputWord();
}

// Check if word entered is valid
function handleInputWord() {
    // Clear the error box each time user click the Next button again (this is for clearer UI interaction)
    error_box.style.display = "none";
    error_box.style.opacity = 0;
    // Get the word from the input field
    var selectedWord = document.getElementById("word").value;
    if (!selectedWord || !selectedWord.match(/^[a-zA-Z\s]+$/)) {
        // If word is not valid, display the error message
        // The setTimeout() is just used for some smooth animation
        setTimeout(() => {
            error_box.style.display = "grid";
            setTimeout(() => {
                error_box.style.opacity = 1;
            }, 80);
        }, 1000);
    }
    else {
        // Transfer the input to game.js so that it can be used
        window.location.href = "game.html?selectedWord=" + encodeData(selectedWord);
    }
}

// Encode the word to Base64 string
function encodeData(data) {
    return btoa(data);
}

// Close the error box
function closeErrorBox() {
    error_box.style.display = "none";
    error_box.style.opacity = 0;
}