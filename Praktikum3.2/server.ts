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
        console.log("HEY");

        _response.setHeader("Access-Control-Allow-Origin", "*");


        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            console.log(url.query);
            if (url.pathname == "/html") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                let htmlanswer: string = "";
                for (let key in url.query) {
                    htmlanswer = "<div>" + key + ": " + url.query[key] + "</div>";
                    _response.write(htmlanswer);
                }
               
            } 
            else if (url.pathname == "/json") {
                _response.setHeader("content-type", "application/json; charset=utf-8");
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
            }
           
        }
        _response.end();
    }
}
