function Treppe(): void {
    for (let i: number = 0; i < 8; i++) {
        console.log("#".repeat(i));
    }
}
function Fizz(): void {
    console.log("FizzBuzz1:");
    for (let max: number = 1; max < 101; max++) {
        if (max % 5 != 0 && max % 3 != 0) {
            console.log(max);
        }
        if (max % 3 == 0) {
            console.log("Fizz");
        }
        if (max % 5 == 0 && max % 3 != 0) {
            console.log("Buzz");
        }
    }
}
function FizzBizz(): void {
    console.log("FizzBuzz2:");
    for (let max: number = 1; max < 101; max++) {
        if (max % 5 != 0 && max % 3 != 0) {
            console.log(max);
        }
        if (max % 3 == 0 && max % 5 != 0) {
            console.log("Fizz");
        }
        if (max % 5 == 0 && max % 3 != 0) {
            console.log("Bizz");
        }
        if (max % 5 == 0 && max % 3 == 0) {
            console.log("FizzBuzz");
        }
    }
}
function Schachbrett(): void {
    console.log("Schachbrett1:");
    let schach: string = " ";
    for (let g: number = 0; g < 64; g++) {
        if (g % 8 == 0) {
            schach = schach + "\n";
            if (g % 16 == 0) {
                schach = schach + " ";
            }
        }
        if ((g + 1) % 2 == 0) {
            schach = schach + " ";
        }
        else {
            schach = schach + "#";
        }
    }
    console.log(schach);
}


function Schachbrett2(): void {
    console.log("Schachbrett2:");
    let eingabe4: string = prompt("Breite");
    let eingabe5: string = prompt("Höhe");
    let width: number = Number(eingabe4);
    let height: number = Number(eingabe5);
    let schach: string = "";
    let width2: number = width * 2;
    if (width % 2 == 0) {
        for (let g: number = 0; g < width * height; g++) {
            if (g % width == 0) {
                schach = schach + "\n";
                if (g % width2 == 0) {
                    schach = schach + " ";
                }
            }
            if ((g + 1) % 2 == 0) {
                schach = schach + " ";
            }
            else {
                schach = schach + "#";
            }
        }
    }
    else {
        for (let g: number = 0; g < width * height; g++) {
            if (g % width == 0) {
                schach = schach + "\n";
                if (g % width != 0) {
                    schach = schach + " #";
                }
            }
            if (g % 2 == 0) {
                schach = schach + " ";
            }
            else {
                schach = schach + "#";
            }
        }
    }
    console.log(schach);
}

Treppe();
Fizz();
FizzBizz();
Schachbrett();
Schachbrett2();