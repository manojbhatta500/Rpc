console.log("script is running");
let computerScore = 0;

let humanScore = 0;
function getComputerChoice(){
   let num =  Math.floor(Math.random() * 3);
   return num;
}

function getHumanChoice(){
    let userNumber;
    userNumber = prompt("please enter the value 0 for rock 1 for paper and 2 for sicsors");
    while(userNumber> 3){
     userNumber = prompt("value should be less then 3");
     if (userNumber<3){
        break;
     }
    }
    return userNumber;
}
function playSingleRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if(computerChoice ==0){
        if (humanChoice == 0){
            console.log("draw");
            console.log("rock draws with rock");
        }else if( humanChoice ==1){
            console.log("you loose");
            console.log("rock can't beat paper");
            computerScore = computerScore + 1;
        }else if(humanChoice == 2){
            console.log("you won");
            console.log("rock beats siscorrs");
            humanScore = humanScore + 1;
        }else{
            console.log("this shouldn't happen");
        }
    }else if(computerChoice ==1){
        if (humanChoice == 0){
            console.log("you won");
            console.log("paper wins rock");
            humanScore = humanScore + 1;
        }else if( humanChoice ==1){
            console.log("draw");
            console.log("paper can't beat paper");
        }else if(humanChoice == 2){
            console.log("you lost");
            console.log("paper looses to siscorrs");
            computerScore = computerScore + 1;
        }else{
            console.log("this shouldn't happen");
        }
    }else if (computerChoice == 2){
        if (humanChoice == 0){
            console.log("lost");
            console.log("sicsorrs  loses to rock");
            computerScore = computerScore +1;
        }else if( humanChoice ==1){
            console.log("win");
            console.log("sicsorrs beats  paper");
            humanScore = humanScore + 1;
        }else if(humanChoice == 2){
            console.log("draw");
            console.log("siscorrs draws to siscorrs");
        }else{
            console.log("this shouldn't happen");
        }
    }else{
        console.log(" computer choice can't be bigger then 2;")
        console.log("this should not happen");
    }
}


function playGame(){




    for(var i = 0; i<5;i++){
        playSingleRound()
    }
    
}


playGame();