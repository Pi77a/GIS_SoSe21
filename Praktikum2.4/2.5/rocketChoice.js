"use strict";
let rocket2 = {
    top: sessionStorage.getItem("0"),
    mid: sessionStorage.getItem("2"),
    bot: sessionStorage.getItem("3")
};
serverrequest();
async function serverrequest() {
    let url = "https://gis-communication.herokuapp.com/";
    // tslint:disable-next-line: no-any
    let query = new URLSearchParams(rocket2);
    url = url + "?" + query.toString();
    await fetch(url);
    serveranswer(url);
    console.log(url);
}
async function serveranswer(_url) {
    let response = await fetch(_url);
    let serverRocket = await response.json();
    let diverror = document.createElement("div");
    diverror.id = "error";
    console.log(serverRocket);
    document.getElementById("header").appendChild(diverror);
    let headlineerror = document.createElement("h2");
    // headlineerror.innerText = JSON.stringify(serverRocket.message);
    document.getElementById("error").appendChild(headlineerror);
}
let divfinal = document.createElement("div");
divfinal.id = "final";
document.body.appendChild(divfinal);
let headline = document.createElement("h1");
headline.innerText = "Finished Rocket";
headline.id = "finalhead";
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
//# sourceMappingURL=rocketChoice.js.map