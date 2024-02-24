"use strict"

let btnSubmit = document.querySelector(".submit");
let inputName = document.querySelector(".input-name");
let inputEmail = document.querySelector(".input-email");
let show = document.querySelector(".show");


btnSubmit.addEventListener("click", function () {

    let text = inputName.value;
    let email = inputEmail.value;
    if (text.trim() == "" || email.trim() == "") {
        document.querySelector(".error-msj").classList.remove("d-none");
        return;
    } else {
        document.querySelector(".error-msj").classList.add("d-none");
    }
    let myDiv = document.createElement("div");
    myDiv.innerHTML = "<p>Name: " + text + "</p> <p>Email: " + email + "</p>";
    show.appendChild(myDiv);
    inputName.value = "";
    inputEmail.value = "";


})