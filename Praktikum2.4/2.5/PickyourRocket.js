"use strict";
var KlappBuch;
(function (KlappBuch) {
    communicate("./Praktikum2.4\2.5/data.json");
    sessionStorage.removeItem("0");
    sessionStorage.removeItem("2");
    sessionStorage.removeItem("3");
    async function communicate(_url) {
        let response = await fetch(_url);
        var serverRocket = await response.json();
        console.log(serverRocket[2].top.imageUrl);
        for (let i = 0; i < serverRocket.length; i++) {
            let divtop = document.createElement("div");
            divtop.classList.add("pic");
            document.getElementById("gallery").appendChild(divtop);
            let imgtop = document.createElement("img");
            imgtop.src = serverRocket[i].top.imageUrl;
            divtop.appendChild(imgtop);
            let headtop = document.createElement("p");
            headtop.innerText = serverRocket[i].top.headline;
            divtop.appendChild(headtop);
            let buttontop = document.createElement("button");
            buttontop.innerText = "Select";
            buttontop.addEventListener("click", handleSelection);
            divtop.appendChild(buttontop);
            function handleSelection(_e) {
                sessionStorage.setItem("0", serverRocket[i].top.imageUrl);
                window.location.assign("./Rocket_mid.html");
            }
        }
    }
})(KlappBuch || (KlappBuch = {}));
//# sourceMappingURL=PickyourRocket.js.map