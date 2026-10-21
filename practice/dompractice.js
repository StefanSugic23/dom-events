const p = document.querySelector("p");
console.log(p);

p.textContent = "changed text from rubriken"

const div = document.querySelector("#boxx");

boxx.classList.toggle("highlight");


const ul = document.querySelector("ul");
const newli= document.createElement("li");
newli.textContent= "list3";
console.log(newli);
ul.appendChild(newli);

const li = document.querySelector("newli");
newli.remove();

const ulall = document.querySelectorAll("ul")




boxx.style ="color: black";


const array = ["list4", "list5", "list6"];

for (const arr of array){
    const newlist = document.createElement("li")
    newlist.textContent= arr
    ul.appendChild(newlist)
    
}







