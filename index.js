// buttons
const btnScore = document.getElementById("score");
const btnAccept = document.getElementById("accept");
const btnReset = document.getElementById("reset");

// texts
const textScore = document.getElementById("score-text");
const textAccept = document.getElementById("accept-text");

// team
const team = {
  players: 11,
  subStitute: 5,
  goals: {
    scored: 0,
    accepted: 0,
  },
  disqualified: 0,
  time: 0,
  btns: {
    score: btnScore,
    accept: btnAccept,
    reset: btnReset,
  },
  texts: {
    score: textScore,
    accept: textAccept,
  },
  changeScore() {
    this.goals.scored++;
    this.texts.score.innerText = this.goals.scored;
  },
  changeAccept() {
    this.goals.accepted++;
    this.texts.accept.innerText = this.goals.accepted;
  },
  resetGoals() {
    this.goals.accepted = 0;
    this.goals.scored = 0;

    this.texts.score.innerText = 0;
    this.texts.accept.innerText = 0;
  },
  init() {
    this.btns.score.onclick = () => this.changeScore();
    this.btns.accept.onclick = () => this.changeAccept();
    this.btns.reset.onclick = () => this.resetGoals();
  },
};

team.init();

// arrow functions dont do "this" dynamic
// այսինք ֆունկցիան ստեղծելիս "this" որոշվում(կպնում է) է տվյալ կոնտեքստից

// functions do "this" dynamic
// այսինք ֆունկցիան կանչելիս "this"-ը որոշվում է ըստ կանչած օբյեկտից

//////////////////////////////////////////////////////////////////////////////////

// async JavaScript
// sync JavaScript

// setTimeout(() => team.changeScore(), 3000);
// setTimeout(() => team.changeAccept(), 4000);

// let id = setTimeout(() => team.changeScore(), 5000);
// console.log(id);

// example 1
// let id2 = setInterval(() => {
//   if (team.goals.scored === 60) {
//     clearInterval(id2);
//   } else {
//     team.changeScore();
//   }
// }, 100);

// example 2
// const progress = document.getElementById("progress");

// let id2 = setInterval(() => {
//   if (progress.value >= 50) {
//     clearInterval(id2);
//     return;
//   }
//   progress.value += 0.1;
// }, 10);
