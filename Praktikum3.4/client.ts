
namespace Aufgabe3_4 {
    document.getElementById("send").addEventListener("click", send);
    document.getElementById("get").addEventListener("click", get);

    function send(_clickEvent: Event): void {
        serverrequestsend();
    }

    function get(_clickEvent: Event): void {
        serverrequestget();
    }

    async function serverrequestsend(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //let url: string = "http://localhost:8100";
        let url: string = "https://grundlageninteraktivesysteme.herokuapp.com";
        url += "/send?" + query.toString();
        serveranswerget(url);
    }

    async function serverrequestget(): Promise<void> {
        //let url: string = "http://localhost:8100/get";
        let url: string = "https://grundlageninteraktivesysteme.herokuapp.com/get";
        let _response: Response = await fetch(url);

        let consoleRespond: string = await _response.text();
        let div: HTMLDivElement = <HTMLDivElement> document.getElementById("second");
        div.innerText = consoleRespond;
     }


    async function serveranswerget(_url: RequestInfo): Promise<void> {
        await fetch(_url);
    }
}