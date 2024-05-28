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
que.classList.add("ltr");
const Actions = [];
const settingsTotal = gtag("settingsTotal");
const gOptionsCount = 8;
const totalCorrect = gtag("totalCorrect");
const totalLeft = gtag("totalLeft");
const totalWrong = gtag("totalWrong");

// Global functions

const isPhone = () => {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4),
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

const varifyInput = () => {
  let ok = true;
  for (let row of tbody.querySelectorAll("tr")) {
    [mn, mx] = row.querySelectorAll("input");
    if (
      parseInt(mn.value) > parseInt(mx.value) ||
      mn.value == "" ||
      mx.value == ""
    ) {
      [mn, mx].forEach((e) => e.classList.add("wrong"));
      ok = false;
    } else {
      [mn, mx].forEach((e) => e.classList.remove("wrong"));
    }
  }

  if (settingsTotal.value == "") {
    ok = false;
    settingsTotal.classList.add("wrong");
  } else {
    settingsTotal.classList.remove("wrong");
  }
  return ok;
};

const setInputTypeToNumber = (elem) => {
  elem.type = isPhone() ? "tel" : "number";
  elem.pattern = "[0-9]*";
  elem.addEventListener("click", (e) => (elem.value = ""));
  elem.addEventListener("input", (e) =>
    setTimeout(() => {
      elem.blur();
      varifyInput();
    }, 1300),
  );
  return elem;
};

setInputTypeToNumber(settingsTotal);

const getRandomInt = (max, min = 0) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class Timer {
  constructor() {
    this.timerSetup = gtag("timerSetup");
    this.timerRuntime = gtag("timer");
    this.difficultyFactor = 5;
    this.timerSetup.addEventListener("change", () => this.resetTimer());
  }

  resetTimer = () => {
    this.stop();
    let difficalty = this.timerSetup.value;

    // meaning no timer
    if (difficalty == 0) {
      this.timerRuntime.style.display = "None";
      this.stop();
      this.stopped = false;
      return false;
    }

    // setting timer
    this.timerRuntime.style.display = "block";
    this.countDown = difficalty * this.difficultyFactor * settingsTotal.value;
    this.setTimerElement();
    return true;
  };

  start = () => {
    this.interval = setInterval(this.updateTime, 1000);
    this.stopped = false;
  };

  stop = () => {
    clearInterval(this.interval);
    this.stopped = true;
  };
  updateTime = () => {
    this.countDown -= 1;
    if (this.countDown == 0) {
      this.stop();
    }
    this.setTimerElement();
  };

  setTimerElement = () => {
    let seconds = this.countDown % 60;
    let minutes = Math.floor(this.countDown / 60);
    this.timerRuntime.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };
}

const TIMER = new Timer();

// Main loop
class Exercises {
  rerun = () => {
    TIMER.resetTimer() && TIMER.start();
    totalCorrect.innerText = 0;
    totalWrong.innerText = 0;
    answerDiv.style.display = "block";
    que.style.display = "block";
    que.innerText = "";
    this.nextExercise();
    totalLeft.innerText = settingsTotal.value;
  };

  newExerciseCleanup = () => (que.innerText = "");

  nextExercise = () => {
    this.hasAnsered = 0;
    this.newExerciseCleanup();
    let randomIndex = getRandomInt(Actions.length - 1);
    let action = Actions[randomIndex];

    let [sign, mix_n, max_n] = [action[0], action[1].value, action[2].value];
    let range = [getRandomInt(max_n, mix_n), getRandomInt(max_n, mix_n)];
    let [big, small] = [Math.max(...range), Math.min(...range)];
    if (sign == "/") big = small * big;
    if (sign == "/") sign.replace("x", "*");

    let exercise = `${big} ${sign} ${small}`;
    que.innerText = `${exercise} = ?`;
    this.correctAnswer = eval(exercise);
    this.setOptionsAnswres();
  };

  popRandomElement = (arr) =>
    arr.splice(Math.floor(Math.random() * arr.length), 1)[0];

  generateRandomOptions = (correctAnswer, optionsNum) => {
    const options = [];
    const correctAnswerLength = correctAnswer.toString().length;

    const factor = 0.9 + Math.random() * 0.2;
    const optionsSet = new Set(); // Use a Set to prevent duplicates
    optionsSet.add(correctAnswer);

    while (optionsSet.size < optionsNum) {
      let randomOption;
      do {
        const deviation = getRandomInt(25, -25);
        randomOption = Math.round(correctAnswer * factor + deviation);
      } while (
        randomOption <= 0 ||
        optionsSet.has(randomOption) ||
        randomOption == correctAnswer ||
        randomOption.toString().length != correctAnswerLength
      );

      optionsSet.add(randomOption);
    }

    // Convert the Set to an array
    options.push(...optionsSet);
    return options;
  };

  setOptionsAnswres = () => {
    let realResult = this.correctAnswer;
    let results = this.generateRandomOptions(realResult, gOptionsCount);
    Array.from(answerDiv.children).forEach((o) => {
      o.classList.remove("correct");
      o.classList.remove("wrong");
      o.value = this.popRandomElement(results, gOptionsCount);
    });
  };

  submitAnswer = (event) => {
    let btn = event.target;

    if (this.hasAnsered == 0) {
      totalLeft.innerText = parseInt(totalLeft.innerText) - 1;
    }
    if (btn.value != this.correctAnswer) {
      btn.classList.add("wrong");
      btn.blur();
      if (this.hasAnsered == 0)
        totalWrong.innerText = parseInt(totalWrong.innerText) + 1;
      this.hasAnsered = 1;
    } else {
      if (this.hasAnsered == 0)
        totalCorrect.innerText = parseInt(totalCorrect.innerText) + 1;
      btn.classList.add("correct");
      btn.blur();

      if (parseInt(totalLeft.innerText) === 0 || TIMER.stopped === true) {
        this.finish();
      }

      this.hasAnsered = 1;
      setTimeout(this.nextExercise, 700);
    }
  };

  finish() {
    answerDiv.style.display = "None";
    que.style.display = "None";
    TIMER.stop();
  }
}

const g_exercise = new Exercises();

//options
for (let i of Array(gOptionsCount)) {
  ansewrOption = ctag("input");
  ansewrOption.type = "text";
  ansewrOption.classList.add("ansewrOption", "button");
  ansewrOption.setAttribute("readonly", true);
  answerDiv.appendChild(ansewrOption);
  ansewrOption.addEventListener("click", g_exercise.submitAnswer);
}

defaultSettings = {
  "+": [10, 100],
  "-": [10, 100],
  "*": [2, 12],
  "/": [2, 5],
};

// Landing page layout
function userSetupLayout() {
  const tbody = document.querySelector("tbody");
  while (tbody.firstChild) tbody.removeChild(tbody.firstChild);

  const _createInputTd = (val, addAttrFunc = () => {}) => {
    let td_elem = ctag("td");
    let input_elem = ctag("input");
    addAttrFunc(input_elem);
    input_elem.value = val;
    td_elem.appendChild(input_elem);
    return td_elem;
  };

  const _createInputNumTd = (val) => _createInputTd(val, setInputTypeToNumber);

  // set up math preferences
  for (let [sign, [mn, mx]] of Object.entries(defaultSettings)) {
    // add row
    let tr = ctag("tr");

    // sign
    let tdSign = ctag("td");
    tdSign.innerText = sign;
    tdSign.classList.add("green", "bigFont");

    tdSign.addEventListener("click", () => {
      tr.dataset.filter = tr.dataset.filter === "false" ? "true" : "false";
      for (let inf of tr.querySelectorAll("input"))
        inf.disabled = tr.dataset.filter === "false";
      updateActions();
    });

    // arrow
    let tdTo = ctag("td");

    tdTo.classList.add("minwid");

    //append tds to row
    for (let td of [tdSign, _createInputNumTd(mn), _createInputNumTd(mx)])
      tr.appendChild(td);
    tbody.appendChild(tr);
  }
}

// landing page reset
const updateActions = () => {
  Actions.length = 0;
  for (let row of tbody.getElementsByTagName("tr")) {
    if (row.dataset.filter == "false") continue;
    let tds = row.querySelectorAll("td");
    let [sign, td_min_input, td_max_input] = tds;
    Actions.push([
      sign.innerText,
      td_min_input.querySelector("input"),
      td_max_input.querySelector("input"),
    ]);
  }
};

// settings  buttons listeners
(() => {
  newGame = gtag("newGame");

  newGame.addEventListener("click", function (event) {
    event.preventDefault();
    setup.style.display = "block";
    main.style.display = "None";
    updateActions();
  });

  startBtn = gtag("startBtn");
  startBtn.classList.add("button");
  startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (varifyInput() == false) return;
    setup.style.display = "None";
    main.style.display = "block";
    g_exercise.rerun();
  });
})();

// Landing page
(() => {
  userSetupLayout();
  updateActions();
})();
