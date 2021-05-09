namespace RocketTop {
    let choice: string = "";
    let divyellowtop: HTMLElement = document.getElementById("yellowTop");
    let divredtop: HTMLElement = document.getElementById("redTop");
    let divbluetop: HTMLElement = document.getElementById("blueTop");
    let divgreentop: HTMLElement = document.getElementById("greenTop");

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
        } else if (choice == "blue") {
            let choiceblue: HTMLImageElement = document.createElement("img");
            choiceblue.src = "data/Rocket_blue_top.png";
            document.getElementById("top").appendChild(choiceblue);
        } else if (choice == "yellow") {
            let choiceyellow: HTMLImageElement = document.createElement("img");
            choiceyellow.src = "data/Rocket_yellow_top.png";
            document.getElementById("top").appendChild(choiceyellow);
        } else if (choice == "red") {
            let choicered: HTMLImageElement = document.createElement("img");
            choicered.src = "data/Rocket_red_top.png";
            document.getElementById("top").appendChild(choicered);
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