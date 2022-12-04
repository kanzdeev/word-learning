let answer;
let question;
var words = {
    polish: [],
    english: []
}

const getWordsPL = () => {
    const txt = document.getElementById('textarea').value;
    let word = txt.split(", ")
    for (let i = 0; i < word.length; i++) {
        words.polish.push(word[i])
    }
}

const getWordsEN = () => {
    const txt = document.getElementById('textarea').value;
    let word = txt.split(", ")
    for (let i = 0; i < word.length; i++) {
        words.english.push(word[i])
    }
}

const shuffle = () => {
    for (let i = words.english.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tempEN = words.english[i];
        let tempPL = words.polish[i];
        // shuffling english words  in the same sequence
        words.english[i] = words.english[j];
        words.english[j] = tempEN;
        // shuffling polish words in the same sequence
        words.polish[i] = words.polish[j];
        words.polish[j] = tempPL;
    }
  }

const zapisz = () => {
    localStorage.setItem("words", JSON.stringify(words));
    words = localStorage.getItem("words");
}

const reset = () => {
    localStorage.clear()  
}

const enToPl = () => {
    words = JSON.parse(localStorage.getItem("words"))
    if (!words.english || words.polish == null) {
        return alert("musisz wpisać jakieś słowa")
    }
    for (let i = 0; i < words.english.length; i++) {
        answer = words.polish[i]
        question = prompt(words.english[i])
        if (question == answer) {
            console.log("✅ " + words.english[i])
        } else if (question != answer) {
            console.log("❌ " + words.english[i] + " ✅ => correct answer is: " + words.polish[i])
        }
    }
}

const plToEn = () => {
    words = JSON.parse(localStorage.getItem("words"))
    if (!words.english || words.polish == null) {
        return alert("musisz wpisać jakieś słowa")
    }
    for (let i = 0; i < words.polish.length; i++) {
        answer = words.english[i]
        question = prompt(words.polish[i])
        if (question == answer) {
            console.log("✅ " + words.polish[i])
        } else if (question != answer) {
            console.log("❌ " + words.polish[i] + " ✅ => correct answer is: " + words.english[i])
        }
    }
}





  