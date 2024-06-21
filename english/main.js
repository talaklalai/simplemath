// globals consts

import { DD } from "./dict.js";

const ctag = (tagName) => document.createElement(tagName);
const gtag = (_id) => document.getElementById(_id);
const cl = (s) => console.log(s);
let LevelUpCount = 6;

let EnghWord = "";

const OPTIONS_NUM = 6;
let Level = OPTIONS_NUM;
let varifyNewGame = false;
const totalLeft = gtag("totalLeft");
const totalWrong = gtag("totalWrong");
const totalCorrect = gtag("totalCorrect");
const shuffleSelect = gtag("shuffleSelect");
const numSelect = gtag("numSelect");
const familySelect = gtag("familySelect");
const mainContainer = gtag("mainContainer");
const setupContainer = gtag("setupContainer");

let straightCorrect = 0;
let CURRENT_WORD_GROUP;
const startBtn = gtag("startBtn");
let VUCABLUARY;
let LASTWORD;

// New Game
startBtn.addEventListener("click", () => {
  newGame.value = "סיים משחק";
  varifyNewGame = false;
  VUCABLUARY = DD[familySelect.value];

  if (shuffleSelect.value == "true") {
    VUCABLUARY = shuffleObject(VUCABLUARY);
  }
  LASTWORD = Object.keys(VUCABLUARY).slice(-1)[0];

  //reset counters
  resetDivE(totalCorrect);
  resetDivE(totalWrong);
  resetDivE(totalLeft, numSelect.value);

  CURRENT_WORD_GROUP = Object.fromEntries(
    Object.entries(VUCABLUARY).slice(0, Level),
  );
  mainContainer.style.display = "block";
  setupContainer.style.display = "None";
  AnswerDivE.style.display = "block";
  NextWordE.style.display = "block";
  NewWord();
});
const newGame = gtag("newGame");

newGame.addEventListener("click", (e) => {
  if (parseInt(totalLeft.innerText) != 0) {
    if (varifyNewGame) {
      e.preventDefault();
      setupContainer.style.display = "block";
      mainContainer.style.display = "None";
    }
    e.target.value = "לחץ שוב לסיום";
    varifyNewGame = true;
  } else {
    setupContainer.style.display = "block";
    mainContainer.style.display = "None";
  }
});

const shuffle = (_ent) => {
  let shuffled = [..._ent]; // Make a copy of the array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const shuffleObject = (obj) => Object.fromEntries(shuffle(Object.entries(obj)));

// add new word , remove oldest word
const levelUp = () => {
  Level = Level == Object.keys(VUCABLUARY).length ? OPTIONS_NUM : Level + 1;
  CURRENT_WORD_GROUP = Object.fromEntries(
    Object.entries(VUCABLUARY).slice(Level - OPTIONS_NUM, Level),
  );
};

const NextWordE = gtag("NextWordE");
const AnswerDivE = gtag("answerDivE");

// layout
for (let i = 0; i < OPTIONS_NUM; i++) {
  let answer = ctag("input");
  answer.setAttribute("readonly", true);
  answer.classList.add("multiselect");
  AnswerDivE.appendChild(answer);
  answer.addEventListener("click", (e) => checkAnswer(e));
}

const addOneToDivE = (e) => (e.innerText = parseInt(e.innerText) + 1);
const decOneToDivE = (e) => (e.innerText = parseInt(e.innerText) - 1);
const resetDivE = (e, value) => (e.innerText = value || 0);

let lastCorrect = true;

const checkAnswer = (e) => {
  e.preventDefault();
  //correct
  if (e.target.value == EnghWord) {
    e.target.classList.add("correct");
    setTimeout(NewWord, 700);
    straightCorrect += 1;
    if (lastCorrect) addOneToDivE(totalCorrect);
    lastCorrect = true;
    decOneToDivE(totalLeft);

    if (straightCorrect % LevelUpCount == 0) {
      levelUp();
    }
    if (straightCorrect == 10) {
      LevelUpCount = 4;
    }
    if (straightCorrect == 12) {
      LevelUpCount = 2;
    }

    // answer correct last question in none shuffeled mode:
    if (LASTWORD == EnghWord && shuffleSelect.value == "false") {
      finish();
    }

    //wrong
  } else {
    e.target.classList.add("wrong");
    if (lastCorrect) addOneToDivE(totalWrong);
    straightCorrect = 0;
    lastCorrect = false;
    LevelUpCount = Math.min(6, LevelUpCount + 2);
  }
  parseInt(totalLeft.innerText) == 0 && finish();
};
//all question finish
const finish = () => {
  AnswerDivE.style.display = "none";
  NextWordE.style.display = "none";
};

// get options for new word, including the correct one
const getRandomEntries = () => {
  let entries = Object.entries(CURRENT_WORD_GROUP);
  let shuffledEntries = shuffle(entries);
  return shuffledEntries.slice(0, OPTIONS_NUM);
};

const NewWord = () => {
  const allOptions = getRandomEntries();
  const [rightOption, ..._] = allOptions;
  NextWordE.innerText = rightOption[0];
  EnghWord = rightOption[1];

  // Shuffle the options for display
  const shuffledOptions = shuffle(allOptions.slice()); // Make a copy to avoid modifying the original array

  for (let answerE of AnswerDivE.querySelectorAll("input")) {
    answerE.classList.remove("correct", "wrong");
    answerE.value = shuffledOptions.pop()[1];
  }
};
