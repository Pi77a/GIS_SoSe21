import * as Http from "http";
import * as Url from "url";

export namespace P_3_2Server {


    let port: number = Number(process.env.PORT);
    if (!port) {
        port = 8100;
    }
    let server: Http.Server = Http.createServer();
    server.listen(port);
    server.addListener("request", handleRequest);

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

        // _response.setHeader("content-type", "application/json; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");


        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            console.log(url.query);
            if (url.pathname == "/html") {
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
            }
            else if (url.pathname == "/json") {
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
}
