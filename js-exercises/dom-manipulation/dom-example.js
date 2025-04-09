const link = document.querySelector("a")
link.textContent = "MDN"
link.href = "https://developer.mozilla.org"

const sect = document.querySelector("section")
const para = document.createElement("p")
para.textContent = "We hope you enjoyed the ride."
sect.appendChild(para)

para.style.color = "white"
para.style.backgroundColor = "black"
para.style.padding = "10px"
para.style.width = "250px"
para.style.textAlign = "center"

const text = document.createTextNode(" - the premier source for web dev knowledge.")
const linkPara = document.querySelector("p")
linkPara.appendChild(text)

sect.appendChild(linkPara)
// linkPara.remove()