let boxBtn = document.querySelectorAll(".box");
let rstBtn = document.querySelector(".reset-btn");
let msgpara = document.querySelector("#msgId");
let winBox = document.querySelector(".msgBox");
let playSquid = document.querySelector(".Board");


// player = X,O
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const boxs = (box) => {
    box.addEventListener("click", () => {
        console.log("Clicked");
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "x";
            turnO = true;
        };

        // to avoid overwrite making button disabled
        box.disabled = true;

        checkWinner();

    });
}
// disable after getting winner
const disableBtn = () =>{
    for(let boxess of boxBtn){
        boxess.disabled = true;
    }
}
// enable after pressing new game or restart
const enableBtn = () =>{
    for(let boxess of boxBtn){
        boxess.disabled = false;
        boxess.innerText ="";
    }
}
const showWinner = (winner) =>{
    msgpara.innerText = `Winner is ${winner}`;
    winBox.classList.remove("hide");
    disableBtn();
    
}
const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1Val = boxBtn[pattern[0]].innerText;
        let pos2Val = boxBtn[pattern[1]].innerText;
        let pos3Val = boxBtn[pattern[2]].innerText;

        // checking condition
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            // if all are same or not
            // pos1Val === pos2Val && pos2Val === pos3Val
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                console.log("winner is ",pos1Val);
            }
        }
    };

}
// accessing each box
boxBtn.forEach(boxs);

const resetGame = () =>{
    turnO = true ;
    enableBtn();
    winBox.classList.add("hide");
}
rstBtn.addEventListener("click",resetGame);