// globals consts

const ctag = (tagName) => document.createElement(tagName);
const gtag = (_id) => document.getElementById(_id);
const cl = (s) => console.log(s);
const LevelUpCount = 10
 
let EnghWord =''

const NUM = 200
const MULTIPLE_OPTIONS = 6;
let Level = MULTIPLE_OPTIONS;

const totalLeft = gtag("totalLeft")
const totalWrong = gtag("totalWrong")
const totalCorrect = gtag("totalCorrect")
let straightCorrect = 0
 
totalLeft.innerText = NUM

 

import {DD} from "./dict.js"

let HEB_WORDS = Object.fromEntries(Object.entries(DD).slice(0,Level))

const increaseLevel = () => {
    cl("LEVEL UP")
    Level = Level +1
    HEB_WORDS = Object.fromEntries(Object.entries(DD).slice(Level -MULTIPLE_OPTIONS ,Level))
}

 

const NextWordE = gtag("NextWordE")
const AnswerDivE = gtag("answerDivE")

// layout
for (let i = 0; i < MULTIPLE_OPTIONS; i++) {
   let answer = ctag("input");
   answer.classList.add("multiselect")
   AnswerDivE.appendChild(answer)
   answer.addEventListener("click",(e)=>check(e))
}


const addOneToDivE = (e) => e.innerText = parseInt(e.innerText) + 1 

const check = (e) =>{
    addOneToDivE(totalCorrect);
    if (e.target.value == EnghWord){
        e.target.classList.add("correct")
        setTimeout(NewWord, 700);  
        straightCorrect +=1 ;
    }else{
        e.target.classList.add("wrong");
        addOneToDivE(totalWrong) 
        straightCorrect = 0 ;     
    }
    parseInt(totalLeft.innerText) == 0 &&  finish()
   
}

const finish = () =>{
    addOneToDivE(totalCorrect);
    AnswerDivE.style.display ="none";
    NextWordE.style.display ="none";
}

const shuffle = (_ent) => {
    let shuffled = [..._ent]; // Make a copy of the array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
const getRandomEntries = () => {
    let entries = Object.entries(HEB_WORDS);
    let shuffledEntries = shuffle(entries);
    return shuffledEntries.slice(0, MULTIPLE_OPTIONS);
}

const NewWord = () => {
    

    
    addOneToDivE(totalCorrect);
    const allOptions= getRandomEntries();
    const [rightOption, ... _] = allOptions;
    NextWordE.innerText = rightOption[0]
    EnghWord = rightOption[1]

    // Shuffle the options for display
    const shuffledOptions = shuffle(allOptions.slice()); // Make a copy to avoid modifying the original array

    for(let answerE of AnswerDivE.querySelectorAll("input")){
        answerE.classList.remove("correct", "wrong")
        answerE.value = shuffledOptions.pop()[1]
    }
    if (straightCorrect > 0 && straightCorrect % LevelUpCount == 0 )         increaseLevel()
}

NewWord()