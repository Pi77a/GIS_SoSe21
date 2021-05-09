namespace RocketBot {
    let choice: string = "";
    let divyellowBottom: HTMLElement = document.getElementById("yellowBottom");
    let divredBottom: HTMLElement = document.getElementById("redBottom");
    let divblueBottom: HTMLElement = document.getElementById("blueBottom");
    let divgreenBottom: HTMLElement = document.getElementById("greenBottom");

    function confirmationgreenBottom(_clickEvent: Event): void {
        divgreenBottom.style.backgroundColor = "green";
        divredBottom.style.backgroundColor = "white";
        divyellowBottom.style.backgroundColor = "white";
        divblueBottom.style.backgroundColor = "white";
        choice = "green";
    }
    function confirmationredBottom(_clickEvent: Event): void {
        divgreenBottom.style.backgroundColor = "white";
        divredBottom.style.backgroundColor = "green";
        divyellowBottom.style.backgroundColor = "white";
        divblueBottom.style.backgroundColor = "white";
        choice = "red";
    }
    function confirmationblueBottom(_clickEvent: Event): void {
        divgreenBottom.style.backgroundColor = "white";
        divredBottom.style.backgroundColor = "white";
        divyellowBottom.style.backgroundColor = "white";
        divblueBottom.style.backgroundColor = "green";
        choice = "blue";
    }
    function confirmationyellowBottom(_clickEvent: Event): void {
        divgreenBottom.style.backgroundColor = "white";
        divredBottom.style.backgroundColor = "white";
        divyellowBottom.style.backgroundColor = "green";
        divblueBottom.style.backgroundColor = "white";
        choice = "yellow";
    }
    export var choicebottom: string = choice;
    function confirmationtotal(): void {
        let confirmedChoice: string = choice;
        console.log(confirmedChoice);
        if (choice == "green") {
            let choicegreenbottom: HTMLImageElement = document.createElement("img");
            choicegreenbottom.src = "data/Rocket_green_bottom.png";
            document.getElementById("bot").appendChild(choicegreenbottom);
        } else if (choice == "blue") {
            let choicebluebottom: HTMLImageElement = document.createElement("img");
            choicebluebottom.src = "data/Rocket_blue_bottom.png";
            document.getElementById("bot").appendChild(choicebluebottom);
        } else if (choice == "yellow") {
            let choiceyellowbottom: HTMLImageElement = document.createElement("img");
            choiceyellowbottom.src = "data/Rocket_yellow_bottom.png";
            document.getElementById("bot").appendChild(choiceyellowbottom);
        } else if (choice == "red") {
            let choiceredbottom: HTMLImageElement = document.createElement("img");
            choiceredbottom.src = "data/Rocket_red_bottom.png";
            document.getElementById("bot").appendChild(choiceredbottom);
        }
    }

    let confirmgreenBottom: HTMLElement = document.getElementById("greenBottom");
    confirmgreenBottom.addEventListener("click", confirmationgreenBottom);
    let confirmblueBottom: HTMLElement = document.getElementById("blueBottom");
    confirmblueBottom.addEventListener("click", confirmationblueBottom);
    let confirmredBottom: HTMLElement = document.getElementById("redBottom");
    confirmredBottom.addEventListener("click", confirmationredBottom);
    let confirmyellowBottom: HTMLElement = document.getElementById("yellowBottom");
    confirmyellowBottom.addEventListener("click", confirmationyellowBottom);


    let confirmtotal: HTMLElement = document.getElementById("confirmButton");
    confirmtotal.addEventListener("click", confirmationtotal);
}