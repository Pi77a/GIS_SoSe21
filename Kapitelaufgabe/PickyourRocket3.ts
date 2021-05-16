namespace KlappBuch {
    let rocket: Rocket[] = JSON.parse(fullRocketJSON);
    console.log(rocket);

    let choice: string = "";

    let divyellowbot: HTMLDivElement = document.createElement("div");
    divyellowbot.classList.add("pic");
    divyellowbot.id = "yellowbot";
    document.getElementById("gallery").appendChild(divyellowbot);
    let imgyellowbot: HTMLImageElement = document.createElement("img");
    imgyellowbot.src = rocket[3].bottom.imageUrl;
    document.getElementById("yellowbot").appendChild(imgyellowbot);
    let headyellowbot: HTMLParagraphElement = document.createElement("p");
    headyellowbot.innerText = "Yellow Bottom  ";
    document.getElementById("yellowbot").appendChild(headyellowbot);

    let divredbot: HTMLDivElement = document.createElement("div");
    divredbot.classList.add("pic");
    divredbot.id = "redbot";
    document.getElementById("gallery").appendChild(divredbot);
    let imgredbot: HTMLImageElement = document.createElement("img");
    imgredbot.src = rocket[1].bottom.imageUrl;
    document.getElementById("redbot").appendChild(imgredbot);
    let headredbot: HTMLParagraphElement = document.createElement("p");
    headredbot.innerText = "Red Bottom";
    document.getElementById("redbot").appendChild(headredbot);

    let divbluebot: HTMLDivElement = document.createElement("div");
    divbluebot.classList.add("pic");
    divbluebot.id = "bluebot";
    document.getElementById("gallery").appendChild(divbluebot);
    let imgbluebot: HTMLImageElement = document.createElement("img");
    imgbluebot.src = rocket[0].bottom.imageUrl;
    document.getElementById("bluebot").appendChild(imgbluebot);
    let headbluebot: HTMLParagraphElement = document.createElement("p");
    headbluebot.innerText = "Blue Bottom ";
    document.getElementById("bluebot").appendChild(headbluebot);

    let divgreenbot: HTMLDivElement = document.createElement("div");
    divgreenbot.classList.add("pic");
    divgreenbot.id = "greenbot";
    document.getElementById("gallery").appendChild(divgreenbot);
    let imggreenbot: HTMLImageElement = document.createElement("img");
    imggreenbot.src = rocket[2].bottom.imageUrl;
    document.getElementById("greenbot").appendChild(imggreenbot);
    let headgreenbot: HTMLParagraphElement = document.createElement("p");
    headgreenbot.innerText = "Green Bottom";
    document.getElementById("greenbot").appendChild(headgreenbot);

    let prevpagelink: HTMLAnchorElement = document.createElement("a");
    prevpagelink.href = "Rocket_mid.html";
    prevpagelink.id = "prevpage";
    document.getElementById("gallery").appendChild(prevpagelink);
    let prevpagebutton: HTMLButtonElement = document.createElement("button");
    prevpagebutton.innerText = "< Middle Part";
    document.getElementById("prevpage").appendChild(prevpagebutton);


    let confirmbutton: HTMLButtonElement = document.createElement("button");
    confirmbutton.innerText = "Confirm your Choice";
    confirmbutton.id = "confirmButton";
    document.getElementById("gallery").appendChild(confirmbutton);

    let nextpagelink: HTMLAnchorElement = document.createElement("a");
    nextpagelink.href = "RocketFinished.html";
    nextpagelink.id = "nextpage";
    document.getElementById("gallery").appendChild(nextpagelink);
    let nextpagebutton: HTMLButtonElement = document.createElement("button");
    nextpagebutton.innerText = "Finished Rocket >";
    document.getElementById("nextpage").appendChild(nextpagebutton);


    function confirmationgreenBottom(_clickEvent: Event): void {
        divgreenbot.style.backgroundColor = "green";
        divredbot.style.backgroundColor = "white";
        divyellowbot.style.backgroundColor = "white";
        divbluebot.style.backgroundColor = "white";
        choice = "green";
    }
    function confirmationredBottom(_clickEvent: Event): void {
        divgreenbot.style.backgroundColor = "white";
        divredbot.style.backgroundColor = "green";
        divyellowbot.style.backgroundColor = "white";
        divbluebot.style.backgroundColor = "white";
        choice = "red";
    }
    function confirmationblueBottom(_clickEvent: Event): void {
        divgreenbot.style.backgroundColor = "white";
        divredbot.style.backgroundColor = "white";
        divyellowbot.style.backgroundColor = "white";
        divbluebot.style.backgroundColor = "green";
        choice = "blue";
    }
    function confirmationyellowBottom(_clickEvent: Event): void {
        divgreenbot.style.backgroundColor = "white";
        divredbot.style.backgroundColor = "white";
        divyellowbot.style.backgroundColor = "green";
        divbluebot.style.backgroundColor = "white";
        choice = "yellow";
    }

    let choicetop: HTMLImageElement = document.createElement("img");
    choicetop.src = sessionStorage.getItem("top");
    document.getElementById("top").appendChild(choicetop);
    let choicemid: HTMLImageElement = document.createElement("img");
    choicemid.src = sessionStorage.getItem("mid");
    document.getElementById("mid").appendChild(choicemid);

    function confirmationtotal(): void {
        let confirmedChoice: string = choice;
        console.log(confirmedChoice);
        if (choice == "green") {
            let choicegreenbottom: HTMLImageElement = document.createElement("img");
            choicegreenbottom.src = "data/Rocket_green_bottom.png";
            document.getElementById("bot").appendChild(choicegreenbottom);
            sessionStorage.setItem("bottom", "data/Rocket_green_bottom.png");
        } else if (choice == "blue") {
            let choicebluebottom: HTMLImageElement = document.createElement("img");
            choicebluebottom.src = "data/Rocket_blue_bottom.png";
            document.getElementById("bot").appendChild(choicebluebottom);
            sessionStorage.setItem("bottom", "data/Rocket_blue_bottom.png");
        } else if (choice == "yellow") {
            let choiceyellowbottom: HTMLImageElement = document.createElement("img");
            choiceyellowbottom.src = "data/Rocket_yellow_bottom.png";
            document.getElementById("bot").appendChild(choiceyellowbottom);
            sessionStorage.setItem("bottom", "data/Rocket_yellow_bottom.png");
        } else if (choice == "red") {
            let choiceredbottom: HTMLImageElement = document.createElement("img");
            choiceredbottom.src = "data/Rocket_red_bottom.png";
            document.getElementById("bot").appendChild(choiceredbottom);
            sessionStorage.setItem("bottom", "data/Rocket_red_bottom.png");
        }
    }

    let confirmgreenBottom: HTMLElement = document.getElementById("greenbot");
    confirmgreenBottom.addEventListener("click", confirmationgreenBottom);
    let confirmblueBottom: HTMLElement = document.getElementById("bluebot");
    confirmblueBottom.addEventListener("click", confirmationblueBottom);
    let confirmredBottom: HTMLElement = document.getElementById("redbot");
    confirmredBottom.addEventListener("click", confirmationredBottom);
    let confirmyellowBottom: HTMLElement = document.getElementById("yellowbot");
    confirmyellowBottom.addEventListener("click", confirmationyellowBottom);


    let confirmtotal: HTMLElement = document.getElementById("confirmButton");
    confirmtotal.addEventListener("click", confirmationtotal);
}