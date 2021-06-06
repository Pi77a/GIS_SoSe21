
interface Rocket2 {
    top: string;
    mid: string;
    bot: string;
}

let rocket2: Rocket2 = {
    top: sessionStorage.getItem("0"),
    mid: sessionStorage.getItem("2"),
    bot: sessionStorage.getItem("3")
};

serverrequest();

async function serverrequest(): Promise<void> {
    let url: string = "https://gis-communication.herokuapp.com/";
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>rocket2);
    url = url + "?" + query.toString();
    await fetch(url);
    serveranswer(url);
    console.log(url);
}

async function serveranswer(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    let serverRocket: string = await response.json();
    let diverror: HTMLDivElement = document.createElement("div");
    diverror.id = "error";
    console.log(serverRocket);
    document.getElementById("header").appendChild(diverror);
    let headlineerror: HTMLHeadingElement = document.createElement("h2");
   // headlineerror.innerText = JSON.stringify(serverRocket.message);
    document.getElementById("error").appendChild(headlineerror);
}



let divfinal: HTMLDivElement = document.createElement("div");
divfinal.id = "final";
document.body.appendChild(divfinal);

let headline: HTMLHeadingElement = document.createElement("h1");
headline.innerText = "Finished Rocket";
headline.id = "finalhead";
document.getElementById("final").appendChild(headline);

let buttonretry: HTMLButtonElement = document.createElement("button");
buttonretry.innerText = "Try Again";
buttonretry.addEventListener("click", retryRocket);
divfinal.appendChild(buttonretry);

for (let i: number = 0; i < 3; i++) {
    let img: HTMLImageElement = document.createElement("img");
    let key: string = sessionStorage.key(i);
    img.src = sessionStorage.getItem(key);
    document.getElementById("final").appendChild(img);
}

function retryRocket(_clickEvent: Event): void {
    window.location.assign("./Rocket_top.html");
}
