var words = [
    {
        word: "septuagenarian",
        tip: "An individual in their seventies",
    },
    {
        word: "concierge",
        tip: "One who attends to the wishes of hotel guest",
    },
    {
        word: "misconstrue",
        tip: "To misunderstand something",
    },
    {
        word: "flabbergast",
        tip: "An awkward individual",
    },
    {
        word: "flower",
        tip: "Beauty in combination with pleasant smell",
    },
    {
        word: "beauty",
        tip: "Aesthetically pleasing",
    },
    {
        word: "movie",
        tip: "Enjoyed fiction 🍿",
    },
    {
        word: "school",
        tip: "A place no one loves but is forced to go 😭",
    },
    {
        word: "adventure",
        tip: "A desired journey ",
    },
    {
        word: "photograph",
        tip: "A captured moment in time",
    },
    {
        word: "pulvurize",
        tip: "Grounded to dust",
    },
    {
        word: "adduce",
        tip: "Citing evidence for a statement",
    },
    {
        word: "alibi",
        tip: "An excuse used to avoid responsibility",
    },
    {
        word: "plethora",
        tip: "Abundant amount of a thing",
    },
    {
        word: "history",
        tip: "Human legacy",
    },
    {
        word: "continent",
        tip: "An expansive land surrounded by water",
    },
    {
        word: "Minatiue",
        tip: "A minor detail",
    },
    {
        word: "Abound",
        tip: "To be available in multitude",
    },
];
var randomDisplay = document.getElementById("randomDisplay");
var randomBtn = document.getElementById("randomBtn");
var tipDiv = document.getElementById("tips");
var userInputGuess = document.getElementById("userGuess");
var checkWordBtn = document.getElementById("checkBtn");
var instructionBtn = document.getElementById("instructionBtn");
var actualWord;
var randomWords = function () {
    var _a;
    var randomObj = words[Math.floor(Math.random() * words.length)];
    if (!randomObj) {
        console.error("".concat(randomObj));
    }
    else {
        var wordArray = randomObj.word.split("");
        var tips = randomObj.tip;
        for (var i = wordArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [wordArray[j], wordArray[i]], wordArray[i] = _a[0], wordArray[j] = _a[1];
        }
        actualWord = randomObj.word;
        console.log(actualWord);
        randomDisplay.innerText = wordArray.join(" ");
        tipDiv.innerHTML = "tips:<h5>".concat(tips, "</h5>");
    }
};
/* I called this function so as to have access to the actualWord variable declared within it */
randomWords();
randomBtn.onclick = function () {
    randomWords();
    randomBtn.style.transform = "scale(0.9)";
    randomBtn.style.transform = "scale(1)";
    checkWordBtn.disabled = false;
    userInputGuess.value = "";
    message.style.display = "none";
    userInputGuess.disabled = false;
    userInputGuess.style.borderColor = "gray";
};
var message = document.getElementById("message");
var count = document.getElementById("timesTried");
var guessedWord = document.getElementById("userGuess");
var score = 0;
// removed unused container element reference to avoid potential null refs
function failedAnswer() {
    var currentCount = 5;
    var opacityValue = 0.6;
    if (userInputGuess.value !== actualWord &&
        count.innerText !== "".concat(currentCount)) {
        message.style.display = "block";
        message.innerText = "That wrong champ, the key is always to try one more time \uD83D\uDCAA";
        checkWordBtn.disabled = true;
        checkWordBtn.style.cursor = "not-allowed";
        checkWordBtn.style.opacity = "".concat(opacityValue);
        userInputGuess.style.borderColor = "red";
        setTimeout(function () {
            count.textContent = "".concat((score += 1));
            checkWordBtn.disabled = false;
            checkWordBtn.style.cursor = "pointer";
            userInputGuess.value = "";
            message.style.display = "none";
            userInputGuess.disabled = false;
            checkWordBtn.style.opacity = "".concat((opacityValue = 1));
            userInputGuess.style.borderColor = "gray";
        }, 2000);
    }
    else {
        message.style.display = "block";
        message.innerText = "Sorry champ!\uD83D\uDE14 the answer is actually ".concat(actualWord);
        checkWordBtn.disabled = true;
        setTimeout(function () {
            count.textContent = "".concat((score = 0));
            checkWordBtn.disabled = false;
            userInputGuess.value = "";
            message.style.display = "none";
            userInputGuess.disabled = false;
            userInputGuess.style.borderColor = "gray";
            randomWords();
        }, 4000);
    }
}
checkWordBtn.addEventListener("click", function () {
    checkWordBtn.style.transform = "scale(0.9)";
    setTimeout(function () {
        checkWordBtn.style.transform = "scale(1)";
    }, 100);
    if (userInputGuess.value.trim().toLowerCase() ===
        actualWord.trim().toLowerCase()) {
        confetti({ particleCount: 500, spread: 100, origin: { y: 0.6 } });
        message.style.display = "block";
        message.innerText = "Weldone champ!\uD83E\uDD73 the answer is indeed ".concat(actualWord);
        userInputGuess.style.borderColor = "green";
        checkWordBtn.disabled = true;
        checkWordBtn.style.cursor = "not-allowed";
        setTimeout(function () {
            message.style.display = "none";
            count.textContent = "".concat((score = 0));
            userInputGuess.style.borderColor = "gray";
            userInputGuess.value = "";
            checkWordBtn.disabled = false;
            checkWordBtn.style.cursor = "pointer";
            randomWords();
        }, 3000);
    }
    else {
        failedAnswer();
    }
});
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        // Perform the action when the Enter key is pressed
        checkWordBtn.click(); // Simulate a button click
    }
});
var cancelBtn = document.getElementById("cancel");
var instruction = document.getElementById("instructionContainer");
var infoDisplay = document.getElementById("displayInfo");
instructionBtn.onclick = function () {
    instruction.style.display = "block";
};
cancelBtn.onclick = function () {
    instruction.style.display = "none";
};
window.onclick = function (event) {
    // Check if the clicked element is NOT cancelBtn or infoDisplay
    if (event.target !== cancelBtn &&
        event.target !== infoDisplay &&
        !instruction.contains(event.target) // Ensure clicks inside the instruction container are ignored
    ) {
        instruction.style.display = "none"; // Hide the instruction container
    }
};
