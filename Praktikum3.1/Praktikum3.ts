import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server"); 
    let port: number = Number(process.env.PORT);    //eine variable namens "port" wird erstellt
    if (!port)                                      
        port = 8100;                                //port wird auf 8100 gesetzt. Der port wird auf lokalen Servern benutzt damit man verschiedene websites 
                                                    //auf dem gleichen server verwenden kann mit verschiedenen ports.

    let server: Http.Server = Http.createServer();  //ein http Server wir erstellt und 
    server.addListener("request", handleRequest);   //ihm werden verschiedene Listener Events hinzugefügt. Eins für das Event wenn jemand auf den Server geht
    server.addListener("listening", handleListen);  // und eins welches sofort beim Start des Servers aktiviert wird.
    server.listen(port);

    function handleListen(): void {                 //dieses Event wird beim start des Servers aktiviert, und gibt daraufhin 
        console.log("Listening");                   //den string "Listening" aus.
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {     //wenn jemand auf den server zugreift
        console.log("I hear voices!");                                                                 //wird erstmal der string "I hear voices!"
        _response.setHeader("content-type", "text/html; charset=utf-8");                               //jetzt wird durch setHeader eine Html seite erstellt
        _response.setHeader("Access-Control-Allow-Origin", "*");                                       
        _response.write(_request.url);                                                                  
        _response.end();
        console.log(_request.url);
    }
}