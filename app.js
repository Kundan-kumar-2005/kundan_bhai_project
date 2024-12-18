let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const gencompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game draw";
    msg.style.backgroundColor="black";
};
const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
    console.log("you win!");
    msg.innerText=`you win!, your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}else{
    compScore++;
        compScorePara.innerText=compScore;
    console.log("you loose");
    msg.innerText=`you loose, ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
}
}

const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    //generate computer choice
    const compChoice=gencompChoice();
    console.log("compChoice=",compChoice)

    if (userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice==="rock"){
            //paper,scissor
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissor"?false:true;
        }else{
            //rock paper
           userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin,compChoice,userChoice);
    }

};





choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        // console.log("choice was clicked",choiceId);
    })
})

let modeBtn=document.querySelector("#mode");
let currMode="light";
modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.background="black";
    }else{
        currMode="light";
        document.querySelector("body").style.background="white";
    }
    console.log(currMode);
})