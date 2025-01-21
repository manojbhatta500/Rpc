let humanScorevalue = document.querySelector(".humanscore");
let computerScoreValue = document.querySelector(".computerscore");


let LastHumanselectedValue = document.querySelector(".currentHumanScore");
let lastComputerSelectedValue = document.querySelector(".currentComputerResult");


let desc = document.querySelector('.descres');

let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let sicsorrsButton = document.querySelector('#sicsorrs');
let restartButton = document.querySelector('#restart');


let humanScore = 0;
let computerScore = 0;

LastHumanselectedValue.innerHTML = '';
lastComputerSelectedValue.innerHTML = '';
desc.innerHTML = 'Please play!';


function playRound(i){
    let humanChoice = i;
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice ==0){
                if (humanChoice == 0){
                    desc.innerHTML = "Sorry it was Draw. play again to win";
                    LastHumanselectedValue.innerHTML = "rock";
                    lastComputerSelectedValue.innerHTML = "rock";
                    humanScorevalue.innerHTML = humanScore;
                    computerScoreValue.innerHTML = computerScore;
                }else if( humanChoice ==1){
                    desc.innerHTML = "you won. paper wins against rock";
                    LastHumanselectedValue.innerHTML = "paper";
                    lastComputerSelectedValue.innerHTML = "rock";
                    humanScore = humanScore + 1;
                    humanScorevalue.innerHTML = humanScore;
                    computerScoreValue.innerHTML = computerScore;

                }else if(humanChoice == 2){
                    desc.innerHTML = "you lost. sicsorrs loses against rock";
                    LastHumanselectedValue.innerHTML = "sicsorrs";
                    lastComputerSelectedValue.innerHTML = "rock";
                    computerScore = computerScore + 1;
                    humanScorevalue.innerHTML = humanScore;
                    computerScoreValue.innerHTML = computerScore;
                }else{
                    console.log("this shouldn't happen");
                }
    }else if(computerChoice ==1){
                if (humanChoice == 0){
                    desc.innerHTML = "you lost. paper beats rock";
                    LastHumanselectedValue.innerHTML = "rock";
                    lastComputerSelectedValue.innerHTML = "paper";
                    computerScore = computerScore + 1;
                    humanScorevalue.innerHTML = humanScore;
                    computerScoreValue.innerHTML = computerScore;
                }else if( humanChoice ==1){
                    desc.innerHTML = "you draw.play again to win";
                    LastHumanselectedValue.innerHTML = "paper";
                    lastComputerSelectedValue.innerHTML = "paper";
                    humanScorevalue.innerHTML = humanScore;
                    computerScoreValue.innerHTML = computerScore;
                }else if(humanChoice == 2){
                    desc.innerHTML = "you won.sicsorrs beats to paper";
                    LastHumanselectedValue.innerHTML = "sicsorrs";
                    lastComputerSelectedValue.innerHTML = "paper";
                    humanScore = humanScore + 1;
                    humanScorevalue.innerHTML = humanScore;
                    computerScoreValue.innerHTML = computerScore;
                  
                }else{
                    console.log("this shouldn't happen");
                }
    }else if (computerChoice == 2){
                if (humanChoice == 0){
                    desc.innerHTML = "you won. rock beats sisorrs";
                    LastHumanselectedValue.innerHTML = "rock";
                    lastComputerSelectedValue.innerHTML = "sisorrs";
                    humanScore = humanScore + 1;
                    humanScorevalue.innerHTML = humanScore;
                    computerScoreValue.innerHTML = computerScore;
                }else if( humanChoice ==1){
                    desc.innerHTML = "you lost. sicsorrs beats paper";
                    LastHumanselectedValue.innerHTML = "paper";
                    lastComputerSelectedValue.innerHTML = "sisorrs";
                    computerScore = computerScore + 1;
                    humanScorevalue.innerHTML = humanScore;
                    computerScoreValue.innerHTML = computerScore;
                }else if(humanChoice == 2){
                    desc.innerHTML = "you draw.play again to win";
                    LastHumanselectedValue.innerHTML = "sicsorrs";
                    lastComputerSelectedValue.innerHTML = "sicsorrs";
                    humanScorevalue.innerHTML = humanScore;
                    computerScoreValue.innerHTML = computerScore;
                }else{
                    console.log("this shouldn't happen");
                }
    }else{
                console.log(" computer choice can't be bigger then 2;")
                console.log("this should not happen");
            }
}

restartGame();

restartButton.addEventListener("click",restartGame);



function restartGame(){
    humanScore = 0;
    computerScore = 0;
    LastHumanselectedValue.innerHTML = '';
    lastComputerSelectedValue.innerHTML = '';
    humanScorevalue.innerHTML = '0';
    computerScoreValue.innerHTML = '0';
    desc.innerHTML = 'Please play !';
}


rockButton.addEventListener("click",()=>playRound(0));
paperButton.addEventListener('click',()=>playRound(1));
sicsorrsButton.addEventListener('click',()=>playRound(2));
