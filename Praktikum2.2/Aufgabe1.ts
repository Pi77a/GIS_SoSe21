//Aufgabe1 a
function min(numberarray: number[]): void {
    let min: number = numberarray[1];
    for (let i: number = 0; i < numberarray.length; i++) {
        if (min > numberarray[i]) {
            min = numberarray[i];
        }
    }
    console.log("Kleinste Zahl:" + min);
}
min([44, 4, 32, 4, 45, 43, 242, 43, 34, -123]);

//Aufgabe1 b
function iseven(number: number): void {
    let richtigfalsch: boolean = null;
    for (let i: number = 0; i < number + 1; i++) {

        if (i % 2 == 0) {
            richtigfalsch = true;
            console.log(i + "=" + richtigfalsch);
        }
        else if (i % 2 !== 0) {
            richtigfalsch = false;
            console.log(i + "=" + richtigfalsch);
        }
    }
}


//Aufgabe1 c

interface Student {
    fname: string;
    lname: string;
    mnumber: number;
}
let student1: Student = {
    fname: "Günther",
    lname: "Müller",
    mnumber: 665347
};
let student2: Student = {
    fname: "Timo",
    lname: "Arnold",
    mnumber: 653905
};
let student3: Student = {
    fname: "Paul",
    lname: "Gunter",
    mnumber: 643095
};
let studarray: Student[] = [student1, student2, student3, {fname: "Fiona", lname: "Bauer", mnumber: 645373}];
console.log(studarray[2].mnumber + " " + studarray[2].fname );
function showInfo(_student: Student): void {
    console.log(_student.fname);
    console.log(_student.lname);
    console.log(_student.mnumber);
}
for (let i: number = 0; i < studarray.length; i++) {
    showInfo(studarray[i]);
}