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
        let url = "https://grundlageninteraktivesysteme.herokuapp.com/";
        url += "/html?" + query.toString();
        serveranswerHtml(url);
    }
    async function serverrequestJson() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://grundlageninteraktivesysteme.herokuapp.com/";
        url += "/json?" + query.toString();
        serveranswerJson(url);
    }
    async function serveranswerHtml(_url) {
        let _response = await fetch(_url);
        let divRespond = await _response.json();
        let div = document.createElement("div");
        div.id = "error";
        document.getElementById("footer").appendChild(div);
        let paragraph1 = document.createElement("p");
        paragraph1.innerText = "Username: " + JSON.stringify(divRespond.Username);
        document.getElementById("error").appendChild(paragraph1);
        let paragraph2 = document.createElement("p");
        paragraph2.innerText = "E-mail: " + JSON.stringify(divRespond.Email);
        document.getElementById("error").appendChild(paragraph2);
        let paragraph3 = document.createElement("p");
        paragraph3.innerText = "Password: " + JSON.stringify(divRespond.Password);
        document.getElementById("error").appendChild(paragraph3);
        let paragraph4 = document.createElement("p");
        paragraph4.innerText = "Date: " + JSON.stringify(divRespond.Date);
        document.getElementById("error").appendChild(paragraph4);
    }
    async function serveranswerJson(_url) {
        let _response = await fetch(_url);
        let consoleRespond = await _response.json();
        console.log(JSON.stringify(consoleRespond));
    }
})(P_3_2Server || (P_3_2Server = {}));
//# sourceMappingURL=client.js.map