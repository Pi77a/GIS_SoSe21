"use strict";
let x = "Hallo";
console.log(x);
func11(x);
console.log(x);
func2();
func3();
console.log(x);
function func11(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
/* a) Hallo
      Bla
      Hallo
      Blubb
      Test

   b) Wenn man einen Variable in einer Funktion definiert ist es eine lokale Variable, welche
      nur in der Funktion definiert wird und nur in dieser benutzt werden kann. Wenn man eine
      Variable im Typescript außerhalb von einer Funktion definiert ist es eine globale Variable,
      welche man im ganzen Typesript aufrufen kann.
      Funktionen sind ähnlich wie Variablen da sie auch unter einem Namen gespeichert werden und
      einen Typen besitzen "function". Der Unterschied besteht darin, dass man in Funktion viele
      Befehle speichern kann und sie dadurch eine Teilaufgabe des Gesamtprogrammes ausführen.
      Variablen können dagegen nur Werte abspeichern.
*/ 
//# sourceMappingURL=Aufgabe4.js.map