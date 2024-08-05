const changeColorBtn = document.querySelector(".change-color-btn");
const dialog = document.querySelector("dialog");
const cancel = document.querySelector(".cancel");
const save = document.querySelector(".save");
const form = document.querySelector("form");
const radioButtons = document.querySelectorAll("input[type=radio]");
const main = document.querySelector("main");
const ticTacToeMiniContainers = document.querySelectorAll(".tic-tac-toe-mini-container");
const winnerSticks = document.querySelectorAll(".winner-stick");
const optionsBtn = document.querySelector(".options-btn");

document.addEventListener("DOMContentLoaded", () => {
    let radioValue = localStorage.getItem("color");
    inputColor();
    radioButtons.forEach(btn => {
       btn.value === radioValue && (btn.checked = true)
    });
});

function colorChanger() {
    radioButtons.forEach(ele => {
        if(ele.checked) {
            localStorage.setItem("color", ele.value);
            inputColor();
        }
    });
} 

function removeColor() {
    main.classList.remove(...main.classList);
    changeColorBtn.classList.remove(...changeColorBtn.classList);
    changeColorBtn.classList.add("change-color-btn");
    ticTacToeMiniContainers.forEach(ele => ele.classList.remove(...ele.classList));
    ticTacToeMiniContainers.forEach((ele, index) =>{
        ele.classList.add("tic-tac-toe-mini-container");
        ele.classList.add(`tic-tac-toe-mini-container${index+1}`);
    });
    winnerSticks.forEach(ele => ele.classList.remove(...ele.classList));
    winnerSticks.forEach((ele, index) => {
        ele.classList.add("winner-stick");
        ele.classList.add(`winner-stick${index+1}`);
    });
    dialog2.classList.remove(...dialog2.classList);
    dialog2.classList.add("dialog2")
    dialog3.classList.remove(...dialog3.classList);
    dialog3.classList.add("dialog3")
    restartBtn.classList.remove(...restartBtn.classList);
    restartBtn.classList.add("restart-btn");
    pvpBtn.classList.remove(...pvpBtn.classList);
    pvpBtn.classList.add("pvp-btn");
    pveBtn.classList.remove(...pveBtn.classList);
    pveBtn.classList.add("pve-btn");
    // optionsBtn.classList.remove(...optionsBtn.classList);
    // optionsBtn.classList.add("options-btn");
}

function inputColor() {
    let value = localStorage.getItem("color");
    removeColor();
    main.classList.add(`${value}`);
    changeColorBtn.classList.add(`${value}-button`);
    ticTacToeMiniContainers.forEach(ele => ele.classList.add(`${value}-border`));
    winnerSticks.forEach(ele => ele.classList.add(`${value}-button`));
    dialog2.classList.add(`${value}`);
    restartBtn.classList.add(`${value}-button`);
    dialog3.classList.add(`${value}`);
    pvpBtn.classList.add(`${value}-button`);
    pveBtn.classList.add(`${value}-button`);
    // optionsBtn.classList.add(`${value}-button`);
}

changeColorBtn.addEventListener("click", () => {
    dialog.showModal();
});

cancel.addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("click", e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close();
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    colorChanger();
    dialog.close();
});