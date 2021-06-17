var game = ["Rock", "Scissors", "Paper"];
  
var scoreW = 0;
   
var scoreL = 0;
 
var scoreT = 0;

var start = function() {
    var upperCaseUserChoice = window.prompt("Hello, lets play Rock Paper Scissors, you pick first.");
}

var index = Math.floor(Math.random()*3); 
var computerChoice = game[index];
    window.alert(`Computer chooses ${computerChoice}`)


var upperCaseUserChoice = start.toUpperCase();

if (upperCaseUserChoice === computerChoice) {
    window.alert(`Computer chooses ${computerChoice}, it's a tie!`) 
    scoreT++; 
} else if ((upperCaseUserChoice === "Rock" && computerChoice === "Paper") || (upperCaseUserChoice === "Paper" && computerChoice ==="Scissors") || (upperCaseUserChoice === "Scissors" && computerChoice === "Rock")) {
    scoreL++;
    window.alert("LOL YOU LOST");
} else {
     scoreW++;
     window.alert("You WON!!");
 }




dont forget to close out your liveshare 



// var txt;
// var yes = confirm("Do you want to play again?");

// if (yes === true) {
//     start()
// }
// else {
//     alert(`Game Over! Your score is W: ${scoreW} L: ${scoreL} T: ${scoreT}`)
// }