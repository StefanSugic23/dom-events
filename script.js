// functions

// syntax
function namnForFunction(){
console.log("hello world");
}
namnForFunction();


// parametrar
// ar att tilfora nat parameter i vara funkction

function addNumber(a,b) {
    console.log(a+b);
}

addNumber(5,6);

function addNumber2(a,b) {
    //lagger en till varibeal som haller summan
    const item = a+ b;
    console.log(item);
}

addNumber2(7,8);

const information = addNumber(7,9);
console.log(information);
// detta printar inte eftersom har vi inte return i function

function addNumber3(a,b) {
    return a+b;
}

const information2 = addNumber3(8,8);
console.log(information2);
// detta funkar eftersom vi har return

function login(password){
    if(password ==="123"){
        return true;
    }
    return false;

}

function auth(password){
    if(login(password)){
        console.log("welcome to your profile")
    }
    else {
        console.log("restricte4d acces")
    }
}

console.log(login("123"));

auth("123");

// Objects

const person = {
    namn: "Stefan",
    age: 33,
    sayHello: function(){
        console.log("Hello, my name is " + this.namn )
    }

};

console.log(person)



