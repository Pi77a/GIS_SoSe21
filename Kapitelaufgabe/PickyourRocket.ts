namespace KlappBuch {
    let rocket: Rocket[] = JSON.parse(fullRocketJSON);
    console.log(rocket);

    sessionStorage.removeItem("top");
    sessionStorage.removeItem("mid");
    sessionStorage.removeItem("bottom");

    let choice: string = "";


    let divyellowtop: HTMLDivElement = document.createElement("div");
    divyellowtop.classList.add("pic");
    divyellowtop.id = "yellowTop";
    document.getElementById("gallery").appendChild(divyellowtop);
    let imgyellowtop: HTMLImageElement = document.createElement("img");
    imgyellowtop.src = rocket[3].top.imageUrl;
    document.getElementById("yellowTop").appendChild(imgyellowtop);
    let headyellowtop: HTMLParagraphElement = document.createElement("p");
    headyellowtop.innerText = "Yellow Top ";
    document.getElementById("yellowTop").appendChild(headyellowtop);

    let divredtop: HTMLDivElement = document.createElement("div");
    divredtop.classList.add("pic");
    divredtop.id = "redTop";
    document.getElementById("gallery").appendChild(divredtop);
    let imgredtop: HTMLImageElement = document.createElement("img");
    imgredtop.src = rocket[1].top.imageUrl;
    document.getElementById("redTop").appendChild(imgredtop);
    let headredtop: HTMLParagraphElement = document.createElement("p");
    headredtop.innerText = "Red Top";
    document.getElementById("redTop").appendChild(headredtop);

    let divbluetop: HTMLDivElement = document.createElement("div");
    divbluetop.classList.add("pic");
    divbluetop.id = "blueTop";
    document.getElementById("gallery").appendChild(divbluetop);
    let imgbluetop: HTMLImageElement = document.createElement("img");
    imgbluetop.src = rocket[0].top.imageUrl;
    document.getElementById("blueTop").appendChild(imgbluetop);
    let headbluetop: HTMLParagraphElement = document.createElement("p");
    headbluetop.innerText = "Blue Top ";
    document.getElementById("blueTop").appendChild(headbluetop);

    let divgreentop: HTMLDivElement = document.createElement("div");
    divgreentop.classList.add("pic");
    divgreentop.id = "greenTop";
    document.getElementById("gallery").appendChild(divgreentop);
    let imggreentop: HTMLImageElement = document.createElement("img");
    imggreentop.src = rocket[2].top.imageUrl;
    document.getElementById("greenTop").appendChild(imggreentop);
    let headgreentop: HTMLParagraphElement = document.createElement("p");
    headgreentop.innerText = "Green Top";
    document.getElementById("greenTop").appendChild(headgreentop);

    let confirmbutton: HTMLButtonElement = document.createElement("button");
    confirmbutton.innerText = "Confirm your Choice";
    confirmbutton.id = "confirmButton";
    document.getElementById("gallery").appendChild(confirmbutton);

    let nextpagelink: HTMLAnchorElement = document.createElement("a");
    nextpagelink.href = "Rocket_mid.html";
    nextpagelink.id = "nextpage";
    document.getElementById("gallery").appendChild(nextpagelink);
    let nextpagebutton: HTMLButtonElement = document.createElement("button");
    nextpagebutton.innerText = "Middle Part >";
    document.getElementById("nextpage").appendChild(nextpagebutton);


    function confirmationgreentop(_clickEvent: Event): void {
        divgreentop.style.backgroundColor = "green";
        divredtop.style.backgroundColor = "white";
        divyellowtop.style.backgroundColor = "white";
        divbluetop.style.backgroundColor = "white";
        choice = "green";
    }
    function confirmationredtop(_clickEvent: Event): void {
        divgreentop.style.backgroundColor = "white";
        divredtop.style.backgroundColor = "green";
        divyellowtop.style.backgroundColor = "white";
        divbluetop.style.backgroundColor = "white";
        choice = "red";
    }
    function confirmationbluetop(_clickEvent: Event): void {
        divgreentop.style.backgroundColor = "white";
        divredtop.style.backgroundColor = "white";
        divyellowtop.style.backgroundColor = "white";
        divbluetop.style.backgroundColor = "green";
        choice = "blue";
    }
    function confirmationyellowtop(_clickEvent: Event): void {
        divgreentop.style.backgroundColor = "white";
        divredtop.style.backgroundColor = "white";
        divyellowtop.style.backgroundColor = "green";
        divbluetop.style.backgroundColor = "white";
        choice = "yellow";
    }


    function confirmationtotal(): void {
        let confirmedChoice: string = choice;
        console.log(confirmedChoice);
        if (choice == "green") {
            let choicegreen: HTMLImageElement = document.createElement("img");
            choicegreen.src = "data/Rocket_green_top.png";
            document.getElementById("top").appendChild(choicegreen);
            sessionStorage.setItem("top", "data/Rocket_green_top.png");
        }
        else if (choice == "blue") {
            let choiceblue: HTMLImageElement = document.createElement("img");
            choiceblue.src = "data/Rocket_blue_top.png";
            document.getElementById("top").appendChild(choiceblue);
            sessionStorage.setItem("top", "data/Rocket_blue_top.png");
        }
        else if (choice == "yellow") {
            let choiceyellow: HTMLImageElement = document.createElement("img");
            choiceyellow.src = "data/Rocket_yellow_top.png";
            document.getElementById("top").appendChild(choiceyellow);
            sessionStorage.setItem("top", "data/Rocket_yellow_top.png");
        }
        else if (choice == "red") {
            let choicered: HTMLImageElement = document.createElement("img");
            choicered.src = "data/Rocket_red_top.png";
            document.getElementById("top").appendChild(choicered);
            sessionStorage.setItem("top", "data/Rocket_red_top.png");
        }
    }

    let confirmgreentop: HTMLElement = document.getElementById("greenTop");
    confirmgreentop.addEventListener("click", confirmationgreentop);
    let confirmbluetop: HTMLElement = document.getElementById("blueTop");
    confirmbluetop.addEventListener("click", confirmationbluetop);
    let confirnredtop: HTMLElement = document.getElementById("redTop");
    confirnredtop.addEventListener("click", confirmationredtop);
    let confirmyellowtop: HTMLElement = document.getElementById("yellowTop");
    confirmyellowtop.addEventListener("click", confirmationyellowtop);

    let confirmtotal: HTMLElement = document.getElementById("confirmButton");
    confirmtotal.addEventListener("click", confirmationtotal);
}
