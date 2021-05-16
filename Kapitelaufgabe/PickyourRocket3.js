"use strict";
var KlappBuch;
(function (KlappBuch) {
    let rocket = JSON.parse(KlappBuch.fullRocketJSON);
    console.log(rocket);
    let choice = "";
    let divyellowbot = document.createElement("div");
    divyellowbot.classList.add("pic");
    divyellowbot.id = "yellowbot";
    document.getElementById("gallery").appendChild(divyellowbot);
    let imgyellowbot = document.createElement("img");
    imgyellowbot.src = rocket[3].bottom.imageUrl;
    document.getElementById("yellowbot").appendChild(imgyellowbot);
    let headyellowbot = document.createElement("p");
    headyellowbot.innerText = "Yellow Bottom  ";
    document.getElementById("yellowbot").appendChild(headyellowbot);
    let divredbot = document.createElement("div");
    divredbot.classList.add("pic");
    divredbot.id = "redbot";
    document.getElementById("gallery").appendChild(divredbot);
    let imgredbot = document.createElement("img");
    imgredbot.src = rocket[1].bottom.imageUrl;
    document.getElementById("redbot").appendChild(imgredbot);
    let headredbot = document.createElement("p");
    headredbot.innerText = "Red Bottom";
    document.getElementById("redbot").appendChild(headredbot);
    let divbluebot = document.createElement("div");
    divbluebot.classList.add("pic");
    divbluebot.id = "bluebot";
    document.getElementById("gallery").appendChild(divbluebot);
    let imgbluebot = document.createElement("img");
    imgbluebot.src = rocket[0].bottom.imageUrl;
    document.getElementById("bluebot").appendChild(imgbluebot);
    let headbluebot = document.createElement("p");
    headbluebot.innerText = "Blue Bottom ";
    document.getElementById("bluebot").appendChild(headbluebot);
    let divgreenbot = document.createElement("div");
    divgreenbot.classList.add("pic");
    divgreenbot.id = "greenbot";
    document.getElementById("gallery").appendChild(divgreenbot);
    let imggreenbot = document.createElement("img");
    imggreenbot.src = rocket[2].bottom.imageUrl;
    document.getElementById("greenbot").appendChild(imggreenbot);
    let headgreenbot = document.createElement("p");
    headgreenbot.innerText = "Green Bottom";
    document.getElementById("greenbot").appendChild(headgreenbot);
    let prevpagelink = document.createElement("a");
    prevpagelink.href = "Rocket_mid.html";
    prevpagelink.id = "prevpage";
    document.getElementById("gallery").appendChild(prevpagelink);
    let prevpagebutton = document.createElement("button");
    prevpagebutton.innerText = "< Middle Part";
    document.getElementById("prevpage").appendChild(prevpagebutton);
    let confirmbutton = document.createElement("button");
    confirmbutton.innerText = "Confirm your Choice";
    confirmbutton.id = "confirmButton";
    document.getElementById("gallery").appendChild(confirmbutton);
    let nextpagelink = document.createElement("a");
    nextpagelink.href = "RocketFinished.html";
    nextpagelink.id = "nextpage";
    document.getElementById("gallery").appendChild(nextpagelink);
    let nextpagebutton = document.createElement("button");
    nextpagebutton.innerText = "Finished Rocket >";
    document.getElementById("nextpage").appendChild(nextpagebutton);
    function confirmationgreenBottom(_clickEvent) {
        divgreenbot.style.backgroundColor = "green";
        divredbot.style.backgroundColor = "white";
        divyellowbot.style.backgroundColor = "white";
        divbluebot.style.backgroundColor = "white";
        choice = "green";
    }
    function confirmationredBottom(_clickEvent) {
        divgreenbot.style.backgroundColor = "white";
        divredbot.style.backgroundColor = "green";
        divyellowbot.style.backgroundColor = "white";
        divbluebot.style.backgroundColor = "white";
        choice = "red";
    }
    function confirmationblueBottom(_clickEvent) {
        divgreenbot.style.backgroundColor = "white";
        divredbot.style.backgroundColor = "white";
        divyellowbot.style.backgroundColor = "white";
        divbluebot.style.backgroundColor = "green";
        choice = "blue";
    }
    function confirmationyellowBottom(_clickEvent) {
        divgreenbot.style.backgroundColor = "white";
        divredbot.style.backgroundColor = "white";
        divyellowbot.style.backgroundColor = "green";
        divbluebot.style.backgroundColor = "white";
        choice = "yellow";
    }
    let choicetop = document.createElement("img");
    choicetop.src = sessionStorage.getItem("top");
    document.getElementById("top").appendChild(choicetop);
    let choicemid = document.createElement("img");
    choicemid.src = sessionStorage.getItem("mid");
    document.getElementById("mid").appendChild(choicemid);
    function confirmationtotal() {
        let confirmedChoice = choice;
        console.log(confirmedChoice);
        if (choice == "green") {
            let choicegreenbottom = document.createElement("img");
            choicegreenbottom.src = "data/Rocket_green_bottom.png";
            document.getElementById("bot").appendChild(choicegreenbottom);
            sessionStorage.setItem("bottom", "data/Rocket_green_bottom.png");
        }
        else if (choice == "blue") {
            let choicebluebottom = document.createElement("img");
            choicebluebottom.src = "data/Rocket_blue_bottom.png";
            document.getElementById("bot").appendChild(choicebluebottom);
            sessionStorage.setItem("bottom", "data/Rocket_blue_bottom.png");
        }
        else if (choice == "yellow") {
            let choiceyellowbottom = document.createElement("img");
            choiceyellowbottom.src = "data/Rocket_yellow_bottom.png";
            document.getElementById("bot").appendChild(choiceyellowbottom);
            sessionStorage.setItem("bottom", "data/Rocket_yellow_bottom.png");
        }
        else if (choice == "red") {
            let choiceredbottom = document.createElement("img");
            choiceredbottom.src = "data/Rocket_red_bottom.png";
            document.getElementById("bot").appendChild(choiceredbottom);
            sessionStorage.setItem("bottom", "data/Rocket_red_bottom.png");
        }
    }
    let confirmgreenBottom = document.getElementById("greenbot");
    confirmgreenBottom.addEventListener("click", confirmationgreenBottom);
    let confirmblueBottom = document.getElementById("bluebot");
    confirmblueBottom.addEventListener("click", confirmationblueBottom);
    let confirmredBottom = document.getElementById("redbot");
    confirmredBottom.addEventListener("click", confirmationredBottom);
    let confirmyellowBottom = document.getElementById("yellowbot");
    confirmyellowBottom.addEventListener("click", confirmationyellowBottom);
    let confirmtotal = document.getElementById("confirmButton");
    confirmtotal.addEventListener("click", confirmationtotal);
})(KlappBuch || (KlappBuch = {}));
//# sourceMappingURL=PickyourRocket3.js.map