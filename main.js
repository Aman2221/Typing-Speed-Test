const setOfLines = [
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    "Optimism is an occupational hazard of programming: feedback is the treatment. ",
    "When to use iterative development? You should use iterative development only on projects that you want to succeed."
];

const h2 = document.getElementById('msg');
const textArea = document.getElementById('myWords');
const Btn = document.getElementById('btn');
let startTime, endTime;


const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfLines.length);
    msg.innerText = setOfLines[randomNumber];
    const date = new Date();
    startTime = date.getTime();
    Btn.innerText = 'Done';
}

const endGame = () => {
    const date = new Date();
    endTime = date.getTime(); 
    const totalTime = ((endTime - startTime) / 1000);
    let totalStr = textArea.value;
    let wordCount = wordCounter(totalStr);

    let Speed = Math.round((wordCount / totalTime) * 60);

    let finalMessage = 'Speed is : '+Speed+'WPM and  Total Time is : '+Math.floor(totalTime)+"MS, ";
    finalMessage += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMessage;
}

const wordCounter = (str) => {
    const response = str.split(" ").length;
    return response;
};

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function (item, index) {
        if(item == words2[index]){
            cnt++;
        }
        })
    let errorWords = (words1.length - cnt);
    return (cnt + " Correct out of " + words1.length + " words and the total number of error are " + errorWords + " .");
}


Btn.addEventListener('click', () => {
    if(Btn.innerText == 'Start'){
        textArea.disabled = false;
        playGame();
        console.log('Aman');
    }
    else if(Btn.innerText == 'Done'){
        textArea.disabled = true;
        Btn.innerText = 'Start';
        endGame();
    }
})
