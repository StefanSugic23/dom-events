const h1 = document.querySelector("h1");
console.log(h1)

const h3 = document.querySelector(".h3-content");

const info = document.querySelector("#info");

console.log(h3);
console.log(info);

h1.textContent = "bye bye";


h3.textContent = "information om nagot"

info.textContent = "jag haller pa Javascript for att manipulera domen"

h3.classList.add("color");

h3.classList.toggle("color");
h3.classList.toggle("color");

const main = document.querySelector("main")
const addText = document.createElement("p");

addText.textContent = "Ny text genom textContent";
console.log(addText)
main.appendChild(addText)

const div = document.querySelector(".klass");
div.textContent= "ny text andrat"

div.classList.add("color");


