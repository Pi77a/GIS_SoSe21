namespace KlappBuch {
    let rocket: Rocket[] = JSON.parse(fullRocketJSON);

    sessionStorage.removeItem("0");
    sessionStorage.removeItem("2");
    sessionStorage.removeItem("3");

    for (let i: number = 0; i < rocket.length; i++) {
        let divtop: HTMLDivElement = document.createElement("div");
        divtop.classList.add("pic");
        document.getElementById("gallery").appendChild(divtop);

        let imgtop: HTMLImageElement = document.createElement("img");
        imgtop.src = rocket[i].top.imageUrl;
        divtop.appendChild(imgtop);

        let headtop: HTMLParagraphElement = document.createElement("p");
        headtop.innerText = rocket[i].top.headline;
        divtop.appendChild(headtop);
        
        let buttontop: HTMLButtonElement = document.createElement("button");
        buttontop.innerText = "Select";
        buttontop.addEventListener("click", handleSelection);
        divtop.appendChild(buttontop);

        function handleSelection(_e: Event): void {
            sessionStorage.setItem("0", rocket[i].top.imageUrl);
            window.location.assign("./Rocket_mid.html");
        }

    }
}