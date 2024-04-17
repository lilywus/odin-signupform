let pwfield = document.querySelector("#pword");
let cpwfield = document.querySelector("#cpword");
let messageBox = document.querySelector("#messagebox");

function compareFields() {
    let pword = pwfield.value;
    let cpword = cpwfield.value;   

    if (pword !== cpword) makeInvalid();
    else makeValid();
}

function makeInvalid() {
    pwfield.style.border = "1px solid red";
    cpwfield.style.border = "1px solid red";
    messageBox.style.opacity = "1";
}

function makeValid() {
    pwfield.style.border = "1px solid lightgray";
    cpwfield.style.border = "1px solid lightgray";
    messageBox.style.opacity = "0";
}

pwfield.addEventListener("blur", event => compareFields())
cpwfield.addEventListener("blur", event => compareFields())