"use strict";
var KlappBuch;
(function (KlappBuch) {
    let rocket = JSON.parse(KlappBuch.fullRocketJSON);
    console.log(rocket);
    let choice = "";
    let divyellowmid = document.createElement("div");
    divyellowmid.classList.add("pic");
    divyellowmid.id = "yellowmid";
    document.getElementById("gallery").appendChild(divyellowmid);
    let imgyellowmid = document.createElement("img");
    imgyellowmid.src = rocket[3].mid.imageUrl;
    document.getElementById("yellowmid").appendChild(imgyellowmid);
    let headyellowmid = document.createElement("p");
    headyellowmid.innerText = "Yellow mid ";
    document.getElementById("yellowmid").appendChild(headyellowmid);
    let divredmid = document.createElement("div");
    divredmid.classList.add("pic");
    divredmid.id = "redmid";
    document.getElementById("gallery").appendChild(divredmid);
    let imgredmid = document.createElement("img");
    imgredmid.src = rocket[1].mid.imageUrl;
    document.getElementById("redmid").appendChild(imgredmid);
    let headredmid = document.createElement("p");
    headredmid.innerText = "Red mid";
    document.getElementById("redmid").appendChild(headredmid);
    let divbluemid = document.createElement("div");
    divbluemid.classList.add("pic");
    divbluemid.id = "bluemid";
    document.getElementById("gallery").appendChild(divbluemid);
    let imgbluemid = document.createElement("img");
    imgbluemid.src = rocket[0].mid.imageUrl;
    document.getElementById("bluemid").appendChild(imgbluemid);
    let headbluemid = document.createElement("p");
    headbluemid.innerText = "Blue mid ";
    document.getElementById("bluemid").appendChild(headbluemid);
    let divgreenmid = document.createElement("div");
    divgreenmid.classList.add("pic");
    divgreenmid.id = "greenmid";
    document.getElementById("gallery").appendChild(divgreenmid);
    let imggreenmid = document.createElement("img");
    imggreenmid.src = rocket[2].mid.imageUrl;
    document.getElementById("greenmid").appendChild(imggreenmid);
    let headgreenmid = document.createElement("p");
    headgreenmid.innerText = "Green mid";
    document.getElementById("greenmid").appendChild(headgreenmid);
    let prevpagelink = document.createElement("a");
    prevpagelink.href = "Rocket_top.html";
    prevpagelink.id = "prevpage";
    document.getElementById("gallery").appendChild(prevpagelink);
    let prevpagebutton = document.createElement("button");
    prevpagebutton.innerText = "< Top Part";
    document.getElementById("prevpage").appendChild(prevpagebutton);
    let confirmbutton = document.createElement("button");
    confirmbutton.innerText = "Confirm your Choice";
    confirmbutton.id = "confirmButton";
    document.getElementById("gallery").appendChild(confirmbutton);
    let nextpagelink = document.createElement("a");
    nextpagelink.href = "Rocket_bottom.html";
    nextpagelink.id = "nextpage";
    document.getElementById("gallery").appendChild(nextpagelink);
    let nextpagebutton = document.createElement("button");
    nextpagebutton.innerText = "Bottom Part >";
    document.getElementById("nextpage").appendChild(nextpagebutton);
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
    let choicetop = document.createElement("img");
    choicetop.src = sessionStorage.getItem("top");
    document.getElementById("top").appendChild(choicetop);
    function confirmationtotalmid() {
        let confirmedChoice = choice;
        console.log(confirmedChoice);
        if (choice == "green") {
            let choicegreenmid = document.createElement("img");
            choicegreenmid.src = "data/Rocket_green_mid.png";
            document.getElementById("mid").appendChild(choicegreenmid);
            sessionStorage.setItem("mid", "data/Rocket_green_mid.png");
        }
        else if (choice == "blue") {
            let choicebluemid = document.createElement("img");
            choicebluemid.src = "data/Rocket_blue_mid.png";
            document.getElementById("mid").appendChild(choicebluemid);
            sessionStorage.setItem("mid", "data/Rocket_blue_mid.png");
        }
        else if (choice == "yellow") {
            let choiceyellowmid = document.createElement("img");
            choiceyellowmid.src = "data/Rocket_yellow_mid.png";
            document.getElementById("mid").appendChild(choiceyellowmid);
            sessionStorage.setItem("mid", "data/Rocket_yellow_mid.png");
        }
        else if (choice == "red") {
            let choiceredmid = document.createElement("img");
            choiceredmid.src = "data/Rocket_red_mid.png";
            document.getElementById("mid").appendChild(choiceredmid);
            sessionStorage.setItem("mid", "data/Rocket_red_mid.png");
        }
    }
    let confirmgreenmid = document.getElementById("greenmid");
    confirmgreenmid.addEventListener("click", confirmationgreenmid);
    let confirmbluemid = document.getElementById("bluemid");
    confirmbluemid.addEventListener("click", confirmationbluemid);
    let confirmredmid = document.getElementById("redmid");
    confirmredmid.addEventListener("click", confirmationredmid);
    let confirmyellowmid = document.getElementById("yellowmid");
    confirmyellowmid.addEventListener("click", confirmationyellowmid);
    let confirmtotalmid = document.getElementById("confirmButton");
    confirmtotalmid.addEventListener("click", confirmationtotalmid);
})(KlappBuch || (KlappBuch = {}));
//# sourceMappingURL=PickyourRocket2.js.map