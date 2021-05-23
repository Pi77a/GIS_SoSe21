"use strict";
var KlappBuch;
(function (KlappBuch) {
    communicate("https://pi77a.github.io/GIS_SoSe21/Kapitelaufgabe/data.json");
    async function communicate(_url) {
        let response = await fetch(_url);
        var serverRocket = await response.json();
        console.log(serverRocket[2].top.imageUrl);
        for (let i = 0; i < serverRocket.length; i++) {
            let divbottom = document.createElement("div");
            divbottom.classList.add("pic");
            document.getElementById("gallery").appendChild(divbottom);
            let imgbottom = document.createElement("img");
            imgbottom.src = serverRocket[i].bottom.imageUrl;
            divbottom.appendChild(imgbottom);
            let headbottom = document.createElement("p");
            headbottom.innerText = serverRocket[i].bottom.headline;
            divbottom.appendChild(headbottom);
            let buttonbottom = document.createElement("button");
            buttonbottom.innerText = "Select";
            buttonbottom.addEventListener("click", confirmChoice);
            divbottom.appendChild(buttonbottom);
            function confirmChoice(_e) {
                console.log("innere Funktion", serverRocket[i].bottom.headline);
                sessionStorage.setItem("3", serverRocket[i].bottom.imageUrl);
                window.location.assign("./RocketFinished.html");
            }
        }
        let imgtopfinal = document.createElement("img");
        let key = sessionStorage.key(0);
        imgtopfinal.src = sessionStorage.getItem(key);
        document.getElementById("top").appendChild(imgtopfinal);
        let imgmidfinal = document.createElement("img");
        let key1 = sessionStorage.key(1);
        imgmidfinal.src = sessionStorage.getItem(key1);
        document.getElementById("mid").appendChild(imgmidfinal);
    }
})(KlappBuch || (KlappBuch = {}));
//# sourceMappingURL=PickyourRocket3.js.map