// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const c2 = document.createElement("p");
c2.style.color = "red";
c2.textContent = "Hey I'm red!";
container.appendChild(c2);

const c3 = document.createElement("h3");
c3.style.color = "blue";
c3.textContent = "I'm a blue h3!";
container.appendChild(c3);

const c4 = document.createElement("div");
c4.style.borderColor = "black";
c4.style.backgroundColor = "pink";

const c4h1 = document.createElement("h1");
c4h1.textContent = "I'm in a div";
c4.appendChild(c4h1);

const c4p = document.createElement("p");
c4p.textContent = "ME TOO!";
c4.appendChild(c4p);
container.appendChild(c4);

const button = document.querySelector("#btn");
button.addEventListener("click", function(e) {
    e.target.textContent += e.target.textContent
});