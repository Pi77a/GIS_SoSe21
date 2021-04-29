function a1(): void {
    let x: string = "Alles";    //2. x wird auf "Alles " gesetzt
    console.log( x );           //3. x wird in der Konsole ausgegeben
    func1();                    //4. func 1 wird aufgerufen
    console.log("Logo!");       //6. Der string "Logo!" wird in der Konsole ausgegeben
}

a1();                           //1. function a1 wird aufgerufen

function func1(): void {        
    console.log("Klar?");       //5. Der string "Klar?" wird in der Konsole ausgegeben 
}

/* a) Variablennamen können einzelne Buchstaben sein. Hier ist es auch egal, ob man kleine oder große Buchstaben benutzt.
      Wenn der Variablennamen länger ist, muss der Variablennamen nur mit kleinen Buchstaben oder einem "_" beginnen.
      Auch darf "_" als einziges Sonderzeichen für Variablennamen verwendet werden.
*/

function a2(): void {
    let x: string = "Alles ";   
    func21();                   
    func12();
    console.log( x + "Logo!");
}

a2();

function func12(): void {
    let x: string = "Alles ";
    console.log(x + "Klar?");
}

function func21(): void {
    let x: string = "Alles ";
    console.log(x + "Gute!");
}