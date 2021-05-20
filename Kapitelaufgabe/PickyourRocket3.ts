namespace KlappBuch {
    let rocket: Rocket[] = JSON.parse(fullRocketJSON);

 
    for (let i: number = 0; i < rocket.length; i++) {
        let divbottom: HTMLDivElement = document.createElement("div");
        divbottom.classList.add("pic");
        document.getElementById("gallery").appendChild(divbottom);

        let imgbottom: HTMLImageElement = document.createElement("img");
        imgbottom.src = rocket[i].bottom.imageUrl;
        divbottom.appendChild(imgbottom);

        let headbottom: HTMLParagraphElement = document.createElement("p");
        headbottom.innerText = rocket[i].bottom.headline;
        divbottom.appendChild(headbottom);

        let buttonbottom: HTMLButtonElement = document.createElement("button");
        buttonbottom.innerText = "Select";
        buttonbottom.addEventListener("click", confirmChoice);
        divbottom.appendChild(buttonbottom);
        
        function confirmChoice(_e: Event): void {
            console.log("innere Funktion", rocket[i].bottom.headline);
            sessionStorage.setItem("3", rocket[i].bottom.imageUrl);
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
