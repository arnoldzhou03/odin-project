function init() {
    const container = document.querySelector("#container");
    for(let i = 0; i < 16; i++) {
        for(let j = 0; j < 16; j++) {
            let div = document.createElement("div");
            div.classList.add("cell");
            div.addEventListener("mouseenter", startHover);
            // div.addEventListener("mouseleave", endHover);
            container.appendChild(div);
        }
    }
}

function startHover(e) {
    // console.log(e.target);
    let cell = e.target;
    cell.classList.add("hovered");
}

function endHover(e) {
    let cell = e.target;
    cell.classList.remove("hovered");
}

init();