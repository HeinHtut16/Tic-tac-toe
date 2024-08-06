let xo = "x";
const ticTacToeContainer = document.querySelector(".tic-tac-toe-container");
const dialog2 = document.querySelector(".dialog2");
const player1Result = document.querySelector(".player1-result");
const player2Result = document.querySelector(".player2-result");
const player1xo = document.querySelector(".player1 .xo");
const player2xo = document.querySelector(".player2 .xo");
const restartBtn = document.querySelector(".restart-btn");
const winnerText = document.querySelector(".winner-text");
const dialog3 = document.querySelector(".dialog3");
const pvpBtn = document.querySelector(".pvp-btn");
const pveBtn = document.querySelector(".pve-btn");
const playerText1 = document.querySelector(".player-text1");
const playerText2 = document.querySelector(".player-text2")
const secondIcon = document.querySelector(".second-icon");
const playersContainer = document.querySelector(".players-container");
const result = document.querySelector(".result");
let xExists;
let oExists;
let player1Score = 0;
let player2Score = 0;
let player1 = "x";
let player2 = "o";
let nonDrawRound = false;
let playerWins = false;
let draw = false;
let randomNum = Math.floor(Math.random() * 9);
let cond;
let pvpOrPve;
let firstText;
let secondText;
let eventListeners = [];
dialog3.showModal();

pvpBtn.addEventListener("click", () => {
    dialog3.close();
    removeEventListeners();
    changeMode();
    pvpOrPve = "pvp";
    firstText = "Player 1";
    secondText = "Player 2";
    playerText1.textContent = firstText;
    playerText2.textContent = secondText;
    secondIcon.classList.remove("fa-desktop");
    secondIcon.classList.add("fa-user");
    playersContainer.classList.remove("players-container-modifier");
    result.classList.remove("result-modifier");
    ticTacToeMiniContainers.forEach(ele => {    
        const clickHandlerPvp = () => {
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
            checkWinner();
        }
        eventListeners.push({element: ele, handler: clickHandlerPvp});
        ele.addEventListener("click", clickHandlerPvp);
    });
});

pveBtn.addEventListener("click", () => {
    dialog3.close();
    removeEventListeners();
    changeMode();
    pvpOrPve = "pve";
    firstText = "Player";
    secondText = "Computer";
    playerText1.textContent = firstText;
    playerText2.textContent = secondText;   
    secondIcon.classList.remove("fa-user");
    secondIcon.classList.add("fa-desktop");
    playersContainer.classList.add("players-container-modifier");
    result.classList.add("result-modifier");
    ticTacToeMiniContainers.forEach(ele => {
        // let descendantsLength = ticTacToeContainer.querySelectorAll("*").length; // this was in the wrong scope.

        const clickHandlerPve = () => {
            let descendantsLength = ticTacToeContainer.querySelectorAll("*").length;
            let isPlayerX = document.querySelector(".player1 .fa-xmark");
            console.log(descendantsLength);
            if(isPlayerX) {
                if(descendantsLength % 2 === 0) return;
            } else {
                if(descendantsLength % 2) return;
            }
            
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

            checkWinner();
            
            placeRandomMark();
        }

        eventListeners.push({element: ele, handler: clickHandlerPve});
        ele.addEventListener("click", clickHandlerPve);
    });
});

optionsBtn.addEventListener("click", () => {
    dialog3.showModal();
});

function doesXOrOExist(value) {
    xExists = document.querySelector(`.tic-tac-toe-mini-container${value+1} .fa-xmark`);
    oExists = document.querySelector(`.tic-tac-toe-mini-container${value+1} .fa-o`);
}

function restart() {
    xo = "x";
    playerWins = false;
    nonDrawRound = false;
    draw = false;
    let isPlayer1X = document.querySelector(".player1 .fa-xmark");
    if(isPlayer1X) {
        player1xo.classList.replace("fa-xmark", "fa-o");
        player2xo.classList.replace("fa-o", "fa-xmark");
    } else {
        player1xo.classList.replace("fa-o", "fa-xmark");
        player2xo.classList.replace("fa-xmark", "fa-o");
    }
    isPlayer1X = document.querySelector(".player1 .fa-xmark");
    ticTacToeMiniContainers.forEach(ele => {
        ele.innerHTML = "";
    });
    winnerSticks.forEach(ele => {
        ele.style.display = "none";
    });
    dialog2.close();
    if(pvpOrPve === "pve" && (!isPlayer1X)) {
        placeRandomMark();
    }
}

function checkWinner() {
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
                winnerText.textContent = `${firstText} Wins!`;
            } else {
                player2Score++;
                player2Result.textContent = player2Score;
                winnerText.textContent = `${secondText} Wins!`;
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
                winnerText.textContent = `${secondText} Wins!`;
            } else {
                player1Score++;
                player1Result.textContent = player1Score;
                winnerText.textContent = `${firstText} Wins!`;
            }
            dialog2.showModal();         
        }
    }); 

    if(!nonDrawRound) {
        let descendantsLength = ticTacToeContainer.querySelectorAll("*").length;
        if(descendantsLength === 26) {
            dialog2.showModal();
            winnerText.textContent = "Draw!";
            draw = true;
        }
    }
}

function placeRandomMark() {
    if(!playerWins && !draw) {
        setTimeout(() => {
            do {
                cond = true;
                randomNum = Math.floor(Math.random() * 9);
                if(ticTacToeMiniContainers[randomNum].innerHTML === "") {
                    if(xo === "x") {
                        ticTacToeMiniContainers[randomNum].innerHTML = `
                        <i class="fa-solid fa-xmark"></i>
                        `;
                        cond = false;
                        
                    } else {
                        ticTacToeMiniContainers[randomNum].innerHTML = `
                        <i class="fa-solid fa-o"></i>
                        `;
                        cond = false;   
                    }
                }
            } while (cond)
            xo = xo === "x" ? "o" : "x";
            checkWinner();
        }, 500);
    }
}

function removeEventListeners() {
    eventListeners.forEach(({element, handler}) => {
        element.removeEventListener("click", handler);
        eventListeners = [];
    });
}

function changeMode() {
    xo = "x";
    playerWins = false;
    nonDrawRound = false;
    draw = false;
    player1Score = 0;
    player2Score = 0;
    let isPlayer1X = document.querySelector(".player1 .fa-xmark");
    if(!isPlayer1X) {
        player1xo.classList.replace("fa-o", "fa-xmark");
        player2xo.classList.replace("fa-xmark", "fa-o");
    }
    ticTacToeMiniContainers.forEach(ele => {
        ele.innerHTML = "";
    });
    winnerSticks.forEach(ele => {
        ele.style.display = "none";
    });
    player1Result.textContent = player1Score;
    player2Result.textContent = player2Score;
}
restartBtn.addEventListener("click", restart);


