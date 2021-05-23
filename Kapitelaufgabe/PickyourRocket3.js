"use strict";
var KlappBuch;
(function (KlappBuch) {
    console.log(KlappBuch.fullRocketJSON);
    let rocket = JSON.parse(KlappBuch.fullRocketJSON);
    for (let i = 0; i < rocket.length; i++) {
        let divbottom = document.createElement("div");
        divbottom.classList.add("pic");
        document.getElementById("gallery").appendChild(divbottom);
        let imgbottom = document.createElement("img");
        imgbottom.src = rocket[i].bottom.imageUrl;
        divbottom.appendChild(imgbottom);
        let headbottom = document.createElement("p");
        headbottom.innerText = rocket[i].bottom.headline;
        divbottom.appendChild(headbottom);
        let buttonbottom = document.createElement("button");
        buttonbottom.innerText = "Select";
        buttonbottom.addEventListener("click", confirmChoice);
        divbottom.appendChild(buttonbottom);
        function confirmChoice(_e) {
            console.log("innere Funktion", rocket[i].bottom.headline);
            sessionStorage.setItem("3", rocket[i].bottom.imageUrl);
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
})(KlappBuch || (KlappBuch = {}));
//# sourceMappingURL=PickyourRocket3.js.map