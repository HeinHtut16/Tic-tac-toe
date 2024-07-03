let xo = "x";
const ticTacToeContainer = document.querySelector(".tic-tac-toe-container");
const dialog2 = document.querySelector(".dialog2");
const player1Result = document.querySelector(".player1-result");
const player2Result = document.querySelector(".player2-result");
const player1xo = document.querySelector(".player1 .xo");
const player2xo = document.querySelector(".player2 .xo");
const restartBtn = document.querySelector(".restart-btn");
const winnerText = document.querySelector(".winner-text");
let xExists;
let oExists;
let player1Score = 0;
let player2Score = 0;
let player1 = "x";
let player2 = "o";
let nonDrawRound = false;
let playerWins = false;

ticTacToeMiniContainers.forEach(ele => {
    ele.addEventListener("click", () => {
        if(ele.innerHTML !== "") return;

        if(xo === "x") {
            ele.innerHTML = `
            <i class="fa-solid fa-xmark"></i>
            `;           
        } else {
            ele.innerHTML = `
            <i class="fa-solid fa-o"></i>
            `;
        }
        xo = xo === "x" ? "o" : "x";
        check();
    });
});

function doesXOrOExist(value) {
    xExists = document.querySelector(`.tic-tac-toe-mini-container${value+1} .fa-xmark`);
    oExists = document.querySelector(`.tic-tac-toe-mini-container${value+1} .fa-o`);
}

function restart() {
    xo = "x";
    playerWins = false;
    let isPlayer1X = document.querySelector(".player1 .fa-xmark");
    if(isPlayer1X) {
        player1xo.classList.replace("fa-xmark", "fa-o");
        player2xo.classList.replace("fa-o", "fa-xmark");
    } else {
        player1xo.classList.replace("fa-o", "fa-xmark");
        player2xo.classList.replace("fa-xmark", "fa-o");
    }
    ticTacToeMiniContainers.forEach(ele => {
        ele.innerHTML = "";
    });
    winnerSticks.forEach(ele => {
        ele.style.display = "none";
    });
    dialog2.close();
}

function check() {
    let isTrueForX = Array(8).fill(true);
    let isTrueForO = Array(8).fill(true);
    for(let i = 0; i < ticTacToeMiniContainers.length; i++) {
        if(i === 0) {
            doesXOrOExist(0);
            if(!xExists) isTrueForX[0] = false;
            if(!oExists) isTrueForO[0] = false;
            if(!xExists) isTrueForX[3] = false;
            if(!oExists) isTrueForO[3] = false;
            if(!xExists) isTrueForX[7] = false;
            if(!oExists) isTrueForO[7] = false;
        }
        if(i === 1) {
            doesXOrOExist(1);
            if(!xExists) isTrueForX[0] = false;
            if(!oExists) isTrueForO[0] = false;
            if(!xExists) isTrueForX[4] = false;
            if(!oExists) isTrueForO[4] = false;
        }
        if(i === 2) {
            doesXOrOExist(2);
            if(!xExists) isTrueForX[0] = false;
            if(!oExists) isTrueForO[0] = false;
            if(!xExists) isTrueForX[5] = false;
            if(!oExists) isTrueForO[5] = false;
            if(!xExists) isTrueForX[6] = false;
            if(!oExists) isTrueForO[6] = false;
        }
        if(i === 3) {
            doesXOrOExist(3);
            if(!xExists) isTrueForX[1] = false;
            if(!oExists) isTrueForO[1] = false;
            if(!xExists) isTrueForX[3] = false;
            if(!oExists) isTrueForO[3] = false;
        }
        if(i === 4) {
            doesXOrOExist(4);
            if(!xExists) isTrueForX[1] = false;
            if(!oExists) isTrueForO[1] = false;
            if(!xExists) isTrueForX[4] = false;
            if(!oExists) isTrueForO[4] = false;
            if(!xExists) isTrueForX[6] = false;
            if(!oExists) isTrueForO[6] = false;
            if(!xExists) isTrueForX[7] = false;
            if(!oExists) isTrueForO[7] = false;
        }
        if(i === 5) {
            doesXOrOExist(5);
            if(!xExists) isTrueForX[1] = false;
            if(!oExists) isTrueForO[1] = false;
            if(!xExists) isTrueForX[5] = false;
            if(!oExists) isTrueForO[5] = false;
        }
        if(i === 6) {
            doesXOrOExist(6);
            if(!xExists) isTrueForX[2] = false;
            if(!oExists) isTrueForO[2] = false;
            if(!xExists) isTrueForX[3] = false;
            if(!oExists) isTrueForO[3] = false;
            if(!xExists) isTrueForX[6] = false;
            if(!oExists) isTrueForO[6] = false;
        }
        if(i === 7) {
            doesXOrOExist(7);
            if(!xExists) isTrueForX[2] = false;
            if(!oExists) isTrueForO[2] = false;
            if(!xExists) isTrueForX[4] = false;
            if(!oExists) isTrueForO[4] = false;
        }
        if(i === 8) {
            doesXOrOExist(8);
            if(!xExists) isTrueForX[2] = false;
            if(!oExists) isTrueForO[2] = false;
            if(!xExists) isTrueForX[5] = false;
            if(!oExists) isTrueForO[5] = false;
            if(!xExists) isTrueForX[7] = false;
            if(!oExists) isTrueForO[7] = false;
        }
    }

    isTrueForX.forEach((ele, index) => {
        if(ele) {
            if(playerWins) return;
            winnerSticks[index].style.display = "block";
            nonDrawRound = true;
            playerWins = true;
            let isPlayer1X = document.querySelector(".player1 .fa-xmark");
            if(isPlayer1X) {
                player1Score++;
                player1Result.textContent = player1Score;
                winnerText.textContent = "Player 1 Wins!";
            } else {
                player2Score++;
                player2Result.textContent = player2Score;
                winnerText.textContent = "Player 2 Wins!";
            }
            dialog2.showModal();
        }
    });

    isTrueForO.forEach((ele, index) => {
        if(ele) {
            if(playerWins) return;
            winnerSticks[index].style.display = "block";
            nonDrawRound = true;
            playerWins = true;
            let isPlayer1X = document.querySelector(".player1 .fa-xmark");
            if(isPlayer1X) {   
                player2Score++;
                player2Result.textContent = player2Score;
                winnerText.textContent = "Player 2 Wins!";
            } else {
                player1Score++;
                player1Result.textContent = player1Score;
                winnerText.textContent = "Player 1 Wins!";
            }
            dialog2.showModal();         
        }
    }); 

    if(!nonDrawRound) {
        let descendantsLength = ticTacToeContainer.querySelectorAll("*").length;
        if(descendantsLength === 26) {
        dialog2.showModal();
        winnerText.textContent = "Draw!";
    }
    }
}

restartBtn.addEventListener("click", restart);

const something = ticTacToeContainer.querySelectorAll("*");
console.log(something)
