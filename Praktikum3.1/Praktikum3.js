"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT); //eine variable namens "port" wird erstellt
    if (!port)
        port = 8100; //port wird auf 8100 gesetzt. Der port wird auf lokalen Servern benutzt damit man verschiedene websites 
    //auf dem gleichen server verwenden kann mit verschiedenen ports.
    let server = Http.createServer(); //ein http Server wir erstellt und 
    server.addListener("request", handleRequest); //ihm werden verschiedene Listener Events hinzugefügt. Eins für das Event wenn jemand auf den Server geht
    server.addListener("listening", handleListen); // und eins welches sofort beim Start des Servers aktiviert wird.
    server.listen(port);
    function handleListen() {
        console.log("Listening"); //den string "Listening" aus.
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //wird erstmal der string "I hear voices!"
        _response.setHeader("content-type", "text/html; charset=utf-8"); //jetzt wird durch setHeader eine Html seite erstellt
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
        console.log(_request.url);
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=Praktikum3.js.map