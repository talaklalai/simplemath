// globals consts

const ctag = (tagName) => document.createElement(tagName);
const gtag = (_id) => document.getElementById(_id);
const dd = (s) => console.log(s);
const answerDiv = gtag("answerDiv");
const setup = gtag("setup");
const execTodoE = gtag("execTodo");
const main = gtag("main");
main.style.display = "None";
const que = gtag("question");
const startBtn = gtag("startBtn");
const finger = "👆🏻";
const endBtn = gtag("endBtn");
let varifyNewGame = false;
const gOptionsCount = 6;
const totalCorrect = gtag("totalCorrect");
const totalLeft = gtag("totalLeft");
const totalWrong = gtag("totalWrong");
const cl = (m) => console.log(m);
const clockE = gtag("clockE");

const body = gtag("body");
body.addEventListener("contextmenu", (e) => e.preventDefault());

/////////////////////// setup options
const getRandomInt = (max, min = 0) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getMinMaxValues = (sign) => {
  lvl = level.value;
  if (sign == "+" || sign == "-") {
    if (lvl == 0) return [1, 100];
    if (lvl == 1) return [10, 150];
    if (lvl == 2) return [20, 200];
    if (lvl == 3) return [100, 1000];
    if (lvl == 4) return [1000, 10000];
    if (lvl == 5) return [10000, 100000];
  } else {
    if (lvl == 0) return [1, 10];
    if (lvl == 1) return [2, 12];
    if (lvl == 2) return [5, 15];
    if (lvl == 3) return [10, 20];
    if (lvl == 4) return [20, 50];
    if (lvl == 5) return [50, 100];
  }
};

const getNewValues = (sign) => {
  let [v1, v2] = getMinMaxValues(sign);
  let [tmn, tmx] = [getRandomInt(v1, v2), getRandomInt(v1, v2)];
  let [mn, mx] = [Math.min(tmn, tmx), Math.max(tmn, tmx)];
  if (sign == "/") {
    mx = mn * mx;
  }
  return [mn, mx];
};

const signs = {
  חיבור: "+",
  חיסור: "-",
  כפל: "*",
  חילוק: "/",
};

// targilim select
const targilim = gtag("targilim");
for (let num of [10, 20, 40, 60, 80, 100]) {
  let option = ctag("option");
  option.innerText = num;
  option.value = num;
  targilim.appendChild(option);
  if (num == 20) option.setAttribute("selected", true);
}

//clock select
const clock = gtag("clock");
for (let num of [3, 5, 10, 15, 20, "ללא"]) {
  let option = ctag("option");
  option.innerText = num;
  option.value = num;
  clock.appendChild(option);
  if (num == "ללא") option.setAttribute("selected", true);
}

//actions select
const actions = gtag("actions");
for (let num of ["חיבור", "חיסור", "כפל", "חילוק", "הכל"]) {
  let option = ctag("option");
  option.innerText = num;
  option.value = num;
  actions.appendChild(option);
  if (num == "הכל") option.setAttribute("selected", true);
}
const colors = ["white", "yellow", "orange", "#4285f4", "red", "black"];

// belt level select
const level = gtag("level");
for (let num of [
  ["לבנה", 0],
  ["צהובה", 1],
  ["כתומה", 2],
  ["כחולה", 3],
  ["אדומה", 4],
  ["שחורה", 5],
]) {
  let option = ctag("option");
  option.innerText = num[0];
  option.value = num[1];
  option.style.color = colors[num[1]];
  level.appendChild(option);
  if (num == "הכל") option.setAttribute("selected", true);
}

class Clock {
  setValid = () => {
    if (clock.value == "ללא") {
      this.valid = false;
      return;
    }
    cl("is valid");
    this.valid = true;
  };

  timeGui = () => (clockE.innerText = `  זמן: ${this.seconds_left}`);

  startTick = (callback) => {
    if (this.valid == false) return;
    this.seconds_left = clock.value;
    this.timeGui();
    this.interval = setInterval(() => {
      this.timeGui();
      this.seconds_left = this.seconds_left - 1;
      if (this.seconds_left == 0) {
        this.stopTick();
        callback();
      }
    }, 1000);
  };

  stopTick = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };
}

const CLOCK = new Clock();

// to get answers close enough to the real answer
const getRandomDeviation = (num) => {
  const factor = 0.9 + Math.random() * 0.2;
  if (num > 100) {
    const deviation = getRandomInt(50, -50);
    randomOption = Math.round(num * factor + deviation);
    const correctAnswerUnit = num % 10;
    randomOption = randomOption - (randomOption % 10) + correctAnswerUnit;
  } else if (num < 100 && num > 10) {
    const deviation = getRandomInt(25, -25);
    randomOption = Math.round(num * factor + deviation);
  } else {
    const deviation = getRandomInt(5, -5);
    randomOption = Math.round(num * factor + deviation);
  }
  return Math.abs(randomOption);
};

const increaseDiv = (e) => (e.innerText = parseInt(e.innerText) + 1);
const decreaseDiv = (e) => (e.innerText = parseInt(e.innerText) - 1);
const setDiv = (e, val) => (e.innerText = val);

// check answer
let lastWrong = false;

const checkAnswer = (target) => {
  // correct
  lastWrong == false && decreaseDiv(totalLeft);
  if (target.value == correctAnswer) {
    target.classList.add("correct");
    lastWrong == false && increaseDiv(totalCorrect);
    lastWrong = false;

    setTimeout(nextQuestion, 500);
    //wrong
  } else {
    target.classList.add("wrong");
    if (lastWrong == false) {
      increaseDiv(totalWrong);
    }
    lastWrong = true;
  }
};

const gameParameters = {
  mn: 0,
  mx: 0,
  sign: 0,
};

//multiple answers element layout
for (let i of Array(gOptionsCount)) {
  ansewrOption = ctag("input");
  ansewrOption.type = "text";
  ansewrOption.classList.add("multiselect");
  ansewrOption.setAttribute("readonly", true);
  answerDiv.appendChild(ansewrOption);
  ansewrOption.addEventListener("click", (e) => checkAnswer(e.target));
}

// sign
const getSign = () => {
  if (actions.value == "הכל") {
    sl = Object.values(signs);
    let randomIndex = Math.floor(Math.random() * sl.length);
    return sl[randomIndex];
  }
  return signs[actions.value];
};

// this is the actual game   //// /////////
let globalTargil = "";
let correctAnswer = "";

const startGame = () => {
  totalLeft.innerText = parseInt(targilim.value);
  CLOCK.setValid();
  nextQuestion();
};

const caseTimeOut = () => {
  answerDiv
    .querySelectorAll("input")
    .forEach((item) =>
      item.classList.add(item.value == correctAnswer ? "correct" : "wrong"),
    );
  lastWrong = true;
  increaseDiv(totalWrong);
  decreaseDiv(totalLeft);

  if (parseInt(totalLeft.innerText) == 0) {
    setTimeout(finish, 2000);
  } else {
    setTimeout(nextQuestion, 2000);
  }
};

const nextQuestion = () => {
  CLOCK.stopTick();
  CLOCK.startTick((callback = caseTimeOut));
  lastWrong = false;
  let sign = getSign();
  let [mnval, mxval] = getNewValues(sign);
  globalTargil = `${mxval} ${sign} ${mnval}`;

  // looks mirror
  question.innerText = `= ${mnval} ${sign} ${mxval}`;
  correctAnswer = eval(globalTargil);

  let options = [];

  // set multiple answers options
  for (let o of answerDiv.querySelectorAll("input")) {
    let newVal;
    do {
      newVal = getRandomDeviation(correctAnswer);
    } while (options.includes(newVal) || newVal == correctAnswer);
    options.push(newVal);
    o.value = newVal;
    o.classList.remove("correct", "wrong");
  }
  //we put the correct answer in random place
  answerDiv.querySelectorAll("input")[getRandomInt(5)].value = correctAnswer;
};
// end main loop game  ///////////////////

//setup
const setSetupDisplays = () => {
  setup.style.display = "block";
  main.style.display = "none";
  varifyNewGame = false;
  endBtn.value = "סיים משחק";
  setDiv(totalCorrect, 0);
  setDiv(totalWrong, 0);
  setDiv(totalLeft, targilim.value);
};

//new game after setup
const setGameDisplays = () => {
  setup.style.display = "none";
  main.style.display = "block";
  varifyNewGame = false;
  endBtn.value = "סיים משחק";
  answerDiv.style.display = "block";
  question.style.display = "block";
  clockE.style.display = "block";
};

endBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (parseInt(totalLeft.innerText) != 0 && varifyNewGame == false) {
    endBtn.value = "לחץ שוב לסיום";
    varifyNewGame = true;
  } else {
    setSetupDisplays();
  }
});

startBtn.addEventListener("click", function (event) {
  setGameDisplays();
  startGame();
});

const finish = () => {
  answerDiv.style.display = "none";
  question.style.display = "none";
  CLOCK.stopTick();
  clearInterval(CLOCK.interval);
  clockE.style.display = "none";
  endBtn.value = "למסך ראשי";
};

setSetupDisplays();
