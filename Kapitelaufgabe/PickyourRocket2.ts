
namespace RocketMid {
    let choice: string = "";
    let divyellowmid: HTMLElement = document.getElementById("yellowMid");
    let divredmid: HTMLElement = document.getElementById("redMid");
    let divbluemid: HTMLElement = document.getElementById("blueMid");
    let divgreenmid: HTMLElement = document.getElementById("greenMid");

    function confirmationgreenmid(_clickEvent: Event): void {
        divgreenmid.style.backgroundColor = "green";
        divredmid.style.backgroundColor = "white";
        divyellowmid.style.backgroundColor = "white";
        divbluemid.style.backgroundColor = "white";
        choice = "green";
    }
    function confirmationredmid(_clickEvent: Event): void {
        divgreenmid.style.backgroundColor = "white";
        divredmid.style.backgroundColor = "green";
        divyellowmid.style.backgroundColor = "white";
        divbluemid.style.backgroundColor = "white";
        choice = "red";
    }
    function confirmationbluemid(_clickEvent: Event): void {
        divgreenmid.style.backgroundColor = "white";
        divredmid.style.backgroundColor = "white";
        divyellowmid.style.backgroundColor = "white";
        divbluemid.style.backgroundColor = "green";
        choice = "blue";
    }
    function confirmationyellowmid(_clickEvent: Event): void {
        divgreenmid.style.backgroundColor = "white";
        divredmid.style.backgroundColor = "white";
        divyellowmid.style.backgroundColor = "green";
        divbluemid.style.backgroundColor = "white";
        choice = "yellow";
    }
    export var choicemid: string = choice;
    function confirmationtotalmid(): void {
        let confirmedChoice: string = choice;
        console.log(confirmedChoice);
        if (choice == "green") {
            let choicegreenmid: HTMLImageElement = document.createElement("img");
            choicegreenmid.src = "data/Rocket_green_mid.png";
            document.getElementById("mid").appendChild(choicegreenmid);
        } else if (choice == "blue") {
            let choicebluemid: HTMLImageElement = document.createElement("img");
            choicebluemid.src = "data/Rocket_blue_mid.png";
            document.getElementById("mid").appendChild(choicebluemid);
        } else if (choice == "yellow") {
            let choiceyellowmid: HTMLImageElement = document.createElement("img");
            choiceyellowmid.src = "data/Rocket_yellow_mid.png";
            document.getElementById("mid").appendChild(choiceyellowmid);
        } else if (choice == "red") {
            let choiceredmid: HTMLImageElement = document.createElement("img");
            choiceredmid.src = "data/Rocket_red_mid.png";
            document.getElementById("mid").appendChild(choiceredmid);
        }
    }

    let confirmgreenmid: HTMLElement = document.getElementById("greenMid");
    confirmgreenmid.addEventListener("click", confirmationgreenmid);
    let confirmbluemid: HTMLElement = document.getElementById("blueMid");
    confirmbluemid.addEventListener("click", confirmationbluemid);
    let confirmredmid: HTMLElement = document.getElementById("redMid");
    confirmredmid.addEventListener("click", confirmationredmid);
    let confirmyellowmid: HTMLElement = document.getElementById("yellowMid");
    confirmyellowmid.addEventListener("click", confirmationyellowmid);

    let confirmtotalmid: HTMLElement = document.getElementById("confirmButton");
    confirmtotalmid.addEventListener("click", confirmationtotalmid);

}
