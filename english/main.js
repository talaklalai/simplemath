// globals consts

import { DD } from "./dict.js";

const ctag = (tagName) => document.createElement(tagName);
const gtag = (_id) => document.getElementById(_id);
const cl = (s) => console.log(s);
let LevelUpCount = 6;

let EnghWord = "";

let NUM;
const MULTIPLE_OPTIONS = 6;
let Level = MULTIPLE_OPTIONS;

const totalLeft = gtag("totalLeft");
const totalWrong = gtag("totalWrong");
const totalCorrect = gtag("totalCorrect");
const shuffleSelect = gtag("shuffleSelect");
const numSelect = gtag("numSelect");
const familySelect = gtag("familySelect");
const mainContainer = gtag("mainContainer");
const setupContainer = gtag("setupContainer");

let straightCorrect = 0;
let HEB_WORDS;
const startBtn = gtag("startBtn");
let VUCABLUARY;

startBtn.addEventListener("click", () => {
  VUCABLUARY = DD[familySelect.value];

  if (shuffleSelect.value == "true") {
    VUCABLUARY = shuffleObject(VUCABLUARY);
  }

  NUM = numSelect.value;
  totalLeft.innerText = NUM;
  HEB_WORDS = Object.fromEntries(Object.entries(VUCABLUARY).slice(0, Level));
  mainContainer.style.display = "block";
  setupContainer.style.display = "None";
  NewWord();
});
const newGame = gtag("newGame");

newGame.addEventListener("click", (e) => {
  if (parseInt(totalLeft.innerText) != 0) {
    if (confirm("לצאת ולהתחיל משחק חדש?") == false) {
      return;
    }
  }
  e.preventDefault();
  setupContainer.style.display = "block";
  mainContainer.style.display = "None";
  updateActions();
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

const increaseLevel = () => {
  Level = Level + 1;
  HEB_WORDS = Object.fromEntries(
    Object.entries(VUCABLUARY).slice(Level - MULTIPLE_OPTIONS, Level),
  );
};

const NextWordE = gtag("NextWordE");
const AnswerDivE = gtag("answerDivE");

// layout
for (let i = 0; i < MULTIPLE_OPTIONS; i++) {
  let answer = ctag("input");
  answer.setAttribute("readonly", true);
  answer.classList.add("multiselect");
  AnswerDivE.appendChild(answer);
  answer.addEventListener("click", (e) => check(e));
}

const addOneToDivE = (e) => (e.innerText = parseInt(e.innerText) + 1);
const decOneToDivE = (e) => (e.innerText = parseInt(e.innerText) - 1);
let lastCorrect = true;

const check = (e) => {
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
      increaseLevel();
    }
    if (straightCorrect == 10) {
      LevelUpCount = 4;
    }
    if (straightCorrect == 12) {
      LevelUpCount = 2;
    }

    //wrong
  } else {
    e.target.classList.add("wrong");
    addOneToDivE(totalWrong);
    straightCorrect = 0;
    lastCorrect = false;
    LevelUpCount = Math.min(6, LevelUpCount + 2);
  }
  parseInt(totalLeft.innerText) == 0 && finish();
};

const finish = () => {
  addOneToDivE(totalCorrect);
  AnswerDivE.style.display = "none";
  NextWordE.style.display = "none";
};

const getRandomEntries = () => {
  let entries = Object.entries(HEB_WORDS);
  let shuffledEntries = shuffle(entries);
  return shuffledEntries.slice(0, MULTIPLE_OPTIONS);
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
