const BOARD_SIZE = 960;

function initBoard(dim=16) {
    const container = document.querySelector("#container");
    for(let i = 0; i < dim; i++) {
        for(let j = 0; j < dim; j++) {
            let div = document.createElement("div");
            div.classList.add("cell");
            div.style.width = `calc(100% / ${dim})`;
            div.style.height = `calc(100% / ${dim})`;
            div.addEventListener("mouseenter", startHover);
            // div.addEventListener("mouseleave", endHover);
            container.appendChild(div);
        }
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`

}

function startHover(e) {
    // console.log(e.target);
    let cell = e.target;
    // cell.classList.add("hovered");
    cell.style.backgroundColor = getRandomColor();
}

function endHover(e) {
    let cell = e.target;
    cell.classList.remove("hovered");
}

function clearBoard() {
    const board = document.querySelector("#container");
    board.replaceChildren();
}

function reset() {
    clearBoard();
    let dim = parseInt(prompt("Enter board dimension (from 0 to 100):"));
    initBoard(dim);
}

function init() {
    const resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener("click", reset);
    initBoard();
}


init();