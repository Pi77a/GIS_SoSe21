"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    for (let i = 0; i < 5; i++) {
        let colornumber = "123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            let rdmNum = Math.floor(Math.random() * 16 + 1);
            color += colornumber.charAt(rdmNum);
        }
        let div = document.createElement("div");
        let widthrdm = Math.floor(Math.random() * 500 + 100);
        let heightrdm = Math.floor(Math.random() * 500 + 100);
        let widthstring = widthrdm.toString();
        let heightstring = heightrdm.toString();
        div.style.width = widthstring + "px";
        div.style.height = heightstring + "px";
        div.style.position = "absolute";
        div.style.opacity = "70%";
        div.style.backgroundColor = color;
        div.classList.add("rect");
        document.getElementById("mainDiv").appendChild(div);
    }
    function addRect(_clickEvent) {
        let colornumber = "123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            let rdmNum = Math.floor(Math.random() * 16 + 1);
            color += colornumber.charAt(rdmNum);
        }
        let div = document.createElement("div");
        let widthrdm = Math.floor(Math.random() * 500 + 100);
        let heightrdm = Math.floor(Math.random() * 500 + 100);
        let widthstring = widthrdm.toString();
        let heightstring = heightrdm.toString();
        div.style.width = widthstring + "px";
        div.style.height = heightstring + "px";
        div.style.position = "absolute";
        div.style.opacity = "70%";
        div.style.backgroundColor = color;
        div.classList.add("rect");
        document.getElementById("mainDiv").appendChild(div);
    }
    function cleanCanvas(_clickEvent) {
        document.getElementById("mainDiv").innerHTML = "";
    }
    let buttonAdd = document.getElementById("add");
    buttonAdd.addEventListener("click", addRect);
    let buttonClean = document.getElementById("clean");
    buttonClean.addEventListener("click", cleanCanvas);
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=Aufgabe1.js.map