"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_2Server;
(function (P_3_2Server) {
    let port = Number(process.env.PORT);
    if (!port) {
        port = 8100;
    }
    let server = Http.createServer();
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("HEY");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            console.log(url.query);
            if (url.pathname == "/html") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                let htmlanswer = "";
                for (let key in url.query) {
                    htmlanswer = "<div>" + key + ": " + url.query[key] + "</div>";
                    _response.write(htmlanswer);
                }
            }
            else if (url.pathname == "/json") {
                _response.setHeader("content-type", "application/json; charset=utf-8");
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
//# sourceMappingURL=server.js.map