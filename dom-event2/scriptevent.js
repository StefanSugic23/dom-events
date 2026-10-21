const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log("Knappen klickades");
})



function writeText(){
    console.log("Knappen Klickades");
};

    


const box = document.querySelector(".box");
box.addEventListener("click", writeText);

box.addEventListener("mouseover", () =>{
    box.style ="background-color: red";
});

box.addEventListener("mouseout", () =>{
    box.style ="background-color: yellow";
});

const ol= document.querySelector("ol")

box.addEventListener("click", () =>{
const li= document.createElement("li");
li.textContent="New item added!"
ol.appendChild(li)
})