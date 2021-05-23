"use strict";
async function dazwischen() {
    console.log("vor dazwischen");
    await fetch("https://gis-communication.herokuapp.com");
    console.log("dazwischen");
    return 42;
}
async function load() {
    console.log("vorher");
    let result = await dazwischen();
    console.log(result);
    console.log("danach");
}
load();
console.log("ende?");
// let a: number = 0;
// for (let i: number = 0; i < 10000000000; i++) {
//   a += i;
// }
// console.log(a);
async function communicate(_url) {
    let response = await fetch(_url);
    console.log("Response", response);
    let serverReply = await response.json();
    console.log(serverReply[2].top.imageUrl);
    //console.log(serverReply.text);
    //console.log(serverReply.zweiterText);
}
communicate("https://pi77a.github.io/GIS_SoSe21/Kapitelaufgabe/data.json");
//# sourceMappingURL=script.js.map