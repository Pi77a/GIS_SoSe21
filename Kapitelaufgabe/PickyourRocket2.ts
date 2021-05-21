
namespace KlappBuch {
    let rocket: Rocket[] = JSON.parse(fullRocketJSON);

    for (let i: number = 0; i < rocket.length; i++) {
        let divmid: HTMLDivElement = document.createElement("div");
        divmid.classList.add("pic");
        document.getElementById("gallery").appendChild(divmid);

        let imgmid: HTMLImageElement = document.createElement("img");
        imgmid.src = rocket[i].mid.imageUrl;
        divmid.appendChild(imgmid);

        let headmid: HTMLParagraphElement = document.createElement("p");
        headmid.innerText = rocket[i].mid.headline;
        divmid.appendChild(headmid);

        let buttonmid: HTMLButtonElement = document.createElement("button");
        buttonmid.innerText = "Select";
        buttonmid.addEventListener("click", handleSelection);
        divmid.appendChild(buttonmid);

        function handleSelection(_e: Event): void {
            console.log("innere Funktion", rocket[i].mid.headline);
            sessionStorage.setItem("2", rocket[i].mid.imageUrl);
            window.location.assign("./Rocket_bottom.html");
        }
    }

    let imgtopfinal: HTMLImageElement = document.createElement("img");
    let key: string = sessionStorage.key(0);
    imgtopfinal.src = sessionStorage.getItem(key);
    document.getElementById("top").appendChild(imgtopfinal);
}