const SecretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0
let Guess = 0

do {
    
    guess = parseInt(prompt("Enter your guess:"));
    attempts++;

    
    if (guess < secretNumber) {
        alert("Too low Try again.");
    } else if (guess > secretNumber) {
        alert("Too high Try again.");
    } else {
        alert(` Correct! You got it in ${attempts} attempts.`);
    }

} while (guess !== secretNumber);
