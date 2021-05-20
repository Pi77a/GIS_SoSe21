"use strict";
var KlappBuch;
(function (KlappBuch) {
    let rocket = JSON.parse(KlappBuch.fullRocketJSON);
    for (let i = 0; i < rocket.length; i++) {
        let divmid = document.createElement("div");
        divmid.classList.add("pic");
        document.getElementById("gallery").appendChild(divmid);
        let imgmid = document.createElement("img");
        imgmid.src = rocket[i].mid.imageUrl;
        divmid.appendChild(imgmid);
        let headmid = document.createElement("p");
        headmid.innerText = rocket[i].mid.headline;
        divmid.appendChild(headmid);
        let buttonmid = document.createElement("button");
        buttonmid.innerText = "Select";
        buttonmid.addEventListener("click", handleSelection);
        divmid.appendChild(buttonmid);
        function handleSelection(_e) {
            console.log("innere Funktion", rocket[i].mid.headline);
            sessionStorage.setItem("2", rocket[i].mid.imageUrl);
            window.location.assign("./Rocket_bottom.html");
        }
    }
    let imgtopfinal = document.createElement("img");
    let key = sessionStorage.key(0);
    imgtopfinal.src = sessionStorage.getItem(key);
    document.getElementById("top").appendChild(imgtopfinal);
})(KlappBuch || (KlappBuch = {}));
//# sourceMappingURL=PickyourRocket2.js.map