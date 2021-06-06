namespace P_3_2Server {

    document.getElementById("html").addEventListener("click", html);
    document.getElementById("json").addEventListener("click", json);

    function html(_clickEvent: Event): void {
        serverrequestHtml();
    }

    function json(_clickEvent: Event): void {
        serverrequestJson();
    }

    async function serverrequestHtml(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://grundlageninteraktivesysteme.herokuapp.com/";
        url += "/html?" + query.toString();
        serveranswerHtml(url);
    }


    async function serverrequestJson(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://grundlageninteraktivesysteme.herokuapp.com/";
        url += "/json?" + query.toString();
        serveranswerJson(url);
    }

    async function serveranswerHtml(_url: RequestInfo): Promise<void> {
        let _response: Response = await fetch(_url);
        console.log(_response);
        let divRespond: string = await _response.json();
        let div: HTMLDivElement = document.createElement("div");
        div.id = "error";
        document.getElementById("footer").appendChild(div);
        let paragraph1: HTMLHeadingElement = document.createElement("p");
        paragraph1.innerText = "Username: " + JSON.stringify(divRespond.Username);
        document.getElementById("error").appendChild(paragraph1);

        let paragraph2: HTMLHeadingElement = document.createElement("p");
        paragraph2.innerText = "E-mail: " + JSON.stringify(divRespond.Email);
        document.getElementById("error").appendChild(paragraph2);

        let paragraph3: HTMLHeadingElement = document.createElement("p");
        paragraph3.innerText = "Password: " + JSON.stringify(divRespond.Password);
        document.getElementById("error").appendChild(paragraph3);

        let paragraph4: HTMLHeadingElement = document.createElement("p");
        paragraph4.innerText = "Gender: " + JSON.stringify(divRespond.Gender);
        document.getElementById("error").appendChild(paragraph4);

        let paragraph5: HTMLHeadingElement = document.createElement("p");
        paragraph5.innerText = "Date: " + JSON.stringify(divRespond.Date);
        document.getElementById("error").appendChild(paragraph5);
        

    }

    async function serveranswerJson(_url: RequestInfo): Promise<void> {
        let _response: Response = await fetch(_url);
        let consoleRespond: JSON = await _response.json();
        console.log(JSON.stringify(consoleRespond));
    }

}

