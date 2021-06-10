"use strict";
var P_3_2Server;
(function (P_3_2Server) {
    document.getElementById("html").addEventListener("click", html);
    document.getElementById("json").addEventListener("click", json);
    function html(_clickEvent) {
        serverrequestHtml();
    }
    function json(_clickEvent) {
        serverrequestJson();
    }
    async function serverrequestHtml() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "http://localhost:8100";
        //let url: string = "https://grundlageninteraktivesysteme.herokuapp.com";
        url += "/html?" + query.toString();
        serveranswerHtml(url);
    }
    async function serverrequestJson() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "http://localhost:8100";
        //let url: string = "https://grundlageninteraktivesysteme.herokuapp.com";
        url += "/json?" + query.toString();
        serveranswerJson(url);
    }
    async function serveranswerHtml(_url) {
        let _response = await fetch(_url);
        console.log(_response);
        let divRespond = await _response.text();
        let div = document.getElementById("answer");
        div.innerHTML = divRespond;
    }
    async function serveranswerJson(_url) {
        let _response = await fetch(_url);
        let consoleRespond = await _response.json();
        console.log(JSON.stringify(consoleRespond));
    }
})(P_3_2Server || (P_3_2Server = {}));
//# sourceMappingURL=client.js.map