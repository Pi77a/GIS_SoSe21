"use strict";
var KlappBuch;
(function (KlappBuch) {
    let divfinal = document.createElement("div");
    divfinal.style.width = "600px";
    divfinal.style.backgroundColor = "white";
    divfinal.style.display = "flex";
    divfinal.style.flexDirection = "column";
    divfinal.style.alignItems = "center";
    divfinal.style.boxShadow = "4px 5px 5px grey";
    divfinal.id = "final";
    document.body.appendChild(divfinal);
    let headline = document.createElement("h2");
    headline.innerText = "Finished Rocket";
    document.getElementById("final").appendChild(headline);
    let imgtop = document.createElement("img");
    imgtop.src = sessionStorage.getItem("top");
    imgtop.style.width = "400px";
    document.getElementById("final").appendChild(imgtop);
    let imgmid = document.createElement("img");
    imgmid.src = sessionStorage.getItem("mid");
    imgmid.style.width = "400px";
    document.getElementById("final").appendChild(imgmid);
    let imgbot = document.createElement("img");
    imgbot.src = sessionStorage.getItem("bottom");
    imgbot.style.width = "400px";
    imgbot.style.marginTop = "-200px";
    imgbot.style.marginBottom = "10px";
    document.getElementById("final").appendChild(imgbot);
})(KlappBuch || (KlappBuch = {}));
//# sourceMappingURL=rocketChoice.js.map