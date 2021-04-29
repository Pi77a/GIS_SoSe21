"use strict";
function min() {
    let numberarray = [34, 43, 13, 341, 3, 12, -132, 54, 343, 583, 93, 34, 766, 234];
    let min = numberarray[1];
    for (let i = 0; i < numberarray.length; i++) {
        if (min > numberarray[i]) {
            min = numberarray[i];
        }
    }
    console.log("Kleinste Zahl:" + min);
}
min();
//# sourceMappingURL=Aufgabe1.js.map