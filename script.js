const SecretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0
let Guess = 0

const submitButton = document.getElementById("submitBtn");
const userInput = document.getElementById("userGuess");
const messageParagraph = document.getElementById("message");


submitButton.addEventListener("click", function() {
   
    const guess = parseInt(userInput.value);
    attempts++;

    
    if (isNaN(guess)) {
        messageParagraph.textContent = "Please enter a valid number!";
    } else if (guess < SecretNumber) {
        messageParagraph.textContent = "Too low Try again.";
    } else if (guess > SecretNumber) {
        messageParagraph.textContent = "Too high Try again.";
    } else {
        messageParagraph.textContent = `Correct! You found the number in ${attempts} attempts.`;
       
        submitButton.disabled = true;
        userInput.disabled = true;
    }

    
    userInput.value = "";
});
