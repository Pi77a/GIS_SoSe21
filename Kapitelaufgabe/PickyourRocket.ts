namespace KlappBuch {
    communicate("https://pi77a.github.io/GIS_SoSe21/Kapitelaufgabe/data.json");

    sessionStorage.removeItem("0");
    sessionStorage.removeItem("2");
    sessionStorage.removeItem("3");

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        var serverRocket: Rocket[] = await response.json();
        console.log(serverRocket[2].top.imageUrl);

        for (let i: number = 0; i < serverRocket.length; i++) {
            let divtop: HTMLDivElement = document.createElement("div");
            divtop.classList.add("pic");
            document.getElementById("gallery").appendChild(divtop);
    
            let imgtop: HTMLImageElement = document.createElement("img");
            imgtop.src = serverRocket[i].top.imageUrl;
            divtop.appendChild(imgtop);
    
            let headtop: HTMLParagraphElement = document.createElement("p");
            headtop.innerText = serverRocket[i].top.headline;
            divtop.appendChild(headtop);
            
            let buttontop: HTMLButtonElement = document.createElement("button");
            buttontop.innerText = "Select";
            buttontop.addEventListener("click", handleSelection);
            divtop.appendChild(buttontop);
    
            function handleSelection(_e: Event): void {
                sessionStorage.setItem("0", serverRocket[i].top.imageUrl);
                window.location.assign("./Rocket_mid.html");
            }
        }
    }
}