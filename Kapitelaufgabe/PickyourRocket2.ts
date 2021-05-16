
namespace KlappBuch {
    let rocket: Rocket[] = JSON.parse(fullRocketJSON);
    console.log(rocket);
    let choice: string = "";
    
    let divyellowmid: HTMLDivElement = document.createElement("div");
    divyellowmid.classList.add("pic");
    divyellowmid.id = "yellowmid";
    document.getElementById("gallery").appendChild(divyellowmid);
    let imgyellowmid: HTMLImageElement = document.createElement("img");
    imgyellowmid.src = rocket[3].mid.imageUrl;
    document.getElementById("yellowmid").appendChild(imgyellowmid);
    let headyellowmid: HTMLParagraphElement = document.createElement("p");
    headyellowmid.innerText = "Yellow mid ";
    document.getElementById("yellowmid").appendChild(headyellowmid);

    let divredmid: HTMLDivElement = document.createElement("div");
    divredmid.classList.add("pic");
    divredmid.id = "redmid";
    document.getElementById("gallery").appendChild(divredmid);
    let imgredmid: HTMLImageElement = document.createElement("img");
    imgredmid.src = rocket[1].mid.imageUrl;
    document.getElementById("redmid").appendChild(imgredmid);
    let headredmid: HTMLParagraphElement = document.createElement("p");
    headredmid.innerText = "Red mid";
    document.getElementById("redmid").appendChild(headredmid);

    let divbluemid: HTMLDivElement = document.createElement("div");
    divbluemid.classList.add("pic");
    divbluemid.id = "bluemid";
    document.getElementById("gallery").appendChild(divbluemid);
    let imgbluemid: HTMLImageElement = document.createElement("img");
    imgbluemid.src = rocket[0].mid.imageUrl;
    document.getElementById("bluemid").appendChild(imgbluemid);
    let headbluemid: HTMLParagraphElement = document.createElement("p");
    headbluemid.innerText = "Blue mid ";
    document.getElementById("bluemid").appendChild(headbluemid);

    let divgreenmid: HTMLDivElement = document.createElement("div");
    divgreenmid.classList.add("pic");
    divgreenmid.id = "greenmid";
    document.getElementById("gallery").appendChild(divgreenmid);
    let imggreenmid: HTMLImageElement = document.createElement("img");
    imggreenmid.src = rocket[2].mid.imageUrl;
    document.getElementById("greenmid").appendChild(imggreenmid);
    let headgreenmid: HTMLParagraphElement = document.createElement("p");
    headgreenmid.innerText = "Green mid";
    document.getElementById("greenmid").appendChild(headgreenmid);


    let prevpagelink: HTMLAnchorElement = document.createElement("a");
    prevpagelink.href = "Rocket_top.html";
    prevpagelink.id = "prevpage";
    document.getElementById("gallery").appendChild(prevpagelink);
    let prevpagebutton: HTMLButtonElement = document.createElement("button");
    prevpagebutton.innerText = "< Top Part";
    document.getElementById("prevpage").appendChild(prevpagebutton);


    let confirmbutton: HTMLButtonElement = document.createElement("button");
    confirmbutton.innerText = "Confirm your Choice";
    confirmbutton.id = "confirmButton";
    document.getElementById("gallery").appendChild(confirmbutton);

    let nextpagelink: HTMLAnchorElement = document.createElement("a");
    nextpagelink.href = "Rocket_bottom.html";
    nextpagelink.id = "nextpage";
    document.getElementById("gallery").appendChild(nextpagelink);
    let nextpagebutton: HTMLButtonElement = document.createElement("button");
    nextpagebutton.innerText = "Bottom Part >";
    document.getElementById("nextpage").appendChild(nextpagebutton);


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

    let choicetop: HTMLImageElement = document.createElement("img");
    choicetop.src = sessionStorage.getItem("top");
    document.getElementById("top").appendChild(choicetop);


    function confirmationtotalmid(): void {
        let confirmedChoice: string = choice;
        console.log(confirmedChoice);
        if (choice == "green") {
            let choicegreenmid: HTMLImageElement = document.createElement("img");
            choicegreenmid.src = "data/Rocket_green_mid.png";
            document.getElementById("mid").appendChild(choicegreenmid);
            sessionStorage.setItem("mid", "data/Rocket_green_mid.png");
        }
        else if (choice == "blue") {
            let choicebluemid: HTMLImageElement = document.createElement("img");
            choicebluemid.src = "data/Rocket_blue_mid.png";
            document.getElementById("mid").appendChild(choicebluemid);
            sessionStorage.setItem("mid", "data/Rocket_blue_mid.png");
        }
        else if (choice == "yellow") {
            let choiceyellowmid: HTMLImageElement = document.createElement("img");
            choiceyellowmid.src = "data/Rocket_yellow_mid.png";
            document.getElementById("mid").appendChild(choiceyellowmid);
            sessionStorage.setItem("mid", "data/Rocket_yellow_mid.png");
        }
        else if (choice == "red") {
            let choiceredmid: HTMLImageElement = document.createElement("img");
            choiceredmid.src = "data/Rocket_red_mid.png";
            document.getElementById("mid").appendChild(choiceredmid);
            sessionStorage.setItem("mid", "data/Rocket_red_mid.png");
        }
    }

    let confirmgreenmid: HTMLElement = document.getElementById("greenmid");
    confirmgreenmid.addEventListener("click", confirmationgreenmid);
    let confirmbluemid: HTMLElement = document.getElementById("bluemid");
    confirmbluemid.addEventListener("click", confirmationbluemid);
    let confirmredmid: HTMLElement = document.getElementById("redmid");
    confirmredmid.addEventListener("click", confirmationredmid);
    let confirmyellowmid: HTMLElement = document.getElementById("yellowmid");
    confirmyellowmid.addEventListener("click", confirmationyellowmid);

    let confirmtotalmid: HTMLElement = document.getElementById("confirmButton");
    confirmtotalmid.addEventListener("click", confirmationtotalmid);


}
