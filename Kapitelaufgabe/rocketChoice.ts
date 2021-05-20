namespace KlappBuch {

    let divfinal: HTMLDivElement = document.createElement("div");
    divfinal.id = "final";
    document.body.appendChild(divfinal);


    let headline: HTMLHeadingElement = document.createElement("h2");
    headline.innerText = "Finished Rocket";
    document.getElementById("final").appendChild(headline);

    let buttonretry: HTMLButtonElement = document.createElement("button");
    buttonretry.innerText = "Try Again";
    buttonretry.addEventListener("click", retryRocket);
    divfinal.appendChild(buttonretry);


    for (let i: number = 0; i < 3; i++) {
        let img: HTMLImageElement = document.createElement("img");
        let key: string = sessionStorage.key(i);
        img.src = sessionStorage.getItem(key);
        document.getElementById("final").appendChild(img);
    }

  
    function retryRocket(_clickEvent: Event): void {
        window.location.assign("./Rocket_top.html");
    }

    


}