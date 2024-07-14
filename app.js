let userValue = "";
let pcValue = ["rock", "scissor", "paper"];

let userScore = parseInt(localStorage.getItem("user")) || 0;
let pcScore = parseInt(localStorage.getItem("pc")) || 0;

let home = document.getElementById("home-page");
let tie = document.getElementById("tie-page");
let win = document.getElementById("win-page");
let loss = document.getElementById("loss-page");
let hurray = document.getElementById("hurray-page");
let rulesTags = document.querySelectorAll("#rules");
let displayUserScore = document.querySelectorAll("#yourScore");
let displayComputerScore = document.querySelectorAll("#computerScore");
let userPicks = document.querySelectorAll("#user-picked");
let pcPicks = document.querySelectorAll("#pc-picked");

function picked(userValue, computerChoice) {
  for (let i = 0; i < userPicks.length; i++) {
    userPicks[i].setAttribute("src", `./icons/${userValue}.svg`);
  }
  for (let i = 0; i < pcPicks.length; i++) {
    pcPicks[i].setAttribute("src", `./icons/${computerChoice}.svg`);
  }
}

function userPicked(value) {
  displayScores();
  userValue = value;
  let computerChoice = pcValue[Math.floor(Math.random() * pcValue.length)];
  if (userValue === computerChoice) {
    tie.style.display = "block";
    win.style.display = "none";
    loss.style.display = "none";
    hurray.style.display = "none";
    home.style.display = "none";
    picked(userValue, computerChoice);
  } else if (
    (userValue === "rock" && computerChoice === "scissor") ||
    (userValue === "scissor" && computerChoice === "paper") ||
    (userValue === "paper" && computerChoice === "rock")
  ) {
    win.style.display = "block";
    loss.style.display = "none";
    hurray.style.display = "none";
    home.style.display = "none";
    tie.style.display = "none";
    picked(userValue, computerChoice);
    userScore = userScore + 1;
    localStorage.setItem("user", userScore);
    displayScores();
  } else {
    win.style.display = "none";
    loss.style.display = "block";
    hurray.style.display = "none";
    home.style.display = "none";
    tie.style.display = "none";
    picked(userValue, computerChoice);
    pcScore = pcScore + 1;
    localStorage.setItem("pc", pcScore);
    displayScores();
  }
}
function nextPage() {
  tie.style.display = "none";
  win.style.display = "none";
  loss.style.display = "none";
  hurray.style.display = "block";
  home.style.display = "none";
}

function payAgain() {
  tie.style.display = "none";
  win.style.display = "none";
  loss.style.display = "none";
  hurray.style.display = "none";
  home.style.display = "block";
}

function closeRules() {
  for (let i = 0; i < rulesTags.length; i++) {
    rulesTags[i].style.display = "none";
  }
}

function openRules() {
  for (let i = 0; i < rulesTags.length; i++) {
    rulesTags[i].style.display = "block";
  }
}

function displayScores() {
  for (let i = 0; i < displayComputerScore.length; i++) {
    displayComputerScore[i].textContent =
      parseInt(localStorage.getItem("pc")) || pcScore;
  }
  for (let i = 0; i < displayUserScore.length; i++) {
    displayUserScore[i].textContent =
      parseInt(localStorage.getItem("user")) || userScore;
  }
}
displayScores();

window.onload = function () {
  home.style.display = "block";
  tie.style.display = "none";
  win.style.display = "none";
  loss.style.display = "none";
  hurray.style.display = "none";
};
