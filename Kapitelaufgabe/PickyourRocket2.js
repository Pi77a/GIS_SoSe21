"use strict";
var RocketMid;
(function (RocketMid) {
    let choice = "";
    let divyellowmid = document.getElementById("yellowMid");
    let divredmid = document.getElementById("redMid");
    let divbluemid = document.getElementById("blueMid");
    let divgreenmid = document.getElementById("greenMid");
    function confirmationgreenmid(_clickEvent) {
        divgreenmid.style.backgroundColor = "green";
        divredmid.style.backgroundColor = "white";
        divyellowmid.style.backgroundColor = "white";
        divbluemid.style.backgroundColor = "white";
        choice = "green";
    }
    function confirmationredmid(_clickEvent) {
        divgreenmid.style.backgroundColor = "white";
        divredmid.style.backgroundColor = "green";
        divyellowmid.style.backgroundColor = "white";
        divbluemid.style.backgroundColor = "white";
        choice = "red";
    }
    function confirmationbluemid(_clickEvent) {
        divgreenmid.style.backgroundColor = "white";
        divredmid.style.backgroundColor = "white";
        divyellowmid.style.backgroundColor = "white";
        divbluemid.style.backgroundColor = "green";
        choice = "blue";
    }
    function confirmationyellowmid(_clickEvent) {
        divgreenmid.style.backgroundColor = "white";
        divredmid.style.backgroundColor = "white";
        divyellowmid.style.backgroundColor = "green";
        divbluemid.style.backgroundColor = "white";
        choice = "yellow";
    }
    RocketMid.choicemid = choice;
    function confirmationtotalmid() {
        let confirmedChoice = choice;
        console.log(confirmedChoice);
        if (choice == "green") {
            let choicegreenmid = document.createElement("img");
            choicegreenmid.src = "data/Rocket_green_mid.png";
            document.getElementById("mid").appendChild(choicegreenmid);
        }
        else if (choice == "blue") {
            let choicebluemid = document.createElement("img");
            choicebluemid.src = "data/Rocket_blue_mid.png";
            document.getElementById("mid").appendChild(choicebluemid);
        }
        else if (choice == "yellow") {
            let choiceyellowmid = document.createElement("img");
            choiceyellowmid.src = "data/Rocket_yellow_mid.png";
            document.getElementById("mid").appendChild(choiceyellowmid);
        }
        else if (choice == "red") {
            let choiceredmid = document.createElement("img");
            choiceredmid.src = "data/Rocket_red_mid.png";
            document.getElementById("mid").appendChild(choiceredmid);
        }
    }
    let confirmgreenmid = document.getElementById("greenMid");
    confirmgreenmid.addEventListener("click", confirmationgreenmid);
    let confirmbluemid = document.getElementById("blueMid");
    confirmbluemid.addEventListener("click", confirmationbluemid);
    let confirmredmid = document.getElementById("redMid");
    confirmredmid.addEventListener("click", confirmationredmid);
    let confirmyellowmid = document.getElementById("yellowMid");
    confirmyellowmid.addEventListener("click", confirmationyellowmid);
    let confirmtotalmid = document.getElementById("confirmButton");
    confirmtotalmid.addEventListener("click", confirmationtotalmid);
})(RocketMid || (RocketMid = {}));
//# sourceMappingURL=PickyourRocket2.js.map