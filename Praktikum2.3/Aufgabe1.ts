namespace Aufgabe1 {
    for (let i: number = 0; i < 5; i++) {
        let colornumber: string = "123456789ABCDEF";
        let color: string = "#";
        for (let i: number = 0; i < 6; i++) {
            let rdmNum: number = Math.floor(Math.random() * 16 + 1);
            color += colornumber.charAt(rdmNum);
        }
        let div: HTMLDivElement = document.createElement("div");
        let widthrdm: number = Math.floor(Math.random() * 500 + 100);
        let heightrdm: number = Math.floor(Math.random() * 500 + 100);
        let widthstring: string = widthrdm.toString();
        let heightstring: string = heightrdm.toString();
        div.style.width = widthstring + "px";
        div.style.height = heightstring + "px";
        div.style.position = "absolute";
        div.style.opacity = "70%";
        div.style.backgroundColor = color;
        div.classList.add("rect");
        document.getElementById("mainDiv").appendChild(div);
    }
    function addRect(_clickEvent: Event): void {
        let colornumber: string = "123456789ABCDEF";
        let color: string = "#";
        for (let i: number = 0; i < 6; i++) {
            let rdmNum: number = Math.floor(Math.random() * 16 + 1);
            color += colornumber.charAt(rdmNum);
        }
        let div: HTMLDivElement = document.createElement("div");
        let widthrdm: number = Math.floor(Math.random() * 500 + 100);
        let heightrdm: number = Math.floor(Math.random() * 500 + 100);
        let widthstring: string = widthrdm.toString();
        let heightstring: string = heightrdm.toString();
        div.style.width = widthstring + "px";
        div.style.height = heightstring + "px";
        div.style.position = "absolute";
        div.style.opacity = "70%";
        div.style.backgroundColor = color;
        div.classList.add("rect");
        document.getElementById("mainDiv").appendChild(div);
    }
    function cleanCanvas(_clickEvent: Event): void {
        document.getElementById("mainDiv").innerHTML = "";
    }

    let buttonAdd: HTMLElement = document.getElementById("add");
    buttonAdd.addEventListener("click", addRect);
    let buttonClean: HTMLElement = document.getElementById("clean");
    buttonClean.addEventListener("click", cleanCanvas);

}