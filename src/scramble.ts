declare const confetti: any;

const words = [
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

const randomDisplay = document.getElementById("randomDisplay")!;
const randomBtn = document.getElementById("randomBtn")!;
const tipDiv = document.getElementById("tips")!;
const userInputGuess = document.getElementById("userGuess") as HTMLInputElement;
const checkWordBtn = document.getElementById("checkBtn") as HTMLButtonElement;
const instructionBtn = document.getElementById(
  "instructionBtn",
) as HTMLButtonElement;
let actualWord: string;

const randomWords = () => {
  let randomObj = words[Math.floor(Math.random() * words.length)];
  if (!randomObj) {
    console.error(`${randomObj}`);
  } else {
    let wordArray: any = randomObj.word.split("");
    let tips = randomObj.tip;

    for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    actualWord = randomObj.word;
    console.log(actualWord);

    randomDisplay.innerText = wordArray.join(" ");
    tipDiv.innerHTML = `tips:<h5>${tips}</h5>`;
  }
};
/* I called this function so as to have access to the actualWord variable declared within it */
randomWords();

randomBtn.onclick = () => {
  randomWords();
  randomBtn.style.transform = "scale(0.9)";

  randomBtn.style.transform = "scale(1)";
  checkWordBtn.disabled = false;
  userInputGuess.value = "";
  message.style.display = "none";
  userInputGuess.disabled = false;
  userInputGuess.style.borderColor = "gray";
};

let message = document.getElementById("message")!;
let count = document.getElementById("timesTried")!;
let score = 0;
// removed unused container element reference to avoid potential null refs

function failedAnswer() {
  let currentCount = 5;
  let opacityValue = 0.6;

  if (
    userInputGuess.value !== actualWord &&
    count.innerText !== `${currentCount}`
  ) {
    message.style.display = "block";
    message.innerText = `That wrong champ, the key is always to try one more time 💪`;
    checkWordBtn.disabled = true;
    checkWordBtn.style.cursor = "not-allowed";
    checkWordBtn.style.opacity = `${opacityValue}`;
    userInputGuess.style.borderColor = "red";
          instructionBtn.style.display = 'none'

    setTimeout(() => {
      count.textContent = `${(score += 1)}`;
      checkWordBtn.disabled = false;
      checkWordBtn.style.cursor = "pointer";
      userInputGuess.value = "";
      message.style.display = "none";
      userInputGuess.disabled = false;
      checkWordBtn.style.opacity = `${(opacityValue = 1)}`;
            instructionBtn.style.display = 'block'
      userInputGuess.style.borderColor = "gray";
    }, 2000);
  } else {
    message.style.display = "block";

    message.innerText = `Sorry champ!😔 the answer is actually ${actualWord}`;
    checkWordBtn.disabled = true;
          instructionBtn.style.display = 'none'
    setTimeout(() => {
      count.textContent = `${(score = 0)}`;
      checkWordBtn.disabled = false;
      userInputGuess.value = "";
      message.style.display = "none";
      userInputGuess.disabled = false;
      userInputGuess.style.borderColor = "gray";
            instructionBtn.style.display = 'block'
      randomWords();
    }, 4000);
  }
}

checkWordBtn.addEventListener("click", () => {
  checkWordBtn.style.transform = "scale(0.9)";
  setTimeout(() => {
    checkWordBtn.style.transform = "scale(1)";
  }, 100);

  if (
    userInputGuess.value.trim().toLowerCase() ===
    actualWord.trim().toLowerCase()
  ) {
    confetti({ particleCount: 500, spread: 100, origin: { y: 0.6 } });
    message.style.display = "block";
    message.innerText = `Weldone champ!🥳 the answer is indeed ${actualWord}`;
    userInputGuess.style.borderColor = "green";
    checkWordBtn.disabled = true;
    checkWordBtn.style.cursor = "not-allowed";
instructionBtn.style.display = 'none'
    setTimeout(() => {
      message.style.display = "none";
      count.textContent = `${(score = 0)}`;
      userInputGuess.style.borderColor = "gray";
      userInputGuess.value = "";
      checkWordBtn.disabled = false;
      checkWordBtn.style.cursor = "pointer";
      instructionBtn.style.display = 'block'
      randomWords();
    }, 3000);
  } else {
    failedAnswer();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Perform the action when the Enter key is pressed
    checkWordBtn.click(); // Simulate a button click
  }
});

const cancelBtn = document.getElementById("cancel")!;
const instructionContainer = document.getElementById("instructionContainer")!;
const instructionText = document.getElementById('instructionText')!
const infoDisplay = document.getElementById("displayInfo")!;

instructionBtn.onclick = () => {
  instructionContainer.style.display = "block";
};

cancelBtn.onclick = () => {
  instructionContainer.style.display = "none";
};

window.onclick = (event) => {
  // Check if the clicked element is NOT cancelBtn or infoDisplay
  if (
    event.target !== cancelBtn &&
    event.target !== infoDisplay &&
    !instructionText.contains(event.target as Node) // Ensure clicks inside the instruction container are ignored
  ) {
    instructionContainer.style.display = "none"; // Hide the instruction container
  }
};
