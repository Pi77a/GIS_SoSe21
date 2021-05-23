"use strict";
var KlappBuch;
(function (KlappBuch) {
    communicate("https://pi77a.github.io/GIS_SoSe21/Kapitelaufgabe/data.json");
    async function communicate(_url) {
        let response = await fetch(_url);
        var serverRocket = await response.json();
        console.log(serverRocket[2].top.imageUrl);
        for (let i = 0; i < serverRocket.length; i++) {
            let divmid = document.createElement("div");
            divmid.classList.add("pic");
            document.getElementById("gallery").appendChild(divmid);
            let imgmid = document.createElement("img");
            imgmid.src = serverRocket[i].mid.imageUrl;
            divmid.appendChild(imgmid);
            let headmid = document.createElement("p");
            headmid.innerText = serverRocket[i].mid.headline;
            divmid.appendChild(headmid);
            let buttonmid = document.createElement("button");
            buttonmid.innerText = "Select";
            buttonmid.addEventListener("click", handleSelection);
            divmid.appendChild(buttonmid);
            function handleSelection(_e) {
                console.log("innere Funktion", serverRocket[i].mid.headline);
                sessionStorage.setItem("2", serverRocket[i].mid.imageUrl);
                window.location.assign("./Rocket_bottom.html");
            }
        }
        let imgtopfinal = document.createElement("img");
        let key = sessionStorage.key(0);
        imgtopfinal.src = sessionStorage.getItem(key);
        document.getElementById("top").appendChild(imgtopfinal);
    }
})(KlappBuch || (KlappBuch = {}));
//# sourceMappingURL=PickyourRocket2.js.map