function min(): void {
    let numberarray: number[] = [34, 43, 13, 341, 3, 12, -132, 54, 343, 583, 93, 34, 766, 234];
    let min: number = numberarray[1];
    for ( let i: number = 0; i < numberarray.length; i++ ) {
        if (min > numberarray[i] ) {
            min = numberarray[i] ;
        }
    }
    console.log("Kleinste Zahl:" + min);
}
function iseven(): void {
    
}
min();