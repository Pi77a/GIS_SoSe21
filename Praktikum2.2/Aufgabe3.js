"use strict";
let canvas = document.getElementById("Canvas");
let context = canvas.getContext("2d");
//Aufgabe3 a
function draw() {
    context.beginPath();
    context.rect(0, 0, 1000, 1000);
    context.fillStyle = "blue";
    context.fill();
    context.beginPath();
    context.arc(231, 432, 40, 0, 2 * Math.PI);
    context.arc(191, 453, 40, 0, 2 * Math.PI);
    context.arc(280, 453, 40, 0, 2 * Math.PI);
    context.rect(197, 432, 82, 61);
    context.rect(197, 432, 118, 31);
    context.fillStyle = "white";
    context.fill();
    context.beginPath();
    context.arc(400, 200, 40, 0, 2 * Math.PI);
    context.arc(360, 221, 40, 0, 2 * Math.PI);
    context.arc(449, 221, 40, 0, 2 * Math.PI);
    context.rect(366, 200, 82, 61);
    context.rect(366, 200, 118, 31);
    context.fillStyle = "white";
    context.fill();
    context.beginPath();
    context.arc(700, 300, 40, 0, 2 * Math.PI);
    context.arc(660, 321, 40, 0, 2 * Math.PI);
    context.arc(749, 321, 40, 0, 2 * Math.PI);
    context.rect(666, 300, 82, 61);
    context.rect(666, 300, 118, 31);
    context.fillStyle = "white";
    context.fill();
    context.beginPath();
    context.rect(450, 402, 100, 300);
    context.fillStyle = "#474747";
    context.fill();
    context.beginPath();
    context.rect(480, 640, 40, 60);
    context.fillStyle = "#914100";
    context.fill();
    context.beginPath();
    context.moveTo(483, 673);
    context.lineTo(483, 670);
    context.lineTo(492, 670);
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath();
    context.rect(480, 460, 40, 60);
    context.fillStyle = "#b5faff";
    context.fill();
    context.moveTo(500, 460);
    context.lineTo(500, 520);
    context.moveTo(480, 490);
    context.lineTo(520, 490);
    context.lineWidth = 4;
    context.strokeStyle = "#914100";
    context.stroke();
    context.beginPath();
    context.moveTo(420, 402);
    context.lineTo(500, 302);
    context.lineTo(580, 402);
    context.closePath();
    context.fillStyle = "red";
    context.fill();
    context.beginPath();
    context.rect(750, 600, 40, 300);
    context.fillStyle = "brown";
    context.fill();
    context.beginPath();
    context.arc(750, 570, 60, 0, 2 * Math.PI);
    context.arc(790, 580, 50, 0, 2 * Math.PI);
    context.fillStyle = "green";
    context.fill();
    context.beginPath();
    context.lineWidth = 10;
    context.strokeStyle = "green";
    context.arc(500, 1500, 800, 1.2 * Math.PI, 1.8 * Math.PI);
    context.closePath();
    context.fillStyle = "green";
    context.fill();
}
//Aufgabe3 b
function rect(width1, height1) {
    let rect2 = {
        width: width1,
        height: height1
    };
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.rect(100, 100, rect2.width, rect2.height);
    context.fillStyle = "black";
    context.fill();
}
//Aufgabe3 c
function createRect() {
    let rect2 = {
        width: Math.floor(Math.random() * 600) + 100,
        height: Math.floor(Math.random() * 600) + 100
    };
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.rect(100, 100, rect2.width, rect2.height);
    context.fillStyle = "black";
    context.fill();
}
//Aufgabe3 d
function drawRect(startx, starty, width, height) {
    context.beginPath();
    context.moveTo(startx, starty);
    context.lineTo(startx + width, starty);
    context.lineTo(startx + width, starty + height);
    context.lineTo(startx, starty + height);
    context.closePath();
    context.lineWidth = 10;
    context.strokeStyle = "black";
    context.stroke();
}
//Aufgabe3 e
function rdmRect() {
    let rectarray = [];
    for (let i = 0; i < 6; i++) {
        rectarray[0] = Math.floor(Math.random() * 600) + 100;
        rectarray[1] = Math.floor(Math.random() * 600) + 100;
        rectarray[2] = Math.floor(Math.random() * 600) + 100;
        rectarray[3] = Math.floor(Math.random() * 600) + 100;
        drawRect(rectarray[0], rectarray[1], rectarray[2], rectarray[3]);
    }
}
function clearRect() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
rdmRect();
//# sourceMappingURL=Aufgabe3.js.map