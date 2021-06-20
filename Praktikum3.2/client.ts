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
        //let url: string = "http://localhost:8100";
        let url: string = "https://grundlageninteraktivesysteme.herokuapp.com";
        url += "/html?" + query.toString();
        serveranswerHtml(url);
    }


    async function serverrequestJson(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //let url: string = "http://localhost:8100";
        let url: string = "https://grundlageninteraktivesysteme.herokuapp.com";
        url += "/json?" + query.toString();
        serveranswerJson(url);
    }

    async function serveranswerHtml(_url: RequestInfo): Promise<void> {
        let _response: Response = await fetch(_url);
        console.log(_response);
        let divRespond: string = await _response.text();
        let div: HTMLDivElement = <HTMLDivElement> document.getElementById("answer");
        div.innerHTML = divRespond;
    }

    async function serveranswerJson(_url: RequestInfo): Promise<void> {
        let _response: Response = await fetch(_url);
        let consoleRespond: string = await _response.text();
        console.log(JSON.parse(consoleRespond));
    }

}

