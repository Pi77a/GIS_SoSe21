//Aufgabe2 a
function backwards(_numberarray: number[]): number[] {
    let backwardarray: number[] = [];
    let u: number = 0;
    for (let i: number = _numberarray.length; i >= 0; i--) {
        backwardarray[u] = _numberarray[i];
        u++;
    }
    return backwardarray;
}

//Aufgabe2 b
function join(_array1: number[], _array2: number[]): number[] {
    let array3: number[] = _array1.concat(_array2);
    return array3;
}

//Aufgabe2 c
function split(_array1: number[], _a: number, _b: number): number[] {
    let array2: number[] = _array1.slice(_a, _b);
    return array2;
}

let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack: number[] = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440] ));
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));