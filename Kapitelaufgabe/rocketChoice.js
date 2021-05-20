"use strict";
var KlappBuch;
(function (KlappBuch) {
    let divfinal = document.createElement("div");
    divfinal.id = "final";
    document.body.appendChild(divfinal);
    let headline = document.createElement("h2");
    headline.innerText = "Finished Rocket";
    document.getElementById("final").appendChild(headline);
    let buttonretry = document.createElement("button");
    buttonretry.innerText = "Try Again";
    buttonretry.addEventListener("click", retryRocket);
    divfinal.appendChild(buttonretry);
    for (let i = 0; i < 3; i++) {
        let img = document.createElement("img");
        let key = sessionStorage.key(i);
        img.src = sessionStorage.getItem(key);
        document.getElementById("final").appendChild(img);
    }
    function retryRocket(_clickEvent) {
        window.location.assign("./Rocket_top.html");
    }
})(KlappBuch || (KlappBuch = {}));
//# sourceMappingURL=rocketChoice.js.map