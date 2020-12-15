// // // this => այս

// // // object => context
// // // {}, [], function

// // const getSalary = function (salary) {
// //   this.money += salary;
// // };

// // const user = {
// //   name: "Tom",
// //   money: 100,
// //   // methods, action
// //   run: function () {
// //     console.log(45);
// //   },
// //   speak: function () {
// //     console.log("Hello");
// //   },
// //   think() {
// //     console.log("Hello");
// //   },
// //   getSalary,
// // };

// // user.getSalary(150);
// // // console.log(user.money)

// // const user1 = {
// //   money: 50,
// //   getSalary,
// // };

// // user1.getSalary(80);
// // user.getSalary(150);

// // user1.getSalary(80);
// // user.getSalary(150);

// // console.log({
// //     money1: user1.money,
// //     money: user.money
// // });

// // buttons
// const btnScore = document.getElementById("score");
// const btnAccept = document.getElementById("accept");
// const btnReset = document.getElementById("reset");

// // texts
// const textScore = document.getElementById("score-text");
// const textAccept = document.getElementById("accept-text");

// // team
// const team = {
//   players: 11,
//   subStitute: 5,
//   goals: {
//     scored: 0,
//     accepted: 0,
//   },
//   disqualified: 0,
//   time: 0,
//   btns: {
//     score: btnScore,
//     accept: btnAccept,
//     reset: btnReset,
//   },
//   texts: {
//     score: textScore,
//     accept: textAccept,
//   },
//   changeScore() {
//     this.goals.scored++;
//     this.texts.score.innerText = this.goals.scored;
//   },
//   changeAccept() {
//     this.goals.accepted++;
//     this.texts.accept.innerText = this.goals.accepted;
//   },
//   resetGoals() {
//     this.goals.accepted = 0;
//     this.goals.scored = 0;

//     this.texts.score.innerText = 0;
//     this.texts.accept.innerText = 0;
//   },
// };

// team.btns.score.onclick = () => team.changeScore();
// team.btns.accept.onclick = () => team.changeAccept();
// team.btns.reset.onclick = () => team.resetGoals();
