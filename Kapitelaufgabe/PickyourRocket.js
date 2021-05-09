"use strict";
var RocketTop;
(function (RocketTop) {
    let choice = "";
    let divyellowtop = document.getElementById("yellowTop");
    let divredtop = document.getElementById("redTop");
    let divbluetop = document.getElementById("blueTop");
    let divgreentop = document.getElementById("greenTop");
    function confirmationgreentop(_clickEvent) {
        divgreentop.style.backgroundColor = "green";
        divredtop.style.backgroundColor = "white";
        divyellowtop.style.backgroundColor = "white";
        divbluetop.style.backgroundColor = "white";
        choice = "green";
    }
    function confirmationredtop(_clickEvent) {
        divgreentop.style.backgroundColor = "white";
        divredtop.style.backgroundColor = "green";
        divyellowtop.style.backgroundColor = "white";
        divbluetop.style.backgroundColor = "white";
        choice = "red";
    }
    function confirmationbluetop(_clickEvent) {
        divgreentop.style.backgroundColor = "white";
        divredtop.style.backgroundColor = "white";
        divyellowtop.style.backgroundColor = "white";
        divbluetop.style.backgroundColor = "green";
        choice = "blue";
    }
    function confirmationyellowtop(_clickEvent) {
        divgreentop.style.backgroundColor = "white";
        divredtop.style.backgroundColor = "white";
        divyellowtop.style.backgroundColor = "green";
        divbluetop.style.backgroundColor = "white";
        choice = "yellow";
    }
    function confirmationtotal() {
        let confirmedChoice = choice;
        console.log(confirmedChoice);
        if (choice == "green") {
            let choicegreen = document.createElement("img");
            choicegreen.src = "data/Rocket_green_top.png";
            document.getElementById("top").appendChild(choicegreen);
        }
        else if (choice == "blue") {
            let choiceblue = document.createElement("img");
            choiceblue.src = "data/Rocket_blue_top.png";
            document.getElementById("top").appendChild(choiceblue);
        }
        else if (choice == "yellow") {
            let choiceyellow = document.createElement("img");
            choiceyellow.src = "data/Rocket_yellow_top.png";
            document.getElementById("top").appendChild(choiceyellow);
        }
        else if (choice == "red") {
            let choicered = document.createElement("img");
            choicered.src = "data/Rocket_red_top.png";
            document.getElementById("top").appendChild(choicered);
        }
    }
    let confirmgreentop = document.getElementById("greenTop");
    confirmgreentop.addEventListener("click", confirmationgreentop);
    let confirmbluetop = document.getElementById("blueTop");
    confirmbluetop.addEventListener("click", confirmationbluetop);
    let confirnredtop = document.getElementById("redTop");
    confirnredtop.addEventListener("click", confirmationredtop);
    let confirmyellowtop = document.getElementById("yellowTop");
    confirmyellowtop.addEventListener("click", confirmationyellowtop);
    let confirmtotal = document.getElementById("confirmButton");
    confirmtotal.addEventListener("click", confirmationtotal);
})(RocketTop || (RocketTop = {}));
//# sourceMappingURL=PickyourRocket.js.map