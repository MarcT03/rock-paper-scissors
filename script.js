function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)
    if (num == 0) {
        return "rock"
    }
    else if(num == 1){
        return "paper"
    }
    else{
        return "scissors"
    }
    
    
}

function getHumanChoice(){
    return prompt("Input your choice: Rock, Paper, or Scissors.")
    
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()

    const rules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'

    };

    if(humanChoice === computerChoice){
        console.log("It's a Draw!");
    }else if(rules[humanChoice] === computerChoice){
        humanScore = humanScore + 1;
        console.log("You win!");
    }else if (rules[computerChoice]===humanChoice){
        computerScore = computerScore + 1;
        console.log("You lose!");
    }

}

function playGame(){
    

    humanScore = 0
    computerScore = 0

    for(rounds = 0; rounds < 5; rounds++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }

    if(humanScore > computerScore){
        return "Player is the winner"
    }
    else{
        return "Computer is the winner"
    }
}
playGame()