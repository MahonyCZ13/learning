// Simple rock, paper, scissors game 
// v0.1
// Petr Maronek
var userInput = prompt("rock, paper or scissors?")
var cpuInput = Math.random();

    if (cpuInput <= 0.33) {
        cpuInput = "rock";
    }
    else if (cpuInput >= 0.66) {
        cpuInput = "scissors";
    }
    else {
        cpuInput = "paper";
    }

    console.log("User chose " + userInput);

    console.log("Computer chose " + cpuInput);

    var result = function (selection1, selection2) {
        if(selection1 === selection2){
            return "A tie!"
        }
        else if (selection1 === "rock") {
            if (selection2 === "paper") {
                return "Paper wins!";
            }
            else {
                return "Rock wins!";
            }
        }
        else if (selection1 === "paper") {
            if(selection2 === "scissors"){
                return "Scissors wins!";
            }
            else {
                return "Paper wins!";
            }
        }
        else if(selection1 === "scissors"){
            if(selection2 === "rock"){
                return "Rock wins!";
            }
            else {
                return "Scissors wins!";
            }
        }
        else {
            return "Rock wins!"
        }
    }

    result(userInput, cpuInput);