const btn = document.querySelector("button")
const p = document.querySelector("p")

btn.addEventListener("click", ()=>{
    p.textContent = "the text is changed"
})

const div = document.querySelector("div")
const btn2 = document.querySelector(".btn2")

btn2.addEventListener("click", () => {
    div.classList.toggle("highlight");
});

const btn3 = document.querySelector(".btn3");
const span = document.createElement("span")
const main = document.querySelector("main")

btn3.addEventListener("click", () =>{
    
    
    const spanList = document.querySelectorAll("span")
    if (spanList.length <10){
    const span2= document.createElement("span")
    span2.textContent = " new element added"
    main.appendChild(span2)

    }
    console.log(spanList);
    // detta ar bouns 7 ovning ocksa

})

const btn4 = document.querySelector(".btn4")
const h5 = document.querySelector("h5")

btn4.addEventListener("click", ()=>{
    h5.remove();
});


const btn5 = document.querySelector(".btn5");

function hello(){
    console.log("Welcome!")
}

btn5.addEventListener("click", hello);

const btn6=document.querySelector(".btn6");
const hover = document.querySelector(".hover")

btn6.addEventListener("mouseover", () =>{
    hover.classList.toggle("highlight")
})
btn6.addEventListener("mouseout", () =>{
    hover.classList.toggle("highlight")
})












