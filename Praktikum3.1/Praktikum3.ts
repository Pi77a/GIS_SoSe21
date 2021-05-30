import * as Http from "http";

export namespace P_3_1Server {
    let formData: FormData = new FormData(document.forms[0]);
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    serverrequest();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
        console.log(_request.url);
        for (const entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }

    async function serverrequest(): Promise<void> {
        let url: string = "https://grundlageninteraktivesysteme.herokuapp.com/";
        // tslint:disable-next-line: no-any
        await fetch(url);
        console.log(url);
    }
}