"use strict";
//Aufgabe2 a
function backwards(_numberarray) {
    let backwardarray = [];
    let u = 0;
    for (let i = _numberarray.length; i >= 0; i--) {
        backwardarray[u] = _numberarray[i];
        u++;
    }
    return backwardarray;
}
//Aufgabe2 b
function join(_array1, _array2) {
    let array3 = _array1.concat(_array2);
    return array3;
}
//Aufgabe2 c
function split(_array1, _a, _b) {
    let array2 = _array1.slice(_a, _b);
    return array2;
}
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
//# sourceMappingURL=Aufgabe2.js.map