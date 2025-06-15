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

const colors = {
    light: {primaryColor: "#fff", secondaryColor: "#000"},
    dark: {primaryColor: "#000", secondaryColor: "#fff"},
    aqua: {primaryColor: "#66A5AD", secondaryColor: "#07575B"},
    mist: {primaryColor: "#90AFC5", secondaryColor: "#336B87"},
    crimson: {primaryColor: "#1E434C", secondaryColor: "#8D230F"},
    icy: {primaryColor: "#A1D6E2", secondaryColor: "#1995AD"},
    indigo: {primaryColor: "#363237", secondaryColor: "#2D4262"},
    candy: {primaryColor: "#F1F3CE", secondaryColor: "#F62A00"},
    orangish: {primaryColor: "#F7EFE2", secondaryColor: "#F25C00"},
}

document.addEventListener("DOMContentLoaded", () => {
    let radioValue = localStorage.getItem("color");
    inputColor();
    radioButtons.forEach(btn => {
       btn.value === radioValue && (btn.checked = true);
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

function inputColor() {
    let colorValue = localStorage.getItem("color") || "light";
    document.documentElement.style.setProperty("--page-background-color", `${colors[colorValue].primaryColor}`);
    document.documentElement.style.setProperty("--page-text-color", `${colors[colorValue].secondaryColor}`);
    document.documentElement.style.setProperty("--button-background-color", `${colors[colorValue].secondaryColor}`);
    document.documentElement.style.setProperty("--button-text-color", `${colors[colorValue].primaryColor}`);
    document.documentElement.style.setProperty("--border-color", `${colors[colorValue].secondaryColor}`);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    colorChanger();
    dialog.close();
});

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







// Old code
function inputColorOld() {
    let value = localStorage.getItem("color");
    if(!value) value = "light";
    switch(value) {
        case "light":
            propertyManipulator("light");
        break;
        case "dark":
            propertyManipulator("dark");
        break;
        case "aqua":
            propertyManipulator("aqua");
        break;
        case "mist":
            propertyManipulator("mist");
        break;
        case "crimson":
            propertyManipulator("crimson");
        break;
        case "icy":
            propertyManipulator("icy");
        break;
        case "indigo":
            propertyManipulator("indigo");
        break;
        case "candy":
            propertyManipulator("candy");
        break;
        case "orangish":
            propertyManipulator("orangish");
        break;
    }
}

function propertyManipulator(colorValue) {
    let primaryColor;
    let secondaryColor;
    switch(colorValue) {
        case "light":
            primaryColor = "#fff";
            secondaryColor = "#000";
        break;
        case "dark":
            primaryColor = "#000";
            secondaryColor = "#fff";
        break;
        case "aqua":
            primaryColor = "#66A5AD";
            secondaryColor = "#07575B";
        break;
        case "mist":
            primaryColor = "#90AFC5";
            secondaryColor = "#336B87";
        break;
        case "crimson":
            primaryColor = "#1E434C";
            secondaryColor = "#8D230F";
        break;
        case "icy":
            primaryColor = "#A1D6E2";
            secondaryColor = "#1995AD";
        break;
        case "indigo":
            primaryColor = "#363237";
            secondaryColor = "#2D4262";
        break;
        case "candy":
            primaryColor = "#F1F3CE";
            secondaryColor = "#F62A00";
        break;
        case "orangish":
            primaryColor = "#F7EFE2";
            secondaryColor = "#F25C00";
        break;
    }
    document.documentElement.style.setProperty("--page-background-color", `${primaryColor}`);
    document.documentElement.style.setProperty("--page-text-color", `${secondaryColor}`);
    document.documentElement.style.setProperty("--button-background-color", `${secondaryColor}`);
    document.documentElement.style.setProperty("--button-text-color", `${primaryColor}`);
    document.documentElement.style.setProperty("--border-color", `${secondaryColor}`);
}