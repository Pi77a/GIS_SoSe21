"use strict";
let eingabe1 = prompt("Erste Zahl");
let number1 = Number(eingabe1);
let eingabe2 = prompt("Zweite Zahl");
let number2 = Number(eingabe2);
function multiply() {
    let ergebniss = number1 * number2;
    console.log("Ergebniss: " + number1 + " * " + number2 + " = " + ergebniss);
}
function max() {
    if (number1 > number2) {
        console.log("Größere Zahl:" + number1);
    }
    else {
        console.log("Größere Zahl:" + number2);
    }
}
function einhundert() {
    let i = 1;
    do {
        console.log(i);
        i = i + 1;
    } while (i < 101);
}
function randomnumber() {
    for (let u = 0; u < 10; u++) {
        let number3 = Math.random() * (100 - 1);
        console.log("Zufällige Zahl zwishen 1 und 100: " + number3.toFixed());
    }
}
function factorial() {
    let eingabe3 = prompt("Zweite Zahl");
    let fakultaetzahl = Number(eingabe3);
    let fakultaetsergebniss = 1;
    for (let x = 1; x < fakultaetzahl + 1; x++) {
        fakultaetsergebniss = fakultaetsergebniss * x;
    }
    console.log(fakultaetzahl + "!: " + fakultaetsergebniss);
}
function leapyear() {
    for (let jahr = 1900; jahr < 2021; jahr++) {
        if (jahr % 4 === 0 && jahr % 100 !== 0) {
            console.log("schaltjahr: " + jahr);
        }
        if (jahr % 400 === 0) {
            console.log("schaltjahr: " + jahr);
        }
    }
}
multiply();
max();
einhundert();
randomnumber();
factorial();
leapyear();
//# sourceMappingURL=Aufgabe5.js.map