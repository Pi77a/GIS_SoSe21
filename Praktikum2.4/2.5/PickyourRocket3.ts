namespace KlappBuch {
    communicate("https://pi77a.github.io/GIS_SoSe21/Kapitelaufgabe/data.json");

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        var serverRocket: Rocket[] = await response.json();
        console.log(serverRocket[2].top.imageUrl);


        for (let i: number = 0; i < serverRocket.length; i++) {
            let divbottom: HTMLDivElement = document.createElement("div");
            divbottom.classList.add("pic");
            document.getElementById("gallery").appendChild(divbottom);

            let imgbottom: HTMLImageElement = document.createElement("img");
            imgbottom.src = serverRocket[i].bottom.imageUrl;
            divbottom.appendChild(imgbottom);

            let headbottom: HTMLParagraphElement = document.createElement("p");
            headbottom.innerText = serverRocket[i].bottom.headline;
            divbottom.appendChild(headbottom);

            let buttonbottom: HTMLButtonElement = document.createElement("button");
            buttonbottom.innerText = "Select";
            buttonbottom.addEventListener("click", confirmChoice);
            divbottom.appendChild(buttonbottom);

            function confirmChoice(_e: Event): void {
                console.log("innere Funktion", serverRocket[i].bottom.headline);
                sessionStorage.setItem("3", serverRocket[i].bottom.imageUrl);
                window.location.assign("./RocketFinished.html");
            }
        }

        let imgtopfinal: HTMLImageElement = document.createElement("img");
        let key: string = sessionStorage.key(0);
        imgtopfinal.src = sessionStorage.getItem(key);
        document.getElementById("top").appendChild(imgtopfinal);
        let imgmidfinal: HTMLImageElement = document.createElement("img");
        let key1: string = sessionStorage.key(1);
        imgmidfinal.src = sessionStorage.getItem(key1);
        document.getElementById("mid").appendChild(imgmidfinal);
    }
}
