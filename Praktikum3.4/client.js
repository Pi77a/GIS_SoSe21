"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    document.getElementById("send").addEventListener("click", send);
    document.getElementById("get").addEventListener("click", get);
    function send(_clickEvent) {
        serverrequestsend();
    }
    function get(_clickEvent) {
        serverrequestget();
    }
    async function serverrequestsend() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        //let url: string = "http://localhost:8100";
        let url = "https://grundlageninteraktivesysteme.herokuapp.com";
        url += "/send?" + query.toString();
        serveranswerget(url);
    }
    async function serverrequestget() {
        //let url: string = "http://localhost:8100/get";
        let url = "https://grundlageninteraktivesysteme.herokuapp.com/get";
        let _response = await fetch(url);
        let consoleRespond = await _response.text();
        let div = document.getElementById("second");
        div.innerText = consoleRespond;
    }
    async function serveranswerget(_url) {
        await fetch(_url);
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=client.js.map