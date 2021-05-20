"use strict";
var KlappBuch;
(function (KlappBuch) {
    let rocket = JSON.parse(KlappBuch.fullRocketJSON);
    sessionStorage.removeItem("0");
    sessionStorage.removeItem("2");
    sessionStorage.removeItem("3");
    for (let i = 0; i < rocket.length; i++) {
        let divtop = document.createElement("div");
        divtop.classList.add("pic");
        document.getElementById("gallery").appendChild(divtop);
        let imgtop = document.createElement("img");
        imgtop.src = rocket[i].top.imageUrl;
        divtop.appendChild(imgtop);
        let headtop = document.createElement("p");
        headtop.innerText = rocket[i].top.headline;
        divtop.appendChild(headtop);
        let buttontop = document.createElement("button");
        buttontop.innerText = "Select";
        buttontop.addEventListener("click", handleSelection);
        divtop.appendChild(buttontop);
        function handleSelection(_e) {
            sessionStorage.setItem("0", rocket[i].top.imageUrl);
            window.location.assign("./Rocket_mid.html");
        }
    }
})(KlappBuch || (KlappBuch = {}));
//# sourceMappingURL=PickyourRocket.js.map