
namespace KlappBuch {
    communicate("https://pi77a.github.io/GIS_SoSe21/Kapitelaufgabe/data.json");
    
    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        var serverRocket: Rocket[] = await response.json();
        console.log(serverRocket[2].top.imageUrl);

        for (let i: number = 0; i < serverRocket.length; i++) {
            let divmid: HTMLDivElement = document.createElement("div");
            divmid.classList.add("pic");
            document.getElementById("gallery").appendChild(divmid);
    
            let imgmid: HTMLImageElement = document.createElement("img");
            imgmid.src = serverRocket[i].mid.imageUrl;
            divmid.appendChild(imgmid);
    
            let headmid: HTMLParagraphElement = document.createElement("p");
            headmid.innerText = serverRocket[i].mid.headline;
            divmid.appendChild(headmid);
    
            let buttonmid: HTMLButtonElement = document.createElement("button");
            buttonmid.innerText = "Select";
            buttonmid.addEventListener("click", handleSelection);
            divmid.appendChild(buttonmid);
    
            function handleSelection(_e: Event): void {
                console.log("innere Funktion", serverRocket[i].mid.headline);
                sessionStorage.setItem("2", serverRocket[i].mid.imageUrl);
                window.location.assign("./Rocket_bottom.html");
            }
        }
    
        let imgtopfinal: HTMLImageElement = document.createElement("img");
        let key: string = sessionStorage.key(0);
        imgtopfinal.src = sessionStorage.getItem(key);
        document.getElementById("top").appendChild(imgtopfinal);
    }
}