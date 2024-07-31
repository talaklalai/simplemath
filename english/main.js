// globals consts

import { DD } from "./dict.js";

const ctag = (tagName) => document.createElement(tagName);
const gtag = (_id) => document.getElementById(_id);
const cl = (s) => console.log(s);
let LevelUpCount = 6;

let EnghWord = "";

let OPTIONS_NUM = 6;
let Level = OPTIONS_NUM;
let varifyNewGame = false;
const totalLeft = gtag("totalLeft");
const totalWrong = gtag("totalWrong");
const totalCorrect = gtag("totalCorrect");
const shuffleSelect = gtag("shuffleSelect");
const numSelect = gtag("numSelect");
[20, 50, 75, 100, 150, 200].forEach((num) => {
  let o = ctag("option");
  o.value = num;
  o.innerText = num;
  numSelect.appendChild(o);
});

const familySelect = gtag("familySelect");
const mainContainer = gtag("mainContainer");
const soundSelect = gtag("soundSelect");
mainContainer.style.display = "None";
const setupContainer = gtag("setupContainer");
const speakerE = gtag("speakerE");
const body = gtag("body");
body.addEventListener("contextmenu", (e) => e.preventDefault());
let SOUND = false;

setupContainer
  .querySelectorAll("div")
  .forEach((e) => e.classList.add("spaceButtom"));

let straightCorrect = 0;
let CURRENT_WORD_GROUP;
const startBtn = gtag("startBtn");
let VUCABLUARY;
let LASTWORD;

let VOICE;
const VOICES = [false, "Google UK English Male", "Google UK English Female"];
const VOICESSAFARI = [false, "Alex", "Karen"];

const isSafari = () =>
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

(() => {
  const femaleOption = ctag("option");
  femaleOption.value = 2;
  femaleOption.innerText = "אישה";
  soundSelect.appendChild(femaleOption);
})();

const setVoice = () => {
  speechSynthesis.cancel();
  let voiceName = VOICES[soundSelect.value];
  if (isSafari()) {
    voiceName = VOICESSAFARI[soundSelect.value];
  } else {
  }
  // Get all available voices
  let voices = speechSynthesis.getVoices();

  // Safari returns empty array initially, so wait for voices to be loaded
  if (voices.length === 0) {
    speechSynthesis.onvoiceschanged = () => {
      voices = speechSynthesis.getVoices();
      VOICE = voices.find((voice) => voice.name === voiceName);
      if (!VOICE) {
        speakerE.style.display = "none";
      } else {
        speakerE.style.display = "block";
      }
    };
  } else {
    VOICE = voices.find((voice) => voice.name === voiceName);
    if (!VOICE) {
      speakerE.style.display = "none";
    }
  }
  cl(VOICE);
};

// New Game
startBtn.addEventListener("click", () => {
  resetNewGameButton();
  if (["SPORT", "SENTENCES1"].includes(familySelect.value)) {
    OPTIONS_NUM = 4;
  } else {
    OPTIONS_NUM = 6;
  }
  VUCABLUARY = DD[familySelect.value];
  drawMultiSelect();

  if (shuffleSelect.value == "true") {
    VUCABLUARY = shuffleObject(VUCABLUARY);
  }
  LASTWORD = Object.keys(VUCABLUARY).slice(-1)[0];

  //reset counters
  resetDivE(totalCorrect);
  resetDivE(totalWrong);
  resetDivE(totalLeft, numSelect.value);
  Level = OPTIONS_NUM;

  CURRENT_WORD_GROUP = Object.fromEntries(
    Object.entries(VUCABLUARY).slice(0, Level),
  );
  mainContainer.style.display = "block";
  setupContainer.style.display = "None";
  answerDivE.style.display = "block";
  NextWordE.style.display = "block";
  speakerE.style.display = "block";
  NewWord();

  SOUND = soundSelect.value;
  setVoice();
});
const restartGame = gtag("restartGame");

const setRestartDisplays = () => {
  setupContainer.style.display = "block";
  mainContainer.style.display = "None";
};

restartGame.addEventListener("click", (e) => {
  e.preventDefault();
  if (parseInt(totalLeft.innerText) != 0 && varifyNewGame == false) {
    e.target.value = "לחץ שוב לסיום";
    varifyNewGame = true;
  } else {
    setRestartDisplays();
  }
});

function speak(word) {
  if (SOUND == false) return;
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(word);

  // Select a voice

  utterance.voice = VOICE;
  utterance.rate = 0.9; // slower
  // Speak the text
  speechSynthesis.speak(utterance);
}

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
  Level = Level == Object.keys(VUCABLUARY).length ? OPTIONS_NUM * 2 : Level + 1;
  CURRENT_WORD_GROUP = Object.fromEntries(
    Object.entries(VUCABLUARY).slice(Level - OPTIONS_NUM, Level),
  );
};

const NextWordE = gtag("NextWordE");
speakerE.addEventListener("click", (e) =>
  speak(VUCABLUARY[NextWordE.innerText]),
);
const answerDivE = gtag("answerDivE");

const resetNewGameButton = () => {
  restartGame.value = "סיים משחק";
  varifyNewGame = false;
};

const drawMultiSelect = () => {
  answerDivE.innerHTML = "";
  // layout
  for (let i = 0; i < OPTIONS_NUM; i++) {
    let answer = ctag("input");
    answer.setAttribute("readonly", true);

    answer.classList.add("multiselect");
    answer.classList.add("ltr");

    if (OPTIONS_NUM == 4) {
      answer.classList.remove("multiselect6");
      answer.classList.add("multiselect4");
    } else {
      answer.classList.remove("multiselect4");
      answer.classList.add("multiselect6");
    }
    answerDivE.appendChild(answer);

    answer.addEventListener("click", (e) => {
      e.target.disabled = true;
      resetNewGameButton();
      speak(e.target.value);
      checkAnswer(e);
    });
  }
};
const addOneToDivE = (e) => (e.innerText = parseInt(e.innerText) + 1);
const decOneToDivE = (e) => (e.innerText = parseInt(e.innerText) - 1);
const resetDivE = (e, value) => (e.innerText = value || 0);

let lastCorrect = true;

const checkAnswer = (e) => {
  e.preventDefault();
  if (lastCorrect == true) {
    decOneToDivE(totalLeft);
  }
  //correct
  if (e.target.value == EnghWord) {
    e.target.classList.add("correct");
    setTimeout(NewWord, 700);
    straightCorrect += 1;
    if (lastCorrect) addOneToDivE(totalCorrect);
    lastCorrect = true;

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
    LevelUpCount = Math.min(6, LevelUpCount + 1);
  }
  parseInt(totalLeft.innerText) == 0 && finish();
};
//all question finish
const finish = () => {
  answerDivE.style.display = "none";
  NextWordE.style.display = "none";
  speakerE.style.display = "none";
  restartGame.value = "למסך ראשי";
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

  for (let answerE of answerDivE.querySelectorAll("input")) {
    answerE.disabled = false;
    answerE.classList.remove("correct", "wrong");
    answerE.value = shuffledOptions.pop()[1];
  }
};
