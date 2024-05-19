// console.log("lets write js");
let box =document.getElementById("password");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+<>?";

const length = 12;

let allchars = upperCase + lowerCase + numbers + symbols;

let btn = document.querySelector("#button");

btn.addEventListener("click",()=>{
    generatePassword();
})

function generatePassword(){

    let pass = "";

    pass += upperCase[Math.floor(Math.random()*upperCase.length)];
    pass += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    pass += numbers[Math.floor(Math.random()*numbers.length)];
    pass += symbols[Math.floor(Math.random()*symbols.length)];

    while(length>pass.length){
        pass += allchars[Math.floor(Math.random()*allchars.length)]; 
    }
    box.value = pass;
}


