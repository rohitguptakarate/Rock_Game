const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const Leftscorecard = document.querySelector("#Leftscorecard");
const Rightscorecard =document.querySelector("#Rightscorecard");
let userScore =0;
let compScore = 0;



const genCompChoice = () =>{
    const options =["rock", "paper", "scissors"];
    // rock paper scissors
    const randidx =Math.floor(Math.random() * 3);
    return options[randidx];
};

//Draw Game..
const drawGame = ()=>{
    console.log("Game is Draw ..Try again");
    msg.innerText ="Game is Draw ..Try again";
    msg.style.backgroundColor="#081b13";
    
};

const  showWinner = (userWin ,userChoice,compChoice) =>{
    if(userWin){

        userScore ++;
        Leftscorecard.innerText=userScore;
        console.log("You are Winner !");
        msg.innerText =`You are Win ! 😊 ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#38b000";
        
    }
    else{
        compScore++;
        Rightscorecard.innerText=compScore;
        console.log("You lose .");
        msg.innerText=`You lose 😒 ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#d00000";
    }

}

const playGame=(userChoice) =>{
    console.log("user Choice =", userChoice);
        // to generate computer choice...
    const compChoice = genCompChoice();
    console.log("compChoice=",compChoice);
    
         // Condition
    if  (userChoice === compChoice){
        // Draw Game calling here
        drawGame();   
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){  // compGent -> paper,scissors
            userWin = compChoice === " paper" ? false : true;

        }else if(userChoice === "paper"){
          userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock , paper.
           userWin = compChoice === "rock" ? false :true;
        }
            // --> Winner calling..
            showWinner(userWin ,userChoice,compChoice);
            
        }
    }


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // here caling Play Game
        playGame(userChoice);
        
    })
})
 