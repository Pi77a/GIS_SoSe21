let eingabe1: string = prompt("Erste Zahl");
let number1: number = Number(eingabe1);
let eingabe2: string = prompt("Zweite Zahl");
let number2: number = Number(eingabe2);

function multiply(): void {
    let ergebniss: number = number1 * number2;

    console.log("Ergebniss: " + number1 + " * " + number2 + " = " + ergebniss);

}
function max(): void {
    if (number1 > number2) {
        console.log("Größere Zahl:" + number1);
    }
    else {
        console.log("Größere Zahl:" + number2);
    }
}
function einhundert(): void {
    let i: number = 1;
    do {
        console.log(i);
        i = i + 1;
    } while (i < 101);
}
function randomnumber(): void {
    for (let u: number = 0; u < 10; u++) {
        let number3: number = Math.random() * (100 - 1);
        console.log("Zufällige Zahl zwishen 1 und 100: " + number3.toFixed());
    }
}
function factorial(): void {
    let eingabe3: string = prompt("Zweite Zahl");
    let fakultaetzahl: number = Number(eingabe3);
    let fakultaetsergebniss: number = 1;
    for (let x: number = 1; x < fakultaetzahl + 1; x++) {
        fakultaetsergebniss = fakultaetsergebniss * x;
    }
    console.log(fakultaetzahl + "!: " + fakultaetsergebniss);
}
function leapyear(): void {
    for (let jahr: number = 1900; jahr < 2021; jahr++) {
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