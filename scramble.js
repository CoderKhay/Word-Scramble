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
];

const randomDisplay = document.getElementById("randomDisplay");
const randomBtn = document.getElementById("btn1");
const resetBtn = document.getElementById("btn2");
const tipDiv = document.getElementById("tips");
const userInputDiv = document.getElementById("userGuess");
const checkWordBtn = document.getElementById("btn3");
let actualWord;

const randomWords = () => {
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  let tips = randomObj.tip;
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  actualWord = randomObj.word;
  console.log(actualWord);

  randomDisplay.innerText = wordArray.join(" ");
  tipDiv.innerHTML = `tips:<h5>${tips}</h5>`;
};
/* I called this function so as to have access to the actualWord variable declared within it */
randomWords();

randomBtn.onclick = () => {
  randomWords();
  randomBtn.style.transform = "scale(0.9)";
  setTimeout(() => {
    randomBtn.style.transform = "scale(1)";
    randomBtn.style.display = " none";
    checkWordBtn.style.display = "block";
  }, 100);

  userInputDiv.disabled = false;
};

resetBtn.onclick = () => {
  resetBtn.style.transform = "scale(0.9)";
  setTimeout(() => {
    resetBtn.style.transform = "scale(1)";
  }, 100);
  randomBtn.style.display = "block";
  checkWordBtn.style.display = "none";
  userInputDiv.value = "";
  userInputDiv.style.borderColor = "grey";
  document.getElementById("message").style.display = "none";
  count.innerText = 0;
  userInputDiv.disabled = true;
  checkWordBtn.disabled = false;
};

let message = document.getElementById("message");
let count = document.getElementById("timesTried");
let guessedWord = document.getElementById("userGuess");
let containerDiv = document.getElementById("container");

function failedAnswer() {
  /* using counter.innerText !== 5 actually opposes the command you intended */
  if (userInputDiv.value !== actualWord && count.innerText == 5) {
    message.style.display = "block";
    message.innerText = `Sorry champ!😔 the answer is actually ${actualWord}`;
    checkWordBtn.disabled = true;
  } else {
    message.style.display = "block";
    message.innerText = `Try again champ 💪🏻`;
    userInputDiv.style.borderColor = "red";
    setTimeout(() => {
      message.style.display = "none";
    }, 1000);
    checkWordBtn.disabled = false;
  }
}

checkWordBtn.addEventListener("click", () => {
  checkWordBtn.style.transform = "scale(0.9)";
  setTimeout(() => {
    checkWordBtn.style.transform = "scale(1)";
  }, 100);
  count.innerText++;
  if (
    userInputDiv.value.trim().toLowerCase() === actualWord.trim().toLowerCase()
  ) {
    message.style.display = "block";
    message.innerText = `Weldone champ!🥳 the answer is indeed ${actualWord}`;
    userInputDiv.style.borderColor = "green";
    checkWordBtn.disabled = true;
    setTimeout(() => {
      randomBtn.style.display = "block";
      checkWordBtn.style.display = "none";
      userInputDiv.value = "";
      userInputDiv.style.borderColor = "grey";
      document.getElementById("message").style.display = "none";
      count.innerText = 0;
      // userInputDiv.disabled = true;
      checkWordBtn.disabled = false;
      randomWords();
    }, 2000);
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

const cancelBtn = document.getElementById("cancel");
const instruction = document.getElementById("instructionContainer");
const infoDisplay = document.getElementById("displayInfo");
infoDisplay.onclick = () => {
  instruction.style.display = "block";
};
cancelBtn.onclick = () => {
  instruction.style.display = "none";
};

window.onclick = (event) => {
  // Check if the clicked element is NOT cancelBtn or infoDisplay
  if (
    event.target !== cancelBtn &&
    event.target !== infoDisplay &&
    !instruction.contains(event.target) // Ensure clicks inside the instruction container are ignored
  ) {
    instruction.style.display = "none"; // Hide the instruction container
  }
};
