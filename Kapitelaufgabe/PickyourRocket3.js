"use strict";
var RocketBot;
(function (RocketBot) {
    let choice = "";
    let divyellowBottom = document.getElementById("yellowBottom");
    let divredBottom = document.getElementById("redBottom");
    let divblueBottom = document.getElementById("blueBottom");
    let divgreenBottom = document.getElementById("greenBottom");
    function confirmationgreenBottom(_clickEvent) {
        divgreenBottom.style.backgroundColor = "green";
        divredBottom.style.backgroundColor = "white";
        divyellowBottom.style.backgroundColor = "white";
        divblueBottom.style.backgroundColor = "white";
        choice = "green";
    }
    function confirmationredBottom(_clickEvent) {
        divgreenBottom.style.backgroundColor = "white";
        divredBottom.style.backgroundColor = "green";
        divyellowBottom.style.backgroundColor = "white";
        divblueBottom.style.backgroundColor = "white";
        choice = "red";
    }
    function confirmationblueBottom(_clickEvent) {
        divgreenBottom.style.backgroundColor = "white";
        divredBottom.style.backgroundColor = "white";
        divyellowBottom.style.backgroundColor = "white";
        divblueBottom.style.backgroundColor = "green";
        choice = "blue";
    }
    function confirmationyellowBottom(_clickEvent) {
        divgreenBottom.style.backgroundColor = "white";
        divredBottom.style.backgroundColor = "white";
        divyellowBottom.style.backgroundColor = "green";
        divblueBottom.style.backgroundColor = "white";
        choice = "yellow";
    }
    function confirmationtotal() {
        let confirmedChoice = choice;
        console.log(confirmedChoice);
        if (choice == "green") {
            let choicegreenbottom = document.createElement("img");
            choicegreenbottom.src = "data/Rocket_green_bottom.png";
            document.getElementById("bot").appendChild(choicegreenbottom);
        }
        else if (choice == "blue") {
            let choicebluebottom = document.createElement("img");
            choicebluebottom.src = "data/Rocket_blue_bottom.png";
            document.getElementById("bot").appendChild(choicebluebottom);
        }
        else if (choice == "yellow") {
            let choiceyellowbottom = document.createElement("img");
            choiceyellowbottom.src = "data/Rocket_yellow_bottom.png";
            document.getElementById("bot").appendChild(choiceyellowbottom);
        }
        else if (choice == "red") {
            let choiceredbottom = document.createElement("img");
            choiceredbottom.src = "data/Rocket_red_bottom.png";
            document.getElementById("bot").appendChild(choiceredbottom);
        }
    }
    let confirmgreenBottom = document.getElementById("greenBottom");
    confirmgreenBottom.addEventListener("click", confirmationgreenBottom);
    let confirmblueBottom = document.getElementById("blueBottom");
    confirmblueBottom.addEventListener("click", confirmationblueBottom);
    let confirmredBottom = document.getElementById("redBottom");
    confirmredBottom.addEventListener("click", confirmationredBottom);
    let confirmyellowBottom = document.getElementById("yellowBottom");
    confirmyellowBottom.addEventListener("click", confirmationyellowBottom);
    let confirmtotal = document.getElementById("confirmButton");
    confirmtotal.addEventListener("click", confirmationtotal);
})(RocketBot || (RocketBot = {}));
//# sourceMappingURL=PickyourRocket3.js.map